import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'contact-btn',
  template: `<button translate (click)="navService.forceNavigate('contact')">
    {{ btnText }}
  </button>`,
  styleUrls: [
    './contact-btn.component.scss',
    './contact-btn.mobile.component.scss',
  ],
})
export class ContactButton {
  @Input() btnText: string = '';

  constructor(public navService: NavigationService) {}
}
