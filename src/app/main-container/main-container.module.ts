import {NgModule} from '@angular/core';

import {SurveysListComponent} from './surveys-list/surveys-list.component';
import {MapViewComponent} from './map-view/map-view.component';
import {MainContainerComponent} from "./main-container.component";
import {PlaceholderDirective} from "./palceholder-directive";
import {SurveysService} from "./surveys-list/surveys.service";
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "@agm/core";
import {MapsService} from "./map-view/maps.service";
import { NguiMapModule} from '@ngui/map';

@NgModule({
    declarations: [
        MainContainerComponent,
        SurveysListComponent,
        MapViewComponent,
        PlaceholderDirective
    ],
    entryComponents: [
        SurveysListComponent,
        MapViewComponent
    ],
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAi7WJdratHVCIS1yVOxVZEwSfWFyKyHbw'
        }),
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAi7WJdratHVCIS1yVOxVZEwSfWFyKyHbw'})
    ],
    exports: [MainContainerComponent],
    providers: [MapsService, SurveysService]
})
export class MainContainerModule {
}
