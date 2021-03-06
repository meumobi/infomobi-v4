import { Message } from '@comments/models/comment';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() comment: Message;
  @Output() options = new EventEmitter();

  constructor() {}
}
