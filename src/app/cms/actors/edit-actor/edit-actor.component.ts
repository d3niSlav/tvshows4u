import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ActorsService } from '../actors.service';
import { Actor } from '../../../shared/models/actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss']
})
export class EditActorComponent implements OnInit {
  actorId: number;
  editMode = false;
  actorForm: FormGroup;
  seasons = [];

  constructor(private route: ActivatedRoute, private actorsService: ActorsService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.actorId = id;
        this.editMode = !!id;
        this.initForm();
      }
    );
  }

  private initForm() {
    this.actorForm = new FormGroup({
      'name': new FormControl(''),
      'actorImage': new FormControl(''),
      'thumbnail': new FormControl(''),
      'birthdate': new FormControl(new Date().toISOString().split('T')[0]),
      'bio': new FormControl('')
    });

    if (this.editMode) {
      this.actorsService.getSingleActor(this.actorId).subscribe((res: Actor) => {
          this.fillForm(res);
        }
      );
    }
  }

  onSubmit() {
    if (this.editMode) {
      this.actorsService.updateSingleActor(this.actorId, this.actorForm.value).subscribe(res => {
        this.fillForm(res);
      });
    } else {
      this.actorsService.createActor(this.actorForm.value).subscribe(res => {
        this.router.navigate(['../', res.id, 'edit'], {relativeTo: this.route});
      });
    }
  }

  onDelete() {
    this.actorsService.deleteSingleActor(this.actorId).subscribe(res => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

  private fillForm(actorData: Actor) {
    this.actorForm = new FormGroup({
      'name': new FormControl(actorData.name),
      'actorImage': new FormControl(actorData.actorImage),
      'thumbnail': new FormControl(actorData.thumbnail),
      'birthdate': new FormControl(new Date(actorData.birthdate).toISOString().split('T')[0]),
      'bio': new FormControl(actorData.bio)
    });
  }
}
