import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./footer.@media.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public navService:NavigationService,
  ) { }

  ngOnInit(): void {
  }

}
