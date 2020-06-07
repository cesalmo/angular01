import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatosService {

  public Tdatos: string[] = [];

  constructor(public http: HttpClient ) { }

  getLorenIpsum(){

    var testURL = "assets/test.json"
    // var testURL = "https://loripsum.net/api/2/short/headers"
    return this.http.get(testURL);
  }
}
