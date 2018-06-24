import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../../../../shared/models/actor.model';

@Component({
  selector: 'app-actor-preview',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;

  constructor() {}

  ngOnInit() {
    console.log(this.actor)
  }
}
