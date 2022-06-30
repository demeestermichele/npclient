import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import {HttpClientModule} from "@angular/common/http";
import { CharacterListComponent } from './character/character-list/character-list.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import {JDENTICON_CONFIG, NgxJdenticonModule} from "ngx-jdenticon";
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    DashboardComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgxJdenticonModule
  ],
  providers: [
    {
      // Custom identicon style
      // https://jdenticon.com/icon-designer.html?config=222222ff014132321e363f52
      provide: JDENTICON_CONFIG,
      useValue: {
        lightness: {
          color: [0.31, 0.54],
          grayscale: [0.63, 0.82],
        },
        saturation: {
          color: 0.50,
          grayscale: 0.50,
        },
        backColor: '#222',
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
