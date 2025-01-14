import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value).subscribe({
        next: () => {
          this.message = 'Inscription réussie !';
        },
        error: () => {
          this.message = "Erreur lors de l'inscription.";
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs correctement.';
    }
  }

  get nom() {
    return this.signupForm.get('nom');
  }

  get prenom() {
    return this.signupForm.get('prenom');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
