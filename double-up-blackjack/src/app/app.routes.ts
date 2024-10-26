import { inject } from '@angular/core';
import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { ViewModelService } from './services/view-model.service';
import { BankrollChartComponent } from './page-components/dashboard/bankroll-chart/bankroll-chart.component';
import { BetSpreadComponent } from './page-components/customizations/bet-spread/bet-spread.component';
import { ConditionsComponent } from './page-components/customizations/conditions/conditions.component';
import { CountingComponent } from './page-components/customizations/counting/counting.component';
import { CustomizationsPageComponent } from './page-components/customizations/customizations.component';
import { DashboardComponent } from './page-components/dashboard/dashboard.component';
import { DeviationChartingComponent } from './page-components/deviations/deviation-charting/deviation-charting.component';
import { DeviationsPageComponent } from './page-components/deviations/deviations.component';
import { HomePageComponent } from './page-components/home/home.component';
import { PlayChartComponent } from './page-components/customizations/play-chart/play-chart.component';
import { PlayerComponent } from './page-components/customizations/player/player.component';
import { ReplayComponent } from './page-components/dashboard/replay/replay.component';
import { RoiChartsComponent } from './page-components/dashboard/roi-charts/roi-charts.component';
import { SimulationPageComponent } from './page-components/simulation/simulation.component';
import { TableComponent } from './page-components/customizations/table/table.component';
import { TippingComponent } from './page-components/customizations/tipping/tipping.component';
import { UnitResizingComponent } from './page-components/customizations/unit-resizing/unit-resizing.component';
import { WongingComponent } from './page-components/customizations/wonging/wonging.component';

const canMatchDashboard: CanMatchFn = () => {
  const service = inject(ViewModelService);
  const router = inject(Router);
  return service.getAllowNavigationToDashboard()
    ? true
    : new RedirectCommand(router.parseUrl('/simulation'));
};

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'customizations',
    component: CustomizationsPageComponent,
  },
  {
    path: 'simulation',
    component: SimulationPageComponent,
  },
  {
    path: 'deviations',
    component: DeviationsPageComponent,
  },
  {
    path: 'conditions',
    component: ConditionsComponent,
  },
  {
    path: 'bet-spread',
    component: BetSpreadComponent,
  },
  {
    path: 'counting',
    component: CountingComponent,
  },
  {
    path: 'play-chart',
    component: PlayChartComponent,
  },
  {
    path: 'player',
    component: PlayerComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tipping',
    component: TippingComponent,
  },
  {
    path: 'unit-resizing',
    component: UnitResizingComponent,
  },
  {
    path: 'wonging',
    component: WongingComponent,
  },
  {
    path: 'deviation-charting',
    component: DeviationChartingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canMatch: [canMatchDashboard],
  },
  {
    path: 'bankroll-chart',
    component: BankrollChartComponent,
  },
  {
    path: 'replay',
    component: ReplayComponent,
  },
  {
    path: 'roi-charts',
    component: RoiChartsComponent,
  }
];