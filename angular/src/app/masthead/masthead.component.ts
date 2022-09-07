import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {

  @Output()
  onDrawer = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
