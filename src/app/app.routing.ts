import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './view/content/content.component';
import { ContentDetailComponent } from './view/content/content.detail.component';

export 
const appRoutes: Routes = [
  { path: 'pokemon', 
    component: ContentComponent 
  },
  { path: 'pokemon/:id',
    component: ContentDetailComponent
  },
  {
    path: 'pokemon',
    component: ContentComponent,
    data: { title: 'pokemon List' }
  },
  { path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class ViewRoutingModule {}

