"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6727,1790,8754,5645,2313],{11790:(v,L,l)=>{l.d(L,{y:()=>r});var f=l(65412),s=l(94650),b=l(97392),_=l(4859);let t=(()=>{class p{constructor(u,Z){this.dialogRef=u,this.data=Z}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return p.\u0275fac=function(u){return new(u||p)(s.Y36(f.so),s.Y36(f.WI))},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(u,Z){1&u&&(s.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),s.NdJ("click",function(){return Z.closeDialog()}),s._uU(3,"close "),s.qZA(),s.TgZ(4,"span",3),s._uU(5),s.qZA()(),s.TgZ(6,"button",4),s._uU(7,"Cancel"),s.qZA(),s.TgZ(8,"button",5),s._uU(9,"Delete"),s.qZA()()),2&u&&(s.xp6(5),s.Oqu(Z.data.message),s.xp6(1),s.Q6J("mat-dialog-close",!1),s.xp6(2),s.Q6J("mat-dialog-close",!0))},dependencies:[b.Hw,_.lW,f.ZT]}),p})(),r=(()=>{class p{constructor(u){this.dialog=u}openCustomAlert(u){return this.dialog.open(t,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:u}})}}return p.\u0275fac=function(u){return new(u||p)(s.LFG(f.uw))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},16727:(v,L,l)=>{l.r(L),l.d(L,{LaborPlanGroupComponent:()=>H});var f=l(65412),s=l(35226),b=l.n(s),_=l(70879),t=l(94650),r=l(24006),p=l(11790),h=l(59733),u=l(19132),Z=l(97392),C=l(4859),G=l(59549),A=l(44144),c=l(73546);let y=(()=>{class e{constructor(o,a,n,m,d,W){this.anyvariable=o,this.fb=a,this.dialogRef=n,this.CustomAlertService=m,this.LPGroupSvc=d,this.router=W,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({LRNAME:this.anyvariable.LRNAME,LRBLDG:this.anyvariable.LRBLDG,LRMAXC:this.anyvariable.LRMAXC}),this.form.disable()}ngOnDestroy(){this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe()}delete(){this.CustomAlertService.openCustomAlert("Are you sure you want to delete Labor Plan Group "+this.anyvariable.LRBLDG+"? ").afterClosed().subscribe(a=>{a&&(this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe(),this.getLaborPlanGroupSubscription=this.LPGroupSvc.deleteLPGroup(this.user,this.anyvariable.LRBLDG).subscribe(n=>{const m=n.acknowledgement;console.log(n),JSON.parse(n.success)?this.successMessage(m):this.failureMessage(m)}))})}successMessage(o){b().fire(o,"","success")}failureMessage(o){b().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.WI),t.Y36(r.qu),t.Y36(f.so),t.Y36(p.y),t.Y36(h.m),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete-group"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LRNAME"],["matInput","","readonly","","formControlName","LRBLDG",2,"text-transform","uppercase"],["matInput","","readonly","","formControlName","LRMAXC"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Delete Group"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Group Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Building"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Maximum Concurrent"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.delete()}),t._uU(25,"Delete"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[_.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,C.lW,G.KE,G.hX,A.Nt,c.a8,c.dk,c.dn,c.n5]}),e})(),N=(()=>{class e{constructor(o,a,n,m,d){this.anyvariable=o,this.fb=a,this.router=n,this.dialogRef=m,this.LPGroupSvc=d,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({LRNAME:{value:this.anyvariable.LRNAME,disabled:!0},LRBLDG:this.anyvariable.LRBLDG,LRMAXC:this.anyvariable.LRMAXC})}ngOnDestroy(){this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe()}update(){var o=this.form.value;this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe(),this.getLaborPlanGroupSubscription=this.LPGroupSvc.updateLPGroup(o.LRNAME,o.LRBLDG,o.LRMAXC,this.user).subscribe(a=>{var n=a.acknowledgement;console.log(a),JSON.parse(a.success)?(this.successMessage(n),this.closeDialog()):this.failureMessage(n)})}successMessage(o){b().fire(o,"","success")}failureMessage(o){b().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.WI),t.Y36(r.qu),t.Y36(u.F0),t.Y36(f.so),t.Y36(h.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-group"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LRNAME"],["matInput","","formControlName","LRBLDG",2,"text-transform","uppercase"],["matInput","","formControlName","LRMAXC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Labor Plan Group"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Group Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Building"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Maximum Concurrent"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.update()}),t._uU(25," Update "),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[_.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,C.lW,G.KE,G.hX,A.Nt,c.a8,c.dk,c.dn,c.n5]}),e})(),D=(()=>{class e{constructor(o,a,n,m,d){this.anyvariable=o,this.LPGroupSvc=a,this.fb=n,this.router=m,this.dialogRef=d,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({LRNAME:"",LRBLDG:"",LRMAXC:""})}ngOnDestroy(){this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe()}add(){var o=this.form.value;this.getLaborPlanGroupSubscription&&this.getLaborPlanGroupSubscription.unsubscribe(),this.getLaborPlanGroupSubscription=this.LPGroupSvc.createLPGroup(o.LRNAME,o.LRBLDG,o.LRMAXC,this.user).subscribe(a=>{console.log(a);var n=a.acknowledgement;JSON.parse(a.success)?(this.successMessage(n),this.closeDialog()):this.failureMessage(n)})}successMessage(o){b().fire(o,"","success")}failureMessage(o){b().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.WI),t.Y36(h.m),t.Y36(r.qu),t.Y36(u.F0),t.Y36(f.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-group"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","required","","formControlName","LRNAME"],["matInput","","required","","formControlName","LRBLDG"],["matInput","","formControlName","LRMAXC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Labor Plan Group"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Group Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Building"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Maximum Concurrent"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.add()}),t._uU(25," Add "),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[_.m,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,Z.Hw,C.lW,G.KE,G.hX,A.Nt,c.a8,c.dk,c.dn,c.n5]}),e})();var T=l(98739),g=l(7155),U=l(36895),x=l(10266);function P(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.searchLaborPlanGroup())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function M(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.searchLaborPlanGroup())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function S(e,i){if(1&e&&(t.TgZ(0,"form",23)(1,"div",24)(2,"div",25)(3,"mat-form-field",26)(4,"mat-label"),t._uU(5,"Group Name"),t.qZA(),t._UZ(6,"input",27),t.qZA(),t.TgZ(7,"mat-form-field",26)(8,"mat-label"),t._uU(9,"Building"),t.qZA(),t._UZ(10,"input",28),t.qZA()()(),t.TgZ(11,"button",29),t._uU(12," Search "),t.qZA()()),2&e){const o=t.oxw();t.Q6J("formGroup",o.form)}}function R(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Group Name"),t.qZA())}function w(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LRNAME)}}function q(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Building"),t.qZA())}function Y(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LRBLDG)}}function J(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Maximum Concurrent"),t.qZA())}function B(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LRMAXC)}}function k(e,i){1&e&&(t.TgZ(0,"th",30),t._uU(1,"Status"),t.qZA())}function I(e,i){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LRSTAT)}}function F(e,i){1&e&&t._UZ(0,"th",32)}function E(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",31)(1,"div",33)(2,"button",34)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",35)(6,"li")(7,"button",36),t.NdJ("click",function(){const m=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.updateGroup(m))}),t.TgZ(8,"mat-icon",37),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",36),t.NdJ("click",function(){const m=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.detailsGroup(m))}),t.TgZ(14,"mat-icon",37),t._uU(15,"details"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"details"),t.qZA()()(),t.TgZ(18,"li")(19,"button",36),t.NdJ("click",function(){const m=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.deleteGroup(m))}),t.TgZ(20,"mat-icon",38),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()()()()()}}function O(e,i){1&e&&t._UZ(0,"tr",39)}function Q(e,i){1&e&&t._UZ(0,"tr",40)}const X=function(){return[8,16,24]};let H=(()=>{class e{constructor(o,a,n,m,d){this.router=o,this.LPGroupSvc=a,this.fb=n,this.matDialog=m,this.activeRouter=d,this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.displayedColumns=["GroupName","Building","MaximumConcurrent","Status","Actions"]}searchLaborPlanGroup(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.form=this.fb.group({NAME:"",BLDG:""}),this.getLPGroup()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getLPGroup(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LPGroupSvc.getLPGroup().subscribe(o=>{console.log(o);var a=o.data[1].value;console.log(a);var n=JSON.parse(a);this.dataSource=new g.by(n.returnedData),this.dataSource.paginator=this.paginator})}addGroup(){this.matDialog.open(D,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}updateGroup(o){this.matDialog.open(N,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}deleteGroup(o){this.matDialog.open(y,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}detailsGroup(o){this.router.navigateByUrl("/main-nav/laborPlanGroupUsers/read",{state:o})}successMessage(o){b().fire(o,"","success")}failureMessage(o){b().fire(o,"","error")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0),t.Y36(h.m),t.Y36(r.qu),t.Y36(f.uw),t.Y36(u.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-labor-plan-group"]],viewQuery:function(o,a){if(1&o&&t.Gf(T.NW,5),2&o){let n;t.iGM(n=t.CRH())&&(a.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:32,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Labor Plan Group",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Labor Plan Group",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","GroupName"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Building"],["matColumnDef","MaximumConcurrent"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Labor Plan Group",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","NAME",2,"text-transform","uppercase"],["matInput","","formControlName","BLDG"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Labor Plan Groups"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,P,3,0,"button",3),t.YNc(6,M,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.addGroup()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,S,13,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,R,2,0,"th",10),t.YNc(15,w,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,q,2,0,"th",10),t.YNc(18,Y,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,J,2,0,"th",10),t.YNc(21,B,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,k,2,0,"th",10),t.YNc(24,I,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,F,1,0,"th",16),t.YNc(27,E,24,0,"td",11),t.BQk(),t.YNc(28,O,1,0,"tr",17),t.YNc(29,Q,1,0,"tr",18),t.qZA(),t._UZ(30,"mat-paginator",19,20),t.qZA()),2&o&&(t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,X)))},dependencies:[_.m,U.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,T.NW,Z.Hw,C.lW,G.KE,G.hX,A.Nt,c.a8,c.dk,c.dn,c.n5,g.BZ,g.fO,g.as,g.w1,g.Dz,g.nj,g.ge,g.ev,g.XQ,g.Gk,x.gM]}),e})()}}]);