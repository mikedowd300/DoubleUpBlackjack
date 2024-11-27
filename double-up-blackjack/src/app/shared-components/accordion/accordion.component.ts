import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})

export class AccordionComponent implements OnInit {
  @Input() expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}