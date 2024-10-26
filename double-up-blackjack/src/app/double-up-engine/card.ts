import { cardValues } from '../models-constants-enums/constants';
import { CountingMethod } from '../models-constants-enums/models';

export class Card {
  cardSuitlessName: string;
  name: string;
  image: string;
  cardValue: number;
  countValuesByMethodType: { [k:string]: number } = {};
  countValuesMap = {};
  countMethodNames: string[] = [];

  constructor(suit: string, index: number, public isHoleCard: boolean = false) {
    this.name = `${cardValues[index]}${suit}`;
    this.image = `https://deckofcardsapi.com/static/img/${this.name}.png`;
    this.cardValue = Math.min(index + 1, 10);
    this.cardSuitlessName = this.name.split('')[0];
  }

  addToCountValueMethodsMap(method: CountingMethod) {
    if(!this.countMethodNames.includes(method.name)) {
      this.countValuesByMethodType[method.name] = method.valuesMap[this.cardSuitlessName];
      this.countMethodNames.push(method.name);
      console.log(this.name.split('')[0]);
      console.log(this.countValuesByMethodType)
    }
  }

  getCountValue(methodName: string): number {
    if(!this.countMethodNames.includes(methodName)) {
      console.log('Trying to count for the' , methodName, 'method, but it does not exist')
    }
    return this.countMethodNames.includes(methodName) 
      ? this.countValuesByMethodType[methodName]
      : 0
  }
}