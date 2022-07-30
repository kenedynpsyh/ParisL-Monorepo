import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  // Input Props
  @Input() label: string = '';
  @Input() public id: string = '';
  @Input() public name: string = 'name';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() invalid: boolean = false;
  @Input() message: string = '';
  @Output() onchange: EventEmitter<any> = new EventEmitter<string>();
  @Input() isLoading: boolean = false;
  @Input() addClass: string = '';
  @Input() addClassInput: string = '';

  // input dialog
  @Input() dialog: boolean = false;

  // Left Icon Props
  @Input() leftIcon: string = '';
  @Input() leftClick: boolean = false;
  @Output() leftIconClick: EventEmitter<any> = new EventEmitter();

  // Right Icon Props
  @Input() rightIcon: string = '';
  @Input() rightClick: boolean = false;
  @Output() rightIconClick: EventEmitter<any> = new EventEmitter();

  classList = this.addClass;

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

  ngOnInit(): void {
    this.classList = `${this.addClass} ${
      this.isLoading ? 'noc-input-isLoading' : ''
    }`;
  }
}
