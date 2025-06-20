export class ApparamEntity {
  appramName: string;
  apparamCode: string;
  apparamValue: any;
  description: string;

  constructor(
    appramName: string,
    apparamCode: string,
    apparamValue: any,
    description: string
  ) {
    this.appramName = appramName;
    this.apparamCode = apparamCode;
    this.apparamValue = apparamValue;
    this.description = description;
  }
}
