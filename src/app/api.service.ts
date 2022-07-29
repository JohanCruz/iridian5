import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL  =  'http://localhost:8000/api/message';
  form: FormGroup;
  alert: any;


  constructor(public fb: FormBuilder,private httpClient: HttpClient) {
    this.alert = '';
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      message: [''],
      email: [''],
      contactArea: [''],
      phone: [''],
    });     
  }

  
  public getMessages(){
    return this.httpClient.get(this.API_URL);
  }

  public submitFormMessage(form: FormGroup, formData: any) {
    
    
    return this.httpClient.post('http://localhost:8000/api/message', formData); 
      
  
  
  }

}


 