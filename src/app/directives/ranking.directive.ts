import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rankingDirective]'
})
export class RankingDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const inputValue = this.el.nativeElement.value;
    const regex = /^[0-9]*$/;

    if (!regex.test(inputValue) || inputValue.length > 2) {
      event.preventDefault();
      this.el.nativeElement.value = inputValue.replace(/[^0-9]/g, '').substring(0, 2);
    }
  }
}