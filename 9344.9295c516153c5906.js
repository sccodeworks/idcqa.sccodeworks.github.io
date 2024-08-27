"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9344],{95190:(H,D,o)=>{o.d(D,{c:()=>W});var a=o(80529),C=o(75625),M=o(70262),P=o(62843),R=o(92340),t=o(94650);let W=(()=>{class _{constructor(l){this.httpClient=l,this.url=R.N.API_BASE_URL,this.httpHeader={headers:new a.WM({"Content-Type":"application/json"})}}getSupplyTransactions(l,p,m,i,S,f,u,N,d,T,g){return this.httpClient.get(this.url+"/SupplyTransactions/read",{params:{user:l,SNSTOR:p,SNCONS:m,SNCARR:i,SNDOCT:S,SNDOCN:f,SNTYPE:u,WKSDATE:N,WKEDATE:d,SNPOOL:T,SNINV:g}})}createSupplyTransactions(l,p,m,i,S,f,u,N,d,T,g,Z,E,I,h,U,O,y){return this.httpClient.post(this.url+"/SupplyTransactions/create",{user:l,SNSTOR:p,SNSSFX:m,SNCONS:i,SNCARR:S,SNDOCT:f,SNDOCN:u,SNTYPE:N,SNLOCN:d,SNRQTY:T,SNXQTY:g,SNUQTY:Z,SNPOOL:E,SNINVP:I,SNREAS:h,SNSPID:U,SNNUMB:O,SNSTAT:y}).pipe((0,C.X)(1),(0,M.K)(this.httpError))}updateSupplyTransactions(l,p,m,i,S,f,u,N,d,T,g,Z,E,I,h,U,O,y,v){return this.httpClient.put(this.url+"/SupplyTransactions/update",{user:l,SNTRAN:p,SNSTOR:m,SNSSFX:i,SNCONS:S,SNCARR:f,SNDOCT:u,SNDOCN:N,SNTYPE:d,SNLOCN:T,SNRQTY:g,SNXQTY:Z,SNUQTY:E,SNPOOL:I,SNINVP:h,SNREAS:U,SNSPID:O,SNNUMB:y,SNSTAT:v}).pipe((0,C.X)(1),(0,M.K)(this.httpError))}getSupplyTransactionsInquiry(l,p,m,i){return this.httpClient.get(this.url+`/SupplyTransactions/read?user=${l}&SNSTOR=${p}&SNSSFX=${m}&SNTRAN=${i}`)}DeleteSupplytransaction(l,p){return this.httpClient.delete(this.url+`/SupplyTransactions/delete?user=${l}&SNTRAN=${p}`)}httpError(l){let p="";return p=l.error instanceof ErrorEvent?l.error.message:`Error Code: ${l.status}\nMessage: ${l.message}`,console.log(p),(0,P._)(()=>new Error(p))}}return _.\u0275fac=function(l){return new(l||_)(t.LFG(a.eN))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},19344:(H,D,o)=>{o.r(D),o.d(D,{WwSupplytransactionsAddComponent:()=>lt});var a=o(24006),C=o(65412),M=o(35226),P=o.n(M),R=o(70879),t=o(94650),W=o(95190),_=o(19132),q=o(36895),l=o(97392),p=o(4859),m=o(59549),i=o(44144),S=o(84385),f=o(3238),u=o(73546);function N(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Storer Number is required. "),t.qZA())}function d(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 4 digits. "),t.qZA())}function T(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 2 characters. "),t.qZA())}function g(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Consignee Code is required. "),t.qZA())}function Z(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 1 to 12 characters. "),t.qZA())}function E(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 1 to 15 characters. "),t.qZA())}function I(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Supply Type is required. "),t.qZA())}function h(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be Numbers "),t.qZA())}function U(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Document Type is required. "),t.qZA())}function O(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a single Character. "),t.qZA())}function y(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 9 digits. "),t.qZA())}function v(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 1 to 16 characters. "),t.qZA())}function tt(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 4 digits. "),t.qZA())}function rt(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 4 digits. "),t.qZA())}function et(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 4 digits. "),t.qZA())}function at(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a single uppercase letter. "),t.qZA())}function nt(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 1 to 2 uppercase letters. "),t.qZA())}function ot(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be 1 to 30 uppercase alphanumeric characters. "),t.qZA())}function st(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Must be a number between 1 to 3 digits. "),t.qZA())}let lt=(()=>{class e{constructor(r,n,c,A,b){this.SupplyTransactions=r,this.data=n,this.dialogRef=c,this.router=A,this.fb=b,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({SNSTOR:["",[a.kI.required,a.kI.pattern("[0-9]{1,4}")]],SNSSFX:["",[a.kI.maxLength(2),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNCONS:["",[a.kI.required,a.kI.maxLength(12),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNCARR:["",[a.kI.maxLength(15),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNTYPE:["",[a.kI.required,a.kI.maxLength(10),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNDOCT:["",[a.kI.required,a.kI.maxLength(1),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNDOCN:["",a.kI.pattern("[0-9]{1,9}")],SNLOCN:["",[a.kI.pattern(/^[A-Z0-9]{1,16}$/)]],SNRQTY:["",a.kI.pattern("[0-9]{1,4}")],SNXQTY:["",a.kI.pattern("[0-9]{1,4}")],SNUQTY:["",a.kI.pattern("[0-9]{1,4}")],SNPOOL:["",[a.kI.required,a.kI.pattern(/^[A-Z]{1}$/)]],SNINVP:["",[a.kI.maxLength(1),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNREAS:["",[a.kI.maxLength(2),a.kI.pattern("^[a-zA-Z]{1,}$")]],SNSPID:["",[a.kI.maxLength(30),a.kI.pattern("^[a-zA-Z0-9]{1,}$")]],SNNUMB:["",[a.kI.pattern(/^\d{1,3}$/)]],SNSTAT:"AC"}),this.form.get("SNINVP")?.valueChanges.subscribe(r=>{r&&this.form.get("SNINVP")?.setValue(r.toUpperCase(),{emitEvent:!1})}),this.form.get("SNCONS")?.valueChanges.subscribe(r=>{r&&this.form.get("SNCONS")?.setValue(r.toUpperCase(),{emitEvent:!1})})}ngOnDestroy(){this.SupplyTransactionsSubscription&&this.SupplyTransactionsSubscription.unsubscribe()}addSupplytransactions(){var r=this.form.value;r.SNDOCT=r.SNDOCT.toUpperCase(),r.SNCONS=r.SNCONS.toUpperCase(),r.SNCARR=r.SNCARR.toUpperCase(),r.SNTYPE=r.SNTYPE.toUpperCase(),r.SNPOOL=r.SNPOOL.toUpperCase(),r.SNINVP=r.SNINVP.toUpperCase(),console.log(r),this.SupplyTransactionsSubscription&&this.SupplyTransactionsSubscription.unsubscribe(),this.SupplyTransactionsSubscription=this.SupplyTransactions.createSupplyTransactions(this.user,r.SNSTOR,r.SNSSFX,r.SNCONS,r.SNCARR,r.SNDOCT,r.SNDOCN,r.SNTYPE,r.SNLOCN,r.SNRQTY,r.SNXQTY,r.SNUQTY,r.SNPOOL,r.SNINVP,r.SNREAS,r.SNSPID,r.SNNUMB,r.SNSTAT).subscribe(n=>{const A=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;"Record Created Successfully"===A?(this.successMessage("Supplytransactions created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/supply-transactions/read"])):this.failureMessage(A)})}successMessage(r){P().fire(r,"","success")}failureMessage(r){P().fire(r,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(W.c),t.Y36(C.WI),t.Y36(C.so),t.Y36(_.F0),t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-supplytransactions-add"]],standalone:!0,features:[t.jDz],decls:107,vars:21,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNSTOR"],[4,"ngIf"],["matInput","","formControlName","SNSSFX",2,"text-transform","uppercase"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNRQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNXQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNUQTY",2,"text-transform","uppercase"],["formControlName","SNPOOL"],["value","S"],["value","C"],["value","T"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNREAS",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID",2,"text-transform","uppercase"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase",3,"disabled"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(r,n){if(1&r&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Supply Transaction"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Storer Number"),t.qZA(),t._UZ(15,"input",9),t.YNc(16,N,2,0,"mat-error",10),t.YNc(17,d,2,0,"mat-error",10),t.qZA(),t.TgZ(18,"mat-form-field",8)(19,"mat-label"),t._uU(20,"Storer Suffix"),t.qZA(),t._UZ(21,"input",11),t.YNc(22,T,2,0,"mat-error",10),t.qZA(),t.TgZ(23,"mat-form-field",8)(24,"mat-label"),t._uU(25,"Consignee Code"),t.qZA(),t._UZ(26,"input",12),t.YNc(27,g,2,0,"mat-error",10),t.YNc(28,Z,2,0,"mat-error",10),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31,"Carrier Code"),t.qZA(),t._UZ(32,"input",13),t.YNc(33,E,2,0,"mat-error",10),t.qZA(),t.TgZ(34,"mat-form-field",8)(35,"mat-label"),t._uU(36,"Supply Type"),t.qZA(),t._UZ(37,"input",14),t.YNc(38,I,2,0,"mat-error",10),t.YNc(39,h,2,0,"mat-error",10),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Document Type"),t.qZA(),t._UZ(43,"input",15),t.YNc(44,U,2,0,"mat-error",10),t.YNc(45,O,2,0,"mat-error",10),t.qZA(),t.TgZ(46,"mat-form-field",8)(47,"mat-label"),t._uU(48,"Document No"),t.qZA(),t._UZ(49,"input",16),t.YNc(50,y,2,0,"mat-error",10),t.qZA(),t.TgZ(51,"mat-form-field",8)(52,"mat-label"),t._uU(53,"Location"),t.qZA(),t._UZ(54,"input",17),t.YNc(55,v,2,0,"mat-error",10),t.qZA(),t.TgZ(56,"mat-form-field",8)(57,"mat-label"),t._uU(58,"Returned"),t.qZA(),t._UZ(59,"input",18),t.YNc(60,tt,2,0,"mat-error",10),t.qZA(),t.TgZ(61,"mat-form-field",8)(62,"mat-label"),t._uU(63,"Rejected"),t.qZA(),t._UZ(64,"input",19),t.YNc(65,rt,2,0,"mat-error",10),t.qZA(),t.TgZ(66,"mat-form-field",8)(67,"mat-label"),t._uU(68,"Used"),t.qZA(),t._UZ(69,"input",20),t.YNc(70,et,2,0,"mat-error",10),t.qZA(),t.TgZ(71,"mat-form-field",8)(72,"mat-label"),t._uU(73,"Pool Affected"),t.qZA(),t.TgZ(74,"mat-select",21)(75,"mat-option",22),t._uU(76,"S"),t.qZA(),t.TgZ(77,"mat-option",23),t._uU(78,"C"),t.qZA(),t.TgZ(79,"mat-option",24),t._uU(80,"T"),t.qZA()()(),t.TgZ(81,"mat-form-field",8)(82,"mat-label"),t._uU(83,"Whose Invoice"),t.qZA(),t._UZ(84,"input",25),t.YNc(85,at,2,0,"mat-error",10),t.qZA(),t.TgZ(86,"mat-form-field",8)(87,"mat-label"),t._uU(88,"Reason Code"),t.qZA(),t._UZ(89,"input",26),t.YNc(90,nt,2,0,"mat-error",10),t.qZA(),t.TgZ(91,"mat-form-field",8)(92,"mat-label"),t._uU(93,"Supply ID Number"),t.qZA(),t._UZ(94,"input",27),t.YNc(95,ot,2,0,"mat-error",10),t.qZA(),t.TgZ(96,"mat-form-field",8)(97,"mat-label"),t._uU(98,"Rate Number"),t.qZA(),t._UZ(99,"input",28),t.YNc(100,st,2,0,"mat-error",10),t.qZA(),t.TgZ(101,"mat-form-field",8)(102,"mat-label"),t._uU(103,"Status"),t.qZA(),t._UZ(104,"input",29),t.qZA()()(),t.TgZ(105,"button",30),t.NdJ("click",function(){return n.addSupplytransactions()}),t._uU(106,"Add"),t.qZA()()()()),2&r){let c,A,b,x,Y,L,Q,w,B,J,K,k,$,X,F,z,V,j,G;t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(7),t.Q6J("ngIf",null==(c=n.form.get("SNSTOR"))?null:c.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(A=n.form.get("SNSTOR"))?null:A.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(b=n.form.get("SNSSFX"))?null:b.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(x=n.form.get("SNCONS"))?null:x.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(Y=n.form.get("SNCONS"))?null:Y.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(L=n.form.get("SNCARR"))?null:L.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(Q=n.form.get("SNTYPE"))?null:Q.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(w=n.form.get("SNTYPE"))?null:w.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(B=n.form.get("SNDOCT"))?null:B.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(J=n.form.get("SNDOCT"))?null:J.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(K=n.form.get("SNDOCN"))?null:K.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(k=n.form.get("SNLOCN"))?null:k.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==($=n.form.get("SNRQTY"))?null:$.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(X=n.form.get("SNXQTY"))?null:X.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(F=n.form.get("SNUQTY"))?null:F.hasError("pattern")),t.xp6(15),t.Q6J("ngIf",null==(z=n.form.get("SNINVP"))?null:z.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(V=n.form.get("SNREAS"))?null:V.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(j=n.form.get("SNSPID"))?null:j.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",null==(G=n.form.get("SNNUMB"))?null:G.hasError("pattern")),t.xp6(4),t.Q6J("disabled",!0)}},dependencies:[R.m,q.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,l.Hw,p.lW,m.TO,m.KE,m.hX,i.Nt,S.gD,f.ey,u.a8,u.dk,u.dn,u.n5]}),e})()}}]);