import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {


  users:any[] = [];
  loading:boolean = false;

  constructor( private api:ApiService ){}


  ngOnInit(): void {
  
    this.loading = true;
   this.api.getUsersFromServer().toPromise().then( (res:any)=>{
      console.log(res);

      this.users = res;


      this.loading = false;

      
   } ).catch( (err:any)=>{
      console.log(err);
      this.loading = false;
      
   } );
  }
}
