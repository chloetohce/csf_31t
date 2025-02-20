import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from '../../models';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Output()
  onNavigate = new Subject<PageEvent>()

  private step = 1

  protected page(delta: number) {
    const event: PageEvent =  {
      delta, // If both key and value is the same, can just use this (equivalent to delta: delta)
      step: this.step // Cannot put just step, because there is a 'this' in front
    }

    this.onNavigate.next(event)
  }

  protected updateStep(event: any) {
    const value = event.target.value
    console.info(`step value: ${value}`) //type is a string here! All the data that comes in is a string
    console.info('type of: ', typeof(value))

    this.step = parseInt(value)

  }
}
