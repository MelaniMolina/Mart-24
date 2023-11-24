import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBN21J9_DHHkX7pu4q50e8RSVuJcAkSdz0",
  authDomain: "bjp-e9ae2.firebaseapp.com",
  projectId: "bjp-e9ae2",
  storageBucket: "bjp-e9ae2.appspot.com",
  messagingSenderId: "199906236527",
  appId: "1:199906236527:web:cd4b2e6293cf6ff7a7559a",
  measurementId: "G-JJSX8G0G14"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
