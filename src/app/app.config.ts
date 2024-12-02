import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp, FirebaseApp } from '@angular/fire/app';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyCiV2eChU1S1B1Ya0XxL_O8wcdLbZgG_7M",
  authDomain: "marble22-ff8d9.firebaseapp.com",
  projectId: "marble22-ff8d9",
  storageBucket: "marble22-ff8d9.firebasestorage.app",
  messagingSenderId: "452433167551",
  appId: "1:452433167551:web:b0bbb6c969cf9ff251320a",
  measurementId: "G-NW5D5FWC76"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  
    provideFirestore(() => getFirestore()),
   
  ]
};


