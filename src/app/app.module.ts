import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { VariableComponent } from './components/variable/variable.component';
import { ColorComponent } from './components/color/color.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { ImageComponent } from './components/image/image.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AlertComponent } from './components/alert/alert.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { AngularComponent } from './components/angular/angular.component';
import { FormCheckComponent } from './components/form-check/form-check.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { InputAccessComponent } from './components/input-access/input-access.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { RegistrationSystemComponent } from './components/registration-system/registration-system.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav2Component,
    FooterComponent,
    HomeComponent,
    ColorComponent,
    ParagraphComponent,
    HeadingsComponent,
    TableComponent,
    ImageComponent,
    JumbotronComponent,
    ButtonsComponent,
    VariableComponent,
    AlertComponent,
    ListComponent,
    CardComponent,
    NavigationComponent,
    NavbarComponent,
    AngularComponent,
    FormControlComponent,
    FormCheckComponent,
    RegistrationFormComponent,
    NgTemplateComponent,
    InputAccessComponent,
    NgModelComponent,
    RegistrationSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
