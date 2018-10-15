import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModule } from './product/product.module';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers';
import {TranslateModule} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {DropdownDirective} from './_directives/dropdown.components'
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './sideBar/sideBar.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AgmCoreModule } from '@agm/core';
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//let config: SocketIoConfig;
// let user = <any>localStorage.getItem('currentUser');
// if (user) {
//     user = JSON.parse(user);

//     if ('token' in user)
//         config = { url: 'http://' + window.location.hostname + ':4000', options: { query: "token=" + user.token + '&iemi=' + user.imei } };
// }

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        routing,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDm3MIEQgeB21x6llnIX-76fvpxC3eqw0Q',
            libraries: ['places']
        }),
        ProductModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot(),
        
       // BrowserAnimationsModule
        //SocketIoModule.forRoot(config)
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        DropdownDirective,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,SideComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }