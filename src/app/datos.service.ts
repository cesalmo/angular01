import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface place {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class DatosService {
  public Tdatos: string[] = [];
  public Tplace: place[];

  constructor(public http: HttpClient) { }

  getLorenIpsum() {
    var testURL = 'assets/place.json';
    // var testURL = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(testURL);
  }
}
