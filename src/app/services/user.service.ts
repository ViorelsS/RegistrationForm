import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserData } from 'src/app/interfaces/user-data';
import { USERS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): Observable<UserData[]> {
    const users = of(USERS);
    return users;
  }
}
