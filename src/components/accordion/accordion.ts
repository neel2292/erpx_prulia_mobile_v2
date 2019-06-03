import {Component, ViewChild, Renderer, Input} from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {


  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  @Input('expanded') accordionExapanded: boolean = false;
  @Input('expandable') expandable: boolean = true;

  @Input('icon') icon: string;

  constructor(public renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    // this._setMaxHeight(this.accordionExapanded);
    console.log(this.cardContent.nativeElement);
  }

  toggleAccordion() {
    this.accordionExapanded = !this.accordionExapanded;
    // this._setMaxHeight(this.accordionExapanded)
    // if (this.accordionExapanded) {
    //   this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    //   this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    // } else {
    //   this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
    //   this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    // }


  }

  // _setMaxHeight(bExpand){
  //   if(!this.expandable){
  //     return;
  //   }
  //   if (!bExpand) {
  //     this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
  //     this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
  //   } else {
  //     this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
  //     this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

  //   }
  //   this.icon = !this.accordionExapanded ? "add" : "close";
  //   // this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  // }

}
