import { Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ViewModelService } from '../../../services/view-model.service';
import { StrategySelectorComponent } from '../../../shared-components/strategy-selector/strategy-selector.component';
import { LocalStorageItemsEnum } from '../../../models-constants-enums/enumerations';
import { CountingStrategy } from '../../../models-constants-enums/models';
import { hiLo, defaultCounts } from '../../../default-configs/count-strategies';

@Component({
  selector: 'counting',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink, StrategySelectorComponent ],
  templateUrl: './counting.component.html',
  styleUrl: './counting.component.scss'
})

export class CountingComponent implements OnDestroy, OnInit {

  activeStrategy: CountingStrategy;
  activeStrategy$: BehaviorSubject<CountingStrategy> = new BehaviorSubject<CountingStrategy>(hiLo);
  localStorageItemsEnum = LocalStorageItemsEnum;
  title: string = "Add, Edit or Delete a Counting Strategy";
  defaultStrategy: CountingStrategy = { ...hiLo };
  defaultStrategiesObj = {  ...defaultCounts };
  firstCards: string[] = [];
  middleCards: string[] = [];
  lastCards: string[] = [];
  private destroy$: Subject<boolean> = new Subject();

  constructor(public vmService: ViewModelService) {}

  ngOnInit(): void {
    this.vmService.showHeader$.next(true);
    this.activeStrategy$.pipe(takeUntil(this.destroy$)).subscribe(strategy => {
      this.activeStrategy = strategy;
      this.firstCards = ['A', '2', '3', '4'];
      this.middleCards = ['5', '6', '7', '8'];
      this.lastCards = ['9', 'J', 'Q', 'K'];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}