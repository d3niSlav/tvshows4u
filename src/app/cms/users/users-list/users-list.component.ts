import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UsersService } from '../users.service';
import {ConfigService} from '../../../shared/services/config.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any;
  rolesMap: any;
  userRoleId: number;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private configService: ConfigService) {}

  ngOnInit() {
    let usersType;
    this.rolesMap = this.configService.getRoles();
    this.userRoleId = this.configService.getUserRoleId();

    this.route.params.subscribe(
      (params: Params) => {
        usersType = params['type'];
        this.usersService.getUsers(usersType).subscribe(res => {
          this.users = res;
        });
      }
    );
  }

  getRoleString(roleId) {
    console.log(roleId);
    console.log(this.rolesMap);

    return this.rolesMap[roleId];
  }
}
