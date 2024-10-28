"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3128],{23128:(R,A,u)=>{u.d(A,{v:()=>I});var f=u(80529),g=u(75625),P=u(70262),M=u(62843),D=u(92340),v=u(94650);let I=(()=>{class n{constructor(t){this.httpClient=t,this.url=D.N.API_BASE_URL,this.httpHeader={headers:new f.WM({"Content-Type":"application/json"})},this.update="/Customers/update",this.create="/Customers/create",this.consolidate="/Customers/consolidate"}getCustomers(t,e,r,s,o){return this.httpClient.get(this.url+"/Customers/read",{params:{customerCode:t??"",user:e,customerName:r??"",recordsPerPage:s??"",pageNo:o??""}})}CustomersCreate(t,e,r,s,o,i,a,p,h,c,l,C,m,d,_,$,E,y,T){return this.httpClient.post(this.url+this.create,{CUST:t,CUSFX:e,CUSSFX:r,CUNAME:s,CUADD1:o,CUADD2:i,CUADD3:a,CUZIP:p,CUZSFX:h,CUPHAR:c,CUPHEX:l,CUPHNU:C,CUFXAR:m,CUFXEX:d,CUFXNU:_,CUCPER:$,CUSORT:E,CUSTPR:y,user:T}).pipe((0,g.X)(1),(0,P.K)(this.httpError))}CustomersUpdate(t,e,r,s,o,i,a,p,h,c,l,C,m,d,_,$,E,y,T){return this.httpClient.put(this.url+this.update,{CUST:t,CUSFX:e,CUSSFX:r,CUNAME:s,CUADD1:o,CUADD2:i,CUADD3:a,CUZIP:p,CUZSFX:h,CUPHAR:c,CUPHEX:l,CUPHNU:C,CUFXAR:m,CUFXEX:d,CUFXNU:_,CUCPER:$,CUSORT:E,CUSTPR:y,user:T}).pipe((0,g.X)(1),(0,P.K)(this.httpError))}CustomersConsolidate(t,e,r,s,o,i){return this.httpClient.put(this.url+this.consolidate,{customerNumber:t,suffix1:e,suffix2:r,refCustNumber:s,refCustsfx1:o,refCustsfx2:i}).pipe((0,g.X)(1),(0,P.K)(this.httpError))}AccountAttributes(t,e,r,s,o,i){return this.httpClient.get(this.url+`/Customers/read/accountAttribute?customer=${t}&user=${e}&suffix1=${r}&suffix2=${s}&recordsPerPage=${o}&pageNo=${i}`)}AgingInquiryRead(t,e,r,s,o,i,a,p,h,c,l,C,m,d,_,$,E){return this.httpClient.get(this.url+`/Customers/ARInquiry/read?user=${t}&customerNumber=${e}&suffix1=${r}&suffix2=${s}&agingDate=${o}&includeType1=${i}&includeType2=${a}&includeType3=${p}&includeType4=${h}&includeType5=${c}&omitType1=${l}&omitType2=${C}&omitType3=${m}&omitType4=${d}&omitType5=${_}&recordsPerPage=${$}&pageNo=${E}`)}AgingInquiryInq(t,e,r,s){return this.httpClient.get(this.url+`/Customers/ARInquiry/inquiry?user=${t}&invoice=${e}&recordsPerPage=${r}&pageNo=${s}`)}httpError(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(e),(0,M._)(()=>new Error(e))}}return n.\u0275fac=function(t){return new(t||n)(v.LFG(f.eN))},n.\u0275prov=v.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);