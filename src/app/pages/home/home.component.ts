import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule  } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
  });

  homeFormValidated = false;

  handleSubmit() {
    if (this.homeForm.valid) {
      console.log("First Name: " + this.homeForm.value.firstName);
      console.log("Last Name: " + this.homeForm.value.lastName);
      console.log("Email: " + this.homeForm.value.email);
      console.log("Password: " + this.homeForm.value.password);
      this.homeFormValidated = true;
    } else {
      console.log("invalid inputs");
      this.homeFormValidated = false;
    }
  }
}
