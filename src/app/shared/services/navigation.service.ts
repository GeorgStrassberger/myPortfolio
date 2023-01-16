import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }


  locateSection(sectionID:string){
    document.location = '#' + sectionID;
  }

/**
 * Disable a HTMLElement with ID for TIME milliseconds,
 * toggle class .disabledbutton {pointer-events: none;}
 * @param time
 * @param id
 */
  disabledClickFor(time: number, id: string){
    let elem = document.getElementById(id) as HTMLElement;
    elem.classList.add('disabledbutton');
    setTimeout(() => {
      elem.classList.remove('disabledbutton');
    }, time);
  }
}
