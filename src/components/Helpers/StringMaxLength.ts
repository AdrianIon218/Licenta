export default class StringMaxLength {
  private _str: string = "Not available";

  constructor(
    str_init: string,
    public dimension: number,
  ) {
    this.setStr(str_init);
  }

  private setStr = (value: string) => {
    const len = value.length;
    if (len > 0 && len <= this.dimension) {
      this._str = value;
    } else if (len === 0) {
      this._str = "Not available";
    } else {
      this._str = value.substring(0, this.dimension);
    }
  };

  public set str(value: string) {
    this.setStr(value);
  }

  public get str() {
    return this._str;
  }
}
