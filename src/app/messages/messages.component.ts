import { AlertService } from '../core/alert/alert.service';
import { MessagesService } from './messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';


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
