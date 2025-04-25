import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DemoService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isLoading = false;
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(
    private demoService: DemoService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {}

  onSendButtonClick() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.demoService.fakeHttpRequest().subscribe({
      next: (res) => this.router.navigate(['/overview']),
      error: (error) => console.error(error),
    });
  }
}
