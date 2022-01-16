import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user: any;
  username: string = 'torrenegra';
  section: string = 'skills';
  
  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    console.log(this.username);
    this.username = this.route.snapshot.params.username;
    this.profileService.getProfile(this.username).subscribe(data => {
      console.log('data----', data);
      this.user = data;
    }, err => console.log(err));
    

    console.log(this.user);
  }

  activeSection(section: string){
    this.section = section;
  }

}
