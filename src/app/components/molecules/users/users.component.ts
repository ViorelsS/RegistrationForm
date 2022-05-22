import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { UserData } from 'src/app/interfaces/user-data';
import { USERS } from 'src/app/mock-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userData: UserData[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((userData) => (this.userData = userData));
  }
}
