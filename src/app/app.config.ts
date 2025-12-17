import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import { PrimeNgPreset } from './primeng.config';
import { fr } from "primelocale/fr.json";
import { ConfirmationService, MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    MessageService, // Pour ToastModule de PrimeNG
    ConfirmationService, // Pour ToastModule de PrimeNG
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      translation: fr,
      theme: {
        preset: PrimeNgPreset,
        options: {
          cssLayer: {
              name: 'primeng',
              order: 'theme, base, primeng'
          }
        }
      },
    }),
  ]
};
