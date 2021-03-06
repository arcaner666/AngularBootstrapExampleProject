import { BuyukHarfDirective } from './directives/buyuk-harf.directive';
import { DirectiveComponent } from './components/directive/directive.component';
import { EtradeComponent } from './components/etrade/etrade.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { AngularComponent } from './components/angular/angular.component';
import { FormCheckComponent } from './components/form-check/form-check.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { InputAccessComponent } from './components/input-access/input-access.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { RegistrationSystemComponent } from './components/registration-system/registration-system.component';
import { AdvRegSystemComponent } from './components/adv-reg-system/adv-reg-system.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DetayComponent } from './components/detay/detay.component';
import { ServiceComponent } from './components/service/service.component';

import { DataService } from './services/data.service';
import { EtradeService } from './services/etrade.service';
import { KatduzenlesilComponent } from './components/katduzenlesil/katduzenlesil.component';
import { UrunduzenlesilComponent } from './components/urunduzenlesil/urunduzenlesil.component';
import { SadeceSayiDirective } from './directives/sadece-sayi.directive';
import { PipeComponent } from './components/pipe/pipe.component';
import { BoslukluYazPipe } from './pipes/bosluklu-yaz.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    RegistrationSystemComponent,
    AdvRegSystemComponent,
    ReactiveFormComponent,
    ServiceComponent,
    DetayComponent,
    EtradeComponent,
    KatduzenlesilComponent,
    UrunduzenlesilComponent,
    DirectiveComponent,
    SadeceSayiDirective,
    BuyukHarfDirective,
    PipeComponent,
    BoslukluYazPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    EtradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
