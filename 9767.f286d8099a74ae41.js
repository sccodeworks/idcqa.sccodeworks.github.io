"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9767,1790,3128,8754,5645,2313,1645],{11790:(U,D,e)=>{e.d(D,{y:()=>v});var C=e(65412),r=e(94650),f=e(97392),n=e(4859);let o=(()=>{class i{constructor(t,a){this.dialogRef=t,this.data=a}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return i.\u0275fac=function(t){return new(t||i)(r.Y36(C.so),r.Y36(C.WI))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(t,a){1&t&&(r.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),r.NdJ("click",function(){return a.closeDialog()}),r._uU(3,"close "),r.qZA(),r.TgZ(4,"span",3),r._uU(5),r.qZA()(),r.TgZ(6,"button",4),r._uU(7,"Cancel"),r.qZA(),r.TgZ(8,"button",5),r._uU(9,"Delete"),r.qZA()()),2&t&&(r.xp6(5),r.Oqu(a.data.message),r.xp6(1),r.Q6J("mat-dialog-close",!1),r.xp6(2),r.Q6J("mat-dialog-close",!0))},dependencies:[f.Hw,n.lW,C.ZT]}),i})(),v=(()=>{class i{constructor(t){this.dialog=t}openCustomAlert(t){return this.dialog.open(o,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:t}})}}return i.\u0275fac=function(t){return new(t||i)(r.LFG(C.uw))},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},69767:(U,D,e)=>{e.r(D),e.d(D,{CustomerAccountAttributesComponent:()=>K});var C=e(98739),r=e(7155),f=e(70879),n=e(48529),o=e(1645),v=e(87099),i=e(35226),c=e.n(i),t=e(94650),a=e(19132),s=e(65412),d=e(23128),h=e(11790),E=e(24006),g=e(97392),b=e(4859),u=e(59549),l=e(44144),A=e(73546);function p(_,O){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute"),t.qZA())}function P(_,O){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const m=O.$implicit;t.xp6(1),t.Oqu(m.AAATRB)}}function R(_,O){1&_&&(t.TgZ(0,"th",18),t._uU(1,"Attribute Value"),t.qZA())}function W(_,O){if(1&_&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&_){const m=O.$implicit;t.xp6(1),t.Oqu(m.AAVALU)}}function I(_,O){1&_&&t._UZ(0,"tr",20)}function B(_,O){1&_&&t._UZ(0,"tr",21)}const S=function(){return[8,16,24]};let K=(()=>{class _{constructor(m,M,T,L,Z,y){this.route=m,this.router=M,this.matDialog=T,this.CustomerService=L,this.CustomAlertService=Z,this.fb=y,this.displayedColumns=["Attribute","AttributeValue"],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,this.form=this.fb.group({CUST:this.element.WKCUST+"\xa0"+this.element.CUSFX+"\xa0"+this.element.CUSSFX}),this.getAccountingAttribute()}getAccountingAttribute(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log(this.element.CUSFX,this.element.CUSSFX),this.getAll2Subscription=this.CustomerService.AccountAttributes(n.R.fullSlotAisl(this.element.WKCUST),this.user,this.element.CUSFX,this.element.CUSSFX).subscribe(m=>{var T=JSON.parse(m[0].data[1].value);this.dataSource=new r.by(T.returnedData),this.dataSource.paginator=this.paginator})}searchAccountAttributes(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate(["/main-nav/customers/read"])}addAccountAttributes(){this.matDialog.open(o.WwAccountAttributesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}AccountAttributeChangeForm(m){this.matDialog.open(v.b,{width:"1000px",maxHeight:"80vh",data:m,autoFocus:!1})}AccountingAttributeDelete(m){this.CustomAlertService.openCustomAlert("Are you sure want to delete this account attribute ?").afterClosed().subscribe(T=>{T&&this.CustomerService.CustomersConsolidate(this.user,m,"","","","").subscribe(L=>{if(JSON.parse(L.success))this.successMessage(" Deleted successfully"),this.getAccountingAttribute();else{const Z=JSON.parse(L[0].data[1].value).returnedData.message;this.failureMessage(Z),this.getAccountingAttribute()}})})}successMessage(m){c().fire(m,"","success"),this.router.navigate(["/main-nav/accountattributes/read"])}failureMessage(m){c().fire(m,"","error")}}return _.\u0275fac=function(m){return new(m||_)(t.Y36(a.gz),t.Y36(a.F0),t.Y36(s.uw),t.Y36(d.v),t.Y36(h.y),t.Y36(E.qu))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-customer-account-attributes"]],viewQuery:function(m,M){if(1&m&&t.Gf(C.NW,5),2&m){let T;t.iGM(T=t.CRH())&&(M.paginator=T.first)}},standalone:!0,features:[t.jDz],decls:27,vars:6,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CUST"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Attribute"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","AttributeValue"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(m,M){1&m&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return M.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Accounting Attributes"),t.qZA(),t._UZ(7,"div",2),t.qZA(),t.TgZ(8,"mat-card-content",3)(9,"form",4)(10,"div",5)(11,"div",6)(12,"mat-form-field",7)(13,"mat-label"),t._uU(14,"Customer"),t.qZA(),t._UZ(15,"input",8),t.qZA()()()()(),t.TgZ(16,"table",9),t.ynx(17,10),t.YNc(18,p,2,0,"th",11),t.YNc(19,P,2,1,"td",12),t.BQk(),t.ynx(20,13),t.YNc(21,R,2,0,"th",11),t.YNc(22,W,2,1,"td",12),t.BQk(),t.YNc(23,I,1,0,"tr",14),t.YNc(24,B,1,0,"tr",15),t.qZA(),t._UZ(25,"mat-paginator",16,17),t.qZA()),2&m&&(t.xp6(9),t.Q6J("formGroup",M.form),t.xp6(7),t.Q6J("dataSource",M.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",M.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",M.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,S)))},dependencies:[f.m,E._Y,E.Fj,E.JJ,E.JL,E.sg,E.u,C.NW,g.Hw,b.lW,u.KE,u.hX,l.Nt,A.a8,A.dk,A.dn,A.n5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk]}),_})()},23128:(U,D,e)=>{e.d(D,{v:()=>i});var C=e(80529),r=e(75625),f=e(70262),n=e(62843),o=e(92340),v=e(94650);let i=(()=>{class c{constructor(a){this.httpClient=a,this.url=o.N.API_BASE_URL,this.httpHeader={headers:new C.WM({"Content-Type":"application/json"})}}getCustomers(a,s,d){return this.httpClient.get(this.url+`/Customers/read?customerCode=${a}&user=${s}&customerName=${d}`)}CustomersCreate(a,s,d,h,E,g,b,u,l,A,p,P,R,W,I,B,S,K,_){return this.httpClient.post(this.url+"/Customers/create",{CUST:a,CUSFX:s,CUSSFX:d,CUNAME:h,CUADD1:E,CUADD2:g,CUADD3:b,CUZIP:u,CUZSFX:l,CUPHAR:A,CUPHEX:p,CUPHNU:P,CUFXAR:R,CUFXEX:W,CUFXNU:I,CUCPER:B,CUSORT:S,CUSTPR:K,user:_}).pipe((0,r.X)(1),(0,f.K)(this.httpError))}CustomersUpdate(a,s,d,h,E,g,b,u,l,A,p,P,R,W,I,B,S,K,_){return this.httpClient.put(this.url+"/Customers/update",{CUST:a,CUSFX:s,CUSSFX:d,CUNAME:h,CUADD1:E,CUADD2:g,CUADD3:b,CUZIP:u,CUZSFX:l,CUPHAR:A,CUPHEX:p,CUPHNU:P,CUFXAR:R,CUFXEX:W,CUFXNU:I,CUCPER:B,CUSORT:S,CUSTPR:K,user:_}).pipe((0,r.X)(1),(0,f.K)(this.httpError))}CustomersConsolidate(a,s,d,h,E,g){return this.httpClient.put(this.url+"/Customers/consolidate",{customerNumber:a,suffix1:s,suffix2:d,refCustNumber:h,refCustsfx1:E,refCustsfx2:g}).pipe((0,r.X)(1),(0,f.K)(this.httpError))}AccountAttributes(a,s,d,h){return this.httpClient.get(this.url+`/Customers/read/accountAttribute?customer=${a}&user=${s}&suffix1=${d}&suffix2=${h}`)}AgingInquiryRead(a,s){return this.httpClient.get(this.url+`/Customers/ARInquiry/read?user=${a}&invoice=${s}`)}AgingInquiryInq(a,s){return this.httpClient.get(this.url+`/Customers/ARInquiry/inquiry?user=${a}&invoice=${s}`)}httpError(a){let s="";return s=a.error instanceof ErrorEvent?a.error.message:`Error Code: ${a.status}\nMessage: ${a.message}`,console.log(s),(0,n._)(()=>new Error(s))}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(C.eN))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},83490:(U,D,e)=>{e.d(D,{y:()=>i});var C=e(80529),r=e(75625),f=e(70262),n=e(62843),o=e(92340),v=e(94650);let i=(()=>{class c{constructor(a){this.httpClient=a,this.url=o.N.API_BASE_URL,this.httpHeader={headers:new C.WM({"Content-Type":"application/json"})}}getAccountingAttribute(a,s){return this.httpClient.get(this.url+`/accountAttributes/read?user=${a}&attribute=${s}`)}AccountingAttributeCreate(a,s,d){return this.httpClient.post(this.url+"/accountAttributes/create",{user:a,attribute:s,description:d}).pipe((0,r.X)(1),(0,f.K)(this.httpError))}AccountingAttributeUpdate(a,s,d){return this.httpClient.put(this.url+"/accountAttributes/update",{user:a,attribute:s,description:d}).pipe((0,r.X)(1),(0,f.K)(this.httpError))}AccountingAttributeDelete(a,s){return this.httpClient.delete(this.url+`/accountAttributes/delete?user=${a}&attribute=${s}`)}httpError(a){let s="";return s=a.error instanceof ErrorEvent?a.error.message:`Error Code: ${a.status}\nMessage: ${a.message}`,console.log(s),(0,n._)(()=>new Error(s))}}return c.\u0275fac=function(a){return new(a||c)(v.LFG(C.eN))},c.\u0275prov=v.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},1645:(U,D,e)=>{e.r(D),e.d(D,{WwAccountAttributesAddComponent:()=>E});var C=e(35226),r=e.n(C),f=e(70879),n=e(94650),o=e(65412),v=e(83490),i=e(24006),c=e(19132),t=e(97392),a=e(4859),s=e(59549),d=e(44144),h=e(73546);let E=(()=>{class g{constructor(u,l,A,p){this.dialogRef=u,this.AccountAttributesService=l,this.fb=A,this.router=p,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({A2ATRB:"",A2DESC:""})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeCreate(){var u=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeCreate(this.user,u.A2ATRB.toUpperCase(),u.A2DESC).subscribe(l=>{const p=JSON.parse(l[0].data[l[0].data.length-1].value).returnedData.message;"Record Created Successfully"===p?(this.successMessage(p),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(p)})}successMessage(u){r().fire(u,"","success")}failureMessage(u){r().fire(u,"","error")}closeDialog(){this.dialogRef.close()}}return g.\u0275fac=function(u){return new(u||g)(n.Y36(o.so),n.Y36(v.y),n.Y36(i.qu),n.Y36(c.F0))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-ww-account-attributes-add"]],standalone:!0,features:[n.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","A2ATRB",2,"text-transform","uppercase"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(u,l){1&u&&(n.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),n._uU(4,"Maintain Attributes"),n.qZA()(),n.TgZ(5,"button",2),n.NdJ("click",function(){return l.closeDialog()}),n.TgZ(6,"mat-icon",3),n._uU(7,"close"),n.qZA()()(),n.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),n._uU(14,"Attribute "),n.qZA(),n._UZ(15,"input",9),n.qZA(),n.TgZ(16,"mat-form-field",10)(17,"mat-label"),n._uU(18,"Attribute Description"),n.qZA(),n._UZ(19,"input",11),n.qZA()()(),n.TgZ(20,"button",12),n.NdJ("click",function(){return l.AccountingAttributeCreate()}),n._uU(21," Create "),n.qZA()()()()),2&u&&(n.xp6(9),n.Q6J("formGroup",l.form),n.xp6(11),n.Q6J("disabled",!(l.form.valid&&l.form.dirty)))},dependencies:[f.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,t.Hw,a.lW,s.KE,s.hX,d.Nt,h.a8,h.dk,h.dn,h.n5]}),g})()},87099:(U,D,e)=>{e.d(D,{b:()=>E});var C=e(65412),r=e(35226),f=e.n(r),n=e(70879),o=e(94650),v=e(83490),i=e(24006),c=e(19132),t=e(97392),a=e(4859),s=e(59549),d=e(44144),h=e(73546);let E=(()=>{class g{constructor(u,l,A,p,P){this.anyvariable=u,this.dialogRef=l,this.AccountAttributesService=A,this.fb=p,this.router=P,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable.A2ATRB),console.log(this.anyvariable.A2DESC),console.log(this.user),this.form=this.fb.group({A2ATRB:this.anyvariable.A2ATRB,A2DESC:this.anyvariable.A2DESC})}ngOnDestroy(){this.AccountSubscription&&this.AccountSubscription.unsubscribe()}AccountingAttributeUpdate(){var u=this.form.value;this.AccountSubscription&&this.AccountSubscription.unsubscribe(),this.AccountSubscription=this.AccountAttributesService.AccountingAttributeUpdate(this.user,this.anyvariable.A2ATRB,u.A2DESC).subscribe(l=>{const p=JSON.parse(l[0].data[l[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===p?(this.successMessage(p),this.closeDialog(),this.router.navigate(["/main-nav/accountattributes/read"])):this.failureMessage(p)})}successMessage(u){f().fire(u,"","success")}failureMessage(u){f().fire(u,"","error")}closeDialog(){this.dialogRef.close()}}return g.\u0275fac=function(u){return new(u||g)(o.Y36(C.WI),o.Y36(C.so),o.Y36(v.y),o.Y36(i.qu),o.Y36(c.F0))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-ww-account-attributes-change"]],standalone:!0,features:[o.jDz],decls:22,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","A2ATRB"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","A2DESC"],["mat-button","","mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(u,l){1&u&&(o.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),o._uU(4,"Maintain Attributes"),o.qZA()(),o.TgZ(5,"button",2),o.NdJ("click",function(){return l.closeDialog()}),o.TgZ(6,"mat-icon",3),o._uU(7,"close"),o.qZA()()(),o.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),o._uU(14,"Attribute "),o.qZA(),o._UZ(15,"input",9),o.qZA(),o.TgZ(16,"mat-form-field",10)(17,"mat-label"),o._uU(18,"Attribute Description"),o.qZA(),o._UZ(19,"input",11),o.qZA()()(),o.TgZ(20,"button",12),o.NdJ("click",function(){return l.AccountingAttributeUpdate()}),o._uU(21," Update "),o.qZA()()()()),2&u&&(o.xp6(9),o.Q6J("formGroup",l.form),o.xp6(11),o.Q6J("disabled",!(l.form.valid&&l.form.dirty)))},dependencies:[n.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,t.Hw,a.lW,s.KE,s.hX,d.Nt,h.a8,h.dk,h.dn,h.n5]}),g})()}}]);