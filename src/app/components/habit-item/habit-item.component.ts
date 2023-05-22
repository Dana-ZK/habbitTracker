import { Component, Input } from '@angular/core';
import { IHabit } from 'src/app/interfaces/habits';
import { days as data} from 'src/app/data/daysList';
import { IDay } from 'src/app/interfaces/days';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.css']
})
export class HabitItemComponent {
  @Input() habit: IHabit
  days:IDay[] = data
  checkCompleted(index:any){
    this.days[index].completed = !this.days[index].completed
    console.log(this.days[index].completed);
  }
  
}
