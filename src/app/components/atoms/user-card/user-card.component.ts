import { Component, Input, OnInit } from '@angular/core';

import { UserData } from 'src/app/interfaces/user-data';
import { USERS } from 'src/app/mock-data';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: UserData;

  constructor() {}

  ngOnInit(): void {}
}
