import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-provider',
  templateUrl: './button-provider.component.html',
  styleUrls: ['./button-provider.component.scss'],
})
export class ButtonProviderComponent implements OnInit {
  @Input() icon: any = '';
  @Input() name: string = '';
  @Input() addClass: string = '';

  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  click() {
    this.onclick.emit();
  }

  ngOnInit(): void {}
}
