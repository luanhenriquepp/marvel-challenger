import { Component, OnInit } from '@angular/core';
import {ComicsService} from "./service/comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  data: any;
  loading: boolean = false;
  constructor(protected service: ComicsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getComics().subscribe((resp: any) => {
      this.data = resp.data.results;
      this.loading = false;
    })
  }

}
