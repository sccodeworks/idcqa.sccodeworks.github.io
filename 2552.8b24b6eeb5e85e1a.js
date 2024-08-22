"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2552],{62552:(X,C,d)=>{d.r(C),d.d(C,{AddressTypesComponent:()=>W});var v=d(98739),i=d(7155),m=d(65412),N=d(35226),T=d.n(N),A=d(70879),e=d(94650),Z=d(80529),b=d(75625),_=d(70262),S=d(62843),U=d(92340);let f=(()=>{class s{constructor(t){this.httpClient=t,this.url=U.N.API_BASE_URL,this.httpHeader={headers:new Z.WM({"Content-Type":"application/json"})}}getAddressTypes(){return this.httpClient.get("http://localhost:3001/apj/AddressTypes")}getAll(t){return this.httpClient.get(this.url+`/AddressTypes/readAll?user=${t}`)}createAddressTypes(t,o,r){return this.httpClient.post("http://localhost:3001/apj/AddressTypes/create",{ATADDT:t,ATDESC:o,user:r}).pipe((0,b.X)(1),(0,_.K)(this.httpError))}updateAddressTypes(t,o,r){return this.httpClient.put("http://localhost:3001/apj/AddressTypes/update",{ATADDT:t,ATDESC:o,user:r}).pipe((0,b.X)(1),(0,_.K)(this.httpError))}deleteAddressTypes(t,o){return this.httpClient.delete("http://localhost:3001/apj/AddressTypes/delete?user=${user}&ATADDT=${ATADDT}")}httpError(t){let o="";return o=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(o),(0,S._)(()=>new Error(o))}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(Z.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var a=d(24006),h=d(19132),y=d(97392),g=d(4859),u=d(59549),D=d(44144),l=d(73546);let x=(()=>{class s{constructor(t,o,r,c,p){this.AddressTypesService=t,this.anyvariable=o,this.dialogRef=r,this.fb=c,this.router=p,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({ATADDT:"",ATDESC:""})}addAddressTypes(){var t=this.form.value;console.log(t),this.AddressTypesService.createAddressTypes(t.ATADDT,t.ATDESC,this.user).subscribe(o=>{if(this.result=o,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Address Types created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/address-type/read"]);else{const r=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(r)}})}successMessage(t){T().fire(t,"","success")}failureMessage(t){T().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f),e.Y36(m.WI),e.Y36(m.so),e.Y36(a.qu),e.Y36(h.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-address-type-add"]],standalone:!0,features:[e.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ATADDT",2,"text-transform","uppercase"],["matInput","","formControlName","ATDESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain Address Types"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14," Address Type "),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Description"),e.qZA(),e._UZ(19,"input",10),e.qZA()()(),e.TgZ(20,"button",11),e.NdJ("click",function(){return o.addAddressTypes()}),e._uU(21," Add "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[A.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,y.Hw,g.lW,u.KE,u.hX,D.Nt,l.a8,l.dk,l.dn,l.n5]}),s})(),J=(()=>{class s{constructor(t,o,r,c,p){this.fb=t,this.AddressTypesService=o,this.router=r,this.anyvariable=c,this.dialogRef=p,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({ATADDT:this.anyvariable.ATADDT,ATDESC:this.anyvariable.ATDESC})}updateAddressTypes(){var t=this.form.value;console.log(t),this.result=this.AddressTypesService.updateAddressTypes(t.ATADDT,t.ATDESC,this.user).subscribe(o=>{if(this.result=o,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Address Type updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/address-type/read"]);else{const r=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(r)}})}successMessage(t){T().fire(t,"","success")}failureMessage(t){T().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(a.qu),e.Y36(f),e.Y36(h.F0),e.Y36(m.WI),e.Y36(m.so))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-address-type-change"]],standalone:!0,features:[e.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ATADDT",2,"text-transform","uppercase"],["matInput","","formControlName","ATDESC",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain Address Types"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Address Type"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Description"),e.qZA(),e._UZ(19,"input",10),e.qZA()()(),e.TgZ(20,"button",11),e.NdJ("click",function(){return o.updateAddressTypes()}),e._uU(21," Update "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[A.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,y.Hw,g.lW,u.KE,u.hX,D.Nt,l.a8,l.dk,l.dn,l.n5]}),s})(),w=(()=>{class s{constructor(t,o,r,c,p){this.AddressTypesService=t,this.fb=o,this.anyvariable=r,this.router=c,this.dialogRef=p,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({ATADDT:this.anyvariable.ATADDT,ATDESC:this.anyvariable.ATDESC})}deleteAddressTypes(){confirm("Are you sure want to delete Address Type?")&&(this.result=this.AddressTypesService.deleteAddressTypes(this.user,this.anyvariable.RECODE).subscribe(t=>{if(this.result=t,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Address Type deleted successfully"),this.closeDialog(),this.router.navigate(["/main-nav/address-type/read"]);else{const o=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(o)}}))}successMessage(t){T().fire(t,"","success"),this.router.navigate(["/main-nav/address-type/read"])}failureMessage(t){T().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f),e.Y36(a.qu),e.Y36(m.WI),e.Y36(h.F0),e.Y36(m.so))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-address-type-delete"]],standalone:!0,features:[e.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ATADDT",2,"text-transform","uppercase"],["matInput","","formControlName","ATDESC"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Delete Address Types"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14," Address Type "),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Description"),e.qZA(),e._UZ(19,"input",10),e.qZA()()(),e.TgZ(20,"button",11),e.NdJ("click",function(){return o.deleteAddressTypes()}),e._uU(21,"Delete"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",o.form))},dependencies:[A.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,y.Hw,g.lW,u.KE,u.hX,D.Nt,l.a8,l.dk,l.dn,l.n5]}),s})();var Y=d(36895),E=d(10266);function k(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchAddressTypes())}),e.TgZ(1,"mat-icon"),e._uU(2,"clear"),e.qZA()()}}function F(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchAddressTypes())}),e.TgZ(1,"mat-icon"),e._uU(2,"search"),e.qZA()()}}function I(s,n){if(1&s&&(e.TgZ(0,"form",21)(1,"div",22)(2,"div",23)(3,"mat-form-field",24)(4,"mat-label"),e._uU(5,"Address Type"),e.qZA(),e._UZ(6,"input",25),e.qZA()()(),e.TgZ(7,"button",26),e._uU(8," Search "),e.qZA()()),2&s){const t=e.oxw();e.Q6J("formGroup",t.form)}}function M(s,n){1&s&&(e.TgZ(0,"th",27),e._uU(1,"Address Type"),e.qZA())}function q(s,n){if(1&s&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.Oqu(t.ATADDT)}}function H(s,n){1&s&&(e.TgZ(0,"th",27),e._uU(1,"Description"),e.qZA())}function O(s,n){if(1&s&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.Oqu(t.ATDESC)}}function B(s,n){1&s&&e._UZ(0,"th",29)}function G(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"td",28)(1,"div",30)(2,"button",31)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"ul",32)(6,"li")(7,"button",33),e.NdJ("click",function(){const c=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.getUpdateForm(c))}),e.TgZ(8,"mat-icon",34),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"mat-label"),e._uU(11,"Change"),e.qZA()()(),e.TgZ(12,"li")(13,"button",33),e.NdJ("click",function(){const c=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.deleteAddressTypes(c))}),e.TgZ(14,"mat-icon",35),e._uU(15,"delete"),e.qZA(),e.TgZ(16,"mat-label"),e._uU(17,"Delete"),e.qZA()()()()()()}}function Q(s,n){1&s&&e._UZ(0,"tr",36)}function R(s,n){1&s&&e._UZ(0,"tr",37)}const j=function(){return[8,16,24]};let W=(()=>{class s{constructor(t,o,r,c,p){this.AddressTypesService=t,this.fb=o,this.router=r,this.route=c,this.matDialog=p,this.displayedColumns=["AddressType","Description","Actions"],this.searchTextDisplay=!1,this.dataSource=[],this.form=this.fb.group({SRCH:""}),this.user=localStorage.getItem("userName")}ngOnInit(){this.getAddressTypes()}getAddressTypes(){this.AddressTypesService.getAddressTypes().subscribe(t=>{console.log(t),this.result=t,console.log(this.result);var o=this.result.data[1].value;console.log(o);var r=JSON.parse(o);console.log(r),console.log("DaTA"),this.dataSource=new i.by(r.returnedData),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}searchAddressTypes(){this.searchTextDisplay=1!=this.searchTextDisplay}addAddressTypes(){this.matDialog.open(x,{width:"950px",height:"auto",maxHeight:"95vh",autoFocus:!1})}getUpdateForm(t){this.matDialog.open(J,{width:"950px",height:"auto",maxHeight:"95vh",data:t,autoFocus:!1})}deleteAddressTypes(t){this.matDialog.open(w,{width:"1000px",maxHeight:"90vh",data:t,autoFocus:!1})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(f),e.Y36(a.qu),e.Y36(h.F0),e.Y36(h.gz),e.Y36(m.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-address-types"]],viewQuery:function(t,o){if(1&t&&e.Gf(v.NW,5),2&t){let r;e.iGM(r=e.CRH())&&(o.paginator=r.first)}},standalone:!0,features:[e.jDz],decls:26,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search AddressTypes",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Address Types",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","AddressType"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search AddressTypes",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),e._uU(3,"Work With Address Types"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,k,3,0,"button",3),e.YNc(6,F,3,0,"button",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return o.addAddressTypes()}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA()()()(),e.TgZ(10,"mat-card-content",6),e.YNc(11,I,9,1,"form",7),e.qZA(),e.TgZ(12,"table",8),e.ynx(13,9),e.YNc(14,M,2,0,"th",10),e.YNc(15,q,2,1,"td",11),e.BQk(),e.ynx(16,12),e.YNc(17,H,2,0,"th",10),e.YNc(18,O,2,1,"td",11),e.BQk(),e.ynx(19,13),e.YNc(20,B,1,0,"th",14),e.YNc(21,G,18,0,"td",11),e.BQk(),e.YNc(22,Q,1,0,"tr",15),e.YNc(23,R,1,0,"tr",16),e.qZA(),e._UZ(24,"mat-paginator",17,18),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngIf",o.searchTextDisplay),e.xp6(1),e.Q6J("ngIf",!o.searchTextDisplay),e.xp6(5),e.Q6J("ngIf",o.searchTextDisplay),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(10),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(7,j)))},dependencies:[A.m,Y.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,v.NW,y.Hw,g.lW,u.KE,u.hX,D.Nt,l.a8,l.dk,l.dn,l.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,E.gM]}),s})()}}]);