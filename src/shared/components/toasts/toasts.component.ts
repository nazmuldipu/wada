import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/service/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
