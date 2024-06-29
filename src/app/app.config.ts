import { ApplicationConfig, provideZoneChangeDetection, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
    ),
  ]
};

@Injectable({providedIn: 'root'})

export class ConfigService {
  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get("https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json");
  }
}