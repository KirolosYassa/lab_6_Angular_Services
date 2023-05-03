import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  message: string = '';
  defaultMessage: string = 'This is a Default Message';
  dataEmitter = new EventEmitter<string>();

  raiseDataEmitter(data: string) {
    this.dataEmitter.emit(data);
  }

  constructor() {}

  setMessage(msg: string) {
    console.log(`message before: ${this.message}`);

    console.log('Entered setMessage in Service');
    this.message = 'New Message from Server ';
    console.log(`message after: ${this.message}`);
  }
  getMessage() {
    console.log('Entered getMessage in Service');
    return this.message;
  }
  getDefaultMessage() {
    console.log('Entered getDefaultMessage in Service');
    return this.defaultMessage;
  }
}
