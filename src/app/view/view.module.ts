import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content/content.detail.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FilterPipe} from '../../config/filter.pipe';
import { ColorTypePipe } from './tools/colortype.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, ContentComponent,ContentDetailComponent, FooterComponent, PokemonComponent, FilterPipe, ColorTypePipe ],
  exports: [ContentComponent,ContentDetailComponent]
})
export class ViewModule { }