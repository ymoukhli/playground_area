import { PokimonService } from './pokimon.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private pokimon: PokimonService) {}
  
  ngOnInit(): void {
    this.getData();
  }

  data: any;
  items: any;
  getData(): void {
    this.pokimon.getData('https://pokeapi.co/api/v2/pokemon?limit=10').subscribe(async (res) => {
      this.data = Promise.all(this.items = res.results.map((e:any) => this.pokimon.getData(e.url)))
      // this.data = res.results;
    });
  }
}
