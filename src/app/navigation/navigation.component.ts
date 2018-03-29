import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() onChangeView = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeView(name: String, type: String){
    this.onChangeView.emit({name, type});
  }

}
