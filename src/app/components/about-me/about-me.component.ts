import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me.@media.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor(
    public navService: NavigationService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}
}
