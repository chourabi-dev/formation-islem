import { Component } from '@angular/core';
import Employee from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // REMINDER
  email:string="tchourabi@gmail.com";
  password="123456";
  price:number=55236985;
  theDoorISOpen:boolean = false;
  today:Date = new Date();
  userOBJ:any = { username:"chourabi", phone:"93863732" };

  employees:Employee[] = [ 
    { id:1, fullname:"chourabi taher 1",email:"tchourabi@gmail.com", year:2024 },
    { id:2, fullname:"chourabi taher 2",email:"tchourabi@gmail.com", year:2010 },
    { id:3, fullname:"chourabi taher 3",email:"tchourabi@gmail.com", year:1990 },
    
  ]





  articles = [
    {
      id: 1,
      title: "Article Title 1",
      content: "This is the content for article 1. Lorem ipsum dolor sit amet...",
      likes: 456
    },
    {
      id: 2,
      title: "Article Title 2",
      content: "This is the content for article 2. Lorem ipsum dolor sit amet...",
      likes: 712
    },
    {
      id: 3,
      title: "Article Title 3",
      content: "This is the content for article 3. Lorem ipsum dolor sit amet...",
      likes: 89
    },
    {
      id: 4,
      title: "Article Title 4",
      content: "This is the content for article 4. Lorem ipsum dolor sit amet...",
      likes: 523
    },
    {
      id: 5,
      title: "Article Title 5",
      content: "This is the content for article 5. Lorem ipsum dolor sit amet...",
      likes: 301
    }
  ];
  



}
