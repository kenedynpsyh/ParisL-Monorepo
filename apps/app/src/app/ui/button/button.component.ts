import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() typeButton: string = 'success';
  @Input() name: string = 'Button';
  @Input() type: string = 'button';
  @Input() isLoading: boolean = false;
  @Input() addClass: string = '';
  @Output() onclick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  click() {
    this.onclick.emit();
  }

  ngOnInit(): void {}
}
