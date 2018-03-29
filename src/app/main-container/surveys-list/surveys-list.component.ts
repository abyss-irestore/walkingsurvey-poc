import {Component, OnInit} from '@angular/core';
import {ChildComponent} from "../child-component";
import {SurveysService} from "./surveys.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-surveys-list',
    templateUrl: './surveys-list.component.html',
    styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit, ChildComponent {
    data: any;
    surveys: Observable<any[]>;
    selectedSurvey = null;
    center = '';
    path = [];

    columns: Array<String> = ["Survey", "Inspector", "Town", "Leak", "Date", "Start Time", "End Time", "Distance Travelled"];

    constructor(private surveysService: SurveysService) {
    }

    ngOnInit() {
        this.surveys = this.surveysService.getSurveys();
    }

    selectSurvey(index) {
        this.surveysService.getSurvey(index)
            .subscribe(survey => {
                this.selectedSurvey = survey;

                let firstCoords = this.selectedSurvey.geoData.features[0].geometry.coordinates[0];
                this.center = `${firstCoords[1]}, ${firstCoords[0]}`;

                this.path = this.selectedSurvey.geoData.features[0].geometry.coordinates
                    .map(c => ({lng: c[0], lat: c[1]}));
            });

    }

    onBack(){
        this.selectedSurvey = null;
    }

    zoomChanged(ev) {
        console.log(ev);
    }

}
