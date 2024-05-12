import {Component, OnInit} from '@angular/core';
import {NbpHttpApiService} from "../shared/service/nbp-http-api.service";

@Component({
  selector: 'app-nbp-rates',
  templateUrl: './nbp-rates.component.html',
  styleUrl: './nbp-rates.component.scss'
})
export class NbpRatesComponent implements OnInit {

  nbpRates: any;
  displayedColumns: any[] = ["currency", "code", "mid"];

  constructor(public api: NbpHttpApiService) {

  }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData() {
    this.api.getNbpRates().subscribe(response => {
      console.log(response[0].rates)
      this.nbpRates = response[0].rates;
    });
  }

}
