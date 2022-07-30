import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  // Input Props
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() invalid: boolean = false;
  @Input() message: string = '';
  @Output() onchange: EventEmitter<any> = new EventEmitter<string>();

  // Left Icon Props
  @Input() leftIcon: string = '';
  @Input() leftClick: boolean = false;
  @Output() leftIconClick: EventEmitter<any> = new EventEmitter();

  // Right Icon Props
  @Input() rightIcon: string = '';
  @Input() rightClick: boolean = false;
  @Output() rightIconClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addLeftClick() {
    this.leftIconClick.emit();
  }

  addRightClick() {
    this.rightIconClick.emit();
  }

  onChange(value: string) {
    this.onchange.emit(value);
  }

  ngOnInit(): void {}
}
