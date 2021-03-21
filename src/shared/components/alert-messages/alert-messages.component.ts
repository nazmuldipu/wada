import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.scss']
})
export class AlertMessagesComponent {
  @Input()message: string = '';
  @Input()type: string; //success, danger

  @Output() close = new EventEmitter();

  onClose(){
    this.close.emit();
  }

}
