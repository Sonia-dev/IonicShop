import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePageRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
