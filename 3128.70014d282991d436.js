"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3128],{23128:(y,f,s)=>{s.d(f,{v:()=>R});var P=s(80529),h=s(75625),a=s(70262),D=s(62843),O=s(92340),$=s(94650);let R=(()=>{class o{constructor(t){this.httpClient=t,this.url=O.N.API_BASE_URL,this.httpHeader={headers:new P.WM({"Content-Type":"application/json"})}}getCustomers(t,r,e){return this.httpClient.get(this.url+`/Customers/read?customerCode=${t}&user=${r}&customerName=${e}`)}CustomersCreate(t,r,e,n,u,i,C,p,_,l,c,E,m,d,v,g,A,M,I){return this.httpClient.post(this.url+"/Customers/create",{CUST:t,CUSFX:r,CUSSFX:e,CUNAME:n,CUADD1:u,CUADD2:i,CUADD3:C,CUZIP:p,CUZSFX:_,CUPHAR:l,CUPHEX:c,CUPHNU:E,CUFXAR:m,CUFXEX:d,CUFXNU:v,CUCPER:g,CUSORT:A,CUSTPR:M,user:I}).pipe((0,h.X)(1),(0,a.K)(this.httpError))}CustomersUpdate(t,r,e,n,u,i,C,p,_,l,c,E,m,d,v,g,A,M,I){return this.httpClient.put(this.url+"/Customers/update",{CUST:t,CUSFX:r,CUSSFX:e,CUNAME:n,CUADD1:u,CUADD2:i,CUADD3:C,CUZIP:p,CUZSFX:_,CUPHAR:l,CUPHEX:c,CUPHNU:E,CUFXAR:m,CUFXEX:d,CUFXNU:v,CUCPER:g,CUSORT:A,CUSTPR:M,user:I}).pipe((0,h.X)(1),(0,a.K)(this.httpError))}CustomersConsolidate(t,r,e,n,u,i){return this.httpClient.put(this.url+"/Customers/consolidate",{customerNumber:t,suffix1:r,suffix2:e,refCustNumber:n,refCustsfx1:u,refCustsfx2:i}).pipe((0,h.X)(1),(0,a.K)(this.httpError))}AccountAttributes(t,r,e,n){return this.httpClient.get(this.url+`/Customers/read/accountAttribute?customer=${t}&user=${r}&suffix1=${e}&suffix2=${n}`)}AgingInquiryRead(t,r){return this.httpClient.get(this.url+`/Customers/ARInquiry/read?user=${t}&invoice=${r}`)}AgingInquiryInq(t,r){return this.httpClient.get(this.url+`/Customers/ARInquiry/inquiry?user=${t}&invoice=${r}`)}httpError(t){let r="";return r=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(r),(0,D._)(()=>new Error(r))}}return o.\u0275fac=function(t){return new(t||o)($.LFG(P.eN))},o.\u0275prov=$.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);