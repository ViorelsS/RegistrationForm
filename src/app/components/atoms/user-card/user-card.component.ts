import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: UserData;
  @Output() onDeleteUser: EventEmitter<UserData> = new EventEmitter();
  @Output() onToggleStatus: EventEmitter<UserData> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(user: UserData) {
    this.onDeleteUser.emit(user);
  }

  onToggle(user: UserData) {
    this.onToggleStatus.emit(user);
  }
}
