import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    title = 'iRestore';
    currentViewName = null;
    data = null;

    onChangeView(currentView){
        this.currentViewName = currentView.name;
        this.data = currentView.type;
    }
}
