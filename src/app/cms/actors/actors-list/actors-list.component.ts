import { Component, OnInit } from '@angular/core';

import { Actor } from '../../../shared/models/actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorsService: ActorsService) {}

  ngOnInit() {
    this.actorsService.getAllActors().subscribe((res: Actor[]) => {
      this.actors = res;
    });
  }
}

