import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  form: FormGroup;
  alert: any;
  constructor(public fb: FormBuilder, private apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      message: [''],
      email: [''],
      contactArea: [''],
      phone: [''],
    });
    
  }

  public submitFormMessage(){
    this.alert = '';
    var formData: any = new FormData();
    formData.append("firstName", this.form.get('firstName').value);
    formData.append("lastName", this.form.get('lastName').value);
    formData.append("message", this.form.get('message').value);
    formData.append("email", this.form.get('email').value);
    formData.append("contactArea", this.form.get('contactArea').value);
    formData.append("phone",  this.form.get('phone').value);

    this.apiService.submitFormMessage(this.form, formData).subscribe((data)=>{
          console.log(data);
          this.alert = data;
      }); 
     
      
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

  


  




    

  


