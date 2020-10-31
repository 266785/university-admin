export class Student {

  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
    private _address: string,
    private _gpa: number,
    private _classId: number, // private _classId? --> ? <---
    private _checked: boolean,
  ) {}

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get gpa(): number {
    return this._gpa;
  }

  set gpa(value: number) {
    this._gpa = value;
  }

  get classId(): number {
    return this._classId;
  }

  set classId(value: number) {
    this._classId = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }

  changeState(value: boolean): void {
    this._checked = value;
  }

}
