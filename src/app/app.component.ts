import { Component } from '@angular/core';
import { PageEvent } from './models';

const NUM_IMAGES = 31; // no export = stored only within the file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'csf_31t';
  protected currNum = 0;

  protected image = "numbers/number0.jpg";
  currIndex = 0;

  updateCurrNum(num : number) {
    this.currNum = num;
    console.info("num in app: " + this.currNum)
  }

  whenNavigate(event: PageEvent) {
    this.currIndex += event.step * event.delta; // Using  interface here
    if (this.currIndex < 0)
        this.currIndex = NUM_IMAGES + this.currIndex;
    else (this.currIndex >= NUM_IMAGES)
      this.currIndex %= NUM_IMAGES
    
    this.image = `numbers/number${this.currIndex}.jpg`
  }
}
