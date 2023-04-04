import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from './popup.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(
    public popupService: PopupService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}
}
