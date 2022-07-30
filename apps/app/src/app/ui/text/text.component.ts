import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input() name: string = 'Text';
  @Input() addClass: string = '';
  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  click() {
    this.onclick.emit();
  }

  ngOnInit(): void {}
}
