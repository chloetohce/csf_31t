import { Component, Input, Output } from '@angular/core';
import { startWith, Subject } from 'rxjs';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input()
  currNum: number = 0;
  
  protected numbersArr = Array.from(Array(31).keys())

  handleNext() {
    console.info("next button clicked")
    console.info(this.currNum)
  }

  handleDropdownClick(jump: number) {

  }
}
