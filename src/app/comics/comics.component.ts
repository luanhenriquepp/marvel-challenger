import { Component, OnInit } from '@angular/core';
import {ComicsService} from "./service/comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  data: any;
  constructor(protected service: ComicsService) { }

  ngOnInit(): void {
    this.service.getComics().subscribe((resp: any) => {
      console.log(resp.data.results)
      this.data = resp.data.results;
    })
  }

}
