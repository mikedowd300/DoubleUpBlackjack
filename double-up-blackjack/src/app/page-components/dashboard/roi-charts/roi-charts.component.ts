import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'roi-charts',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './roi-charts.component.html',
  styleUrl: './roi-charts.component.scss',
})

export class RoiChartsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}