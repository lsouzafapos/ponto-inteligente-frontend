import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent, CadastroPfComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from 'src/app/shared/shared.module';

import { CadastrarPfService } from './services';


@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    CadastrarPfService
  ]
})
export class CadastroPfModule { }
