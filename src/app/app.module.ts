import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SendMessageService } from './send-message.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SendMessageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [SendMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
