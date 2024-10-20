import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {

  teams:any[]=[
    {
      id:1,
      name:"Team1",
      description:"This is team1",
    },
    {
      id:2,
      name:"Team2",
      description:"This is team1",
    },
    {
      id:3,
      name:"Team3",
      description:"This is team1",
    },
    
  ]
}
