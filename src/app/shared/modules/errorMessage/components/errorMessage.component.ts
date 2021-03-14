import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fs-error-message',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input('message') messageProps: string = 'Something went wrong'

  constructor() { }

  ngOnInit(): void {
  }

}
