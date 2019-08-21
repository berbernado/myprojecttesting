import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, ContentComponent, FooterComponent, PokemonComponent],
  exports: [ContentComponent]
})
export class ViewModule { }