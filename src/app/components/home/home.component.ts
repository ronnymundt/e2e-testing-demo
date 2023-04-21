import {Component} from '@angular/core';
import {DemoService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
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
      error: (error) => console.log(error)
    });
  }
}
