import { Component,OnInit } from '@angular/core';
import { I18nService } from '../_services/i18n.service';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    //providers:[AuthenticationService]
})
export class HeaderComponent implements OnInit{

    user:any;
    constructor( private i18nService: I18nService/*private _authenticationService: AuthenticationService*/) { 
        	//this.user = _authenticationService.;
    }
    ngOnInit() {

    }
    setLanguage(language: string) {
        this.i18nService.language = language;
      }
    
      get currentLanguage(): string {
        return this.i18nService.language;
      }
    
      get languages(): string[] {
        return this.i18nService.supportedLanguages;
      }
}