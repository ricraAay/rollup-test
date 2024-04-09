import TwoModel from "./two.model";

export default class OneModel {
  constructor() {
    this.name = '1 модель';
    this.next = new TwoModel()
  }
}