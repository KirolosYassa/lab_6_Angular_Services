import { Component } from '@angular/core';
import { SendMessageService } from './send-message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SendMessageService],
})
export class AppComponent {
  message: string = this.messageService.message;

  constructor(public messageService: SendMessageService) {}

  ngOnInit(): void {
    this.messageService.dataEmitter.subscribe((data) => {
      console.log('Subscription part');
      this.message = data;
    });
    console.log('ngOnInit in App component' + this.messageService.getMessage());
  }
}
