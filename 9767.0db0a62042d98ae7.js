"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9767,1790,8754,5645,2313,1645],{11790:(P,f,e)=>{e.d(f,{y:()=>b});var d=e(65412),a=e(94650),p=e(97392),n=e(4859);let o=(()=>{class r{constructor(t,i){this.dialogRef=t,this.data=i}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(d.so),a.Y36(d.WI))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),a.NdJ("click",function(){return i.closeDialog()}),a._uU(3,"close "),a.qZA(),a.TgZ(4,"span",3),a._uU(5),a.qZA()(),a.TgZ(6,"button",4),a._uU(7,"Cancel"),a.qZA(),a.TgZ(8,"button",5),a._uU(9,"Delete"),a.qZA()()),2&t&&(a.xp6(5),a.Oqu(i.data.message),a.xp6(1),a.Q6J("mat-dialog-close",!1),a.xp6(2),a.Q6J("mat-dialog-close",!0))},dependencies:[p.Hw,n.lW,d.ZT]}),r})(),b=(()=>{class r{constructor(t){this.dialog=t}openCustomAlert(t){return this.dialog.open(o,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:t}})}}return r.\u0275fac=function(t){return new(t||r)(a.LFG(d.uw))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},69767:(P,f,e)=>{e.r(f),e.d(f,{CustomerAccountAttributesComponent:()=>K});var d=e(98739),a=e(7155),p=e(70879),n=e(48529),o=e(1645),b=e(87099),r=e(35226),m=e.n(r),t=e(94650),i=e(19132),c=e(65412),M=e(23128),E=e(11790),D=e(24006),g=e(97392),T=e(4859),s=e(59549),u=e(44144),A=e(73546);function h(_,v){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute"),t.qZA())}function R(_,v){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const l=v.$implicit;t.xp6(1),t.Oqu(l.AAATRB)}}function B(_,v){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute Value"),t.qZA())}function I(_,v){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const l=v.$implicit;t.xp6(1),t.Oqu(l.AAVALU)}}function S(_,v){1&_&&t._UZ(0,"tr",20)}function Z(_,v){1&_&&t._UZ(0,"tr",21)}const L=function(){return[8,16,24]};let K=(()=>{class _{constructor(l,C,O,U,W,y){this.route=l,this.router=C,this.matDialog=O,this.CustomerService=U,this.CustomAlertService=W,this.fb=y,this.displayedColumns=["Attribute","AttributeValue"],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,this.form=this.fb.group({CUST:this.element.WKCUST+"\xa0"+this.element.CUSFX+"\xa0"+this.element.CUSSFX}),this.getAccountingAttribute()}getAccountingAttribute(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log(this.element.CUSFX,this.element.CUSSFX),this.getAll2Subscription=this.CustomerService.AccountAttributes(n.R.fullSlotAisl(this.element.WKCUST),this.user,this.element.CUSFX,this.element.CUSSFX).subscribe(l=>{var O=JSON.parse(l[0].data[1].value);this.dataSource=new a.by(O.returnedData),this.dataSource.paginator=this.paginator})}searchAccountAttributes(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate(["/main-nav/Customer/read"])}addAccountAttributes(){this.matDialog.open(o.WwAccountAttributesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}AccountAttributeChangeForm(l){this.matDialog.open(b.b,{width:"1000px",maxHeight:"80vh",data:l,autoFocus:!1})}AccountingAttributeDelete(l){this.CustomAlertService.openCustomAlert("Are you sure want to delete this account attribute ?").afterClosed().subscribe(O=>{O&&this.CustomerService.CustomersConsolidate(this.user,l,"","","","").subscribe(U=>{if(JSON.parse(U.success))this.successMessage(" Deleted successfully"),this.getAccountingAttribute();else{const W=JSON.parse(U[0].data[1].value).returnedData.message;this.failureMessage(W),this.getAccountingAttribute()}})})}successMessage(l){m().fire(l,"","success"),this.router.navigate(["/main-nav/accountattributes/read"])}failureMessage(l){m().fire(l,"","error")}}return _.\u0275fac=function(l){return new(l||_)(t.Y36(i.gz),t.Y36(i.F0),t.Y36(c.uw),t.Y36(M.v),t.Y36(E.y),t.Y36(D.qu))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-customer-account-attributes"]],viewQuery:function(l,C){if(1&l&&t.Gf(d.NW,5),2&l){let O;t.iGM(O=t.CRH())&&(C.paginator=O.first)}},standalone:!0,features:[t.jDz],decls:27,vars:6,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CUST"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","AttributeValue"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,C){1&l&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return C.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Accounting Attributes"),t.qZA(),t._UZ(7,"div",2),t.qZA(),t.TgZ(8,"mat-card-content",3)(9,"form",4)(10,"div",5)(11,"div",6)(12,"mat-form-field",7)(13,"mat-label"),t._uU(14,"Customer"),t.qZA(),t._UZ(15,"input",8),t.qZA()()()()(),t.TgZ(16,"table",9),t.ynx(17,10),t.YNc(18,h,2,0,"th",11),t.YNc(19,R,2,1,"td",12),t.BQk(),t.ynx(20,13),t.YNc(21,B,2,0,"th",11),t.YNc(22,I,2,1,"td",12),t.BQk(),t.YNc(23,S,1,0,"tr",14),t.YNc(24,Z,1,0,"tr",15),t.qZA(),t._UZ(25,"mat-paginator",16,17),t.qZA()),2&l&&(t.xp6(9),t.Q6J("formGroup",C.form),t.xp6(7),t.Q6J("dataSource",C.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",C.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",C.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,L)))},dependencies:[p.m,D._Y,D.Fj,D.JJ,D.JL,D.sg,D.u,d.NW,g.Hw,T.lW,s.KE,s.hX,u.Nt,A.a8,A.dk,A.dn,A.n5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk]}),_})()},83490:(P,f,e)=>{e.d(f,{y:()=>r});var d=e(80529),a=e(75625),p=e(70262),n=e(62843),o=e(92340),b=e(94650);let r=(()=>{class m{constructor(i){this.httpClient=i,this.url=o.N.API_BASE_URL,this.httpHeader={headers:new d.WM({"Content-Type":"application/json"})}}getAccountingAttribute(i,c){return this.httpClient.get(this.url+`/accountAttributes/read?user=${i}&attribute=${c}`)}AccountingAttributeCreate(i,c,M){return this.httpClient.post(this.url+"/accountAttributes/create",{user:i,attribute:c,description:M}).pipe((0,a.X)(1),(0,p.K)(this.httpError))}AccountingAttributeUpdate(i,c,M){return this.httpClient.put(this.url+"/accountAttributes/update",{user:i,attribute:c,description:M}).pipe((0,a.X)(1),(0,p.K)(this.httpError))}AccountingAttributeDelete(i,c){return this.httpClient.delete(this.url+`/accountAttributes/delete?user=${i}&attribute=${c}`)}httpError(i){let c="";return c=i.error instanceof ErrorEvent?i.error.message:`Error Code: ${i.status}\nMessage: ${i.message}`,console.log(c),(0,n._)(()=>new Error(c))}}return m.\u0275fac=function(i){return new(i||m)(b.LFG(d.eN))},m.\u0275prov=b.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},1645:(P,f,e)=>{e.r(f),e.d(f,{WwAccountAttributesAddComponent:()=>D});var d=e(35226),a=e.n(d),p=e(70879),n=e(94650),o=e(65412),b=e(83490),r=e(24006),m=e(19132),t=e(97392),i=e(4859),c=e(59549),M=e(44144),E=e(73546);let D=(()=>{class g{constructor(s,u,A,h){this.dialogRef=s,this.AccountAttributesService=u,this.fb=A,this.router=h,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({A2ATRB:"",A2DESC:""})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeCreate(){var s=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeCreate(this.user,s.A2ATRB.toUpperCase(),s.A2DESC).subscribe(u=>{const h=JSON.parse(u[0].data[u[0].data.length-1].value).returnedData.message;"Record Created Successfully"===h?(this.successMessage(h),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(h)})}successMessage(s){a().fire(s,"","success")}failureMessage(s){a().fire(s,"","error")}closeDialog(){this.dialogRef.close()}}return g.\u0275fac=function(s){return new(s||g)(n.Y36(o.so),n.Y36(b.y),n.Y36(r.qu),n.Y36(m.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-ww-account-attributes-add"]],standalone:!0,features:[n.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","A2ATRB",2,"text-transform","uppercase"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(s,u){1&s&&(n.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),n._uU(4,"Maintain Attributes"),n.qZA()(),n.TgZ(5,"button",2),n.NdJ("click",function(){return u.closeDialog()}),n.TgZ(6,"mat-icon",3),n._uU(7,"close"),n.qZA()()(),n.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),n._uU(14,"Attribute "),n.qZA(),n._UZ(15,"input",9),n.qZA(),n.TgZ(16,"mat-form-field",10)(17,"mat-label"),n._uU(18,"Attribute Description"),n.qZA(),n._UZ(19,"input",11),n.qZA()()(),n.TgZ(20,"button",12),n.NdJ("click",function(){return u.AccountingAttributeCreate()}),n._uU(21," Create "),n.qZA()()()()),2&s&&(n.xp6(9),n.Q6J("formGroup",u.form),n.xp6(11),n.Q6J("disabled",!(u.form.valid&&u.form.dirty)))},dependencies:[p.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,t.Hw,i.lW,c.KE,c.hX,M.Nt,E.a8,E.dk,E.dn,E.n5]}),g})()},87099:(P,f,e)=>{e.d(f,{b:()=>D});var d=e(65412),a=e(35226),p=e.n(a),n=e(70879),o=e(94650),b=e(83490),r=e(24006),m=e(19132),t=e(97392),i=e(4859),c=e(59549),M=e(44144),E=e(73546);let D=(()=>{class g{constructor(s,u,A,h,R){this.anyvariable=s,this.dialogRef=u,this.AccountAttributesService=A,this.fb=h,this.router=R,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable.A2ATRB),console.log(this.anyvariable.A2DESC),console.log(this.user),this.form=this.fb.group({A2ATRB:this.anyvariable.A2ATRB,A2DESC:this.anyvariable.A2DESC})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeUpdate(){var s=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeUpdate(this.user,this.anyvariable.A2ATRB,s.A2DESC).subscribe(u=>{const h=JSON.parse(u[0].data[u[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===h?(this.successMessage(h),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(h)})}successMessage(s){p().fire(s,"","success")}failureMessage(s){p().fire(s,"","error")}closeDialog(){this.dialogRef.close()}}return g.\u0275fac=function(s){return new(s||g)(o.Y36(d.WI),o.Y36(d.so),o.Y36(b.y),o.Y36(r.qu),o.Y36(m.F0))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-ww-account-attributes-change"]],standalone:!0,features:[o.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","A2ATRB"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(s,u){1&s&&(o.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),o._uU(4,"Maintain Attributes"),o.qZA()(),o.TgZ(5,"button",2),o.NdJ("click",function(){return u.closeDialog()}),o.TgZ(6,"mat-icon",3),o._uU(7,"close"),o.qZA()()(),o.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),o._uU(14,"Attribute "),o.qZA(),o._UZ(15,"input",9),o.qZA(),o.TgZ(16,"mat-form-field",10)(17,"mat-label"),o._uU(18,"Attribute Description"),o.qZA(),o._UZ(19,"input",11),o.qZA()()(),o.TgZ(20,"button",12),o.NdJ("click",function(){return u.AccountingAttributeUpdate()}),o._uU(21," Update "),o.qZA()()()()),2&s&&(o.xp6(9),o.Q6J("formGroup",u.form),o.xp6(11),o.Q6J("disabled",!(u.form.valid&&u.form.dirty)))},dependencies:[n.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,t.Hw,i.lW,c.KE,c.hX,M.Nt,E.a8,E.dk,E.dn,E.n5]}),g})()}}]);