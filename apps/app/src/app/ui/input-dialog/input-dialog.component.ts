import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
})
export class InputDialogComponent implements OnInit {
  @Output() onclick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  click() {
    this.onclick.emit();
  }

  ngOnInit(): void {}
}
