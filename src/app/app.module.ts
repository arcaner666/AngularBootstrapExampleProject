import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TsButtonComponent } from './components/ts-button/ts-button.component';

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
    TsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
