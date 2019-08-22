import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { GetPhoto} from './tools/pokephoto.pipe';
import { FilterPipe} from '../../config/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, ContentComponent, FooterComponent, PokemonComponent, FilterPipe, GetPhoto],
  exports: [ContentComponent]
})
export class ViewModule { }