"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3960],{53960:($,s,r)=>{r.r(s),r.d(s,{WorkWithProgramReferenceComponent:()=>G});var u=r(98739),c=r(7155),h=r(70879),T=r(772),e=r(94650),m=r(24006),C=r(65412),W=r(19132),p=r(36895),P=r(97392),d=r(28255),R=r(4859),f=r(59549),b=r(44144),l=r(73546),Z=r(10266),O=r(90455);function D(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.searchProgramReferences())}),e.TgZ(1,"mat-icon"),e._uU(2,"clear"),e.qZA()()}}function A(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.searchProgramReferences())}),e.TgZ(1,"mat-icon"),e._uU(2,"search"),e.qZA()()}}function y(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"span",31),e.NdJ("click",function(i){return i.stopPropagation()}),e.TgZ(1,"mat-slide-toggle",32),e.NdJ("ngModelChange",function(i){const _=e.CHM(n).$implicit;return e.KtG(_.isActive=i)})("change",function(){const g=e.CHM(n).$implicit,_=e.oxw();return e.KtG(_.toggleColumn(g))}),e._uU(2),e.qZA(),e._UZ(3,"br"),e.qZA()}if(2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngModel",n.isActive),e.xp6(1),e.hij(" ",n.name," ")}}function k(t,o){if(1&t&&(e.TgZ(0,"form",33)(1,"div",34)(2,"div",35)(3,"mat-form-field",36)(4,"mat-label"),e._uU(5,"Object Name"),e.qZA(),e._UZ(6,"input",37),e.qZA()()(),e.TgZ(7,"button",38),e._uU(8," Search "),e.qZA()()),2&t){const n=e.oxw();e.Q6J("formGroup",n.form)}}function U(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1,"Object Libary/Name"),e.qZA())}function E(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.ObjectLibaryName)}}function x(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1," Type"),e.qZA())}function M(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.Type)}}function L(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1," Usage "),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.Usage)}}function B(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1," Description"),e.qZA())}function v(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.Description)}}function w(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1,"Reference Library/Object"),e.qZA())}function I(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.ReferenceLibraryObject)}}function Y(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1,"Last Reference Update by"),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.LastReferenceUpdateby)}}function K(t,o){1&t&&(e.TgZ(0,"th",39),e._uU(1,"On"),e.qZA())}function H(t,o){if(1&t&&(e.TgZ(0,"td",40),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.On)}}function Q(t,o){1&t&&e._UZ(0,"th",41)}function q(t,o){1&t&&(e.TgZ(0,"td",40)(1,"div",42)(2,"button",43)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e._UZ(5,"ul",44),e.qZA()())}function J(t,o){1&t&&e._UZ(0,"tr",45)}function j(t,o){1&t&&e._UZ(0,"tr",46)}const F=function(){return[6,12,18]};let G=(()=>{class t{constructor(n,a,i){this.fb=n,this.matDialog=a,this.router=i,this.displayedColumns=["ObjectLibaryName","Type","Usage","Description","Actions"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.editedRows=[],this.duplicateSource=[{ObjectLibaryName:"33INVRPT/10 ",Type:"M",Usage:"Menu Call",Description:"ABC Throughput Extra",ReferenceLibraryObject:"",LastReferenceUpdateby:"",On:""}],this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({ObjectName:""}),this.dataSource=new c.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchProgramReferences(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(n){if(n.isActive)this.displayedColumns.splice(n.position>this.displayedColumns.length-1?this.displayedColumns.length-1:n.position,0,n.name);else{let a=this.displayedColumns.indexOf(n.name);a>-1&&this.displayedColumns.splice(a,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((n,a)=>{"Actions"!=n&&"ReferenceLibraryObject"!=n&&this.columnShowHideList.push({position:a,name:n,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"ReferenceLibraryObject",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LastReferenceUpdateby",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"On",isActive:!1}),console.log(this.columnShowHideList)}addProgramReferences(){this.matDialog.open(T.AddWorkWithProgramReferenceComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}onBack(){this.router.navigate(["/main-nav/applicationobjects/read"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.qu),e.Y36(C.uw),e.Y36(W.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-work-with-program-reference"]],viewQuery:function(n,a){if(1&n&&e.Gf(u.NW,5),2&n){let i;e.iGM(i=e.CRH())&&(a.paginator=i.first)}},standalone:!0,features:[e.jDz],decls:51,vars:10,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","search Program References",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Program References",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","ObjectLibaryName"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Type"],["matColumnDef","Usage"],["matColumnDef","Description"],["matColumnDef","ReferenceLibraryObject"],["matColumnDef","LastReferenceUpdateby"],["matColumnDef","On"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","search Program References",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ObjectName",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-header-row",""],["mat-row",""]],template:function(n,a){if(1&n&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return a.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6," Work With Program References"),e.qZA(),e.TgZ(7,"div",3),e.YNc(8,D,3,0,"button",4),e.YNc(9,A,3,0,"button",5),e.TgZ(10,"button",6),e.NdJ("click",function(){return a.addProgramReferences()}),e.TgZ(11,"mat-icon"),e._uU(12,"add"),e.qZA()(),e.TgZ(13,"mat-menu",null,7),e.YNc(15,y,4,2,"span",8),e.qZA(),e.TgZ(16,"button",9,10)(18,"mat-icon"),e._uU(19,"visibility_off"),e.qZA()()()(),e.TgZ(20,"mat-card-content",11),e.YNc(21,k,9,1,"form",12),e.qZA(),e.TgZ(22,"table",13),e.ynx(23,14),e.YNc(24,U,2,0,"th",15),e.YNc(25,E,2,1,"td",16),e.BQk(),e.ynx(26,17),e.YNc(27,x,2,0,"th",15),e.YNc(28,M,2,1,"td",16),e.BQk(),e.ynx(29,18),e.YNc(30,L,2,0,"th",15),e.YNc(31,N,2,1,"td",16),e.BQk(),e.ynx(32,19),e.YNc(33,B,2,0,"th",15),e.YNc(34,v,2,1,"td",16),e.BQk(),e.ynx(35,20),e.YNc(36,w,2,0,"th",15),e.YNc(37,I,2,1,"td",16),e.BQk(),e.ynx(38,21),e.YNc(39,Y,2,0,"th",15),e.YNc(40,S,2,1,"td",16),e.BQk(),e.ynx(41,22),e.YNc(42,K,2,0,"th",15),e.YNc(43,H,2,1,"td",16),e.BQk(),e.ynx(44,23),e.YNc(45,Q,1,0,"th",24),e.YNc(46,q,6,0,"td",16),e.BQk(),e.YNc(47,J,1,0,"tr",25),e.YNc(48,j,1,0,"tr",26),e.qZA(),e._UZ(49,"mat-paginator",27,28),e.qZA()),2&n){const i=e.MAs(14);e.xp6(8),e.Q6J("ngIf",a.searchTextDisplay),e.xp6(1),e.Q6J("ngIf",!a.searchTextDisplay),e.xp6(6),e.Q6J("ngForOf",a.columnShowHideList),e.xp6(1),e.Q6J("matMenuTriggerFor",i),e.xp6(5),e.Q6J("ngIf",a.searchTextDisplay),e.xp6(1),e.Q6J("dataSource",a.dataSource),e.xp6(25),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(9,F))}},dependencies:[h.m,p.sg,p.O5,m._Y,m.Fj,m.JJ,m.JL,m.On,m.sg,m.u,u.NW,P.Hw,d.VK,d.p6,R.lW,f.KE,f.hX,b.Nt,l.a8,l.dk,l.dn,l.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,Z.gM,O.Rr]}),t})()}}]);