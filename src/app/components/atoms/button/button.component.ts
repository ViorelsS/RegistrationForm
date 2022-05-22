import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  delete = 'delete';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
