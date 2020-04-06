import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  publishers:any;
  constructor(private service:UserRegistationService) { }

  ngOnInit() {
    let resp=this.service.getBooks();
    resp.subscribe((data)=>this.publishers=data);
  }

}
