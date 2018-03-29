import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MainContainerModule} from "./main-container/main-container.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireDatabaseModule} from "angularfire2/database";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        AlertModule.forRoot(),
        MainContainerModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
