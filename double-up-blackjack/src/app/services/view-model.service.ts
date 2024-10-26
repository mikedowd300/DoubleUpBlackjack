import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimInfo } from '../models-constants-enums/models';


@Injectable({
  providedIn: 'root'
})
export class ViewModelService {

  public showHeader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private nullInfo: SimInfo = { tableSkeleton: null, iterations: null };
  playerHandles: string[] = [];
  private simInfo: SimInfo = this.nullInfo;
  private allowNavigationToDashboard: boolean = false;

  // public simData$: BehaviorSubject<TableRound[]> = new BehaviorSubject<TableRound[]>(null);
  
  // public deviationData$: BehaviorSubject<TableRound[]> = new BehaviorSubject<TableRound[]>(null);
  // public showDeviationResultsSpinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public showDeviationResults$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getSimInfo(): SimInfo {
    return this.simInfo;
  }

  public setSimInfo(info: SimInfo): void {
    if(info) {
      this.setAllowNavigationToDashboard(true);
      this.playerHandles = info.tableSkeleton.players?.map(p => p.playerConfigTitle)
    }
    this.simInfo = { ...info };
  }

  public setAllowNavigationToDashboard(allow: boolean): void {
    this.allowNavigationToDashboard = allow;
  }

  public getAllowNavigationToDashboard(): boolean {
    return this.allowNavigationToDashboard;
  }
}