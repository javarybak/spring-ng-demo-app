export class Book {
  private _id: number;

  private _name: string;

  private _yearPublished: number;

  private _dateTimeAdded: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get yearPublished(): number {
    return this._yearPublished;
  }

  set yearPublished(value: number) {
    this._yearPublished = value;
  }

  get dateTimeAdded(): string {
    return this._dateTimeAdded;
  }

  set dateTimeAdded(value: string) {
    this._dateTimeAdded = value;
  }
}
