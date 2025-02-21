"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7095],{39505:(U,g,o)=>{o.d(g,{L:()=>I});var i=o(24006),d=o(59549),E=o(69751),O=o(68675),v=o(54004),s=o(94650),D=o(36895),t=o(47957),P=o(3238),A=o(44144);function M(c,f){if(1&c&&(s.TgZ(0,"mat-option",4),s._uU(1),s.qZA()),2&c){const e=f.$implicit;s.Q6J("value",e),s.xp6(1),s.Oqu(e)}}let I=(()=>{class c{constructor(e){this.fb=e,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=r=>{},this.onChange=r=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new E.y,this.filteredOptions=this.control.valueChanges.pipe((0,O.O)(this.value),(0,v.U)(r=>this._filter(r)))}setDescribedByIds(e){}onContainerClick(e){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(e){null!=e&&(this.control.setValue(e),this.value=e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e}_filter(e){if(null==e||0==e.length)return this.options;const r=e.toLowerCase(),m=this.options.filter(T=>T.toLowerCase().includes(r));return!this.disabled&&1===m.length&&this.control.value!=m[0]&&e.length>=(this.previousValue?.length??0)&&this.control.setValue(m[0]),this.onChange(this.control.value),this.previousValue=this.control.value,m}}return c.\u0275fac=function(e){return new(e||c)(s.Y36(i.qu))},c.\u0275cmp=s.Xpm({type:c,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(e,r){2&e&&s.uIk("aria-describedby",r.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[s._Bn([{provide:i.JU,multi:!0,useExisting:c},{provide:d.Eo,useExisting:c}],[{provide:i.gN,useExisting:i.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,r){if(1&e&&(s.TgZ(0,"mat-form-field",0)(1,"mat-label"),s._uU(2),s.qZA(),s._UZ(3,"input",1),s.TgZ(4,"mat-autocomplete",null,2),s.YNc(6,M,2,2,"mat-option",3),s.ALo(7,"async"),s.qZA()()),2&e){const m=s.MAs(5);s.Q6J("appearance",r.appearance),s.xp6(2),s.Oqu(r.label),s.xp6(1),s.Q6J("id",r.id)("formControl",r.control)("matAutocomplete",m),s.xp6(3),s.Q6J("ngForOf",s.lcZ(7,6,r.filteredOptions))}},dependencies:[D.sg,i.Fj,i.JJ,i.oH,t.XC,t.ZL,P.ey,d.KE,d.hX,A.Nt,D.Ov]}),c})()},37095:(U,g,o)=>{o.r(g),o.d(g,{GenAccessInvComponent:()=>b});var i=o(24006),d=o(70879),E=o(50692),O=o(35226),v=o.n(O),s=o(48529),D=o(71884),t=o(94650),P=o(19132),A=o(11240),M=o(36895),I=o(97392),c=o(4859),f=o(59549),e=o(73546),r=o(39505);function m(u,h){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use MM-DD-YY or select *LASTP option. "),t.qZA())}function T(u,h){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," Cut off Date is required. "),t.qZA())}function L(u,h){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," Posting date format. Use MM-DD-YY or select *LASTP option. "),t.qZA())}function B(u,h){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," Posting Date is required. "),t.qZA())}let b=(()=>{class u{constructor(n,a,l){this.router=n,this.fb=a,this.StorerService=l,this.user=localStorage.getItem("userName"),this.storerread="/main-nav/storer",this.CutoffDateOptions=["*LASTP"],this.PostingDateOptions=["*LASTP","*THISP"]}ngOnInit(){this.element=history.state,this.form=this.fb.group({CutoffDate:[this.CutoffDateOptions[0],[i.kI.required,this.dateOrPredefinedValidator()]],PostingDate:[this.PostingDateOptions[0],[i.kI.required,this.dateOrPredefinedValidator()]]}),this.form.get("CutoffDate")?.valueChanges.pipe((0,D.x)()).subscribe(()=>{this.form.get("CutoffDate")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}),this.form.get("PostingDate")?.valueChanges.pipe((0,D.x)()).subscribe(()=>{this.form.get("PostingDate")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})})}dateOrPredefinedValidator(){return n=>{const a=n.value?.trim();return[...this.CutoffDateOptions,...this.PostingDateOptions].includes(a)||/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{2}$/.test(a)?null:{invalidDate:!0}}}convertMMDDYYtoYYYYMMDD(n){if(!n||this.CutoffDateOptions.includes(n)||this.PostingDateOptions.includes(n)||/^\d{4}-\d{2}-\d{2}$/.test(n))return n;const a=n.split("-");if(3!==a.length)return n;const[l,_,p]=a;return isNaN(Number(l))||isNaN(Number(_))||isNaN(Number(p))?n:`20${p}-${l}-${_}`}GenerateAccessInvoice(){if(this.GenAccessInvoiceSubscription&&(this.GenAccessInvoiceSubscription.unsubscribe(),this.GenAccessInvoiceSubscription=null),this.form.invalid)return void this.form.markAllAsTouched();const n={...this.form.value};this.CutoffDateOptions.includes(n.CutoffDate)||(n.CutoffDate=this.convertMMDDYYtoYYYYMMDD(n.CutoffDate)),this.PostingDateOptions.includes(n.PostingDate)||(n.PostingDate=this.convertMMDDYYtoYYYYMMDD(n.PostingDate)),this.GenAccessInvoiceSubscription&&this.GenAccessInvoiceSubscription.unsubscribe(),this.GenAccessInvoiceSubscription=this.StorerService.GenerateAccessInvoice(this.element.STORE,this.element.STSFX,this.element.STORE,this.element.STSFX,n.CutoffDate,n.PostingDate).subscribe(a=>{const _=a[0].data[a[0].data.length-1].value;_===s.R.submit?(this.successMessage(_),this.router.navigateByUrl(this.storerread)):this.failureMessage(_)})}successMessage(n){v().fire(n,"","success")}failureMessage(n){v().fire(n,"","error")}onBack(){this.router.navigate(["/main-nav/storer"])}}return u.\u0275fac=function(n){return new(n||u)(t.Y36(P.F0),t.Y36(i.qu),t.Y36(A.h))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-gen-access-inv"]],standalone:!0,features:[t.jDz],decls:19,vars:7,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline","formControlName","CutoffDate","label","Cut off Date",3,"options"],[4,"ngIf"],["appearance","outline","formControlName","PostingDate","label","Posting Date",3,"options"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(n,a){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return a.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Generate Accessorial Invoices (ACCINV)"),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6),t._UZ(11,"custom-input-autocomplete",7),t.YNc(12,m,2,0,"mat-error",8),t.YNc(13,T,2,0,"mat-error",8),t._UZ(14,"custom-input-autocomplete",9),t.YNc(15,L,2,0,"mat-error",8),t.YNc(16,B,2,0,"mat-error",8),t.qZA()(),t.TgZ(17,"button",10),t.NdJ("click",function(){return a.GenerateAccessInvoice()}),t._uU(18," Submit "),t.qZA()()()()),2&n){let l,_,p,C;t.xp6(8),t.Q6J("formGroup",a.form),t.xp6(3),t.Q6J("options",a.CutoffDateOptions),t.xp6(1),t.Q6J("ngIf",(null==(l=a.form.get("CutoffDate"))?null:l.touched)&&(null==(l=a.form.get("CutoffDate"))?null:l.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(_=a.form.get("CutoffDate"))?null:_.touched)&&(null==(_=a.form.get("CutoffDate"))?null:_.hasError("required"))),t.xp6(1),t.Q6J("options",a.PostingDateOptions),t.xp6(1),t.Q6J("ngIf",(null==(p=a.form.get("PostingDate"))?null:p.touched)&&(null==(p=a.form.get("PostingDate"))?null:p.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(C=a.form.get("PostingDate"))?null:C.touched)&&(null==(C=a.form.get("PostingDate"))?null:C.hasError("required")))}},dependencies:[d.m,M.O5,i._Y,i.JJ,i.JL,i.sg,i.u,I.Hw,c.lW,f.TO,e.a8,e.dk,e.dn,e.n5,E.j,r.L]}),u})()}}]);