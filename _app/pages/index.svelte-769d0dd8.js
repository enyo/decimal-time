import{S as Q,i as X,s as x,e as p,t as j,c as y,a as M,g as O,d as u,b as m,J as Ee,K as C,f as U,H as i,k as N,n as I,h as oe,I as G,L as ee,A as ce,j as he,m as de,o as ue,x as me,u as ge,v as fe}from"../chunks/vendor-9c2555dd.js";const De=1e3*60*60*24,_e=1e3*100*100*10,ve=a=>Math.round(a*(_e/De)),pe=a=>Math.round(a*(De/_e));class J{constructor(e=new Date){this.date=e}isLeapYear(){return new Date(this.date.getUTCFullYear(),1,29).getDate()===29}formatNum(e,s="0",t=""){return e<10?s+e:e<100?t+e:String(e)}formatDateString(e,s,t,o){return`${this.formatNum(e)}${o}${this.formatNum(s)}${o}${this.formatNum(t)}`}getMsToday(){return this.date.getHours()*60*60*1e3+this.date.getMinutes()*60*1e3+this.date.getSeconds()*1e3+this.date.getMilliseconds()}getDecimalMsToday(){return ve(this.getMsToday())}getDayOfYear(){return(Date.UTC(this.date.getFullYear(),this.date.getMonth(),this.date.getDate())-Date.UTC(this.date.getFullYear(),0,0))/24/60/60/1e3-1}getDecimalDaysOfMonth(){return this.isLeapYear()&&this.getDecimalMonth()===5||this.getDecimalMonth()===12?29:28}getDecimalDate(){const e=this.getDayOfYear(),s=this.getDecimalMonth();let t=e-28*s;return this.isLeapYear()&&s>5&&t--,t}getDecimalDay(){const e=this.getDecimalDate();return e==29?7:e%7}getDecimalYear(){return this.date.getFullYear()}getDecimalHours(){return Math.floor(this.getDecimalMsToday()/1e7)}getDecimalMilliseconds(){return Math.floor(this.getDecimalMsToday()%1e3)}getDecimalMinutes(){return Math.floor(this.getDecimalMsToday()%1e7/1e5)}getDecimalMonth(){let e=this.getDayOfYear();return e>350?12:(this.isLeapYear()&&e>28*6&&e--,Math.floor(e/28))}getDecimalSeconds(){return Math.floor(this.getDecimalMsToday()%1e5/1e3)}getDecimalTime(){return ve(this.date.getTime())}toDecimalDateString(e){return e==="ISO"?this.formatDateString(this.date.getFullYear(),this.getDecimalMonth()+1,this.getDecimalDate()+1,"-"):this.formatDateString(this.getDecimalDate()+1,this.getDecimalMonth()+1,this.date.getFullYear(),"/")}toDecimalTimeString(e){const s=this.formatDateString(this.getDecimalHours(),this.getDecimalMinutes(),this.getDecimalSeconds(),":");return e==="ISO"?"T"+s+"."+this.formatNum(this.getDecimalMilliseconds(),"00","0")+"Z":s}toDecimalString(e){return e==="ISO"?this.toDecimalDateString(e)+this.toDecimalTimeString(e):this.toDecimalDateString()+" "+this.toDecimalTimeString()}}function ye(a,e,s){const t=a.slice();return t[2]=e[s],t[4]=s,t}function Me(a){let e,s=a[4]+1+"",t,o;return{c(){e=p("span"),t=j(s),this.h()},l(n){e=y(n,"SPAN",{class:!0});var c=M(e);t=O(c,s),c.forEach(u),this.h()},h(){m(e,"class",o=""+(Ee(`day day-${a[4]}`)+" svelte-1dtjzxk")),C(e,"current-day",a[4]===a[0].getDecimalDate())},m(n,c){U(n,e,c),i(e,t)},p(n,c){c&1&&C(e,"current-day",n[4]===n[0].getDecimalDate())},d(n){n&&u(e)}}}function Te(a){let e,s,t=a[1][a[0].getDecimalMonth()]+"",o,n,c,g,f,T,Y,S,k,D,h,b,_,l,d,r,w,z,P,F,V,W,q,R,K,Z,H=Array(a[0].getDecimalDaysOfMonth()),A=[];for(let E=0;E<H.length;E+=1)A[E]=Me(ye(a,H,E));return{c(){e=p("div"),s=p("div"),o=j(t),n=N(),c=p("span"),g=j("Mon"),f=N(),T=p("span"),Y=j("Tue"),S=N(),k=p("span"),D=j("Wed"),h=N(),b=p("span"),_=j("Thu"),l=N(),d=p("span"),r=j("Fri"),w=N(),z=p("span"),P=j("Sat"),F=N(),V=p("span"),W=j("Sun"),q=N(),R=p("span"),K=j("YD"),Z=N();for(let E=0;E<A.length;E+=1)A[E].c();this.h()},l(E){e=y(E,"DIV",{class:!0});var v=M(e);s=y(v,"DIV",{class:!0});var $=M(s);o=O($,t),$.forEach(u),n=I(v),c=y(v,"SPAN",{class:!0});var L=M(c);g=O(L,"Mon"),L.forEach(u),f=I(v),T=y(v,"SPAN",{class:!0});var te=M(T);Y=O(te,"Tue"),te.forEach(u),S=I(v),k=y(v,"SPAN",{class:!0});var se=M(k);D=O(se,"Wed"),se.forEach(u),h=I(v),b=y(v,"SPAN",{class:!0});var ae=M(b);_=O(ae,"Thu"),ae.forEach(u),l=I(v),d=y(v,"SPAN",{class:!0});var le=M(d);r=O(le,"Fri"),le.forEach(u),w=I(v),z=y(v,"SPAN",{class:!0});var ne=M(z);P=O(ne,"Sat"),ne.forEach(u),F=I(v),V=y(v,"SPAN",{class:!0});var ie=M(V);W=O(ie,"Sun"),ie.forEach(u),q=I(v),R=y(v,"SPAN",{class:!0});var re=M(R);K=O(re,"YD"),re.forEach(u),Z=I(v);for(let B=0;B<A.length;B+=1)A[B].l(v);v.forEach(u),this.h()},h(){m(s,"class","month svelte-1dtjzxk"),m(c,"class","weekday svelte-1dtjzxk"),m(T,"class","weekday svelte-1dtjzxk"),m(k,"class","weekday svelte-1dtjzxk"),m(b,"class","weekday svelte-1dtjzxk"),m(d,"class","weekday svelte-1dtjzxk"),m(z,"class","weekday svelte-1dtjzxk"),m(V,"class","weekday svelte-1dtjzxk"),m(R,"class","weekday svelte-1dtjzxk"),m(e,"class","calendar svelte-1dtjzxk")},m(E,v){U(E,e,v),i(e,s),i(s,o),i(e,n),i(e,c),i(c,g),i(e,f),i(e,T),i(T,Y),i(e,S),i(e,k),i(k,D),i(e,h),i(e,b),i(b,_),i(e,l),i(e,d),i(d,r),i(e,w),i(e,z),i(z,P),i(e,F),i(e,V),i(V,W),i(e,q),i(e,R),i(R,K),i(e,Z);for(let $=0;$<A.length;$+=1)A[$].m(e,null)},p(E,[v]){if(v&1&&t!==(t=E[1][E[0].getDecimalMonth()]+"")&&oe(o,t),v&1){H=Array(E[0].getDecimalDaysOfMonth());let $;for($=0;$<H.length;$+=1){const L=ye(E,H,$);A[$]?A[$].p(L,v):(A[$]=Me(L),A[$].c(),A[$].m(e,null))}for(;$<A.length;$+=1)A[$].d(1);A.length=H.length}},i:G,o:G,d(E){E&&u(e),ee(A,E)}}}function $e(a,e,s){const t=["January","February","March","April","Mai","June","Sol","July","August","September","October","November","December"];let{date:o=new J}=e;return a.$$set=n=>{"date"in n&&s(0,o=n.date)},[o,t]}class Ae extends Q{constructor(e){super();X(this,e,$e,Te,x,{date:0})}}function Se(a,e,s){const t=a.slice();return t[10]=e[s],t[12]=s,t}function ke(a,e,s){const t=a.slice();return t[10]=e[s],t[12]=s,t}function be(a){let e,s;return{c(){e=p("div"),this.h()},l(t){e=y(t,"DIV",{class:!0,style:!0}),M(e).forEach(u),this.h()},h(){m(e,"class","step svelte-105bbw9"),m(e,"style",s=`--rotation: ${a[12]/(a[5]*a[6])*360}deg;`),C(e,"major",a[12]%a[6]==0),C(e,"minor",a[0]&&a[12]%5==0)},m(t,o){U(t,e,o)},p(t,o){o&1&&C(e,"minor",t[0]&&t[12]%5==0)},d(t){t&&u(e)}}}function we(a){let e,s,t=(a[12]===0?a[5]:a[12])+"",o,n;return{c(){e=p("div"),s=p("span"),o=j(t),this.h()},l(c){e=y(c,"DIV",{class:!0,style:!0});var g=M(e);s=y(g,"SPAN",{class:!0});var f=M(s);o=O(f,t),f.forEach(u),g.forEach(u),this.h()},h(){m(s,"class","svelte-105bbw9"),m(e,"class","number svelte-105bbw9"),m(e,"style",n=`--rotation: ${a[12]/a[5]*360+(a[0]&&a[1]?180:0)}deg;`)},m(c,g){U(c,e,g),i(e,s),i(s,o)},p(c,g){g&3&&n!==(n=`--rotation: ${c[12]/c[5]*360+(c[0]&&c[1]?180:0)}deg;`)&&m(e,"style",n)},d(c){c&&u(e)}}}function Ne(a){let e,s,t,o,n,c,g,f,T,Y,S,k,D=Array(a[5]*a[6]),h=[];for(let l=0;l<D.length;l+=1)h[l]=be(ke(a,D,l));let b=Array(a[5]),_=[];for(let l=0;l<b.length;l+=1)_[l]=we(Se(a,b,l));return{c(){e=p("section");for(let l=0;l<h.length;l+=1)h[l].c();s=N();for(let l=0;l<_.length;l+=1)_[l].c();t=N(),o=p("div"),n=p("div"),g=N(),f=p("div"),Y=N(),S=p("div"),this.h()},l(l){e=y(l,"SECTION",{class:!0});var d=M(e);for(let w=0;w<h.length;w+=1)h[w].l(d);s=I(d);for(let w=0;w<_.length;w+=1)_[w].l(d);t=I(d),o=y(d,"DIV",{class:!0});var r=M(o);n=y(r,"DIV",{class:!0,style:!0}),M(n).forEach(u),g=I(r),f=y(r,"DIV",{class:!0,style:!0}),M(f).forEach(u),Y=I(r),S=y(r,"DIV",{class:!0,style:!0}),M(S).forEach(u),r.forEach(u),d.forEach(u),this.h()},h(){m(n,"class","hours svelte-105bbw9"),m(n,"style",c=`--rotation: ${a[4]*360}deg;`),m(f,"class","minutes svelte-105bbw9"),m(f,"style",T=`--rotation: ${a[3]*360}deg;`),m(S,"class","seconds svelte-105bbw9"),m(S,"style",k=`--rotation: ${a[2]*360}deg;`),m(o,"class","hands svelte-105bbw9"),m(e,"class","clock svelte-105bbw9"),C(e,"decimal",a[0]),C(e,"inverted",a[0]&&a[1])},m(l,d){U(l,e,d);for(let r=0;r<h.length;r+=1)h[r].m(e,null);i(e,s);for(let r=0;r<_.length;r+=1)_[r].m(e,null);i(e,t),i(e,o),i(o,n),i(o,g),i(o,f),i(o,Y),i(o,S)},p(l,[d]){if(d&97){D=Array(l[5]*l[6]);let r;for(r=0;r<D.length;r+=1){const w=ke(l,D,r);h[r]?h[r].p(w,d):(h[r]=be(w),h[r].c(),h[r].m(e,s))}for(;r<h.length;r+=1)h[r].d(1);h.length=D.length}if(d&35){b=Array(l[5]);let r;for(r=0;r<b.length;r+=1){const w=Se(l,b,r);_[r]?_[r].p(w,d):(_[r]=we(w),_[r].c(),_[r].m(e,t))}for(;r<_.length;r+=1)_[r].d(1);_.length=b.length}d&16&&c!==(c=`--rotation: ${l[4]*360}deg;`)&&m(n,"style",c),d&8&&T!==(T=`--rotation: ${l[3]*360}deg;`)&&m(f,"style",T),d&4&&k!==(k=`--rotation: ${l[2]*360}deg;`)&&m(S,"style",k),d&1&&C(e,"decimal",l[0]),d&3&&C(e,"inverted",l[0]&&l[1])},i:G,o:G,d(l){l&&u(e),ee(h,l),ee(_,l)}}}function Ie(a,e,s){let{decimal:t=!1}=e,{invertedDecimal:o=!1}=e,n=t?new J:new Date,c=0,g=0,f=0;const T=t?10:12,Y=t?10:5,S=(D,h)=>D%1>h?Math.ceil(D)+h:Math.floor(D)+h,k=()=>{n instanceof Date?(s(2,c=S(c,n.getSeconds()/60)),s(3,g=S(g,n.getMinutes()/60)),s(4,f=S(f,n.getHours()%12/12))):(s(2,c=S(c,n.getDecimalSeconds()/100)),s(3,g=S(g,n.getDecimalMinutes()/100)),s(4,f=S(f,(n.getDecimalHours()+n.getDecimalMinutes()/100+n.getDecimalSeconds()/1e4)/10)))};return k(),ce(()=>{const D=()=>{if(t){n=new J;const h=1e3-n.getDecimalMilliseconds();setTimeout(D,pe(h))}else{n=new Date;const h=1e3-n.getMilliseconds();setTimeout(D,h)}k()};D()}),a.$$set=D=>{"decimal"in D&&s(0,t=D.decimal),"invertedDecimal"in D&&s(1,o=D.invertedDecimal)},[t,o,c,g,f,T,Y]}class Ye extends Q{constructor(e){super();X(this,e,Ie,Ne,x,{decimal:0,invertedDecimal:1})}}function je(a){let e,s,t,o=a[0].toDecimalString()+"",n,c,g,f,T,Y,S,k,D,h,b,_;return k=new Ye({props:{decimal:!0}}),b=new Ae({}),{c(){e=p("main"),s=p("center"),t=p("strong"),n=j(o),c=N(),g=p("div"),f=p("div"),T=p("h2"),Y=j("Decimal"),S=N(),he(k.$$.fragment),D=N(),h=p("div"),he(b.$$.fragment),this.h()},l(l){e=y(l,"MAIN",{});var d=M(e);s=y(d,"CENTER",{});var r=M(s);t=y(r,"STRONG",{});var w=M(t);n=O(w,o),w.forEach(u),r.forEach(u),c=I(d),g=y(d,"DIV",{class:!0});var z=M(g);f=y(z,"DIV",{class:!0});var P=M(f);T=y(P,"H2",{});var F=M(T);Y=O(F,"Decimal"),F.forEach(u),S=I(P),de(k.$$.fragment,P),P.forEach(u),D=I(z),h=y(z,"DIV",{class:!0});var V=M(h);de(b.$$.fragment,V),V.forEach(u),z.forEach(u),d.forEach(u),this.h()},h(){m(f,"class","clock svelte-1weog9o"),m(h,"class","clock svelte-1weog9o"),m(g,"class","clocks svelte-1weog9o")},m(l,d){U(l,e,d),i(e,s),i(s,t),i(t,n),i(e,c),i(e,g),i(g,f),i(f,T),i(T,Y),i(f,S),ue(k,f,null),i(g,D),i(g,h),ue(b,h,null),_=!0},p(l,[d]){(!_||d&1)&&o!==(o=l[0].toDecimalString()+"")&&oe(n,o)},i(l){_||(me(k.$$.fragment,l),me(b.$$.fragment,l),_=!0)},o(l){ge(k.$$.fragment,l),ge(b.$$.fragment,l),_=!1},d(l){l&&u(e),fe(k),fe(b)}}}function Oe(a,e,s){let t=new J;return ce(()=>{const o=()=>{s(0,t=new J);const n=1e3-t.getDecimalMilliseconds();setTimeout(o,pe(n))};o()}),[t]}class Ve extends Q{constructor(e){super();X(this,e,Oe,je,x,{})}}export{Ve as default};
