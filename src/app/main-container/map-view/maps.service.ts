import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MapsService {

    constructor(private http: HttpClient) {
    }

    getGeoJson(type) {
        return new Promise((resolve, reject) => {
            if (!_jsonFilesMap[type]) return reject(new Error(`Could not find GeoJson data for ${type}`));

            if (this[type]) return resolve(this[type]);

            this.http.get(`assets/${_jsonFilesMap[type]}`)
                .subscribe(data => {
                    this[type] = data;
                    resolve(data);
                });
        })
    }

}

const _jsonFilesMap = {
    "dist": 'distribution_lines.json',
    "maps": 'mapped-services.json',
    "sep": 'mapped-service-points.json',
}
