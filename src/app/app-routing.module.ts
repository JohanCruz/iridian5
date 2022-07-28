import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { SendMessageComponent } from './send-message/send-message.component';

const routes: Routes = [
  /*{ path:  '', redirectTo:  'accounts', pathMatch:  'full' }, */   
  { path: 'message', component: MessageComponent },
  { path: 'send-message', component: SendMessageComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }