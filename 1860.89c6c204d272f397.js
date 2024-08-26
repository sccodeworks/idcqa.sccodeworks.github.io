"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1860,3765],{51860:(M,E,a)=>{a.d(E,{c:()=>d});var c=a(80529),u=a(75625),h=a(70262),C=a(62843),$=a(92340),_=a(94650);let d=(()=>{class p{constructor(t){this.httpClient=t,this.url=$.N.API_BASE_URL,this.httpHeader={headers:new c.WM({"Content-Type":"application/json"})}}getPayments(t,e,r,n,s,i,m,l,o,y){return this.httpClient.get(this.url+`/Payments/read?user=${t}&customer=${e}&customersuffixone=${r}&customersuffixtwo=${n}&checknumber=${s}&startdate=${i}&enddate=${m}&paymentno=${l}&refno=${o}&status=${y}`)}getPaymentInquiry(t,e){return this.httpClient.get(this.url+`/Payments/read/Inquiry?user=${t}&paymentno=${e}`)}getPaymentDetailInquiry(t,e){return this.httpClient.get(this.url+`/Payments/read/Detail/Inquiry?user=${t}&paymentno=${e}`)}getPaymentApply(t,e){return this.httpClient.get(this.url+`/Payments/read/Apply?user=${t}&PaymentNumber=${e}`)}getPaymentApplyDetail(t,e){return this.httpClient.get(this.url+`/Payments/read/Apply/Details?user=${t}&PaymentNumber=${e}`)}createpayments(t,e,r,n,s,i,m,l,o,y,P){return this.httpClient.post(this.url+"/Payments/create",{PHTDAT:t,PHCUST:e,PHCSFX:r,PHCSF2:n,PHCHK:s,PHREF:i,PHDESC:m,PHAMT:l,PHDATE:o,PHDDAT:y,user:P}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}updatepayments(t,e,r,n,s,i,m,l,o,y,P,D,f,v){return this.httpClient.put(this.url+"/Payments/update",{PHPAY:t,PHTDAT:e,PHCUST:r,PHCSFX:n,PHCSF2:s,PHCHK:i,PHREF:m,PHDESC:l,PHAMT:o,PHDATE:y,PHDDAT:P,PHSTAT:D,PHTRNC:f,user:v}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}getPaymentComment(t,e){return this.httpClient.get(this.url+`/Payments/comments/read?user=${t}&key=${e}`)}updateComment(t,e,r,n,s,i){return this.httpClient.put(this.url+"/Payments/comments/update",{user:t,fileID:e,key:r,sub:n,comment:s,seq:i}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}createComment(t,e,r,n,s){return this.httpClient.post(this.url+"/Payments/comments/create",{user:t,fileID:e,key:r,sub:n,comment:s}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}deleteComment(t,e,r,n,s){return this.httpClient.delete(this.url+`/Payments/comments/delete?user=${t}&fileID=${e}&key=${r}&sub=${n}&seq=${s}`)}PaymentsPrint(t,e){return this.httpClient.put(this.url+"/Payments/Print",{PaymentNumber:t,user:e}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}PaymentsRecal(t,e){return this.httpClient.put(this.url+"/Payments/Recalculate",{PaymentNumber:t,user:e}).pipe((0,u.X)(1),(0,h.K)(this.httpError))}PaymentDelete(t,e){return this.httpClient.delete(this.url+`/Payments/delete?user=${t}&PaymentNum=${e}`)}httpError(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(e),(0,C._)(()=>new Error(e))}}return p.\u0275fac=function(t){return new(t||p)(_.LFG(c.eN))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);