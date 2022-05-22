import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { UserData } from 'src/app/interfaces/user-data';

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

  deleteUser(user: UserData) {
    // We are not authorized to delete users but this could be an approach
    alert('NOT AUTHORIZED');

    // this.userService
    //   .deleteUser(user)
    //   .subscribe(() => this.userData.filter((t) => t.id !== t.id));
  }

  toggleStatus(user: UserData) {
    user.status === 'active'
      ? (user.status = 'inactive')
      : (user.status = 'active');
    //LOCALLY IT WORKS BUT WE'RE NOT AUTHORIZED TO MODIFY DATA ON THE SERVER
    console.log(user);
    // this.userService.updateUserStatus(user).subscribe();
  }

  addUser(user: UserData) {
    this.userService
      .addUser(user)
      .subscribe((user) => this.userData.push(user));
  }
}
