import { Component, Output } from '@angular/core';
import { startWith, Subject } from 'rxjs';

@Component({
  selector: 'app-numbers',
  standalone: false,
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {

  protected filePath = 'numbers/number0.jpg'

  protected numbersArr = Array.from(Array(31).keys())

  private currNum = 0

  @Output()
  num = new Subject<number>();

  handleNext() {
    this.currNum++;
    if (this.currNum > 30) {
      this.currNum = 0;
    }
    this.num.next(this.currNum);
    this.filePath = `numbers/number${this.currNum}.jpg`;
  }

  handlePrev() {
    this.currNum--;
  
    if (this.currNum < 0) {
      this.currNum = 30;
    }
    this.num.next(this.currNum);
    this.filePath = `numbers/number${this.currNum}.jpg`;
  }

  handleDropdownClick(jump: any) {
    for (let i = 0; i < jump.target.value; i++) {
      this.handleNext();
    }
  }
}
