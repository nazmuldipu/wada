import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent {
  @Input() message: errorMessage;

  @Output() btnEvent = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) { }

  onButtonClick(event) {
    this.btnEvent.emit(event);
  }
  
  getIconClass() {
    if (this.message && this.message.type) {
      switch (this.message.type) {
        case 'danger': return 'fa-times';
        case 'success': return 'fa-check';
        default: return 'fa-info'
      }
    }
  }
  
  getMessageText() {
    if (this.message && this.message.type) {
      switch (this.message.type) {
        case 'danger': return 'Sorry';
        case 'success': return 'Congratulation';
        default: return 'fa-info'
      }
    }
  }
}

interface errorMessage {
  message: string;
  type: string; //success, danger
  buttons: MButton[]
}

interface MButton {
  key: string;
  text: string;
  type: string;
}
