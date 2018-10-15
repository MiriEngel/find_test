import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/_services';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    providers:[I18nService]
})

export class AppComponent { 

    constructor(
        private i18nService: I18nService
      ) {}
    
      ngOnInit() {
        if (environment.production) {
           // Logger.enableProductionMode();
          }
            // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
      }
}