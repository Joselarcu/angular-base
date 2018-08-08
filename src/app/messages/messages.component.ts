import { AlertService } from '../core/alert/alert.service';
import { MessagesService, Message } from './messages.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  messages: Message[];


  constructor(private messageService: MessagesService,private alertService: AlertService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(data => { this.messages = data; this.alertService.success("Messages loaded successfully")},
      error => { this.alertService.error(error.message)});
  }

}
