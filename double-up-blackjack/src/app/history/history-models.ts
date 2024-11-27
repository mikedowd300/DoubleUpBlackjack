import { CardInfo } from "../models-constants-enums/models";

import { HandActionEnum, HandOutcomeEnum, SpotStatusEnum, TrueCountTypeEnum } from "../models-constants-enums/enumerations";

export interface HandRecord {
  betAmount?: number;
  cards?: CardInfo[];
  value?: number;
  actions?: HandActionEnum[];
  outcome?: HandOutcomeEnum;
  winnings?: number;
  isFromSplit?: boolean;
  didSurrender?: boolean;
  isFromWong?: boolean;
  tipSize?: number;
}

export interface ShoeRecord {
  handId: string;
  runningCounts: {};
  decksRemaining: number;
}

export interface SpotRecord {
  status?: SpotStatusEnum, // Proabably not necessary since non-TAKEN spots are null
  spotId: number,
  playerHandle: string,
  hands: HandRecord[];
  insuredAmount?: number;
  countWhenInsured?: ShoeRecord;
}

export interface PlayerRecord {
  bettingUnit: number;
  handle: string;
  spotIds?: number[]; // This isnt needed for replay but may be needed for data mining later
  beginningBankroll: number;
  beginningTrueCount: number;
  beginningRunningCount: number;
  trueCountType: TrueCountTypeEnum;
  tipped: number;
}

export interface DealerRecord {
  cards: CardInfo[];
  value: number;
  hasBlackjack: boolean,
  didBust: boolean,
}

export interface TableRecord {
  roundId: number;
  // shoe: ShoeRecord;
  spots: SpotRecord[];
  players: PlayerRecord[];
  dealer: DealerRecord;
}