/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/library/grid.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '../../../app/library/cell.component';
import * as import14 from './cell.component.ngfactory';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_Grid {
  /*private*/ _eventHandler:Function;
  context:import0.Grid;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.Grid();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_componentTypes(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.componentTypes = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Grid_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Grid_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Grid>;
  _Grid_0_3:Wrapper_Grid;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Grid_Host0,renderType_Grid_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'grid-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Grid0(this.viewUtils,this,0,this._el_0);
    this._Grid_0_3 = new Wrapper_Grid();
    this.compView_0.create(this._Grid_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Grid_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Grid) && (0 === requestNodeIndex))) { return this._Grid_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Grid_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const GridNgFactory:import7.ComponentFactory<import0.Grid> = new import7.ComponentFactory<import0.Grid>('grid-component',View_Grid_Host0,import0.Grid);
const styles_Grid:any[] = ([] as any[]);
var renderType_Grid:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Grid,{});
export class View_Grid0 extends import2.AppView<import0.Grid> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import8.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import9.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Grid0,renderType_Grid,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import8.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import10.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import9.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import11.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import12.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.cellComponentTypes;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_Grid1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_Grid1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  /*private*/ _vc_4:import8.ViewContainer;
  compView_4:import2.AppView<import13.Cell>;
  _Cell_4_5:import14.Wrapper_Cell;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import8.ViewContainer) {
    super(View_Grid1,renderType_Grid,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-lg-12'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'grid-cell',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_4 = new import8.ViewContainer(4,2,this,this._el_4);
    this.compView_4 = new import14.View_Cell0(this.viewUtils,this,4,this._el_4);
    this._Cell_4_5 = new import14.Wrapper_Cell(this._vc_4.vcRef,this.parentView.injectorGet(import15.ComponentFactoryResolver,this.parentIndex));
    this.compView_4.create(this._Cell_4_5.context);
    this._text_5 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.Cell) && (4 === requestNodeIndex))) { return this._Cell_4_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this.context.$implicit;
    this._Cell_4_5.check_componentType(currVal_4_0_0,throwOnChange,false);
    this._Cell_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this.compView_4.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}