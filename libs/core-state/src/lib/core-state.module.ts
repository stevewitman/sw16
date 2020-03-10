import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDataModule } from '@bb/core-data';
import { reducers } from './index';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProjectsEffect } from './projects-ngrx/projects.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProjectsEffect
    ]),
    StoreDevtoolsModule.instrument({name: 'NGRX Sample Store'})
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
