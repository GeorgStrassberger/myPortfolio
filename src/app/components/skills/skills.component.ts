import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.scss',
    './skills.@media.scss',
    './skills.@keyframes.scss',
  ],
})
export class SkillsComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
