import { Component, OnInit } from '@angular/core';
import {CharactersService} from "./service/characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  data: any;
  loading: boolean = false;
  constructor(protected service: CharactersService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getCharacters().subscribe((resp: any) => {
      this.data = resp.data.results;
      this.loading = false;
    })
  }

}
