import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { Chart, ChartItem, registerables } from 'chart.js';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'break-even-streaks',
  standalone: true,
  imports: [ AsyncPipe, CommonModule , RouterLink],
  templateUrl: './break-even-streaks.component.html',
  styleUrl: './break-even-streaks.component.scss'
})

export class BreakEvenStreaksComponent implements OnInit, OnDestroy {
  @Input() showStreakInfo$: BehaviorSubject<boolean>;
  @Input() handles: string[];
  @Input() streaks: any;

  // streakChart: Chart;
  selectedPlayer$: BehaviorSubject<string>;
  private destroy$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.selectedPlayer$ = new BehaviorSubject<string>(this.handles[0]);
    // Chart.register(...registerables);
    console.log(this.handles);
    console.log(this.streaks)
  }

  // getLabels(data): string[] {
  //   return []
  // }

  // createInsuranceResultsChart(data, labels: string[], target: string): Chart {
  //   if(this.streakChart) {
  //     this.streakChart.destroy();
  //   }
  //   const ctx = document.getElementById('myChart');
  //   return new Chart(ctx as ChartItem , {
  //     type: 'bar',
  //     data: {
  //       labels: labels,
  //       datasets: [{
  //         label: `${target}'s Break Even Streaks Chart`,
  //         data: data,
  //         borderWidth: 1
  //       }]
  //     },
  //   })
  // }

  handleSelectHandle({ target }) {
    this.selectedPlayer$.next(target.value);
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

// List Streaks greater than:
//   100
//   500
//   1000
//   5000
//   10000
//   20000
//   30000
//   40000
//   50000
//   Custom

//   with percentage of time the player is in eack of those break even streaks ar a longer one

// Explain that losing streaks within a streak are not counted
// allow user to select a streak to:
//   view the streak's Bankroll chart
//   Evaluate - That streak's streaks

// DATA REQUIRED:
// - Array of each player's bankroll from round to round including roundId
