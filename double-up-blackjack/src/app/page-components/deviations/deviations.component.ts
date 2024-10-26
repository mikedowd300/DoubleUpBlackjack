import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ViewModelService } from '../../services/view-model.service';

@Component({
  selector: 'deviations',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './deviations.component.html',
  styleUrl: './deviations.component.scss',
})

export class DeviationsPageComponent implements OnInit {

  constructor(public headerService: ViewModelService) {}

  ngOnInit(): void {
    this.headerService.showHeader$.next(true);
  }
}