import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankrollChartComponent } from './page-components/dashboard/bankroll-chart/bankroll-chart.component';
import { BetSpreadComponent } from './page-components/customizations/bet-spread/bet-spread.component';
import { ConditionsComponent } from './page-components/customizations/conditions/conditions.component';
import { CountingComponent } from './page-components/customizations/counting/counting.component';
import { CustomizationsPageComponent } from './page-components/customizations/customizations.component';
import { DashboardComponent } from './page-components/dashboard/dashboard.component';
import { DeviationChartingComponent } from './page-components/deviations/deviation-charting/deviation-charting.component';
import { DeviationsPageComponent } from './page-components/deviations/deviations.component';
import { HeaderNavComponent } from './shared-components/header-nav/header-nav.component';
import { HomePageComponent } from './page-components/home/home.component';
import { LoaderComponent } from './shared-components/loader/loader.component';
import { PlayChartComponent } from './page-components/customizations/play-chart/play-chart.component';
import { PlayerComponent } from './page-components/customizations/player/player.component';
import { ReplayComponent } from './page-components/dashboard/replay/replay.component';
import { RoiChartsComponent } from './page-components/dashboard/roi-charts/roi-charts.component';
import { SimulationPageComponent } from './page-components/simulation/simulation.component';
import { TableComponent } from './page-components/customizations/table/table.component';
import { TippingComponent } from './page-components/customizations/tipping/tipping.component';
import { UnitResizingComponent } from './page-components/customizations/unit-resizing/unit-resizing.component';
import { WongingComponent } from './page-components/customizations/wonging/wonging.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BankrollChartComponent,
    BetSpreadComponent,
    ConditionsComponent,
    CountingComponent,
    CustomizationsPageComponent,
    DashboardComponent,
    DeviationChartingComponent,
    DeviationsPageComponent,
    HeaderNavComponent,
    HomePageComponent,
    LoaderComponent,
    PlayChartComponent,
    PlayerComponent,
    ReplayComponent,
    RoiChartsComponent,
    RouterOutlet,
    SimulationPageComponent,
    TableComponent,
    TippingComponent,
    UnitResizingComponent,
    WongingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {}
}
