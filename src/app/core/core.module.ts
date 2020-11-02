import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { CONFIG, Config } from '../model';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { NavbarComponent } from './navbar/navbar.component';

const config: Config = {
  customerLimit: 10,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  providers: [
    MessageService,
    { provide: CONFIG, useValue: config },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
