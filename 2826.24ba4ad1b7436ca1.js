"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2826,1790,8754,5645,2313],{11790:(E,h,r)=>{r.d(h,{y:()=>A});var p=r(65412),i=r(94650),C=r(97392),T=r(4859);let f=(()=>{class t{constructor(l,g){this.dialogRef=l,this.data=g}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(l){return new(l||t)(i.Y36(p.so),i.Y36(p.WI))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(l,g){1&l&&(i.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),i.NdJ("click",function(){return g.closeDialog()}),i._uU(3,"close "),i.qZA(),i.TgZ(4,"span",3),i._uU(5),i.qZA()(),i.TgZ(6,"button",4),i._uU(7,"Cancel"),i.qZA(),i.TgZ(8,"button",5),i._uU(9,"Delete"),i.qZA()()),2&l&&(i.xp6(5),i.Oqu(g.data.message),i.xp6(1),i.Q6J("mat-dialog-close",!1),i.xp6(2),i.Q6J("mat-dialog-close",!0))},dependencies:[C.Hw,T.lW,p.ZT]}),t})(),A=(()=>{class t{constructor(l){this.dialog=l}openCustomAlert(l){return this.dialog.open(f,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:l}})}}return t.\u0275fac=function(l){return new(l||t)(i.LFG(p.uw))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},42826:(E,h,r)=>{r.r(h),r.d(h,{LedgerCodesAttributesComponent:()=>$});var p=r(98739),i=r(7155),C=r(70879),T=r(35226),f=r.n(T),A=r(65412),t=r(94650),m=r(19132),l=r(24006),g=r(46546),_=r(97392),v=r(4859),b=r(59549),L=r(44144),c=r(73546);let S=(()=>{class o{constructor(e,n,a,d,u){this.anyvariable=e,this.dialogRef=n,this.router=a,this.fb=d,this.LedgerCodes=u,this.user=localStorage.getItem("userName"),this.keyValue=""}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable);const e=(n,a)=>String(n).padStart(a,"0");console.log(e(this.anyvariable.LELEGC,4)),this.keyValue=e(this.anyvariable.LELEGC,4),this.form=this.fb.group({EAFLID:{value:"LE",disabled:!0},EAKEY:{value:e(this.anyvariable.LELEGC,4)+e(this.anyvariable.LELEGS,2),disabled:!0},EAATRB:"",EAVALU:"",EASTAT:"AC",EATMST:"",EAUSER:""})}LCAttributesCreate(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LedgerCodes.LCAttributesCreate(this.user,this.form.get("EAFLID")?.value,this.form.get("EAKEY")?.value,e.EAATRB.toUpperCase(),e.EAVALU.toUpperCase(),e.EASTAT,e.EATMST,this.user).subscribe(n=>{if(JSON.parse(n[0].data[1].value).success){const a=JSON.parse(n[0].data[1].value).returnedData.message;this.successMessage(a),this.closeDialog(),this.router.navigateByUrl("/main-nav/ledgerCode/attributes/read",{state:this.anyvariable})}else{const a=JSON.parse(n[0].data[1].value).returnedData.message;this.failureMessage(a)}})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A.WI),t.Y36(A.so),t.Y36(m.F0),t.Y36(l.qu),t.Y36(g.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-ledger-codes-atrributes"]],standalone:!0,features:[t.jDz],decls:42,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","EAFLID",2,"text-transform","uppercase"],["matInput","","formControlName","EAKEY"],["matInput","","formControlName","EAATRB",2,"text-transform","uppercase"],["matInput","","formControlName","EAVALU",2,"text-transform","uppercase"],["matInput","","formControlName","EASTAT",2,"text-transform","uppercase"],["matInput","","formControlName","EATMST","readonly",""],["matInput","","formControlName","EAUSER","readonly","",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Entity Attributes"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Attribute"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Value"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Status"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Last Changed"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Change User"),t.qZA(),t._UZ(39,"input",15),t.qZA()()(),t.TgZ(40,"button",16),t.NdJ("click",function(){return n.LCAttributesCreate()}),t._uU(41,"Create"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[C.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,_.Hw,v.lW,b.KE,b.hX,L.Nt,c.a8,c.dk,c.dn,c.n5]}),o})();var U=r(11790),x=r(36895),y=r(28255),N=r(10266),Y=r(90455);function D(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"div",33)(3,"span",34),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",35),t.NdJ("ngModelChange",function(a){const u=t.CHM(e).$implicit;return t.KtG(u.isActive=a)})("change",function(){const d=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.toggleColumn(d))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&o){const e=s.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function w(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Attribute"),t.qZA())}function q(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EAATRB)}}function F(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Value"),t.qZA())}function M(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EAVALU)}}function J(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Last Changed"),t.qZA())}function B(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EATMST)}}function k(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"User"),t.qZA())}function R(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EAUSER)}}function I(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Status"),t.qZA())}function O(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EASTAT)}}function Q(o,s){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Key"),t.qZA())}function K(o,s){if(1&o&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.EAKEY)}}function G(o,s){1&o&&t._UZ(0,"th",38)}function H(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",37)(1,"div",39)(2,"button",40)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",41)(6,"li")(7,"button",42),t.NdJ("click",function(){const d=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.LCAttributesDelete(d))}),t.TgZ(8,"mat-icon",43),t._uU(9,"delete"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Delete"),t.qZA()()()()()()}}function V(o,s){1&o&&t._UZ(0,"tr",44)}function W(o,s){1&o&&t._UZ(0,"tr",45)}const z=function(){return[8,16,24]};let $=(()=>{class o{constructor(e,n,a,d,u,Z){this.router=e,this.fb=n,this.route=a,this.CustomAlertService=d,this.matDialog=u,this.LedgerCodes=Z,this.selectedRow=[],this.editedRows=[],this.duplicateSource=[],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName"),this.displayedColumns=["Attribute","Value","LastChanged","User","Status","Actions"],this.keyValue="",this.columnShowHideList=[]}ngOnInit(){this.element=history.state,console.log(this.element);const e=(n,a)=>String(n).padStart(a,"0");console.log(e(this.element.LELEGC,4)),this.keyValue=e(this.element.LELEGC,4),this.form=this.fb.group({FLID:"LE",KEY:e(this.element.LELEGC,4)+e(this.element.LELEGS,2)}),this.initializeColumnProperties(),this.editedRows=[],this.getLCAttributes()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let n=this.displayedColumns.indexOf(e.name);n>-1&&this.displayedColumns.splice(n,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,n)=>{"Actions"!=e&&this.columnShowHideList.push({position:n,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Key",isActive:!1})}rowClick(e){this.selectedRow=e}getLCAttributes(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LedgerCodes.getLCAttributes(this.user,e.KEY).subscribe(n=>{var d=JSON.parse(n[0].data[1].value);this.duplicateSource=d.returnedData,this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}LCAttributesDelete(e){var n=this.form.value;console.log(n),this.CustomAlertService.openCustomAlert("Are you sure want to delete this Key:"+n.KEY+"and Attribute:"+e.EAATRB+" ?").afterClosed().subscribe(d=>{d&&(this.deleteLCAttributesSubscription&&this.deleteLCAttributesSubscription.unsubscribe(),this.deleteLCAttributesSubscription=this.LedgerCodes.LCAttributesDelete(n.KEY,e.EAATRB).subscribe(u=>{const Z=u[0].data[u[0].data.length-1].value;"DELETED SUCCESSFULLY"===Z?(this.successMessage(Z),this.getLCAttributes()):this.failureMessage(u[0].data[u[0].data.length-1].value)}))})}LCAttributesCreateForm(e){this.matDialog.open(S,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}onBack(){this.router.navigate(["/main-nav/ledgerCode/read"])}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.F0),t.Y36(l.qu),t.Y36(m.gz),t.Y36(U.y),t.Y36(A.uw),t.Y36(g.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ledger-codes-attributes"]],viewQuery:function(e,n){if(1&e&&t.Gf(p.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(n.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:59,vars:8,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","matTooltip","Add New AccountAttributes",1,"addButton",3,"click"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FLID",2,"text-transform","uppercase"],["matInput","","formControlName","KEY",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Value"],["matColumnDef","LastChanged"],["matColumnDef","User"],["matColumnDef","Status"],["matColumnDef","Key"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return n.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Entity Attributes"),t.qZA(),t.TgZ(7,"div",2)(8,"button",3),t.NdJ("click",function(){return n.LCAttributesCreateForm(n.element)}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()(),t.TgZ(11,"mat-menu",4,5)(13,"div",6),t.YNc(14,D,6,2,"ng-container",7),t.qZA()(),t.TgZ(15,"button",8,9)(17,"mat-icon"),t._uU(18,"visibility_off"),t.qZA()()()(),t.TgZ(19,"mat-card-content",10)(20,"form",11)(21,"div",12)(22,"div",13)(23,"mat-form-field",14)(24,"mat-label"),t._uU(25,"File ID"),t.qZA(),t._UZ(26,"input",15),t.qZA(),t.TgZ(27,"mat-form-field",14)(28,"mat-label"),t._uU(29,"Key"),t.qZA(),t._UZ(30,"input",16),t.qZA()()(),t.TgZ(31,"button",17),t._uU(32," Search "),t.qZA()()(),t.TgZ(33,"table",18),t.ynx(34,19),t.YNc(35,w,2,0,"th",20),t.YNc(36,q,2,1,"td",21),t.BQk(),t.ynx(37,22),t.YNc(38,F,2,0,"th",20),t.YNc(39,M,2,1,"td",21),t.BQk(),t.ynx(40,23),t.YNc(41,J,2,0,"th",20),t.YNc(42,B,2,1,"td",21),t.BQk(),t.ynx(43,24),t.YNc(44,k,2,0,"th",20),t.YNc(45,R,2,1,"td",21),t.BQk(),t.ynx(46,25),t.YNc(47,I,2,0,"th",20),t.YNc(48,O,2,1,"td",21),t.BQk(),t.ynx(49,26),t.YNc(50,Q,2,0,"th",20),t.YNc(51,K,2,1,"td",21),t.BQk(),t.ynx(52,27),t.YNc(53,G,1,0,"th",28),t.YNc(54,H,12,0,"td",21),t.BQk(),t.YNc(55,V,1,0,"tr",29),t.YNc(56,W,1,0,"tr",30),t.qZA(),t._UZ(57,"mat-paginator",31,32),t.qZA()),2&e){const a=t.MAs(12);t.xp6(14),t.Q6J("ngForOf",n.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("formGroup",n.form),t.xp6(13),t.Q6J("dataSource",n.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,z))}},dependencies:[C.m,x.sg,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,p.NW,_.Hw,y.VK,y.p6,v.lW,b.KE,b.hX,L.Nt,c.a8,c.dk,c.dn,c.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,N.gM,Y.Rr]}),o})()}}]);