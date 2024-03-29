import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  isPopupOpen: boolean = false;
  constructor() {}

  onOpenPopup(): void {
    this.isPopupOpen = true;
  }

  onClosePopup(event: Event): void {
    event?.stopPropagation();
    this.isPopupOpen = false;
  }
}
