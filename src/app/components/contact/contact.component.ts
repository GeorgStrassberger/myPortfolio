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

  initForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)]),
      'message': new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log('contactForm: ', this.contactForm);
    this.initForm();
  }


}

