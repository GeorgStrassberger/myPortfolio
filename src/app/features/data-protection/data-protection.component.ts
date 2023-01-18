import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor( public navService:NavigationService ) { }

  ngOnInit(): void {
  }

  scrollToID(id: string){
    this.navService.locateSection(id);
  }
}
