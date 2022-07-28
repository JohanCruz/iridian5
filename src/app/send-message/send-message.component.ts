import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private httpClient: HttpClient) { 
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      message: [''],
      email: [''],
      contactArea: [''],
      phone: [''],
    });
  }

  ngOnInit(): void {
  }
  public submitFormMessage() {
    var formData: any = new FormData();
    formData.append("firstName", this.form.get('firstName').value);
    formData.append("lastName", this.form.get('lastName').value);
    formData.append("message", this.form.get('message').value);
    formData.append("email", this.form.get('email').value);
    formData.append("contactArea", this.form.get('contactArea').value);
    formData.append("phone",  this.form.get('phone').value);
    this.httpClient.post('http://localhost:8000/api/message', formData).subscribe();
    
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      message: [''],
      email: [''],
      contactArea: [''],
      phone: [''],
    });
  
  }

}


    

  


