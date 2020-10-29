export class UniversityClass {

  constructor(
    private _id: number,
    private _className: string,
  ) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

}
