"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5513],{45513:(et,Z,r)=>{r.r(Z),r.d(Z,{WwCorporateAssetsComponent:()=>tt});var b=r(98739),c=r(7155),N=r(3530),d=r(65412),w=r(35226),A=r.n(w),C=r(70879),t=r(94650),i=r(24006),f=r(64310),h=r(97392),g=r(4859),u=r(59549),_=r(44144),l=r(73546);let U=(()=>{class o{constructor(e,s,n,m){this.anyvariable=e,this.fb=s,this.CorpAssestsSvc=n,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getCorporateAssetsSubscription&&this.getCorporateAssetsSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({ASASNO:this.anyvariable.ASASNO,ASCLAS:this.anyvariable.ASCLAS,ASDESC:this.anyvariable.DESC,ASMODL:this.anyvariable.ASMODL,ASSERL:this.anyvariable.ASSERL,ASLOCN:this.anyvariable.ASLOCN,ASAQDT:this.anyvariable.ASAQDT,ASPURC:"",ASEXPC:"",ASEXUN:"",ASVALU:""})}updateCorporateAssets(){var e=this.form.value;this.getCorporateAssetsSubscription&&this.getCorporateAssetsSubscription.unsubscribe(),this.getCorporateAssetsSubscription=this.CorpAssestsSvc.updateCorporateAssets(e.ASASNO,e.ASCLAS,e.ASDESC,e.ASMODL,e.ASSERL,e.ASLOCN,e.ASAQDT,e.ASPURC,e.ASEXPC,e.ASEXUN,e.ASVALU,this.user).subscribe(s=>{var n=s.acknowledgement;console.log(s),JSON.parse(s.success)?(this.successMessage(n),this.closeDialog()):this.failureMessage(n)})}successMessage(e){A().fire(e,"","success")}failureMessage(e){A().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.WI),t.Y36(i.qu),t.Y36(f.R),t.Y36(d.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-corporate-assets-change"]],standalone:!0,features:[t.jDz],decls:58,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ASASNO",2,"text-transform","uppercase"],["matInput","","formControlName","ASCLAS"],["matInput","","formControlName","ASDESC"],["matInput","","formControlName","ASMODL"],["matInput","","formControlName","ASSERL"],["matInput","","formControlName","ASLOCN"],["matInput","","formControlName","ASAQDT"],["matInput","","formControlName","ASPURC"],["matInput","","formControlName","ASEXPC"],["matInput","","formControlName","ASEXUN",2,"text-transform","uppercase"],["matInput","","formControlName","ASVALU"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Corporate Assets"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return s.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Asset Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Asset Class"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Model Number"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30," Serial Number "),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Location "),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Acquistion Date "),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Purchase Price "),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Life Expectancy"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Expectancy Unit"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Current Value"),t.qZA(),t._UZ(55,"input",19),t.qZA()()(),t.TgZ(56,"button",20),t.NdJ("click",function(){return s.updateCorporateAssets()}),t._uU(57,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",s.form))},dependencies:[C.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,h.Hw,g.lW,u.KE,u.hX,_.Nt,l.a8,l.dk,l.dn,l.n5]}),o})(),v=(()=>{class o{constructor(e,s,n,m){this.anyvariable=e,this.fb=s,this.CorpAssestsSvc=n,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getCorporateAssetsSubscription&&this.getCorporateAssetsSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({Number:this.anyvariable.ASASNO,Class:this.anyvariable.ASCLAS,Description:this.anyvariable.DESC,Notes:""})}notesCorporateAssets(){var e=this.form.value;this.getCorporateAssetsSubscription&&this.getCorporateAssetsSubscription.unsubscribe(),this.getCorporateAssetsSubscription=this.CorpAssestsSvc.notesCorporateAssets(e.Number,e.Class,e.Description,e.Notes,this.user).subscribe(s=>{var n=s.acknowledgement;console.log(s),JSON.parse(s.success)?(this.successMessage(n),this.closeDialog()):this.failureMessage(n)})}successMessage(e){A().fire(e,"","success")}failureMessage(e){A().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.WI),t.Y36(i.qu),t.Y36(f.R),t.Y36(d.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-corporate-assets-notes"]],standalone:!0,features:[t.jDz],decls:31,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Number","readonly",""],["matInput","","formControlName","Class","readonly",""],["matInput","","formControlName","Description","readonly",""],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","Notes"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Corporate Assets"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return s.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Class"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",12)(25,"mat-label"),t._uU(26,"Notes"),t.qZA(),t.TgZ(27,"textarea",13),t._uU(28," Notes"),t.qZA()()()(),t.TgZ(29,"button",14),t.NdJ("click",function(){return s.notesCorporateAssets()}),t._uU(30,"Notes"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",s.form))},dependencies:[C.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,h.Hw,g.lW,u.KE,u.hX,_.Nt,l.a8,l.dk,l.dn,l.n5]}),o})();var y=r(19132),S=r(36895),T=r(28255),x=r(10266),q=r(90455);function D(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchCorporateAssets())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function L(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchCorporateAssets())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function W(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(n){return n.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",31),t.NdJ("ngModelChange",function(n){const p=t.CHM(e).$implicit;return t.KtG(p.isActive=n)})("change",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.toggleColumn(m))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function O(o,a){if(1&o&&(t.TgZ(0,"form",32)(1,"div",33)(2,"div",34)(3,"mat-form-field",35)(4,"mat-label"),t._uU(5,"Number"),t.qZA(),t._UZ(6,"input",36),t.qZA(),t.TgZ(7,"mat-form-field",35)(8,"mat-label"),t._uU(9,"Class"),t.qZA(),t._UZ(10,"input",37),t.qZA(),t.TgZ(11,"mat-form-field",35)(12,"mat-label"),t._uU(13,"Location"),t.qZA(),t._UZ(14,"input",38),t.qZA()()(),t.TgZ(15,"button",39),t._uU(16," Search "),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function M(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Asset Number "),t.qZA())}function Y(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASASNO)}}function J(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Asset Class"),t.qZA())}function k(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASCLAS)}}function I(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1,"Description "),t.qZA())}function H(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.DESC)}}function Q(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Model "),t.qZA())}function E(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASMODL)}}function F(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Location "),t.qZA())}function R(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASLOCN)}}function B(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Serial "),t.qZA())}function G(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASSERL)}}function X(o,a){1&o&&(t.TgZ(0,"th",40),t._uU(1," Acquistion/Tracked "),t.qZA())}function $(o,a){if(1&o&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.ASAQDT)}}function P(o,a){1&o&&t._UZ(0,"th",42)}function K(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",41)(1,"div",43)(2,"button",44)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",45)(6,"li")(7,"button",46),t.NdJ("click",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.UpdateCorporateassets(m))}),t.TgZ(8,"mat-icon",47),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",46),t.NdJ("click",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.NotesCorporateassets(m))}),t.TgZ(14,"mat-icon",47),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Notes"),t.qZA()()()()()()}}function z(o,a){1&o&&t._UZ(0,"tr",48)}function j(o,a){1&o&&t._UZ(0,"tr",49)}const V=function(){return[8,16,24]};let tt=(()=>{class o{constructor(e,s,n,m){this.fb=e,this.matDialog=s,this.CorpAssestsSvc=n,this.router=m,this.displayedColumns=["AssetNumber","AssetClass","Description","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({ASNO:"",CLAS:"",LOCN:""}),this.getCorporateAssets()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getCorporateAssets(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.CorpAssestsSvc.getCorporateAssets().subscribe(e=>{console.log(e);var s=e.data[1].value;console.log(s);var n=JSON.parse(s);this.dataSource=new c.by(n.returnedData),this.dataSource.paginator=this.paginator})}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let s=this.displayedColumns.indexOf(e.name);s>-1&&this.displayedColumns.splice(s,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((e,s)=>{"Actions"!=e&&"Model"!=e&&this.columnShowHideList.push({position:s,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Model",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Location",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Serial",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"AcquistionTracked",isActive:!1}),console.log(this.columnShowHideList)}addCorporateAssets(){this.matDialog.open(N.CorporateAssetsAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}UpdateCorporateassets(e){this.matDialog.open(U,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}NotesCorporateassets(e){this.matDialog.open(v,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}searchCorporateAssets(){this.searchTextDisplay=1!=this.searchTextDisplay}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(d.uw),t.Y36(f.R),t.Y36(y.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-corporate-assets"]],viewQuery:function(e,s){if(1&e&&t.Gf(b.NW,5),2&e){let n;t.iGM(n=t.CRH())&&(s.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:48,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton","matTooltip","search CorporateAssets",3,"click",4,"ngIf"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New CorporateAssets",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","AssetNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","AssetClass"],["matColumnDef","Description"],["matColumnDef","Model"],["matColumnDef","Location"],["matColumnDef","Serial"],["matColumnDef","AcquistionTracked"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","","matTooltip","search CorporateAssets",1,"addButton",3,"click"],["mat-button","",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ASNO",2,"text-transform","uppercase"],["matInput","","formControlName","CLAS"],["matInput","","formControlName","LOCN"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(e,s){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Corporate Assets"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,D,3,0,"button",3),t.YNc(6,L,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.addCorporateAssets()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",null,6),t.YNc(12,W,4,2,"span",7),t.qZA(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,O,17,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,M,2,0,"th",14),t.YNc(22,Y,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,J,2,0,"th",14),t.YNc(25,k,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,I,2,0,"th",14),t.YNc(28,H,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,Q,2,0,"th",14),t.YNc(31,E,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,F,2,0,"th",14),t.YNc(34,R,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,B,2,0,"th",14),t.YNc(37,G,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,X,2,0,"th",14),t.YNc(40,$,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,P,1,0,"th",23),t.YNc(43,K,18,0,"td",15),t.BQk(),t.YNc(44,z,1,0,"tr",24),t.YNc(45,j,1,0,"tr",25),t.qZA(),t._UZ(46,"mat-paginator",26,27),t.qZA()),2&e){const n=t.MAs(11);t.xp6(5),t.Q6J("ngIf",!s.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",s.searchTextDisplay),t.xp6(6),t.Q6J("ngForOf",s.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngIf",s.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",s.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,V))}},dependencies:[C.m,S.sg,S.O5,i._Y,i.Fj,i.JJ,i.JL,i.On,i.sg,i.u,b.NW,h.Hw,T.VK,T.p6,g.lW,u.KE,u.hX,_.Nt,l.a8,l.dk,l.dn,l.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,x.gM,q.Rr]}),o})()}}]);