import {Component, Input, OnInit} from '@angular/core';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

declare var $: any

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
    function scroll() {
      $("HTML, BODY").animate({
        scrollTop: $(window).height()
      }, 100);
    }
    $('#down').click(scroll);
  }
}
