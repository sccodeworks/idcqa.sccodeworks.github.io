"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5183],{75183:(q,A,m)=>{m.r(A),m.d(A,{OrderDetailCommentsComponent:()=>Q});var U=m(35226),d=m.n(U),s=m(7155),c=m(24006),v=m(65412),S=m(70879),t=m(94650),g=m(20655),y=m(19132),r=m(97392),o=m(4859),a=m(59549),l=m(44144),p=m(84385),f=m(3238),u=m(73546);let Z=(()=>{class i{constructor(e,n,h,D,_,N){this.orderDetailSrv=e,this.anyvariable=n,this.fb=h,this.router=D,this.matDialog=_,this.dialogRef=N,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({bill:this.anyvariable[0][0].OCBILL,sequence:this.anyvariable[0][1].ODSEQ,Comment:[this.anyvariable[0][0].OCCMNT,c.kI.maxLength(60)],print:"NP"===this.anyvariable[0][0].OCSTAT?"N":"Y",Form:this.anyvariable[0][0].OCSGID,Type:this.anyvariable[0][0].OCQUAL})}closeDialog(){this.dialogRef.close()}editComment(){var e=this.form.value;console.log(e),this.result=this.orderDetailSrv.updateOrderDtlCommentService(e.bill,e.sequence,this.anyvariable[0][0].OCSEQ,e.Comment,e.print,e.Form,e.Type).subscribe(n=>{this.result=n;var D=this.result[0].data[this.result[0].data.length-1].value;"Updated Successfully"===D?(this.successMessage(D),this.closeDialog(),this.router.navigateByUrl("/main-nav/order/details/comments",{state:[this.anyvariable[0][1],this.anyvariable]})):this.failureMessage(D)})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.S),t.Y36(v.WI),t.Y36(c.qu),t.Y36(y.F0),t.Y36(v.uw),t.Y36(v.so))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-order-detail-comment"]],standalone:!0,features:[t.jDz],decls:48,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","bill"],["readonly","","matInput","","formControlName","sequence"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","maxlength","60","formControlName","Comment"],["appearance","outline","formControlName","print"],["value","Y"],["value","N"],["matInput","","formControlName","Form"],["matInput","","formControlName","Type"],["mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Order Comments Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Bill Number "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Sequence"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Comment :"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24," "),t.qZA(),t.TgZ(25,"mat-hint"),t._uU(26," Only "),t.TgZ(27,"strong"),t._uU(28,"60 characters "),t.qZA(),t._uU(29," are allowed"),t.qZA()(),t.TgZ(30,"mat-form-field",8)(31,"mat-label"),t._uU(32,"Print "),t.qZA(),t.TgZ(33,"mat-select",13)(34,"mat-option",14),t._uU(35,"Yes"),t.qZA(),t.TgZ(36,"mat-option",15),t._uU(37,"No"),t.qZA()()(),t.TgZ(38,"mat-form-field",8)(39,"mat-label"),t._uU(40," Form"),t.qZA(),t._UZ(41,"input",16),t.qZA(),t.TgZ(42,"mat-form-field",8)(43,"mat-label"),t._uU(44," Type"),t.qZA(),t._UZ(45,"input",17),t.qZA()()(),t.TgZ(46,"button",18),t.NdJ("click",function(){return n.editComment()}),t._uU(47," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(37),t.Q6J("disabled",!(n.form.valid&&n.form.dirty)))},dependencies:[S.m,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.nD,c.sg,c.u,r.Hw,o.lW,a.KE,a.bx,a.hX,l.Nt,p.gD,f.ey,u.a8,u.dk,u.dn,u.n5]}),i})(),T=(()=>{class i{constructor(e,n,h,D,_,N){this.orderDetailSrv=e,this.anyvariable=n,this.fb=h,this.router=D,this.matDialog=_,this.dialogRef=N,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({bill:this.anyvariable[0][1].ODBILL,sequence:this.anyvariable[0][1].ODSEQ,Comment:["",c.kI.maxLength(60)],print:"N",Form:"",Type:""})}closeDialog(){this.dialogRef.close()}addComment(){var e=this.form.value;console.log(e),this.result=this.orderDetailSrv.createOrderDtlCommentService(e.bill,e.sequence,"",e.Comment,e.print,e.Form,e.Type).subscribe(n=>{this.result=n;var D=this.result[0].data[this.result[0].data.length-1].value;"Created Successfully"===D?(this.successMessage(D),this.closeDialog(),this.router.navigateByUrl("/main-nav/order/details/comments",{state:[this.anyvariable[0][1],this.anyvariable]})):this.failureMessage(D)})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.S),t.Y36(v.WI),t.Y36(c.qu),t.Y36(y.F0),t.Y36(v.uw),t.Y36(v.so))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-create-order-detail-comment"]],standalone:!0,features:[t.jDz],decls:48,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","bill"],["readonly","","matInput","","formControlName","sequence"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","maxlength","60","formControlName","Comment"],["appearance","outline","formControlName","print"],["value","Y"],["value","N"],["matInput","","formControlName","Form"],["matInput","","formControlName","Type"],["mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Order Comments Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Bill Number "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Sequence"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Comment :"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24," "),t.qZA(),t.TgZ(25,"mat-hint"),t._uU(26," Only "),t.TgZ(27,"strong"),t._uU(28,"60 characters "),t.qZA(),t._uU(29," are allowed"),t.qZA()(),t.TgZ(30,"mat-form-field",8)(31,"mat-label"),t._uU(32,"Print "),t.qZA(),t.TgZ(33,"mat-select",13)(34,"mat-option",14),t._uU(35,"Yes"),t.qZA(),t.TgZ(36,"mat-option",15),t._uU(37,"No"),t.qZA()()(),t.TgZ(38,"mat-form-field",8)(39,"mat-label"),t._uU(40," Form"),t.qZA(),t._UZ(41,"input",16),t.qZA(),t.TgZ(42,"mat-form-field",8)(43,"mat-label"),t._uU(44," Type"),t.qZA(),t._UZ(45,"input",17),t.qZA()()(),t.TgZ(46,"button",18),t.NdJ("click",function(){return n.addComment()}),t._uU(47," Create "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(37),t.Q6J("disabled",!(n.form.valid&&n.form.dirty)))},dependencies:[S.m,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.nD,c.sg,c.u,r.Hw,o.lW,a.KE,a.bx,a.hX,l.Nt,p.gD,f.ey,u.a8,u.dk,u.dn,u.n5]}),i})();var O=m(15627),b=m(98739);const E=["paginator"];function $(i,C){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Comments"),t.qZA())}function w(i,C){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=C.$implicit;t.xp6(1),t.Oqu(e.OCCMNT)}}function x(i,C){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Print"),t.qZA())}function Y(i,C){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=C.$implicit;t.xp6(1),t.hij(" ","NP"===e.OCSTAT?"N":"Y"," ")}}function I(i,C){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Form"),t.qZA())}function M(i,C){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=C.$implicit;t.xp6(1),t.Oqu(e.OCSGID)}}function F(i,C){1&i&&(t.TgZ(0,"th",24),t._uU(1,"Type"),t.qZA())}function B(i,C){if(1&i&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&i){const e=C.$implicit;t.xp6(1),t.Oqu(e.OCQUAL)}}function X(i,C){1&i&&t._UZ(0,"th",26)}function K(i,C){if(1&i){const e=t.EpF();t.TgZ(0,"td",25)(1,"div",27)(2,"button",28)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",29)(6,"li")(7,"button",30),t.NdJ("click",function(){const D=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.editComment(D))}),t.TgZ(8,"mat-icon",31),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()()()()()}}function R(i,C){1&i&&t._UZ(0,"tr",32)}function k(i,C){if(1&i){const e=t.EpF();t.TgZ(0,"tr",33),t.NdJ("click",function(){const D=t.CHM(e).$implicit,_=t.oxw();return t.KtG(_.rowClick(D))}),t.qZA()}}const L=function(){return[8,16,24]};let Q=(()=>{class i{constructor(e,n,h,D,_){this.iHeaderSvc=e,this.orderDetailSrv=n,this.fb=h,this.router=D,this.matDialog=_,this.displayedColumns=["Comments","Print","Form","Type","Actions"],this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,console.log(this.element),this.bol=this.element[0].ODBILL,this.item=this.element[0].ODITDS,this.seq=this.element[0].ODSEQ,this.form=this.fb.group({}),this.getComments()}getComments(){this.orderDetailSrv.getOrderDtlsComment(this.user,this.bol,this.seq).subscribe(e=>{this.result=e;var n=this.result[0].data[1]?.value,h=JSON.parse(n);this.duplicateSource=h.returnedData,this.dataSource=new s.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}createOrderDtlComment(){var n=history.state;this.matDialog.open(T,{width:"1000px",maxHeight:"80vh",data:[[this.duplicateSource[0],n[0]]],autoFocus:!1})}rowClick(e){this.selectedRow=e}editComment(e){var h=history.state;this.matDialog.open(Z,{width:"1000px",maxHeight:"80vh",data:[[e,h[0]]],autoFocus:!1})}onBack(){this.router.navigateByUrl("/main-nav/orders/details",{state:this.element[1]})}successMessage(e){d().fire(e,"","success"),this.router.navigate(["/main-nav/orders/details"])}failureMessage(e){d().fire(e,"","error")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(O.X),t.Y36(g.S),t.Y36(c.qu),t.Y36(y.F0),t.Y36(v.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-order-detail-comments"]],viewQuery:function(e,n){if(1&e&&t.Gf(E,5),2&e){let h;t.iGM(h=t.CRH())&&(n.paginator=h.first)}},standalone:!0,features:[t.jDz],decls:49,vars:9,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","",1,"addButton",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","",3,"value"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Comments"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Print"],["matColumnDef","Form"],["matColumnDef","Type"],["matColumnDef","Actions"],["mat-header-cell","","width","20%",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","width","20%"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return n.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Order Comments Maintenance"),t.qZA(),t.TgZ(7,"div",3)(8,"button",4),t.NdJ("click",function(){return n.createOrderDtlComment()}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA(),t.TgZ(11,"span"),t._uU(12,"New Order Detail Comment"),t.qZA()()()(),t.TgZ(13,"mat-card-content",5)(14,"form",6)(15,"div",7)(16,"div",8)(17,"mat-form-field",9)(18,"mat-label"),t._uU(19," BOL: "),t.qZA(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"mat-form-field",9)(22,"mat-label"),t._uU(23,"Item"),t.qZA(),t._UZ(24,"input",10),t.qZA(),t.TgZ(25,"mat-form-field",9)(26,"mat-label"),t._uU(27," Sequence: "),t.qZA(),t._UZ(28,"input",10),t.qZA()()()()(),t.TgZ(29,"table",11),t.ynx(30,12),t.YNc(31,$,2,0,"th",13),t.YNc(32,w,2,1,"td",14),t.BQk(),t.ynx(33,15),t.YNc(34,x,2,0,"th",13),t.YNc(35,Y,2,1,"td",14),t.BQk(),t.ynx(36,16),t.YNc(37,I,2,0,"th",13),t.YNc(38,M,2,1,"td",14),t.BQk(),t.ynx(39,17),t.YNc(40,F,2,0,"th",13),t.YNc(41,B,2,1,"td",14),t.BQk(),t.ynx(42,18),t.YNc(43,X,1,0,"th",19),t.YNc(44,K,12,0,"td",14),t.BQk(),t.YNc(45,R,1,0,"tr",20),t.YNc(46,k,1,0,"tr",21),t.qZA(),t._UZ(47,"mat-paginator",22,23),t.qZA()),2&e&&(t.xp6(14),t.Q6J("formGroup",n.form),t.xp6(6),t.s9C("value",n.bol),t.xp6(4),t.s9C("value",n.item),t.xp6(4),t.s9C("value",n.seq),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,L)))},dependencies:[S.m,c._Y,c.JL,c.sg,b.NW,r.Hw,o.lW,a.KE,a.hX,l.Nt,u.a8,u.dk,u.dn,u.n5,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk]}),i})()},20655:(q,A,m)=>{m.d(A,{S:()=>t});var U=m(80529),d=m(75625),s=m(70262),c=m(62843),v=m(92340),S=m(94650);let t=(()=>{class g{constructor(r){this.httpClient=r,this.url=v.N.API_BASE_URL,this.httpHeader={headers:new U.WM({"Content-Type":"application/json"})}}getOrderDetails(r,o){return this.httpClient.get(this.url+`/orderDetails/read?user=${r}&billNo=${o}`)}getOrderDtlsComment(r,o,a){return this.httpClient.get(this.url+`/orderDetails/orderDtlsCmtsRead?user=${r}&billNo=${o}&sequence=${a}`)}ItemStatusService(r,o,a,l){return this.httpClient.get(this.url+`/orderDetails/items/itemStatus?user=${r}&itemStorer=${o}&suffix=${a}&item=${l}`)}orderDtlItemStatusService(r,o,a){return this.httpClient.get(this.url+`/orderDetails/itemStatus?user=${r}&bill=${o}&sequence=${a}`)}orderDtlLotStatusService(r,o,a,l,p,f){return this.httpClient.get(this.url+`/orderDetails/lotStatus?user=${r}&storer=${o}&suffix=${a}&item=${l}&billNo=${p}&seq=${f}`)}readXDocRef(r,o,a,l){return this.httpClient.get(this.url+`/orderDetails/crossDocRefRead?user=${r}&billNo=${o}&seq=${a}&tally=${l}`)}createOrderDetailService(r,o,a,l,p,f,u,Z,T,O,b){return this.httpClient.post(this.url+"/orderDetails/create",{bol:r,seq:o,qty:a,item:l,lot1:p,lot2:f,lot3:u,shipFrom:Z,ovrWeight:T,changeReason:O,origLine:b}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}updateOrderDetailService(r,o,a,l,p,f,u,Z,T,O,b){return this.httpClient.put(this.url+"/orderDetails/update",{bol:r,seq:o,qty:a,item:l,lot1:p,lot2:f,lot3:u,shipFrom:Z,ovrWeight:T,changeReason:O,origLine:b}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}deleteOrderDetailService(r,o){return this.httpClient.delete(this.url+`/orderDetails/delete?bol=${r}&seq=${o}`)}createOrderDtlCommentService(r,o,a,l,p,f,u){return this.httpClient.post(this.url+"/orderDetails/createComment",{bol:r,seq:o,commentSequence:a,comment:l,print:p,ediID:f,ediType:u}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}updateOrderDtlCommentService(r,o,a,l,p,f,u){return this.httpClient.put(this.url+"/orderDetails/updateComment",{bol:r,seq:o,commentSequence:a,comment:l,print:p,ediID:f,ediType:u}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDetailsCommitService(r,o){return this.httpClient.put(this.url+"/orderDetails/commit",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDetailsDeCommitService(r,o){return this.httpClient.put(this.url+"/orderDetails/deCommit",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDetailsNonStockReasService(r,o){return this.httpClient.put(this.url+"/orderDetails/nonStockReas",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}updateOrderDetailLocService(r,o,a,l,p,f){return this.httpClient.put(this.url+"/orderDetails/chnageLocOrLot",{bol:r,seq:o,location:a,lot1:l,lot2:p,lot3:f}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}changeShipFormService(r,o,a){return this.httpClient.put(this.url+"/orderDetails/changeShipFrom",{bol:r,seq:o,shipInventoryBucket:a}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}createXDocRefService(r,o,a,l){return this.httpClient.post(this.url+"/orderDetails/crossDocRefCreate",{bol:r,seq:o,tally:a,user:l}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}updateXDocRefService(r,o,a,l){return this.httpClient.put(this.url+"/orderDetails/crossDocRefUpdate",{bol:r,seq:o,tally:a,user:l}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}deleteXDocRef(r,o,a,l){return this.httpClient.delete(this.url+`/orderDetails/crossDocRefDelete?user=${r}&billNo=${o}&seq=${a}&tally=${l}`)}orderDetailCutService(r,o,a,l,p,f,u){return this.httpClient.put(this.url+"/orderDetails/cut",{bol:r,seq:o,reasonCode:a,comment1:l,print1:p,comment2:f,print2:u}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDetailForceService(r,o){return this.httpClient.post(this.url+"/orderDetails/force",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDetailDeleteNosService(r,o){return this.httpClient.delete(this.url+`/orderDetails/deleteNos?billNo=${r}&seq=${o}`)}hardAllocateService(r,o){return this.httpClient.put(this.url+"/orderDetails/hardAllocate",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}removeHardAllocateService(r,o){return this.httpClient.put(this.url+"/orderDetails/removeHardAllocate",{bol:r,seq:o}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}splitLineService(r,o,a,l,p,f,u){return this.httpClient.put(this.url+"/orderDetails/splitLine",{bol:r,seq:o,location:a,lot1:l,lot2:p,lot3:f,splitQuantity:u}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDtlMoveQueueService(r,o,a,l,p){return this.httpClient.put(this.url+"/orderDetails/movequeue",{bol:r,seq:o,qty:a,priority:l,location:p}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}changeEventService(r,o,a,l,p,f,u,Z,T,O,b){return this.httpClient.put(this.url+"/orderDetails/changeevent",{bol:r,seq:o,qty:a,item:l,lot1:p,lot2:f,lot3:u,shipFrom:Z,ovrWeight:T,changeReason:O,origLine:b}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}changeEventCommentsService(r,o,a,l,p,f){return this.httpClient.put(this.url+"/orderDetails/changeeventcomments",{bol:r,seq:o,comment1:a,print1:l,comment2:p,print2:f}).pipe((0,d.X)(1),(0,s.K)(this.httpError))}orderDtlStockStatus(r,o,a,l,p,f,u,Z){return this.httpClient.get(this.url+`/orderDetails/stockstatus?user=${r}&storer=${o}&suffix=${a}&item=${l}&lot1=${p}&lot2=${f}&lot3=${u}&location=${Z}`)}httpError(r){let o="";return o=r.error instanceof ErrorEvent?r.error.message:`Error Code: ${r.status}\nMessage: ${r.message}`,console.log(o),(0,c._)(()=>new Error(o))}}return g.\u0275fac=function(r){return new(r||g)(S.LFG(U.eN))},g.\u0275prov=S.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);