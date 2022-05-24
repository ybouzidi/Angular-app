import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateif]'
})
export class AlternateIfDirective implements OnInit, OnChanges{

  @Input() appAlternateif : boolean;
  constructor(
    private templateRef : TemplateRef<any>, 
    private vcRef : ViewContainerRef
  ) { }

    ngOnChanges(changes: SimpleChanges): void {
      if(this.appAlternateif){
        this.vcRef.createEmbeddedView(this.templateRef);
      }
      else 
        this.vcRef.clear();
    }
    ngOnInit(): void {
        
    }
}
