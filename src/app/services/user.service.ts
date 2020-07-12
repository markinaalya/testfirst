import { EventEmitter, Injectable } from '@angular/core';
import { UserModel } from '../modeles/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: UserModel;

  latestId: number;

  newUser: UserModel = {
    id: -1,
    name: '',
  };

  constructor() {
    this.user = this.newUser;
  }

  addNewUser() {
    this.user = this.newUser;
  }

  editUser(editUser: UserModel) {
    this.user = editUser;
  }

}