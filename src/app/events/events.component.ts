import { Component, OnInit } from '@angular/core';
import {EventsService} from "./service/events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  data: any;
  loading: boolean = false;
  constructor(protected service: EventsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getEvents().subscribe((resp: any) => {
      this.data = resp.data.results;
      this.loading = false;
    })
  }

}
