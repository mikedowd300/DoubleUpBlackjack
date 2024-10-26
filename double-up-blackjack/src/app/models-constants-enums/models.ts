import {
  CardNameEnum,
  ChipTypeEnum,
  ConditionsEnum,
  DoubleDownOnEnum,
  InputTypeEnum,
  PayRatioEnum,
  RoundingMethodEnum,
  TrueCountTypeEnum,
} from './enumerations';

export interface CountingMethodValueMap {
  [CardNameEnum.C_A]: number;
  [CardNameEnum.C_2]: number;
  [CardNameEnum.C_3]: number;
  [CardNameEnum.C_4]: number;
  [CardNameEnum.C_5]: number;
  [CardNameEnum.C_6]: number;
  [CardNameEnum.C_7]: number;
  [CardNameEnum.C_8]: number;
  [CardNameEnum.C_9]: number;
  [CardNameEnum.C_T]: number;
  [CardNameEnum.C_J]: number;
  [CardNameEnum.C_Q]: number;
  [CardNameEnum.C_K]: number;
};

export interface CountingMethod {
  name: string,
  valuesMap: CountingMethodValueMap,
  startingCount: number;
  isBalanced: boolean;
  convertsToTC: boolean;
}

export interface CountingMethodMap {
  [k: string]: CountingMethod,
}

export interface CustomizationLink {
  title: string;
  description: string;
  linkUrl: string;
}

export interface RuleInput {
  description: string;
  why?: string;
  inputType: InputTypeEnum;
  min?: number;
  max?: number; 
  ruleName: ConditionsEnum;
  radioValues?: any;
  displayInColumn?: boolean;
}

export interface RuleDescriptionMap {
  [k: string]: RuleInput 
}

export interface PlayActionOptions {
  options: string;
  conditions: string;
}

export interface Wong {
  enter: number,
  exitBelow: number;
}

export interface WongStrategy {
  title: string;
  wongedHands: Wong[];
}

export interface Conditions {
  title?: string;
  S17: boolean;
  RSA: boolean;
  MHFS: number;
  DSA: boolean;
  DFL: boolean;
  DAS: boolean;
  MSE: boolean;
  reshuffleOnDealerChange: boolean;
  burnCardOnDealerChange: boolean;
  payRatio: PayRatioEnum;
  spotsPerTable: number;
  decksPerShoe: number;
  cardsBurned: number;
  minBet: number;
  maxBet: number;
  shufflePoint: number;
  countBurnCard: boolean;
  handsPerDealer: number;
  canDoubleOn:  DoubleDownOnEnum;
  doubleUpLosesOnPush: boolean;
  doubleUpLosesOnHalt: boolean;
  lateSurrender: boolean;
}

export interface ShoeConditions {
  decksPerShoe: number;
  cardsBurned: number;
  shufflePoint: number;
  countBurnCard: boolean;
}

export interface BetSpreadStrategy {
  title: string;
  spreads: { [k: string]: number };
  roundBetToNearest: ChipTypeEnum,
  roundingMethod: RoundingMethodEnum,
  useHalfCount: boolean;
}

export interface CountingStrategy {
  title: string;
  count: {
    'A': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    'J': number;
    'Q': number;
    'K': number;
  }
  runningCountStartsAt: number;
  trueCountPreference: TrueCountTypeEnum;
  convertToTrueCount: boolean;
};

export interface PlayerConfig {
  title: string;
  description: string;
  initialBettingUnit: number;
  initialBankroll: number;
  playStrategyTitle: string;
  betSpreadStrategyTitle: string;
  unitResizingStrategyTitle: string;
  tippngStrategyTitle: string;
  wongingStrategyTitle: string;
  countStrategyTitle: string;
}

export interface TippingPlan {
  title: string;
  tipToBetsizeRatios: number[][];
  maxTip: number;
  afterBlackjack: boolean;
  dealerJoins: boolean;
  dealerLeaves: boolean;
  tipFirstHandOfShoe: boolean;
  playerIncreasesBet: boolean;
  everyXHands: number;
  tipSplitHandToo: boolean;
  doubleOnDouble: boolean;
  tipWongHands: boolean;
  insureDealerTip: boolean;
};

export interface UnitResizeStrategy {
  title: string;
  unitProgression: number[];
  increaseAtMultiple: number[];
  decreaseAtMultiple: number[];
  roundToNearest: ChipTypeEnum;
  roundingMethod: RoundingMethodEnum;
}

export interface PlayStrategy {
  title: string;
  combos: { [k: string]: PlayActionOptions };
}

export type AnyStrategy = 
  | WongStrategy 
  | Conditions 
  | UnitResizeStrategy 
  | TippingPlan
  | BetSpreadStrategy
  | PlayStrategy
  | PlayerConfig
  | TableConfig
  | CountingStrategy

export interface SpotUIproperty {
  description: string;
  value: string | number;
}

export interface SpotUIObj {
  title: SpotUIproperty;
  bankroll: SpotUIproperty;
  bettingUnit: SpotUIproperty;
  playStategy: SpotUIproperty;
  spreadStrategy: SpotUIproperty;
  tippingStrategy: SpotUIproperty;
  resizeStrategy: SpotUIproperty;
  wongingStrategy: SpotUIproperty;
  countingStratgey: SpotUIproperty;
}

export interface SimInfo {
  tableSkeleton: TableConfig | null;
  iterations: number | null;
}

export interface TableConfig {
  title: string;
  players: PlayerTableInfo[];
  conditionsTitle: string;
}

export interface PlayerTableInfo {
  seatNumber: number;
  playerConfigTitle: string;
}