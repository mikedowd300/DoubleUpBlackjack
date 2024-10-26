import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ViewModelService } from '../../../services/view-model.service';

@Component({
  selector: 'bankroll-chart',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './bankroll-chart.component.html',
  styleUrl: './bankroll-chart.component.scss'
})

export class BankrollChartComponent implements OnInit {

  constructor(public vmService: ViewModelService) {}

  ngOnInit(): void {
    this.vmService.showHeader$.next(true);
  }
}