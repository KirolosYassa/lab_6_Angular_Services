import { Component } from '@angular/core';
import { SendMessageService } from '../send-message.service';
@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
  providers: [SendMessageService],
})
export class SendMessageComponent {
  constructor(private messageService: SendMessageService) {}
  send_message() {
    this.messageService.setMessage('Message from child component to Parent');
    let defaultMessage = this.messageService.getDefaultMessage();
    console.log(`Default Message: ${defaultMessage}`);
    this.messageService.raiseDataEmitter(
      'Message from child component to Parent by Emitter'
    );
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit in send message component' + this.messageService.getMessage()
    );
  }
}
