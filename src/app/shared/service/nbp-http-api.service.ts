import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../model/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class NbpHttpApiService {

  constructor(public http: HttpClient) {
  }

  getNbpRates(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>("https://api.nbp.pl/api/exchangerates/tables/A");
  }
}
