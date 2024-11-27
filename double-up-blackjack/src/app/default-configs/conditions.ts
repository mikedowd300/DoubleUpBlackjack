import { Conditions } from "../models-constants-enums/models";
import { DoubleDownOnEnum, PayRatioEnum } from "../models-constants-enums/enumerations";

export const defaultConditions: Conditions = {
  title: "Default Conditions",
  S17: false,
  RSA:  true,
  MHFS: 4,
  DSA: true,
  DFL: true,
  DAS: true,
  MSE: true,
  reshuffleOnDealerChange: false,
  burnCardOnDealerChange: true,
  payRatio: PayRatioEnum.THREE_to_TWO,
  spotsPerTable: 7,
  decksPerShoe: 6,
  cardsBurned: 1,
  minBet: 5,
  maxBet: 1000,
  shufflePoint: 75,
  countBurnCard: false,
  handsPerDealer: 500,
  canDoubleOn:  DoubleDownOnEnum.DA2,
  doubleUpLosesOnPush: true,
  doubleUpLosesOnHalt: false,
  lateSurrender: false,
}

export const deviationConditions: Conditions = {
  title: "Deviation Conditions",
  S17: false,
  RSA:  true,
  MHFS: 4,
  DSA: true,
  DFL: true,
  DAS: true,
  MSE: true,
  reshuffleOnDealerChange: false,
  burnCardOnDealerChange: true,
  payRatio: PayRatioEnum.THREE_to_TWO,
  spotsPerTable: 7,
  decksPerShoe: 6,
  cardsBurned: 1,
  minBet: 5,
  maxBet: 1000,
  shufflePoint: 83,
  countBurnCard: false,
  handsPerDealer: 500,
  canDoubleOn:  DoubleDownOnEnum.DA2,
  doubleUpLosesOnPush: true,
  doubleUpLosesOnHalt: false,
  lateSurrender: false,
}

export const conditionTitles: string[] = ["Default Conditions"];

export const allDefaultConditions: { [k: string]: Conditions } = {
  "Default Conditions": defaultConditions,
  "Deviation Conditions": deviationConditions,
};