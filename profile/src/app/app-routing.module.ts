import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SkillsComponent } from './skills/skills.component';
import { DataComponent } from './data/data.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
