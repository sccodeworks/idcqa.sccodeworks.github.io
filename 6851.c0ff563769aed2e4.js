"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6851,1790,8754,5645,2313],{11790:(_,y,r)=>{r.d(y,{y:()=>f});var d=r(65412),n=r(94650),b=r(97392),T=r(4859);let q=(()=>{class u{constructor(i,c){this.dialogRef=i,this.data=c}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return u.\u0275fac=function(i){return new(i||u)(n.Y36(d.so),n.Y36(d.WI))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(i,c){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),n.NdJ("click",function(){return c.closeDialog()}),n._uU(3,"close "),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"button",4),n._uU(7,"Cancel"),n.qZA(),n.TgZ(8,"button",5),n._uU(9,"Delete"),n.qZA()()),2&i&&(n.xp6(5),n.Oqu(c.data.message),n.xp6(1),n.Q6J("mat-dialog-close",!1),n.xp6(2),n.Q6J("mat-dialog-close",!0))},dependencies:[b.Hw,T.lW,d.ZT]}),u})(),f=(()=>{class u{constructor(i){this.dialog=i}openCustomAlert(i){return this.dialog.open(q,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:i}})}}return u.\u0275fac=function(i){return new(i||u)(n.LFG(d.uw))},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},26851:(_,y,r)=>{r.r(y),r.d(y,{WorkWithEquipmentTypesComponent:()=>B});var d=r(98739),n=r(7155),b=r(50010),T=r(65412),q=r(35226),f=r.n(q),u=r(70879),t=r(94650),i=r(24006),c=r(19132),E=r(67516),C=r(97392),Z=r(4859),g=r(59549),v=r(44144),m=r(73546);let A=(()=>{class o{constructor(e,a,s,p,h){this.anyvariable=e,this.fb=a,this.router=s,this.EquipmentTypeSvc=p,this.dialogRef=h,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getEquipmentTypesSubscription&&this.getEquipmentTypesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({ETTRTP:this.anyvariable.ETTRTP,ETDESC:this.anyvariable.ETDESC,ETSTAT:this.anyvariable.ETSTAT})}updateEquipmentType(){var e=this.form.value;console.log(e),this.getEquipmentTypesSubscription&&this.getEquipmentTypesSubscription.unsubscribe(),this.getEquipmentTypesSubscription=this.EquipmentTypeSvc.updateEquipmentType(e.ETTRTP,e.ETDESC,e.ETSTAT,this.user).subscribe(a=>{if(console.log(a),JSON.parse(a.success))this.successMessage("updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/EquipmentTypes/read"]);else{const s=JSON.parse(a[0].data[1].value).returnedData.message;this.failureMessage(s)}})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.WI),t.Y36(i.qu),t.Y36(c.F0),t.Y36(E.G),t.Y36(T.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-equipment-types"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","required","","formControlName","ETTRTP","readonly",""],["matInput","","formControlName","ETDESC"],["matInput","","required","","formControlName","ETSTAT",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Equipment Types"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Trailer Type"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Description"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Status"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.updateEquipmentType()}),t._uU(25,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[u.m,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,C.Hw,Z.lW,g.KE,g.hX,v.Nt,m.a8,m.dk,m.dn,m.n5]}),o})();var S=r(11790);let D=(()=>{class o{constructor(e,a,s,p,h,P){this.dialogRef=e,this.anyvariable=a,this.fb=s,this.EquipmentTypeSvc=p,this.CustomAlertService=h,this.router=P,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.deleteEquipmentTypesSubscription&&this.deleteEquipmentTypesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({ETTRTP:this.anyvariable.ETTRTP,ETDESC:this.anyvariable.ETDESC,ETSTAT:this.anyvariable.ETSTAT}),this.form.disable()}deleteEquipmentType(){this.CustomAlertService.openCustomAlert("Delete this Commodity Printer:  "+this.anyvariable.ETTRTP+"?").afterClosed().subscribe(a=>{a&&(this.deleteEquipmentTypesSubscription&&this.deleteEquipmentTypesSubscription.unsubscribe(),this.deleteEquipmentTypesSubscription=this.EquipmentTypeSvc.deleteEquipmentType(this.user,this.anyvariable.ETTRTP).subscribe(s=>{if(console.log(s),JSON.parse(s.success))this.successMessage(" deleted successfully"),this.closeDialog(),this.router.navigate(["/main-nav/EquipmentTypes/read"]);else{const p=JSON.parse(s[0].data[1].value).returnedData.message;this.failureMessage(p)}}))})}successMessage(e){f().fire(e,"","success"),this.router.navigate(["/main-nav/EquipmentTypes/read"])}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.so),t.Y36(T.WI),t.Y36(i.qu),t.Y36(E.G),t.Y36(S.y),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-delete-equipment-types"]],standalone:!0,features:[t.jDz],decls:28,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","required","","formControlName","ETTRTP"],["readonly","","matInput","","formControlName","ETDESC"],["readonly","","matInput","","required","","formControlName","ETSTAT"],["id","custom-alert"],[1,"custom-alert-content"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Delete Equipment Types"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Trailer Type"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Description"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Status"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"div",12)(25,"div",13)(26,"button",14),t.NdJ("click",function(){return a.deleteEquipmentType()}),t._uU(27,"Delete"),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[u.m,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,C.Hw,Z.lW,g.KE,g.hX,v.Nt,m.a8,m.dk,m.dn,m.n5]}),o})();var W=r(36895),k=r(10266);function x(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchEquipmentTypes())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function U(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchEquipmentTypes())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function N(o,l){if(1&o&&(t.TgZ(0,"form",22)(1,"div",23)(2,"div",24)(3,"mat-form-field",25)(4,"mat-label"),t._uU(5,"Trailer Type"),t.qZA(),t._UZ(6,"input",26),t.qZA()()(),t.TgZ(7,"button",27),t._uU(8," Search "),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function w(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Trailer Type"),t.qZA())}function J(o,l){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.ETTRTP)}}function Y(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Description"),t.qZA())}function F(o,l){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.ETDESC)}}function R(o,l){1&o&&(t.TgZ(0,"th",28),t._uU(1,"Status"),t.qZA())}function I(o,l){if(1&o&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.ETSTAT)}}function Q(o,l){1&o&&t._UZ(0,"th",30)}function O(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"td",29)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",33)(6,"li")(7,"button",34),t.NdJ("click",function(){const p=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.EquipmentTypesChangeForm(p))}),t.TgZ(8,"mat-icon",35),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",34),t.NdJ("click",function(){const p=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.EquipmentTypesDeleteForm(p))}),t.TgZ(14,"mat-icon",36),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function G(o,l){1&o&&t._UZ(0,"tr",37)}function H(o,l){1&o&&t._UZ(0,"tr",38)}const M=function(){return[8,16,24]};let B=(()=>{class o{constructor(e,a,s,p){this.fb=e,this.matDialog=a,this.EquipmentTypeSvc=s,this.router=p,this.displayedColumns=["TrailerType","Description","Status","Actions"],this.user=localStorage.getItem("userName"),this.duplicateSource=[],this.searchTextDisplay=!1}ngOnInit(){this.form=this.fb.group({SRCH:""}),this.getEquipmentType()}getEquipmentType(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.EquipmentTypeSvc.getEquipmentType().subscribe(e=>{console.log(this.getAll2Subscription),console.log(e);var a=e.data[1].value;console.log(a);var s=JSON.parse(a);console.log(s),console.log("DaTA"),this.duplicateSource=s.returnedData,console.log(this.duplicateSource),this.dataSource=new n.by(this.duplicateSource),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchEquipmentTypes(){this.searchTextDisplay=1!=this.searchTextDisplay}addEquipmentTypes(){this.matDialog.open(b.AddEquipmentTypesComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}EquipmentTypesChangeForm(e){this.matDialog.open(A,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}EquipmentTypesDeleteForm(e){this.matDialog.open(D,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(T.uw),t.Y36(E.G),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-work-with-equipment-types"]],viewQuery:function(e,a){if(1&e&&t.Gf(d.NW,5),2&e){let s;t.iGM(s=t.CRH())&&(a.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:29,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search EquipmentTypes",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New EquipmentTypes",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","TrailerType"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Description"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search EquipmentTypes",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Equipment Types"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,x,3,0,"button",3),t.YNc(6,U,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.addEquipmentTypes()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,N,9,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,w,2,0,"th",10),t.YNc(15,J,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,Y,2,0,"th",10),t.YNc(18,F,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,R,2,0,"th",10),t.YNc(21,I,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,Q,1,0,"th",15),t.YNc(24,O,18,0,"td",11),t.BQk(),t.YNc(25,G,1,0,"tr",16),t.YNc(26,H,1,0,"tr",17),t.qZA(),t._UZ(27,"mat-paginator",18,19),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,M)))},dependencies:[u.m,W.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.NW,C.Hw,Z.lW,g.KE,g.hX,v.Nt,m.a8,m.dk,m.dn,m.n5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,k.gM]}),o})()}}]);