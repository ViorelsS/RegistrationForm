import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<UserData> = new EventEmitter();
  name!: string;
  email!: string;
  gender!: string;

  //By default the status is set to active
  status: string = 'active';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
    }

    const newUser = {
      name: this.name,
      email: this.email,
      gender: this.gender,
      status: 'active',
    };

    this.onAddUser.emit(newUser);

    this.name = '';
    this.email = '';
    this.gender = '';
    this.status = '';
  }
}
