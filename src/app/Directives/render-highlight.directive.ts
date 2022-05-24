import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit{

  @Input() defaultColor : string = 'red';
  @Input() highlightColor : string ='yellow';
  @HostBinding('style.backgroundColor') color : string;
  constructor(private element: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
      
  }
  @HostListener('mouseenter') onmouseover(event:Event){
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') onmouseleave(event:Event){
    this.color = this.defaultColor;
  }

  @HostListener('click') onclick(event:Event){
    this.color = 'pink';
  }

}