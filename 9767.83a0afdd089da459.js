"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9767,1790,8754,5645,2313,1645],{11790:(R,f,e)=>{e.d(f,{y:()=>M});var g=e(65412),a=e(94650),E=e(97392),o=e(4859);let n=(()=>{class r{constructor(t,u){this.dialogRef=t,this.data=u}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(g.so),a.Y36(g.WI))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(t,u){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),a.NdJ("click",function(){return u.closeDialog()}),a._uU(3,"close "),a.qZA(),a.TgZ(4,"span",3),a._uU(5),a.qZA()(),a.TgZ(6,"button",4),a._uU(7,"Cancel"),a.qZA(),a.TgZ(8,"button",5),a._uU(9,"Delete"),a.qZA()()),2&t&&(a.xp6(5),a.Oqu(u.data.message),a.xp6(1),a.Q6J("mat-dialog-close",!1),a.xp6(2),a.Q6J("mat-dialog-close",!0))},dependencies:[E.Hw,o.lW,g.ZT]}),r})(),M=(()=>{class r{constructor(t){this.dialog=t}openCustomAlert(t){return this.dialog.open(n,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:t}})}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(g.uw))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},69767:(R,f,e)=>{e.r(f),e.d(f,{CustomerAccountAttributesComponent:()=>K});var g=e(98739),a=e(7155),E=e(70879),o=e(48529),n=e(1645),M=e(87099),r=e(35226),m=e.n(r),t=e(94650),u=e(19132),l=e(65412),D=e(23128),h=e(11790),b=e(24006),p=e(97392),P=e(4859),s=e(59549),c=e(44144),d=e(73546);function C(_,v){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute"),t.qZA())}function W(_,v){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const i=v.$implicit;t.xp6(1),t.Oqu(i.AAATRB)}}function S(_,v){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute Value"),t.qZA())}function B(_,v){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const i=v.$implicit;t.xp6(1),t.Oqu(i.AAVALU)}}function I(_,v){1&_&&t._UZ(0,"tr",20)}function Z(_,v){1&_&&t._UZ(0,"tr",21)}const L=function(){return[8,16,24]};let K=(()=>{class _{constructor(i,A,O,T,U,y){this.route=i,this.router=A,this.matDialog=O,this.CustomerService=T,this.CustomAlertService=U,this.fb=y,this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.pageNumber=1,this.displayedColumns=["Attribute","AttributeValue"],this.dataSource=new a.by,this.user=localStorage.getItem("userName")||"",this.searchTextDisplay=!1,this.url="/main-nav/customers/read"}ngOnInit(){this.element=history.state,this.form=this.fb.group({CUST:this.element.WKCUST+"\xa0"+this.element.CUSFX+"\xa0"+this.element.CUSSFX}),this.getAccountingAttribute(this.pageSize,this.pageNumber)}getAccountingAttribute(i,A){this.accountSubscription&&this.accountSubscription.unsubscribe(),this.accountSubscription=this.CustomerService.AccountAttributes(o.R.fullSlotAisl(this.element.WKCUST),this.user,this.element.CUSFX,this.element.CUSSFX,i,A).subscribe(O=>{var T=JSON.parse(O[0].data[1]?.value);this.dataSource.data=T.returnedData,this.totalRecords=T.TotalRecords})}searchAccountAttributes(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate([this.url])}addAccountAttributes(){this.matDialog.open(n.WwAccountAttributesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}accountAttributeChangeForm(i){this.matDialog.open(M.b,{width:"1000px",maxHeight:"80vh",data:i,autoFocus:!1})}accountingAttributeDelete(i){this.CustomAlertService.openCustomAlert("Are you sure want to delete this account attribute ?").afterClosed().subscribe(O=>{O&&this.CustomerService.CustomersConsolidate(this.user,i,"","","","").subscribe(T=>{if(JSON.parse(T.success))this.successMessage(o.R.deleteShortMsg),this.getAccountingAttribute();else{const U=JSON.parse(T[0].data[1].value).returnedData.message;this.failureMessage(U),this.getAccountingAttribute()}})})}onPaginateChange(i){this.pageSize=i.pageSize,this.getAccountingAttribute(i.pageSize,i.pageIndex+1)}successMessage(i){m().fire(i,"","success")}failureMessage(i){m().fire(i,"","error")}}return _.\u0275fac=function(i){return new(i||_)(t.Y36(u.gz),t.Y36(u.F0),t.Y36(l.uw),t.Y36(D.v),t.Y36(h.y),t.Y36(b.qu))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-customer-account-attributes"]],viewQuery:function(i,A){if(1&i&&t.Gf(g.NW,5),2&i){let O;t.iGM(O=t.CRH())&&(A.paginator=O.first)}},standalone:!0,features:[t.jDz],decls:27,vars:8,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CUST"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","AttributeValue"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,A){1&i&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return A.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Accounting Attributes"),t.qZA(),t._UZ(7,"div",2),t.qZA(),t.TgZ(8,"mat-card-content",3)(9,"form",4)(10,"div",5)(11,"div",6)(12,"mat-form-field",7)(13,"mat-label"),t._uU(14,"Customer"),t.qZA(),t._UZ(15,"input",8),t.qZA()()()()(),t.TgZ(16,"table",9),t.ynx(17,10),t.YNc(18,C,2,0,"th",11),t.YNc(19,W,2,1,"td",12),t.BQk(),t.ynx(20,13),t.YNc(21,S,2,0,"th",11),t.YNc(22,B,2,1,"td",12),t.BQk(),t.YNc(23,I,1,0,"tr",14),t.YNc(24,Z,1,0,"tr",15),t.qZA(),t.TgZ(25,"mat-paginator",16,17),t.NdJ("page",function(T){return A.onPaginateChange(T)}),t.qZA()()),2&i&&(t.xp6(9),t.Q6J("formGroup",A.form),t.xp6(7),t.Q6J("dataSource",A.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",A.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",A.displayedColumns),t.xp6(1),t.Q6J("length",A.totalRecords)("pageSizeOptions",t.DdM(7,L))("pageSize",A.pageSize))},dependencies:[E.m,b._Y,b.Fj,b.JJ,b.JL,b.sg,b.u,g.NW,p.Hw,P.lW,s.KE,s.hX,c.Nt,d.a8,d.dk,d.dn,d.n5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk]}),_})()},83490:(R,f,e)=>{e.d(f,{y:()=>r});var g=e(80529),a=e(75625),E=e(70262),o=e(62843),n=e(92340),M=e(94650);let r=(()=>{class m{constructor(u){this.httpClient=u,this.url=n.N.API_BASE_URL,this.httpHeader={headers:new g.WM({"Content-Type":"application/json"})}}getAccountingAttribute(u,l,D,h){return this.httpClient.get(this.url+"/accountAttributes/read",{params:{user:u,attribute:l??"",recordsPerPage:D??"",pageNo:h??""}})}AccountingAttributeCreate(u,l,D){return this.httpClient.post(this.url+"/accountAttributes/create",{user:u,attribute:l,description:D}).pipe((0,a.X)(1),(0,E.K)(this.httpError))}AccountingAttributeUpdate(u,l,D){return this.httpClient.put(this.url+"/accountAttributes/update",{user:u,attribute:l,description:D}).pipe((0,a.X)(1),(0,E.K)(this.httpError))}AccountingAttributeDelete(u,l){return this.httpClient.delete(this.url+`/accountAttributes/delete?user=${u}&attribute=${l}`)}httpError(u){let l="";return l=u.error instanceof ErrorEvent?u.error.message:`Error Code: ${u.status}\nMessage: ${u.message}`,console.log(l),(0,o._)(()=>new Error(l))}}return m.\u0275fac=function(u){return new(u||m)(M.LFG(g.eN))},m.\u0275prov=M.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},1645:(R,f,e)=>{e.r(f),e.d(f,{WwAccountAttributesAddComponent:()=>b});var g=e(35226),a=e.n(g),E=e(70879),o=e(94650),n=e(65412),M=e(83490),r=e(24006),m=e(19132),t=e(97392),u=e(4859),l=e(59549),D=e(44144),h=e(73546);let b=(()=>{class p{constructor(s,c,d,C){this.dialogRef=s,this.AccountAttributesService=c,this.fb=d,this.router=C,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({A2ATRB:"",A2DESC:""})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeCreate(){var s=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeCreate(this.user,s.A2ATRB.toUpperCase(),s.A2DESC).subscribe(c=>{const C=JSON.parse(c[0].data[c[0].data.length-1].value).returnedData.message;"Record Created Successfully"===C?(this.successMessage(C),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(C)})}successMessage(s){a().fire(s,"","success")}failureMessage(s){a().fire(s,"","error")}closeDialog(){this.dialogRef.close()}}return p.\u0275fac=function(s){return new(s||p)(o.Y36(n.so),o.Y36(M.y),o.Y36(r.qu),o.Y36(m.F0))},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-ww-account-attributes-add"]],standalone:!0,features:[o.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","A2ATRB",2,"text-transform","uppercase"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(s,c){1&s&&(o.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),o._uU(4,"Maintain Attributes"),o.qZA()(),o.TgZ(5,"button",2),o.NdJ("click",function(){return c.closeDialog()}),o.TgZ(6,"mat-icon",3),o._uU(7,"close"),o.qZA()()(),o.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),o._uU(14,"Attribute "),o.qZA(),o._UZ(15,"input",9),o.qZA(),o.TgZ(16,"mat-form-field",10)(17,"mat-label"),o._uU(18,"Attribute Description"),o.qZA(),o._UZ(19,"input",11),o.qZA()()(),o.TgZ(20,"button",12),o.NdJ("click",function(){return c.AccountingAttributeCreate()}),o._uU(21," Create "),o.qZA()()()()),2&s&&(o.xp6(9),o.Q6J("formGroup",c.form),o.xp6(11),o.Q6J("disabled",!(c.form.valid&&c.form.dirty)))},dependencies:[E.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,t.Hw,u.lW,l.KE,l.hX,D.Nt,h.a8,h.dk,h.dn,h.n5]}),p})()},87099:(R,f,e)=>{e.d(f,{b:()=>b});var g=e(65412),a=e(35226),E=e.n(a),o=e(70879),n=e(94650),M=e(83490),r=e(24006),m=e(19132),t=e(97392),u=e(4859),l=e(59549),D=e(44144),h=e(73546);let b=(()=>{class p{constructor(s,c,d,C,W){this.anyvariable=s,this.dialogRef=c,this.AccountAttributesService=d,this.fb=C,this.router=W,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable.A2ATRB),console.log(this.anyvariable.A2DESC),console.log(this.user),this.form=this.fb.group({A2ATRB:this.anyvariable.A2ATRB,A2DESC:this.anyvariable.A2DESC})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeUpdate(){var s=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeUpdate(this.user,this.anyvariable.A2ATRB,s.A2DESC).subscribe(c=>{const C=JSON.parse(c[0].data[c[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===C?(this.successMessage(C),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(C)})}successMessage(s){E().fire(s,"","success")}failureMessage(s){E().fire(s,"","error")}closeDialog(){this.dialogRef.close()}}return p.\u0275fac=function(s){return new(s||p)(n.Y36(g.WI),n.Y36(g.so),n.Y36(M.y),n.Y36(r.qu),n.Y36(m.F0))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-ww-account-attributes-change"]],standalone:!0,features:[n.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","A2ATRB"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(s,c){1&s&&(n.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),n._uU(4,"Maintain Attributes"),n.qZA()(),n.TgZ(5,"button",2),n.NdJ("click",function(){return c.closeDialog()}),n.TgZ(6,"mat-icon",3),n._uU(7,"close"),n.qZA()()(),n.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),n._uU(14,"Attribute "),n.qZA(),n._UZ(15,"input",9),n.qZA(),n.TgZ(16,"mat-form-field",10)(17,"mat-label"),n._uU(18,"Attribute Description"),n.qZA(),n._UZ(19,"input",11),n.qZA()()(),n.TgZ(20,"button",12),n.NdJ("click",function(){return c.AccountingAttributeUpdate()}),n._uU(21," Update "),n.qZA()()()()),2&s&&(n.xp6(9),n.Q6J("formGroup",c.form),n.xp6(11),n.Q6J("disabled",!(c.form.valid&&c.form.dirty)))},dependencies:[o.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,t.Hw,u.lW,l.KE,l.hX,D.Nt,h.a8,h.dk,h.dn,h.n5]}),p})()}}]);