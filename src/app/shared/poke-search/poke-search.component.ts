import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  @Output() public emmitSeach: EventEmitter<string> = new EventEmitter();

  public seach(value: string) {

    this.emmitSeach.emit(value);
  }
}
