import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

import LogRocket from 'logrocket';

LogRocket.init('dafa/angular_bench');

// This is an example script - don't forget to change it!
LogRocket.identify('33', {
  name: 'angular_benchmark',
  email: 'angular_benchmark@abdallahsamy.me',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
