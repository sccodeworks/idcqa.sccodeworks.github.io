"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2784],{72784:(Y,d,o)=>{o.r(d),o.d(d,{StorageInvoiceInquiryComponent:()=>R});var f=o(98739),g=o(70879),t=o(94650),p=o(19132),I=o(15627),m=o(24006),s=o(65412),T=o(97392),C=o(4859),u=o(59549),h=o(44144),c=o(99602),l=o(73546),i=o(7155);function E(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," Item "),t.qZA())}function Z(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.ITDSC)}}function v(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," On Hand Balance "),t.qZA())}function A(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.BALN)}}function D(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," On Hand Weight "),t.qZA())}function q(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.WGHT)}}function M(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," Rate "),t.qZA())}function O(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.RATE)}}function y(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," Charge Amount "),t.qZA())}function U(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.AMT)}}function S(e,a){1&e&&(t.TgZ(0,"th",29),t._uU(1," Minimum charge "),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.MIN)}}function P(e,a){1&e&&t._UZ(0,"tr",31)}function B(e,a){1&e&&t._UZ(0,"tr",32)}let R=(()=>{class e{constructor(n,r,_,x,W){this.router=n,this.iHeaderSvc=r,this.fb=_,this.route=x,this.matDialog=W,this.displayedColumns=["Item","On Hand Balance","On Hand Weight","Rate","Charge Amount","Minimum Charge"],this.dataSource=[],this.duplicateSource=[{ITDSC:"No Storage Charges Exist.",BALN:"",WGHT:"",RATE:"",AMT:"",MIN:""}]}ngOnInit(){this.storerInvoiceInquiry=this.fb.group({INVNO:"",GENDT:"09/07/23",GENTM:"7:21.16",ITEM:"0046 TEST",SNAME:""}),this.dataSource=this.duplicateSource}onBack(){this.router.navigate(["/main-nav/storer"])}addAttribute(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.F0),t.Y36(I.X),t.Y36(m.qu),t.Y36(p.gz),t.Y36(s.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-storage-invoice-inquiry"]],viewQuery:function(n,r){if(1&n&&t.Gf(f.NW,5),2&n){let _;t.iGM(_=t.CRH())&&(r.paginator=_.first)}},standalone:!0,features:[t.jDz],decls:59,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","INVNO"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","GENDT",3,"matDatepicker"],["matSuffix","",3,"for"],["GeneratedDatePicker",""],["matInput","","type","time","formControlName","GENTM","placeholder","HH:mm","id","generatedtime","required",""],["matInput","","formControlName","ITEM"],["matInput","","formControlName","SNAME",2,"text-transform","uppercase"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Item"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","On Hand Balance"],["matColumnDef","On Hand Weight"],["matColumnDef","Rate"],["matColumnDef","Charge Amount"],["matColumnDef","Minimum charge"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,r){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return r.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Storage Invoice Inquiry"),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"WorkSheet "),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"div",9)(16,"label",10),t._uU(17,"Generated"),t.qZA(),t.TgZ(18,"div",11)(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Generated Date "),t.qZA(),t._UZ(22,"input",12)(23,"mat-datepicker-toggle",13)(24,"mat-datepicker",null,14),t.qZA(),t.TgZ(26,"mat-form-field",7)(27,"mat-label"),t._uU(28,"Generated Time"),t.qZA(),t._UZ(29,"input",15),t.qZA()()(),t.TgZ(30,"mat-form-field",7)(31,"mat-label"),t._uU(32," Position to Item"),t.qZA(),t._UZ(33,"input",16),t.qZA(),t.TgZ(34,"mat-form-field",7)(35,"mat-label"),t._uU(36," Storer "),t.qZA(),t._UZ(37,"input",17),t.qZA()()()()(),t.TgZ(38,"table",18),t.ynx(39,19),t.YNc(40,E,2,0,"th",20),t.YNc(41,Z,2,1,"td",21),t.BQk(),t.ynx(42,22),t.YNc(43,v,2,0,"th",20),t.YNc(44,A,2,1,"td",21),t.BQk(),t.ynx(45,23),t.YNc(46,D,2,0,"th",20),t.YNc(47,q,2,1,"td",21),t.BQk(),t.ynx(48,24),t.YNc(49,M,2,0,"th",20),t.YNc(50,O,2,1,"td",21),t.BQk(),t.ynx(51,25),t.YNc(52,y,2,0,"th",20),t.YNc(53,U,2,1,"td",21),t.BQk(),t.ynx(54,26),t.YNc(55,S,2,0,"th",20),t.YNc(56,N,2,1,"td",21),t.BQk(),t.YNc(57,P,1,0,"tr",27),t.YNc(58,B,1,0,"tr",28),t.qZA()()),2&n){const _=t.MAs(25);t.xp6(8),t.Q6J("formGroup",r.storerInvoiceInquiry),t.xp6(14),t.Q6J("matDatepicker",_),t.xp6(1),t.Q6J("for",_),t.xp6(15),t.Q6J("dataSource",r.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns)}},dependencies:[g.m,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u,T.Hw,C.lW,u.KE,u.hX,u.R9,h.Nt,c.Mq,c.hl,c.nW,l.a8,l.dk,l.dn,l.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk]}),e})()}}]);