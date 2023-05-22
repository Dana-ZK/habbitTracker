import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtWhathabitComponent } from './components/pages/art-whathabit/art-whathabit.component';
import { ArtHowhabitComponent } from './components/pages/art-howhabit/art-howhabit.component';
import { ArtWhyhabitComponent } from './components/pages/art-whyhabit/art-whyhabit.component';
import { HabitItemComponent } from './components/habit-item/habit-item.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitProgressBarComponent } from './components/habit-progress-bar/habit-progress-bar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ArtWhathabitComponent,
    ArtHowhabitComponent,
    ArtWhyhabitComponent,
    HabitItemComponent,
    HabitListComponent,
    HabitProgressBarComponent,
    ButtonComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
