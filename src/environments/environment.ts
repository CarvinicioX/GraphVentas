// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB-s8aRy19hFhyOnR5OQybUcXzjeTtKn00',
    authDomain: 'agilechart.firebaseapp.com',
    databaseURL: 'https://agilechart.firebaseio.com',
    projectId: 'agilechart',
    storageBucket: '',
    messagingSenderId: '314074052906'
  }
};
