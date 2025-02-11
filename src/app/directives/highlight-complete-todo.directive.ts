import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]'
})
export class HighlightCompleteTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  
  stylesEffect = effect(() => {
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecorationLine = "line-through";
      this.el.nativeElement.style.backgroundColor = "#d3f9d8";
      this.el.nativeElement.style.color = "#6c757d";
    }else{
      this.el.nativeElement.style.textDecorationLine = "none";
      this.el.nativeElement.style.backgroundColor = "#fff";
      this.el.nativeElement.style.color = "#000";
    }
  })
  constructor() { }

}
