import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './home.@media.scss',
    './home.@keyframe.scss',
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    public navService: NavigationService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}
}
