import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FilterPipe} from '../../config/filter.pipe';
import { PaginationComponent} from './tools/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, ContentComponent, FooterComponent, PokemonComponent, FilterPipe, PaginationComponent],
  exports: [ContentComponent]
})
export class ViewModule { }