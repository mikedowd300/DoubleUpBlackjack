import { Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  BehaviorSubject, 
  combineLatest, 
  filter, 
  map, 
  Observable, 
  Subject, 
  takeUntil, 
  tap
} from 'rxjs';
import { BankrollChartComponent } from './bankroll-chart/bankroll-chart.component';
import { DoubleUpEngine } from '../../double-up-engine/double-up-engine';
import { LoaderComponent } from '../../shared-components/loader/loader.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { ReplayComponent } from './replay/replay.component';
import { RoiChartsComponent } from './roi-charts/roi-charts.component';
import { TableRecord } from '../../history/history-models';
import { ViewModelService } from '../../services/view-model.service';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [ 
    BankrollChartComponent, 
    CommonModule, 
    LoaderComponent, 
    ReplayComponent,
    RoiChartsComponent,
    RouterLink 
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnDestroy, OnInit {
  
  public history$: Observable<TableRecord[]>;
  public showLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public showReplay$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public activeRecordIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0); 
  public showBankrollChart$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showRoiChart$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public replayHandAtIndex$: Subject<number> = new Subject<number>();
  public bankrollData$: Observable<any>;
  public players$: Observable<any>;
  private destroy$ = new Subject();
  private engine: DoubleUpEngine;

  constructor(
    public vmService: ViewModelService,
    public localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.engine = new DoubleUpEngine(this.localStorageService, this.vmService);
    this.vmService.showHeader$.next(true);
    this.vmService.setAllowNavigationToDashboard(false);
    this.history$ = this.vmService.simData$.pipe(filter(x => !!x))
    this.players$ = this.history$.pipe(map(x => x[0].players.map(p => p.handle)));
    this.bankrollData$ = combineLatest([this.players$, this.history$ ])
      .pipe(map(([players, rounds]) => {
        let obj = {};
        players.forEach(p => obj[p] = { bankroll: [], moneyBet: 0})
        rounds.forEach(r => {
          r.players .forEach(p => obj[p.handle].bankroll.push(p.beginningBankroll));
          r.spots.forEach(s => {
            if(s) {
              s.hands.forEach(h => obj[s.playerHandle].moneyBet += h.betAmount)
            }
          })
        }); 
        return obj;
      }));

    this.bankrollData$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const tippedAway = {};
      console.log(this.engine);
      this.engine.table.players.forEach((p) => tippedAway[p.handle] = p.tippedAwayTotal)
      this.vmService.tippedAway$.next(tippedAway);
    });

    setTimeout(() => this.engine.createTable(this.vmService.getSimInfo()), 200);
    this.history$.pipe(takeUntil(this.destroy$)).subscribe((x) => this.showLoader$.next(false));
    this.replayHandAtIndex$.pipe(takeUntil(this.destroy$)).subscribe((index) => {
      this.activeRecordIndex$.next(index);
      this.showBankrollChart$.next(false);
      this.showReplay$.next(true);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // this.showLoader$.next(true);
    // this.vmService.simData$.next(null);
  }
}