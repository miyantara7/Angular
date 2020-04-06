import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { Book } from '../book';
import { Category } from '../category';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  book: Book=new Book();
  cat: Category= new Category();
  message:any;

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.book);
    resp.subscribe((data)=>this.message=data);
      }

  
}
