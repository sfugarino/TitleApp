import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import { Configuration } from './config/app.configuration';

import { AppComponent }  from './components/app.component';

import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        DetailsComponent,
        ListComponent
  ],
  bootstrap: [AppComponent],
  providers: [HTTP_PROVIDERS, Configuration],
})
export class AppModule { }
