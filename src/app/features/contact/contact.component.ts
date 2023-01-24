import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  constructor(
    public navService: NavigationService
  ) { }

  ngOnInit(): void {
 
  }


  checkAllValid(){
    this.isFieldValid('name');
    this.isEmailValid('email');
    this.isFieldValid('message');
  }

  isEmailValid(id:string):boolean{
    let emailPattern: RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let field = document.getElementById(id) as HTMLInputElement;
    if(field.value.trim().length > 1 && field.value.match(emailPattern)){
      console.log(id,' is VALID');
      return true;
    }else{
      console.log(id,' is NOT valid')
      return false;
    }    
  }

  isFieldValid(id: string):boolean {
    let field = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    if (field.value.trim().length > 1) {
      console.log(id,' is VALID');
      return true;
    }else{
      console.log(id,' is NOT valid');
      return false;
    }
  }  

}
