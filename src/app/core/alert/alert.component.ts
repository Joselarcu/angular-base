import { AlertService } from './alert.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertType } from '../../models/alert-type';

@Component({
  selector: 'bs-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(alert => { 
      if(!alert){
        this.alerts = [];
      }
      else{
        this.alerts.push(alert);
        setTimeout(()=> this.removeAlert(alert),3000);
      }
    });
  }

  removeAlert(alert:Alert): string{
    this.alerts = this.alerts.filter(x => x !== alert);
    switch (alert.type) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'error'; 
    }
  }

  close(): void{
    this.alerts = [];
  }

}
