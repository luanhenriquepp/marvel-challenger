import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicsComponent} from "./comics/comics.component";
import {CharactersComponent} from "./characters/characters.component";
import {EventsComponent} from "./events/events.component";

const routes: Routes = [
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
