import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtHowhabitComponent } from './components/pages/art-howhabit/art-howhabit.component';
import { ArtWhathabitComponent } from './components/pages/art-whathabit/art-whathabit.component';
import { ArtWhyhabitComponent } from './components/pages/art-whyhabit/art-whyhabit.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'whathabit', component: ArtWhathabitComponent},
  {path:'whyhabit', component: ArtWhyhabitComponent},
  {path:'howhabit', component:ArtHowhabitComponent},
  {path:'', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
