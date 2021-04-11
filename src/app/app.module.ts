import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppComponent } from "./app.component";
import { appRoutingModule } from "./app.routing";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { AdminComponent } from "./admin";
import { LoginComponent } from "./login";
import { LoadFormlyComponent } from "./load-formly/load-formly.component";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyFieldButton } from "./button-type.component";
import { RepeatFormlyComponent } from "./repeat-formly/repeat-formly.component";
import { RepeatTypeComponent } from "./repeat-section-type";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: "repeat", component: RepeatTypeComponent }],
    }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    LoadFormlyComponent,
    FormlyFieldButton,
    RepeatFormlyComponent,
    RepeatTypeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
