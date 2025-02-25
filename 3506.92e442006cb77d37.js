"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3506],{39505:(y,E,a)=>{a.d(E,{L:()=>D});var s=a(24006),h=a(59549),M=a(69751),b=a(68675),O=a(54004),n=a(94650),t=a(36895),g=a(47957),C=a(3238),A=a(44144);function v(p,_){if(1&p&&(n.TgZ(0,"mat-option",4),n._uU(1),n.qZA()),2&p){const r=_.$implicit;n.Q6J("value",r),n.xp6(1),n.Oqu(r)}}let D=(()=>{class p{constructor(r){this.fb=r,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=u=>{},this.onChange=u=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new M.y,this.filteredOptions=this.control.valueChanges.pipe((0,b.O)(this.value),(0,O.U)(u=>this._filter(u)))}setDescribedByIds(r){}onContainerClick(r){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(r){null!=r&&(this.control.setValue(r),this.value=r)}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouched=r}setDisabledState(r){this.disabled=r}_filter(r){if(null==r||0==r.length)return this.options;const u=r.toLowerCase(),c=this.options.filter(P=>P.toLowerCase().includes(u));return!this.disabled&&1===c.length&&this.control.value!=c[0]&&r.length>=(this.previousValue?.length??0)&&this.control.setValue(c[0]),this.onChange(this.control.value),this.previousValue=this.control.value,c}}return p.\u0275fac=function(r){return new(r||p)(n.Y36(s.qu))},p.\u0275cmp=n.Xpm({type:p,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(r,u){2&r&&n.uIk("aria-describedby",u.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[n._Bn([{provide:s.JU,multi:!0,useExisting:p},{provide:h.Eo,useExisting:p}],[{provide:s.gN,useExisting:s.sg}])],decls:8,vars:9,consts:[[3,"appearance"],["matInput","",3,"id","placeholder","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(r,u){if(1&r&&(n.TgZ(0,"mat-form-field",0)(1,"mat-label"),n._uU(2),n.qZA(),n._UZ(3,"input",1),n.TgZ(4,"mat-autocomplete",null,2),n.YNc(6,v,2,2,"mat-option",3),n.ALo(7,"async"),n.qZA()()),2&r){const c=n.MAs(5);n.Q6J("appearance",u.appearance),n.xp6(2),n.Oqu(u.label),n.xp6(1),n.Q6J("id",u.id)("placeholder",u.placeholder)("formControl",u.control)("matAutocomplete",c),n.xp6(3),n.Q6J("ngForOf",n.lcZ(7,7,u.filteredOptions))}},dependencies:[t.sg,s.Fj,s.JJ,s.oH,g.XC,g.ZL,C.ey,h.KE,h.hX,A.Nt,t.Ov]}),p})()},93506:(y,E,a)=>{a.r(E),a.d(E,{InboundSummaryComponent:()=>J});var s=a(24006),h=a(86385),M=a(70879),b=a(35226),O=a.n(b),n=a(71884),t=a(94650),g=a(19132),C=a(78568),A=a(36895),v=a(4859),D=a(59549),p=a(44144),_=a(73546),r=a(39505);function u(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use MM-DD-YY or select from dropdown values. "),t.qZA())}function c(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Start Date is required. "),t.qZA())}function P(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use MM-DD-YY or select *START option. "),t.qZA())}function Y(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," End Date is required. "),t.qZA())}function U(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use MM-DD-YY or select *SS option. "),t.qZA())}function N(i,d){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Date to use is required. "),t.qZA())}function R(i,d){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email is required."),t.qZA())}function B(i,d){1&i&&(t.TgZ(0,"div"),t._uU(1,"Please enter a valid email address."),t.qZA())}function L(i,d){if(1&i&&(t.TgZ(0,"mat-error"),t.YNc(1,R,2,0,"div",7),t.YNc(2,B,2,0,"div",7),t.qZA()),2&i){const e=t.oxw(2);let o,l;t.xp6(1),t.Q6J("ngIf",null==(o=e.form.get("EmailAddress"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(l=e.form.get("EmailAddress"))||null==l.errors?null:l.errors.EmailAddress)}}function Z(i,d){if(1&i&&(t.TgZ(0,"mat-form-field",19)(1,"mat-label"),t._uU(2,"Email:"),t.qZA(),t._UZ(3,"input",20),t.YNc(4,L,3,2,"mat-error",7),t.qZA()),2&i){const e=t.oxw();let o;t.xp6(4),t.Q6J("ngIf",(null==(o=e.form.get("EmailAddress"))?null:o.invalid)&&((null==(o=e.form.get("EmailAddress"))?null:o.dirty)||(null==(o=e.form.get("EmailAddress"))?null:o.touched)))}}let J=(()=>{class i{constructor(e,o,l,m){this.fb=e,this.router=o,this.route=l,this.ReportsService=m,this.placeholder="MM-DD-YY",this.StartDateOptions=["*ALL","*TODAY","*YESTR","*THISW","*LASTW","*THISM","*LASTM","*THISQ","*LASTQ","*THISY","*LASTY","*YTD"],this.EndDateOptions=["*START"],this.DateToUseOptions=["*AA","*SA","*AS","*SS"],this.StartingStorerOptions=["*FIRST"],this.EndingStorerOptions=["*LAST"],this.StartingBuildingNumberOptions=["*FIRST"],this.EndingBuildingNumberOptions=["*LAST"],this.ReportOrderOptions=["*NONE","*DATE","*BUILDING","*STORER"],this.ReportTitleOptions=["Inbound Summary Report"],this.OutputOptions=["*PRINT","*EMAIL"],this.user=localStorage.getItem("userName")}ngOnDestroy(){this.InboundSummarySubscription&&this.InboundSummarySubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({StartDate:[this.StartDateOptions[0],[s.kI.required,this.dateOrPredefinedValidator()]],EndDate:[this.EndDateOptions[0],[s.kI.required,this.dateOrPredefinedValidator()]],Datetouse:[this.DateToUseOptions[0],[s.kI.required,this.dateOrPredefinedValidator()]],StartingStorer:[this.StartingStorerOptions[0]],EndingStorer:[this.EndingStorerOptions[0]],StartingBuildingNumber:[this.StartingBuildingNumberOptions[0]],EndingBuildingNumber:[this.EndingBuildingNumberOptions[0]],ReportOrder:[this.ReportOrderOptions[0]],ReportTitle:[this.ReportTitleOptions[0]],OutPut:[this.OutputOptions[0]],EmailAddress:[""]}),this.form.get("OutPut")?.valueChanges.subscribe(e=>{this.shouldDisplayEmailField()||this.form.get("EmailAddress")?.setValue("")}),this.form.get("StartDate")?.valueChanges.pipe((0,n.x)()).subscribe(()=>{this.form.get("StartDate")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}),this.form.get("EndDate")?.valueChanges.pipe((0,n.x)()).subscribe(()=>{this.form.get("EndDate")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}),this.form.get("Datetouse")?.valueChanges.pipe((0,n.x)()).subscribe(()=>{this.form.get("Datetouse")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})})}shouldDisplayEmailField(){const e=this.form.get("OutPut")?.value;return"*PRINT"===e||"*EMAIL"===e}dateOrPredefinedValidator(){return e=>{const o=e.value?.trim();return[...this.StartDateOptions,...this.EndDateOptions,...this.DateToUseOptions].includes(o)||/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{2}$/.test(o)?null:{invalidDate:!0}}}convertMMDDYYtoYYYYMMDD(e){if(!e||this.StartDateOptions.includes(e)||this.EndDateOptions.includes(e)||this.DateToUseOptions.includes(e)||/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const o=e.split("-");if(3!==o.length)return e;const[l,m,f]=o;return isNaN(Number(l))||isNaN(Number(m))||isNaN(Number(f))?e:`20${f}-${l}-${m}`}InboundSummary(){if(this.InboundSummarySubscription&&(this.InboundSummarySubscription.unsubscribe(),this.InboundSummarySubscription=null),this.form.invalid)return void this.form.markAllAsTouched();const e={...this.form.value};this.StartDateOptions.includes(e.StartDate)||(e.StartDate=this.convertMMDDYYtoYYYYMMDD(e.StartDate)),this.EndDateOptions.includes(e.EndDate)||(e.EndDate=this.convertMMDDYYtoYYYYMMDD(e.EndDate)),this.DateToUseOptions.includes(e.Datetouse)||(e.Datetouse=this.convertMMDDYYtoYYYYMMDD(e.Datetouse)),this.InboundSummarySubscription&&this.InboundSummarySubscription.unsubscribe(),this.InboundSummarySubscription=this.ReportsService.InboundSummary(e.StartDate,e.EndDate,e.Datetouse,e.StartingStorer,e.EndingStorer,e.StartingBuildingNumber,e.EndingBuildingNumber,e.ReportOrder,e.ReportTitle,e.OutPut,e.EmailAddress).subscribe(o=>{const m=o[0].data[o[0].data.length-1].value;"Successfully Submitted"===m?(this.successMessage(m),this.router.navigate(["/main-nav/InboundSummary/read"])):this.failureMessage(m)})}successMessage(e){O().fire(e,"","success")}failureMessage(e){O().fire(e,"","error")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(g.F0),t.Y36(g.gz),t.Y36(C.F))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-inbound-summary"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[t.jDz],decls:27,vars:18,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline","placeholder","MM-DD-YY","formControlName","StartDate","label","Start Date",3,"options"],[4,"ngIf"],["appearance","outline","placeholder","MM-DD-YY","formControlName","EndDate","label","End Date",3,"options"],["appearance","outline","placeholder","MM-DD-YY","formControlName","Datetouse","label","Date to Use",3,"options"],["appearance","outline","formControlName","StartingStorer","label","Starting Storer  ",3,"options"],["appearance","outline","formControlName","EndingStorer","label","Ending Storer  ",3,"options"],["appearance","outline","formControlName","StartingBuildingNumber","label","Starting Building Number  ",3,"options"],["appearance","outline","formControlName","EndingBuildingNumber","label","Ending Building Number  ",3,"options"],["appearance","outline","formControlName","ReportOrder","label","Report Order",3,"options"],["appearance","outline","formControlName","ReportTitle","label","Report Title",3,"options"],["appearance","outline","formControlName","OutPut","label","Output",3,"options"],["appearance","outline","class","full-width",4,"ngIf"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EmailAddress","placeholder","Enter your email"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Inbound Summary Report"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5),t._UZ(8,"custom-input-autocomplete",6),t.YNc(9,u,2,0,"mat-error",7),t.YNc(10,c,2,0,"mat-error",7),t._UZ(11,"custom-input-autocomplete",8),t.YNc(12,P,2,0,"mat-error",7),t.YNc(13,Y,2,0,"mat-error",7),t._UZ(14,"custom-input-autocomplete",9),t.YNc(15,U,2,0,"mat-error",7),t.YNc(16,N,2,0,"mat-error",7),t._UZ(17,"custom-input-autocomplete",10)(18,"custom-input-autocomplete",11)(19,"custom-input-autocomplete",12)(20,"custom-input-autocomplete",13)(21,"custom-input-autocomplete",14)(22,"custom-input-autocomplete",15)(23,"custom-input-autocomplete",16),t.YNc(24,Z,5,1,"mat-form-field",17),t.qZA()(),t.TgZ(25,"button",18),t.NdJ("click",function(){return o.InboundSummary()}),t._uU(26,"Submit"),t.qZA()()()()),2&e){let l,m,f,S,T,I;t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("options",o.StartDateOptions),t.xp6(1),t.Q6J("ngIf",(null==(l=o.form.get("StartDate"))?null:l.touched)&&(null==(l=o.form.get("StartDate"))?null:l.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(m=o.form.get("StartDate"))?null:m.touched)&&(null==(m=o.form.get("StartDate"))?null:m.hasError("required"))),t.xp6(1),t.Q6J("options",o.EndDateOptions),t.xp6(1),t.Q6J("ngIf",(null==(f=o.form.get("EndDate"))?null:f.touched)&&(null==(f=o.form.get("EndDate"))?null:f.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(S=o.form.get("EndDate"))?null:S.touched)&&(null==(S=o.form.get("EndDate"))?null:S.hasError("required"))),t.xp6(1),t.Q6J("options",o.DateToUseOptions),t.xp6(1),t.Q6J("ngIf",(null==(T=o.form.get("Datetouse"))?null:T.touched)&&(null==(T=o.form.get("Datetouse"))?null:T.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(I=o.form.get("Datetouse"))?null:I.touched)&&(null==(I=o.form.get("Datetouse"))?null:I.hasError("required"))),t.xp6(1),t.Q6J("options",o.StartingStorerOptions),t.xp6(1),t.Q6J("options",o.EndingStorerOptions),t.xp6(1),t.Q6J("options",o.StartingBuildingNumberOptions),t.xp6(1),t.Q6J("options",o.EndingBuildingNumberOptions),t.xp6(1),t.Q6J("options",o.ReportOrderOptions),t.xp6(1),t.Q6J("options",o.ReportTitleOptions),t.xp6(1),t.Q6J("options",o.OutputOptions),t.xp6(1),t.Q6J("ngIf",o.shouldDisplayEmailField())}},dependencies:[M.m,A.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,v.lW,D.TO,D.KE,D.hX,p.Nt,_.a8,_.dk,_.dn,_.n5,h.j,r.L]}),i})()}}]);