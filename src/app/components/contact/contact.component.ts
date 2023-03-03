import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/shared/services/navigation.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.@keyframe.scss', './contact.@media.scss']
})

export class ContactComponent implements OnInit, DoCheck {

  isValid: boolean = false;
  contactForm!: FormGroup;

  constructor(
    public navService: NavigationService
  ) { }

  ngDoCheck(): void {
    this.isValid = this.contactForm.valid;
    console.log('isValid', this.isValid);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.initForm();
    // this.createFormData();
    console.log('contactForm:', this.contactForm)
    // play Sound & show PopUp 
  }

  initForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)]),
      'message': new FormControl('', Validators.required),
    });
    // console.log('contactForm:', this.contactForm)
  }

  createFormData() {
    const fd = new FormData();
    fd.append('name', this.contactForm.controls['name'].value);
    fd.append('email', this.contactForm.controls['email'].value);
    fd.append('message', this.contactForm.controls['message'].value);
    console.log('FormData: ', fd);
    // await fetch("https://georg-strassberger.de/send_mail/send_mail.php", { method: 'POST', body: fd });

  }

}



