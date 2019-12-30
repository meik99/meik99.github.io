import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input('imgSrc')
  imgSrc = '';

  @Input('imgAlt')
  imgAlt = '';

  @Input('title')
  title = '';

  @Input('link')
  link = '';

  @Input('isAvailable')
  isAvailable = true;

  constructor() { }

  ngOnInit() {
  }

}
