import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages:any;

  

  constructor(private apiService: ApiService) {     
  }

  ngOnInit() {
    this.apiService.getMessages().subscribe((data)=>{
      console.log(data);
      this.messages = data;
    });  
   
  }

  

}
