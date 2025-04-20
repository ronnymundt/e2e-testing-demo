import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DemoService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = false;

  constructor(
    private demoService: DemoService,
    private router: Router
  ) { }

  onSendButtonClick(): void {
    this.isLoading = true;
    this.demoService.fakeHttpRequest().subscribe({
      next: (res) => this.router.navigate(['/overview']),
      error: (error) => console.error(error)
    });
  }
}
