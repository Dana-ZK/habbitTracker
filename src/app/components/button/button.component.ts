import { Component, Input } from '@angular/core';
import { IDay } from 'src/app/interfaces/days';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() day:IDay 
  habitDone = false
  toggleDone(){
    console.log('click');
    this.habitDone = !this.habitDone    
  }
}
