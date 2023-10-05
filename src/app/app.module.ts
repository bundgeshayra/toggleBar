import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule} from '@angular/material/sidenav';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  exports : [
    MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule, MatFormFieldModule, MatSelectModule,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule, MatFormFieldModule, MatSelectModule,
    DataTablesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) 
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
