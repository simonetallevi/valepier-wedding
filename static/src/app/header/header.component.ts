import {Component, OnInit} from '@angular/core';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown;

  constructor() {
  }

  ngOnInit() {
  }

}
