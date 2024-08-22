"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9528,1790,8754,5645,2313],{11790:(y,g,s)=>{s.d(g,{y:()=>_});var p=s(65412),n=s(94650),k=s(97392),h=s(4859);let C=(()=>{class m{constructor(r,f){this.dialogRef=r,this.data=f}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return m.\u0275fac=function(r){return new(r||m)(n.Y36(p.so),n.Y36(p.WI))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(r,f){1&r&&(n.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),n.NdJ("click",function(){return f.closeDialog()}),n._uU(3,"close "),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"button",4),n._uU(7,"Cancel"),n.qZA(),n.TgZ(8,"button",5),n._uU(9,"Delete"),n.qZA()()),2&r&&(n.xp6(5),n.Oqu(f.data.message),n.xp6(1),n.Q6J("mat-dialog-close",!1),n.xp6(2),n.Q6J("mat-dialog-close",!0))},dependencies:[k.Hw,h.lW,p.ZT]}),m})(),_=(()=>{class m{constructor(r){this.dialog=r}openCustomAlert(r){return this.dialog.open(C,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:r}})}}return m.\u0275fac=function(r){return new(r||m)(n.LFG(p.uw))},m.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},69528:(y,g,s)=>{s.r(g),s.d(g,{WorkWithBookDetailsComponent:()=>Bt});var p=s(98739),n=s(7155),k=s(38458),h=s(65412),C=s(35226),_=s.n(C),m=s(70879),t=s(94650),r=s(24006),f=s(6813),A=s(11790),Z=s(19132),D=s(97392),B=s(4859),T=s(59549),W=s(44144),c=s(73546);let S=(()=>{class e{constructor(o,a,l,u,d,At){this.dialogRef=o,this.anyvariable=a,this.fb=l,this.BookDetails=u,this.CustomAlertService=d,this.router=At,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getBookDetailsSubscription&&this.getBookDetailsSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({BKSTOR:"",STNAME:"",ITDSC:"",LOTS:this.anyvariable.LOTS,LOCAT:this.anyvariable.LOCAT}),this.form.disable()}deleteBookDetails(){const o=this.CustomAlertService.openCustomAlert("Are you sure you want to delete this Book Details ? ");o.afterClosed().subscribe(a=>{a&&(this.deleteBookDetailsSubscription&&this.deleteBookDetailsSubscription.unsubscribe(),this.deleteBookDetailsSubscription=this.BookDetails.deleteBookDetails(this.user,this.anyvariable.BKSTOR).subscribe(l=>{if(this.result=l,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Book Details deleted successfully"),this.closeDialog(),this.router.navigate(["/main-nav/BookDetails/read"]);else{const u=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(u)}}))}),o.afterClosed().subscribe(a=>{this.successMessage("Book Details Deleted successfully")})}successMessage(o){_().fire(o,"","success")}failureMessage(o){_().fire(o,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h.so),t.Y36(h.WI),t.Y36(r.qu),t.Y36(f.d),t.Y36(A.y),t.Y36(Z.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-book-details-delete"]],standalone:!0,features:[t.jDz],decls:38,vars:1,consts:[[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","BKSTOR","readonly",""],["matInput","","formControlName","STNAME","readonly",""],["matInput","","formControlName","ITDSC","readonly",""],["matInput","","formControlName","LOTS","readonly",""],["matInput","","formControlName","LOCAT","readonly",""],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card")(1,"div",0)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Delete a Book Entry "),t.qZA()(),t.TgZ(5,"button",1),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",2),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",3)(9,"form",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"label",8),t._uU(14,"Storer"),t.qZA(),t.TgZ(15,"div",9)(16,"mat-form-field",10)(17,"mat-label"),t._uU(18," Storer "),t.qZA(),t._UZ(19,"input",11),t.qZA(),t.TgZ(20,"mat-form-field",10)(21,"mat-label"),t._uU(22,"Storer Name"),t.qZA(),t._UZ(23,"input",12),t.qZA()()(),t.TgZ(24,"mat-form-field",10)(25,"mat-label"),t._uU(26," Item"),t.qZA(),t._UZ(27,"input",13),t.qZA(),t.TgZ(28,"mat-form-field",10)(29,"mat-label"),t._uU(30,"Lot Codes"),t.qZA(),t._UZ(31,"input",14),t.qZA(),t.TgZ(32,"mat-form-field",10)(33,"mat-label"),t._uU(34,"Location"),t.qZA(),t._UZ(35,"input",15),t.qZA()()(),t.TgZ(36,"button",16),t.NdJ("click",function(){return a.deleteBookDetails()}),t._uU(37,"Delete"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[m.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,D.Hw,B.lW,T.KE,T.hX,W.Nt,c.a8,c.dk,c.dn,c.n5]}),e})();function q(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Tag Number"),t.qZA())}function x(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.TagNumber)}}function w(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Team"),t.qZA())}function N(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.Team)}}function v(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Counted"),t.qZA())}function L(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.Counted)}}function O(e,i){1&e&&(t.TgZ(0,"th",15),t._uU(1,"Bucket"),t.qZA())}function I(e,i){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.Bucket)}}function Y(e,i){1&e&&t._UZ(0,"tr",17)}function Q(e,i){1&e&&t._UZ(0,"tr",18)}const K=function(){return[8,16,24]};let H=(()=>{class e{constructor(o,a,l){this.data=o,this.dialogRef=a,this.fb=l,this.displayedColumns=["TagNumber","Team","Counted","Bucket"],this.user=localStorage.getItem("userName"),this.duplicateSource=[{TagNumber:1,Team:"",Counted:"",Bucket:"",BKSEQ:2,BKITEM:100,LOTS:12522,LOCAT:"612 DOCK/1",BKSTAT:"BK",BKQAVL:"",BKQDAM:"",BKQHLD:"",User1:"",User2:"",User3:"",User4:"",BKLOT1:"",BKLOT2:"",BKLOT3:"",BKBLDG:612,BKFLOR:"",BKAISL:"",BKSLOT:"",BKSTOR:"",STNAME:"",ITDSC:""}]}ngOnInit(){this.form=this.fb.group({}),this.dataSource=new n.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(h.WI),t.Y36(h.so),t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-book-details-tag-inquiry"]],viewQuery:function(o,a){if(1&o&&t.Gf(p.NW,5),2&o){let l;t.iGM(l=t.CRH())&&(a.paginator=l.first)}},standalone:!0,features:[t.jDz],decls:25,vars:5,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","TagNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Team"],["matColumnDef","Counted"],["matColumnDef","Bucket"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Tag Counts Matching This Book Line"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"table",4),t.ynx(9,5),t.YNc(10,q,2,0,"th",6),t.YNc(11,x,2,1,"td",7),t.BQk(),t.ynx(12,8),t.YNc(13,w,2,0,"th",6),t.YNc(14,N,2,1,"td",7),t.BQk(),t.ynx(15,9),t.YNc(16,v,2,0,"th",6),t.YNc(17,L,2,1,"td",7),t.BQk(),t.ynx(18,10),t.YNc(19,O,2,0,"th",6),t.YNc(20,I,2,1,"td",7),t.BQk(),t.YNc(21,Y,1,0,"tr",11),t.YNc(22,Q,1,0,"tr",12),t.qZA(),t._UZ(23,"mat-paginator",13,14),t.qZA()),2&o&&(t.xp6(8),t.Q6J("dataSource",a.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,K)))},dependencies:[m.m,p.NW,D.Hw,B.lW,c.a8,c.dk,c.n5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk]}),e})();var b=s(36895),U=s(28255),M=s(10266),F=s(90455);function J(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.searchBookDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function R(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.searchBookDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function E(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"span",35),t.NdJ("click",function(l){return l.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",36),t.NdJ("ngModelChange",function(l){const d=t.CHM(o).$implicit;return t.KtG(d.isActive=l)})("change",function(){const u=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.toggleColumn(u))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngModel",o.isActive),t.xp6(1),t.hij(" ",o.name," ")}}function G(e,i){if(1&e&&(t.TgZ(0,"form",37)(1,"div",38)(2,"div",39)(3,"mat-form-field",40)(4,"mat-label"),t._uU(5,"Storer"),t.qZA(),t._UZ(6,"input",41),t.qZA(),t.TgZ(7,"mat-form-field",40)(8,"mat-label"),t._uU(9,"Sequence Number"),t.qZA(),t._UZ(10,"input",42),t.qZA(),t.TgZ(11,"mat-form-field",40)(12,"mat-label"),t._uU(13,"Item"),t.qZA(),t._UZ(14,"input",43),t.qZA(),t.TgZ(15,"div",44)(16,"label",45),t._uU(17,"Location"),t.qZA(),t.TgZ(18,"div",46)(19,"mat-form-field",40)(20,"mat-label"),t._uU(21,"Building"),t.qZA(),t._UZ(22,"input",47),t.qZA(),t.TgZ(23,"mat-form-field",40)(24,"mat-label"),t._uU(25,"Floor"),t.qZA(),t._UZ(26,"input",48),t.qZA(),t.TgZ(27,"mat-form-field",40)(28,"mat-label"),t._uU(29,"Aisle"),t.qZA(),t._UZ(30,"input",49),t.qZA(),t.TgZ(31,"mat-form-field",40)(32,"mat-label"),t._uU(33,"Slot"),t.qZA(),t._UZ(34,"input",50),t.qZA()()(),t.TgZ(35,"mat-form-field",40)(36,"mat-label"),t._uU(37,"Status"),t.qZA(),t._UZ(38,"input",51),t.qZA()()(),t.TgZ(39,"button",52),t._uU(40," Search "),t.qZA()()),2&e){const o=t.oxw();t.Q6J("formGroup",o.form)}}function $(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Book Sequence "),t.qZA())}function z(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKSEQ)}}function j(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Item Code "),t.qZA())}function X(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKITEM)}}function P(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Lot Codes "),t.qZA())}function V(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LOTS)}}function tt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Location "),t.qZA())}function et(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.LOCAT)}}function ot(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Status "),t.qZA())}function it(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKSTAT)}}function nt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Available "),t.qZA())}function at(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKQAVL)}}function lt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Damaged "),t.qZA())}function st(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKQDAM)}}function rt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," Held "),t.qZA())}function mt(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.BKQHLD)}}function ut(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," User 1 "),t.qZA())}function ct(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.User1)}}function dt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," User 2 "),t.qZA())}function pt(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.User2)}}function ht(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," User 3 "),t.qZA())}function ft(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.User3)}}function gt(e,i){1&e&&(t.TgZ(0,"th",53),t._uU(1," User 4 "),t.qZA())}function _t(e,i){if(1&e&&(t.TgZ(0,"td",54),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o.User4)}}function Tt(e,i){1&e&&t._UZ(0,"th",55)}function kt(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",54)(1,"div",56)(2,"button",57)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",58)(6,"li")(7,"button",59),t.NdJ("click",function(){const u=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.BookDetailsTagInquiryForm(u))}),t.TgZ(8,"mat-icon",60),t._uU(9,"call_made"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Tag Inquiry"),t.qZA()()(),t.TgZ(12,"li")(13,"button",59),t.NdJ("click",function(){const u=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.BookDetailsDeleteForm(u))}),t.TgZ(14,"mat-icon",61),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function Ct(e,i){1&e&&t._UZ(0,"tr",62)}function Zt(e,i){1&e&&t._UZ(0,"tr",63)}const Dt=function(){return[8,16,24]};let Bt=(()=>{class e{constructor(o,a,l,u,d){this.fb=o,this.BookDetails=a,this.matDialog=l,this.router=u,this.route=d,this.displayedColumns=["BookSequence","ItemCode","LotCodes","Location","Status","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.duplicateSource=[{BKSEQ:2,BKITEM:100,LOTS:12522,LOCAT:"612 DOCK/1",BKSTAT:"BK",BKQAVL:"",BKQDAM:"",BKQHLD:"",User1:"",User2:"",User3:"",User4:"",BKLOT1:"",BKLOT2:"",BKLOT3:"",BKBLDG:612,BKFLOR:"",BKAISL:"",BKSLOT:""}],this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({STNAME:"LP Storer",SEQ:"",ITEM:"",BLDG:"",FLOR:"",AISL:"",SLOT:"",STAT:""}),this.dataSource=new n.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(o){if(o.isActive)this.displayedColumns.splice(o.position>this.displayedColumns.length-1?this.displayedColumns.length-1:o.position,0,o.name);else{let a=this.displayedColumns.indexOf(o.name);a>-1&&this.displayedColumns.splice(a,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((o,a)=>{"Actions"!=o&&"Available"!=o&&this.columnShowHideList.push({position:a,name:o,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Available",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Damaged",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Held",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"User1",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"User2",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"User3",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"User4",isActive:!1}),console.log(this.columnShowHideList)}addBookDetails(){this.matDialog.open(k.WwBookDetailsAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}BookDetailsTagInquiryForm(o){this.matDialog.open(H,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}BookDetailsDeleteForm(o){this.matDialog.open(S,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}searchBookDetails(){this.searchTextDisplay=1!=this.searchTextDisplay}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(f.d),t.Y36(h.uw),t.Y36(Z.F0),t.Y36(Z.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-work-with-book-details"]],viewQuery:function(o,a){if(1&o&&t.Gf(p.NW,5),2&o){let l;t.iGM(l=t.CRH())&&(a.paginator=l.first)}},standalone:!0,features:[t.jDz],decls:63,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton","matTooltip","Search BookDetails",3,"click",4,"ngIf"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New BookDetails",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","BookSequence"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","ItemCode"],["matColumnDef","LotCodes"],["matColumnDef","Location"],["matColumnDef","Status"],["matColumnDef","Available"],["matColumnDef","Damaged"],["matColumnDef","Held"],["matColumnDef","User1"],["matColumnDef","User2"],["matColumnDef","User3"],["matColumnDef","User4"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","","matTooltip","Search BookDetails",1,"addButton",3,"click"],["mat-button","",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STNAME","readonly",""],["matInput","","formControlName","SEQ"],["matInput","","formControlName","ITEM",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","BLDG",2,"text-transform","uppercase"],["matInput","","formControlName","FLOR"],["matInput","","formControlName","AISL",2,"text-transform","uppercase"],["matInput","","formControlName","SLOT",2,"text-transform","uppercase"],["matInput","","formControlName","STAT",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(o,a){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Book Details"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,J,3,0,"button",3),t.YNc(6,R,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.addBookDetails()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",null,6),t.YNc(12,E,4,2,"span",7),t.qZA(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,G,41,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,$,2,0,"th",14),t.YNc(22,z,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,j,2,0,"th",14),t.YNc(25,X,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,P,2,0,"th",14),t.YNc(28,V,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,tt,2,0,"th",14),t.YNc(31,et,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,ot,2,0,"th",14),t.YNc(34,it,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,nt,2,0,"th",14),t.YNc(37,at,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,lt,2,0,"th",14),t.YNc(40,st,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,rt,2,0,"th",14),t.YNc(43,mt,2,1,"td",15),t.BQk(),t.ynx(44,23),t.YNc(45,ut,2,0,"th",14),t.YNc(46,ct,2,1,"td",15),t.BQk(),t.ynx(47,24),t.YNc(48,dt,2,0,"th",14),t.YNc(49,pt,2,1,"td",15),t.BQk(),t.ynx(50,25),t.YNc(51,ht,2,0,"th",14),t.YNc(52,ft,2,1,"td",15),t.BQk(),t.ynx(53,26),t.YNc(54,gt,2,0,"th",14),t.YNc(55,_t,2,1,"td",15),t.BQk(),t.ynx(56,27),t.YNc(57,Tt,1,0,"th",28),t.YNc(58,kt,18,0,"td",15),t.BQk(),t.YNc(59,Ct,1,0,"tr",29),t.YNc(60,Zt,1,0,"tr",30),t.qZA(),t._UZ(61,"mat-paginator",31,32),t.qZA()),2&o){const l=t.MAs(11);t.xp6(5),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(6),t.Q6J("ngForOf",a.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",l),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(40),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,Dt))}},dependencies:[m.m,b.sg,b.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u,p.NW,D.Hw,U.VK,U.p6,B.lW,T.KE,T.hX,W.Nt,c.a8,c.dk,c.dn,c.n5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,M.gM,F.Rr]}),e})()}}]);