import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
@Directive({
  selector: '[load]'
})

export class loadDirective implements OnInit {
  constructor(private eleRef: ElementRef,private renderer :Renderer2) {
 }
ngOnInit(){
  setTimeout(() => {
    console.log('here')
    let controls=document.querySelector('.controls-top');

    this.renderer.setStyle(controls.children[0], 'position', 'absolute');

    this.renderer.setStyle(controls.children[0], 'top', '50%');

    this.renderer.setStyle(controls.children[0], 'right', '99%');

    this.renderer.setStyle(controls.children[1], 'position', 'absolute');

    this.renderer.setStyle(controls.children[1], 'top', '50%');

    this.renderer.setStyle(controls.children[1], 'left', '99%');
  }, 1000);


}
}
