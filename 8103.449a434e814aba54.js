"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[8103,1790,8754,5645,2313],{11790:(_,C,i)=>{i.d(C,{y:()=>l});var g=i(65412),r=i(94650),h=i(97392),A=i(4859);let t=(()=>{class u{constructor(c,v){this.dialogRef=c,this.data=v}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return u.\u0275fac=function(c){return new(c||u)(r.Y36(g.so),r.Y36(g.WI))},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(c,v){1&c&&(r.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),r.NdJ("click",function(){return v.closeDialog()}),r._uU(3,"close "),r.qZA(),r.TgZ(4,"span",3),r._uU(5),r.qZA()(),r.TgZ(6,"button",4),r._uU(7,"Cancel"),r.qZA(),r.TgZ(8,"button",5),r._uU(9,"Delete"),r.qZA()()),2&c&&(r.xp6(5),r.Oqu(v.data.message),r.xp6(1),r.Q6J("mat-dialog-close",!1),r.xp6(2),r.Q6J("mat-dialog-close",!0))},dependencies:[h.Hw,A.lW,g.ZT]}),u})(),l=(()=>{class u{constructor(c){this.dialog=c}openCustomAlert(c){return this.dialog.open(t,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:c}})}}return u.\u0275fac=function(c){return new(c||u)(r.LFG(g.uw))},u.\u0275prov=r.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},28103:(_,C,i)=>{i.r(C),i.d(C,{DetailsGroupComponent:()=>I});var g=i(65412),r=i(35226),h=i.n(r),A=i(70879),t=i(94650),l=i(24006),u=i(19132),b=i(59733),c=i(97392),v=i(4859),Z=i(59549),U=i(44144),p=i(73546);let y=(()=>{class o{constructor(e,a,n,m,d){this.anyvariable=e,this.fb=a,this.router=n,this.LPGroupSvc=m,this.dialogRef=d,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({LRNAME:{value:this.anyvariable.LRNAME,disabled:!0},LUOPER:"",LUPRIO:""})}ngOnDestroy(){this.getLaborPlanGroupUserSubscription&&this.getLaborPlanGroupUserSubscription.unsubscribe()}add(){var e=this.form.value;this.getLaborPlanGroupUserSubscription&&this.getLaborPlanGroupUserSubscription.unsubscribe(),this.getLaborPlanGroupUserSubscription=this.LPGroupSvc.createLPGDetails(this.anyvariable.LRNAME,e.LUOPER,e.LUPRIO,this.user).subscribe(a=>{console.log(a);var n=a.acknowledgement;JSON.parse(a.success)?(this.successMessage(n),this.closeDialog(),this.router.navigateByUrl("/main-nav/laborPlanGroupUsers/read",{state:this.anyvariable})):this.failureMessage(n)})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.WI),t.Y36(l.qu),t.Y36(u.F0),t.Y36(b.m),t.Y36(g.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-details-group"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LRNAME",2,"text-transform","uppercase"],["matInput","","required","","formControlName","LUOPER",2,"text-transform","uppercase"],["matInput","","formControlName","LUPRIO"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Labor Plan Group Users"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Group Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Operator"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Priority"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.add()}),t._uU(25," Add "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[A.m,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,c.Hw,v.lW,Z.KE,Z.hX,U.Nt,p.a8,p.dk,p.dn,p.n5]}),o})(),D=(()=>{class o{constructor(e,a,n,m,d){this.anyvariable=e,this.fb=a,this.router=n,this.LPGroupSvc=m,this.dialogRef=d,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({LRNAME:{value:this.anyvariable.LRNAME,disabled:!0},LUOPER:{value:this.anyvariable.LUOPER,disabled:!0},LUPRIO:this.anyvariable.LUPRIO})}ngOnDestroy(){this.getLaborPlanGroupUserSubscription&&this.getLaborPlanGroupUserSubscription.unsubscribe()}update(){var e=this.form.value;this.getLaborPlanGroupUserSubscription&&this.getLaborPlanGroupUserSubscription.unsubscribe(),this.getLaborPlanGroupUserSubscription=this.LPGroupSvc.updateLPGDetails(this.anyvariable.LRNAME,this.anyvariable.LUOPER,e.LUPRIO,this.user).subscribe(a=>{var n=a.acknowledgement;console.log(a),JSON.parse(a.success)?(this.successMessage(n),this.closeDialog(),this.router.navigateByUrl("/main-nav/laborPlanGroupUsers/read",{state:this.anyvariable})):this.failureMessage(n)})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.WI),t.Y36(l.qu),t.Y36(u.F0),t.Y36(b.m),t.Y36(g.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-details-group"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LRNAME",2,"text-transform","uppercase"],["matInput","","readonly","","formControlName","LUOPER",2,"text-transform","uppercase"],["matInput","","formControlName","LUPRIO"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Labor Plan Group Users"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Group Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Operator"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Priority"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return a.update()}),t._uU(25," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[A.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,c.Hw,v.lW,Z.KE,Z.hX,U.Nt,p.a8,p.dk,p.dn,p.n5]}),o})();var G=i(98739),f=i(7155),T=i(11790),N=i(10266);function L(o,s){1&o&&(t.TgZ(0,"th",24),t._uU(1," Group Name "),t.qZA())}function S(o,s){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.LRNAME," ")}}function R(o,s){1&o&&(t.TgZ(0,"th",24),t._uU(1," Operator "),t.qZA())}function P(o,s){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.LUOPER)}}function w(o,s){1&o&&(t.TgZ(0,"th",24),t._uU(1," Group User Priority "),t.qZA())}function M(o,s){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.LUPRIO," ")}}function O(o,s){1&o&&(t.TgZ(0,"th",24),t._uU(1," Status "),t.qZA())}function x(o,s){if(1&o&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.LUSTAT," ")}}function E(o,s){1&o&&t._UZ(0,"th",26)}function Y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",25)(1,"div",27)(2,"button",28)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",29)(6,"li")(7,"button",30),t.NdJ("click",function(){const m=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateGroup(m))}),t.TgZ(8,"mat-icon",31),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",32),t.NdJ("click",function(){const m=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteGroupUsers(m))}),t.TgZ(14,"mat-icon",33),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function J(o,s){1&o&&t._UZ(0,"tr",34)}function k(o,s){1&o&&t._UZ(0,"tr",35)}const q=function(){return[8,16,24]};let I=(()=>{class o{constructor(e,a,n,m,d){this.fb=e,this.matDialog=a,this.LPGroupSvc=n,this.router=m,this.CustomAlertService=d,this.user=localStorage.getItem("userName"),this.displayedColumns=["GroupName","Operator","GroupUserPriority","Status","Actions"],this.element=[]}ngOnInit(){this.form=this.fb.group({LRNAME:history.state.LRNAME}),this.getLPDetails()}getLPDetails(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LPGroupSvc.getLPDetails().subscribe(e=>{console.log(e);var a=e.data[1].value;console.log(a);var n=JSON.parse(a);this.dataSource=new f.by(n.returnedData),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}addGroup(){this.matDialog.open(y,{width:"1000px",maxHeight:"80vh",data:history.state,autoFocus:!1})}updateGroup(e){e.LRNAME=history.state.LRNAME,this.matDialog.open(D,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}deleteGroupUsers(e){this.CustomAlertService.openCustomAlert("Are you sure you want to delete : "+e.LRNAME+"? ").afterClosed().subscribe(n=>{n&&(this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LPGroupSvc.deleteLPGDetails(this.user,e.LRNAME).subscribe(m=>{const d=m.acknowledgement;console.log(m),JSON.parse(m.success)?(this.successMessage(d),this.getLPDetails()):this.failureMessage(d)}))})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}onBack(){this.router.navigate(["/main-nav/laborPlan/read"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(g.uw),t.Y36(b.m),t.Y36(u.F0),t.Y36(T.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-group"]],viewQuery:function(e,a){if(1&e&&t.Gf(G.NW,5),2&e){let n;t.iGM(n=t.CRH())&&(a.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:39,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","matTooltip","Add New Labor Plan Group Users",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","LRNAME",2,"text-transform","uppercase"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","GroupName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Operator"],["matColumnDef","GroupUserPriority"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return a.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Labor Plan Group Users "),t.qZA(),t.TgZ(7,"div",3)(8,"button",4),t.NdJ("click",function(){return a.addGroup()}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA()()()(),t.TgZ(11,"mat-card-content",5)(12,"form",6)(13,"div",7)(14,"div",8)(15,"mat-form-field",9)(16,"mat-label"),t._uU(17,"Group Name"),t.qZA(),t._UZ(18,"input",10),t.qZA()()()()(),t.TgZ(19,"table",11),t.ynx(20,12),t.YNc(21,L,2,0,"th",13),t.YNc(22,S,2,1,"td",14),t.BQk(),t.ynx(23,15),t.YNc(24,R,2,0,"th",13),t.YNc(25,P,2,1,"td",14),t.BQk(),t.ynx(26,16),t.YNc(27,w,2,0,"th",13),t.YNc(28,M,2,1,"td",14),t.BQk(),t.ynx(29,17),t.YNc(30,O,2,0,"th",13),t.YNc(31,x,2,1,"td",14),t.BQk(),t.ynx(32,18),t.YNc(33,E,1,0,"th",19),t.YNc(34,Y,18,0,"td",14),t.BQk(),t.YNc(35,J,1,0,"tr",20),t.YNc(36,k,1,0,"tr",21),t.qZA(),t._UZ(37,"mat-paginator",22,23),t.qZA()),2&e&&(t.xp6(12),t.Q6J("formGroup",a.form),t.xp6(7),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,q)))},dependencies:[A.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,G.NW,c.Hw,v.lW,Z.KE,Z.hX,U.Nt,p.a8,p.dk,p.dn,p.n5,f.BZ,f.fO,f.as,f.w1,f.Dz,f.nj,f.ge,f.ev,f.XQ,f.Gk,N.gM]}),o})()}}]);