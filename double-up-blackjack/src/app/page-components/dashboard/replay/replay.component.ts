import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ViewModelService } from '../../../services/view-model.service';

@Component({
  selector: 'replay',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './replay.component.html',
  styleUrl: './replay.component.scss',
})

export class ReplayComponent implements OnInit {

  constructor(public vmService: ViewModelService) {}

  ngOnInit(): void {
    this.vmService.showHeader$.next(true);
  }
}