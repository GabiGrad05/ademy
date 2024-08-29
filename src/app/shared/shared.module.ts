import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    GenericCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [HeaderComponent, BannerComponent, GenericCardComponent, FooterComponent]
})
export class SharedModule { }
