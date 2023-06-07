import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-make-contact',
  templateUrl: './make-contact.page.html',
  styleUrls: ['./make-contact.page.scss'],
})
export class MakeContactPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: ContactService,
    private route: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  // formSubmit() {
  //   if (!this.bookingForm.valid) {
  //     return false;
  //   } else {
  //     this.aptService.createBooking(this.bookingForm.value).then(res => {
  //       console.log(res)
  //       this.bookingForm.reset();
  //       this.route.navigate(['/home']);
  //     })
  //       .catch(error => console.log(error));
  //   }
  // }
}
