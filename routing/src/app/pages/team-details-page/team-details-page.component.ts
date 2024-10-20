import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details-page',
  templateUrl: './team-details-page.component.html',
  styleUrls: ['./team-details-page.component.css']
})
export class TeamDetailsPageComponent implements OnInit {

  // ijection de service
  // workers in the background
  // worker JOB NAME
  // ActiavtedRoute watch path 
 
  constructor( private route:ActivatedRoute ){}


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    
  }


}
