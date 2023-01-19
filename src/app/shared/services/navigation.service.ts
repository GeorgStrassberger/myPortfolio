import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor( public router: Router) { }

  forceNavigate(name: string) {
    this.router
      .navigate(['/'], { fragment: name })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    this.closeNavMenu();
  }


  openNavMenu(){
    let kopf = document.getElementById('header') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    kopf.classList.add('collapsible');
    top.classList.add('animateContent');
    bot.classList.add('animateFooter');
  }
  
  closeNavMenu(){
    let kopf = document.getElementById('header') as HTMLDivElement;
    let top = document.getElementById('top') as HTMLDivElement;
    let bot = document.getElementById('bot') as HTMLDivElement;

    setTimeout(()=>{
      kopf.classList.remove('collapsible');
    },1000)
    top.classList.remove('animateContent');
    bot.classList.remove('animateFooter');
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
