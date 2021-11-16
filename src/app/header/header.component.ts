import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleMobileVision() {
    let element = document.getElementById("myTopnav");
    // @ts-ignore
    element?.className === "topnav" ? element.className += " responsive" : element.className = "topnav";
  }
}
