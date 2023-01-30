import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss','./contact.@keyframe.scss','./contact.@media.scss']
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
    let emalStatus = document.getElementById('emailStatus') as HTMLSpanElement;
    let emailPattern: RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let field = document.getElementById(id) as HTMLInputElement;
    if(field.value.trim().length > 1 && field.value.match(emailPattern)){
      console.log(id,' is VALID');
      field.classList.add('valid');
      return true;
    }else{
      if (id === 'email') {
        emalStatus.innerHTML = `Your email is required`;
        emalStatus.classList.remove('invisible');
        emalStatus.classList.add('failed');
        emalStatus.classList.add('inValidFont');
      }
      field.classList.add('inValidBorder');
      return false;
    }    
  }

  isFieldValid(id:string):boolean {
    let nameStatus = document.getElementById('nameStatus') as HTMLSpanElement;
    let messageStatus = document.getElementById('messageStatus') as HTMLSpanElement;
    let minCharacter: number = 3;
    let field = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    if (field.value.trim().length >= minCharacter) {
      field.classList.add('valid');
      return true;
    }else{
      if(id === 'name'){
        nameStatus.innerHTML = `Your name is required, at least ${minCharacter} letters`;
        nameStatus.classList.remove('invisible');
        nameStatus.classList.add('failed');
        nameStatus.classList.add('inValidFont');
      }
      if (id === 'message') {
        messageStatus.innerHTML = `Your message must contain at least ${minCharacter} characters`;
        messageStatus.classList.remove('invisible');
        messageStatus.classList.add('failed');
        messageStatus.classList.add('inValidFont');
      }
      field.classList.add('inValidBorder');
      return false;
    }
  }  

}

