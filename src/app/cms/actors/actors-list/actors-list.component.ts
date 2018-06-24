import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { Actor } from '../../../shared/models/actor.model';

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

