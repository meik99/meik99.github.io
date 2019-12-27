import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input()
  recursionDepth = 0;

  constructor() { }

  ngOnInit() {
  }

}
