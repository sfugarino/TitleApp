"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_service_title_1 = require('./services/app.service.title');
var http_1 = require('@angular/http');
//enableProdMode();
platform_browser_dynamic_1.bootstrap(TodoListComponent, [http_1.HTTP_PROVIDERS, app_service_title_1.DataService]);
//# sourceMappingURL=boottodolist.js.map