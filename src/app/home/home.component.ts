import { Component, input, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('Home Message!')

  keyLogger(event: KeyboardEvent) {
    console.log(event.key)
  }
}
