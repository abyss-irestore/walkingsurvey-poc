import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SurveysService {

    surveys: Observable<any[]>;

    constructor(private http: HttpClient, private firebase: AngularFireDatabase) {
        this.getSurveys();
    }

    getSurveys() {
        return this.firebase.list('surveys').valueChanges()
    }

    getSurvey(index){
        return this.firebase.object(`surveys/${index}`).valueChanges();
    }


}

const surveys = [
    {
        "surveyId": "12412",
        "inspector": {
            "email": "eweggw@ferer.com",
            "name": "Jeff Smart",
            "phone": "2345235234"
        },
        "leak": 2,
        "dateOfSurvey": "2018-03-26T07:04:47.329Z",
        "distanceTravelled": "15ft",
        "startTime": "2018-03-26T07:04:47.329Z",
        "endTime": "2018-03-26T07:04:47.329Z",
        "surveyType": "Z",
        "asset": {
            "assetId": "12415adg",
            "materialType": "FWEG",
            "installationDate": "2018-03-26T07:04:47.329Z",
            "assetAddress": {
                "city": "Bengaluru",
                "country": "India",
                "countryShortName": "IN",
                "county": "Bangalore Urban",
                "resolvedAddress": "IBM India Pvt Ltd D3 Block, Vittal Mallya Rd",
                "state": "Karnataka",
                "stateShortName": "KA",
                "subLocality": "Ashok Nagar",
                "userAddress": "user",
                "zipcode": "560001"
            }
        },
        "geoData": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [
                                -77.09083378314972,
                                38.88374646925451
                            ],
                            [
                                -77.09059774875641,
                                38.88377152391224
                            ],
                            [
                                -77.09060311317444,
                                38.883917675906154
                            ],
                            [
                                -77.09061920642853,
                                38.88400954271987
                            ],
                            [
                                -77.09067821502686,
                                38.88407635487343
                            ]
                        ]
                    }
                }
            ]
        }
    }
]
