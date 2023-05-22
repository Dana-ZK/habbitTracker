import { Component } from '@angular/core';
import { habits as data} from 'src/app/data/habitList';
import { IHabit } from 'src/app/interfaces/habits';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent {
  habits:IHabit[] = data 
}
