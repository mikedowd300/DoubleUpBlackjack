import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ViewModelService } from '../../../services/view-model.service';

@Component({
  selector: 'deviation-charting',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './deviation-charting.component.html',
  styleUrl: './deviation-charting.component.scss'
})

export class DeviationChartingComponent implements OnInit {

  constructor(public vmService: ViewModelService) {}

  ngOnInit(): void {
    this.vmService.showHeader$.next(true);
  }
}