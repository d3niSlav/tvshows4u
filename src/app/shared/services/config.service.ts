import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  roleAdministrator: number = 1;
  roleModerator: number = 2;
  roleUser: number = 3;

  constructor() { }

  getRoles() {
    return {
      [this.roleAdministrator]: 'Administrator',
      [this.roleModerator]: 'Moderator',
      [this.roleUser]: 'User'
    }
  }

  getUserRoleId() {
    return this.roleUser;
  }

  getAdministratorRoleId() {
    return this.roleAdministrator;
  }

  getModeratorRoleId() {
    return this.roleModerator;
  }
}
