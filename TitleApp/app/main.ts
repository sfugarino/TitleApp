import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
