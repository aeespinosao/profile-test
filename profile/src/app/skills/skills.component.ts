import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input("user") user: any;

  constructor() { }

  ngOnInit(): void {
  }

  skillCategories(){
    let categories = this.user?.strengths.map( (strength: any) => strength.proficiency);
    console.log(new Set(categories))
    return Array.from(new Set(categories));
  }

  skillsByCategory(category: any) {
    let skills = this.user?.strengths.filter((skill: any) => skill.proficiency == category);
    console.log(skills)
    return skills;
  }


}
