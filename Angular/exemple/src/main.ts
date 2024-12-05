import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/app/app.component';

// APP-ROOT -> Composant Racine
bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));
