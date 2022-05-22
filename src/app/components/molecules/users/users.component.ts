import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { UserData } from 'src/app/interfaces/user-data';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userData: UserData[] = [];
  showUsersList: boolean = false;
  subscription: Subscription;

  constructor(private userService: UserService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showUsersList = value));
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((userData) => (this.userData = userData));
  }

  deleteUser(user: UserData) {
    alert('Unhautorized action');
    this.userService
      .deleteUser(user)
      .subscribe(() => this.userData.filter((t) => t.id !== t.id));
  }

  toggleStatus(user: UserData) {
    user.status === 'active'
      ? (user.status = 'inactive')
      : (user.status = 'active');
    this.userService.updateUserStatus(user).subscribe();
  }

  addUser(user: UserData) {
    this.userService
      .addUser(user)
      .subscribe((user) => this.userData.push(user));
  }
}
