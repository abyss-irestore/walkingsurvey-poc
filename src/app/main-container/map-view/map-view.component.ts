import {Component, OnInit, ViewChild} from '@angular/core';
import {MapsService} from "./maps.service";
import {ChildComponent} from "../child-component";
import {AgmInfoWindow} from "@agm/core";

import * as _ from "lodash";
import * as geocoder from "geocoder";


@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, ChildComponent {

    lng: number = -108.12988;
    lat: number = 40.60326;
    resolvingAddress: Boolean = false;
    data = null;
    geoJsonObject: GeoJsonObject;

    previousFeature: any;

    @ViewChild('infoWindow') infoWindow: AgmInfoWindow;

    infoWindowDetails: InfoWindowDetails = <InfoWindowDetails> {lat: 0, lng: 0, formattedAddress: '', ready: false};


    constructor(private mapsService: MapsService) {
    }

    ngOnInit() {
        this.mapsService.getGeoJson(this.data)
            .then((data: GeoJsonObject) => {
                const {coordinates} = data.features[0].geometry,
                    coords = Array.isArray(coordinates[0]) ? coordinates[0] : coordinates;

                this.lng = coords[0];
                this.lat = coords[1];

                this.geoJsonObject = data;
            })
            .catch(console.log);
    }

    styleFunc(feature) {
        const color = 'red';
        if (feature.getProperty('isSelected')) {
            return ({
                fillColor: color,
                strokeColor: color,
                strokeWeight: 2
            });
        }

    }

    onInfoWindowClose() {
        if (this.previousFeature) this.previousFeature.setProperty('isSelected', false);
    }


    onLayerClick(event) {

        const lat = event.latLng.lat(),
            lng = event.latLng.lng();

        this.infoWindowDetails.ready = false;


        this.infoWindow.close()
            .then(() => {
                event.feature.setProperty('isSelected', true);

                geocoder.reverseGeocode(lat, lng, (err, data) => {
                    this.infoWindowDetails = _.pick(event.feature.f, [
                        'LASTUSER', 'GlobalID', 'CreationDate', 'Creator', 'EditDate', 'Editor',
                        'DATECREATE', 'DATEMODIFI', 'MATERIAL', 'FUELTYPE', 'CPSYSTEMNU',
                        'INSTALLDAT', 'SPIPENO_SE', 'SHAPE_STLe', 'REMARKS'
                    ]);

                    this.infoWindowDetails.formattedAddress = data.results && !!data.results.length ? data.results[0].formatted_address : '';
                    this.infoWindowDetails.lat = event.latLng.lat();
                    this.infoWindowDetails.lng = event.latLng.lng();

                    this.infoWindowDetails.ready = true;

                    this.previousFeature = event.feature;

                    this.infoWindow.open().then(console.log)

                });

            });

    }


}

interface InfoWindowDetails {
    lat: Number,
    lng: Number,
    formattedAddress: String,
    ready: Boolean
}


interface GeoJsonObject {
    "type": String,
    "source": String,
    "features": Array<{
        "type": String,
        "properties": {
            "style ": String
        },
        "geometry": {
            "type": String,
            "coordinates": Array<any>
        }
    }>
}
