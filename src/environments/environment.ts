// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAPIv9rmrDawQJuPh341D0Qhjl8LY9epT8",
        authDomain: "walkingsurvey-poc.firebaseapp.com",
        databaseURL: "https://walkingsurvey-poc.firebaseio.com",
        projectId: "walkingsurvey-poc",
        storageBucket: "walkingsurvey-poc.appspot.com",
        messagingSenderId: "275015514403"
    }
};
