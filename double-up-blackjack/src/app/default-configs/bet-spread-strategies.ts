import { BetSpreadStrategy } from '../models-constants-enums/models';
import { ChipTypeEnum, RoundingMethodEnum } from '../models-constants-enums/enumerations';

export const basic1to6: BetSpreadStrategy = {
  title: "Basic 1 to 6",
  spreads: {
    "-1": 1,
    "0": 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6,
  },
  roundBetToNearest: ChipTypeEnum.WHITE,
  roundingMethod: RoundingMethodEnum.OFF,
  useHalfCount: false
}; 

export const noSpread: BetSpreadStrategy = {
  title: "No Spread",
  spreads: { "0": 1 },
  roundBetToNearest: ChipTypeEnum.WHITE,
  roundingMethod: RoundingMethodEnum.DOWN,
  useHalfCount: false
};

export const betSpreadTitles: string[] = ["Basic 1 to 6", "No Spread"];

export const defaultBetSpreads: { [k: string]: BetSpreadStrategy } = {
  "Basic 1 to 6": basic1to6,
  "No Spread": noSpread
};