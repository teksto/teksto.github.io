var ft=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var X=(s,t,e)=>t in s?ft(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,b=(s,t)=>{for(var e in t||(t={}))dt.call(t,e)&&X(s,e,t[e]);if(Q)for(var e of Q(t))gt.call(t,e)&&X(s,e,t[e]);return s};import{s as pt,a as Mt,c as mt}from"./vendor.f6aae9c7.js";function I(s){return Array.isArray?Array.isArray(s):rt(s)==="[object Array]"}const _t=1/0;function xt(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-_t?"-0":t}function Et(s){return s==null?"":xt(s)}function y(s){return typeof s=="string"}function st(s){return typeof s=="number"}function yt(s){return s===!0||s===!1||It(s)&&rt(s)=="[object Boolean]"}function nt(s){return typeof s=="object"}function It(s){return nt(s)&&s!==null}function M(s){return s!=null}function K(s){return!s.trim().length}function rt(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const St="Incorrect 'index' type",At=s=>`Invalid value for key ${s}`,wt=s=>`Pattern length exceeds max of ${s}.`,Lt=s=>`Missing ${s} property in key`,Rt=s=>`Property 'weight' in key '${s}' must be a positive integer`,J=Object.prototype.hasOwnProperty;class bt{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(n=>{let r=it(n);e+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,e+=r.weight}),this._keys.forEach(n=>{n.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function it(s){let t=null,e=null,n=null,r=1;if(y(s)||I(s))n=s,t=Z(s),e=B(s);else{if(!J.call(s,"name"))throw new Error(Lt("name"));const i=s.name;if(n=i,J.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(Rt(i));t=Z(i),e=B(i)}return{path:t,id:e,weight:r,src:n}}function Z(s){return I(s)?s:s.split(".")}function B(s){return I(s)?s.join("."):s}function kt(s,t){let e=[],n=!1;const r=(i,c,o)=>{if(!!M(i))if(!c[o])e.push(i);else{let h=c[o];const a=i[h];if(!M(a))return;if(o===c.length-1&&(y(a)||st(a)||yt(a)))e.push(Et(a));else if(I(a)){n=!0;for(let l=0,f=a.length;l<f;l+=1)r(a[l],c,o+1)}else c.length&&r(a,c,o+1)}};return r(s,y(t)?t.split("."):t,0),n?e:e[0]}const Nt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ot={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},$t={location:0,threshold:.6,distance:100},vt={useExtendedSearch:!1,getFn:kt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u=b(b(b(b({},Ot),Nt),$t),vt);const Ct=/[^ ]+/g;function Tt(s=1,t=3){const e=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(Ct).length;if(e.has(i))return e.get(i);const c=1/Math.pow(i,.5*s),o=parseFloat(Math.round(c*n)/n);return e.set(i,o),o},clear(){e.clear()}}}class Y{constructor({getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){this.norm=Tt(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,n)=>{this._keysMap[e.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,y(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();y(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!M(t)||K(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach((r,i)=>{let c=this.getFn(t,r.path);if(!!M(c)){if(I(c)){let o=[];const h=[{nestedArrIndex:-1,value:c}];for(;h.length;){const{nestedArrIndex:a,value:l}=h.pop();if(!!M(l))if(y(l)&&!K(l)){let f={v:l,i:a,n:this.norm.get(l)};o.push(f)}else I(l)&&l.forEach((f,d)=>{h.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(!K(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ct(s,t,{getFn:e=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new Y({getFn:e,fieldNormWeight:n});return r.setKeys(s.map(it)),r.setSources(t),r.create(),r}function Ft(s,{getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new Y({getFn:t,fieldNormWeight:e});return i.setKeys(n),i.setIndexRecords(r),i}function T(s,{errors:t=0,currentLocation:e=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/s.length;if(i)return c;const o=Math.abs(n-e);return r?c+o/r:o?1:c}function Pt(s=[],t=u.minMatchCharLength){let e=[],n=-1,r=-1,i=0;for(let c=s.length;i<c;i+=1){let o=s[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=t&&e.push([n,r]),n=-1)}return s[i-1]&&i-n>=t&&e.push([n,i-1]),e}const k=32;function jt(s,t,e,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:h=u.includeMatches,ignoreLocation:a=u.ignoreLocation}={}){if(t.length>k)throw new Error(wt(k));const l=t.length,f=s.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const m=o>1||h,L=m?Array(f):[];let E;for(;(E=s.indexOf(t,p))>-1;){let _=T(t,{currentLocation:E,expectedLocation:d,distance:r,ignoreLocation:a});if(g=Math.min(_,g),p=E+l,m){let S=0;for(;S<l;)L[E+S]=1,S+=1}}p=-1;let N=[],R=1,v=l+f;const ut=1<<l-1;for(let _=0;_<l;_+=1){let S=0,A=v;for(;S<A;)T(t,{errors:_,currentLocation:d+A,expectedLocation:d,distance:r,ignoreLocation:a})<=g?S=A:v=A,A=Math.floor((v-S)/2+S);v=A;let G=Math.max(1,d-A+1),j=c?f:Math.min(d+A,f)+l,O=Array(j+2);O[j+1]=(1<<_)-1;for(let x=j;x>=G;x-=1){let C=x-1,U=e[s.charAt(C)];if(m&&(L[C]=+!!U),O[x]=(O[x+1]<<1|1)&U,_&&(O[x]|=(N[x+1]|N[x])<<1|1|N[x+1]),O[x]&ut&&(R=T(t,{errors:_,currentLocation:C,expectedLocation:d,distance:r,ignoreLocation:a}),R<=g)){if(g=R,p=C,p<=d)break;G=Math.max(1,2*d-p)}}if(T(t,{errors:_+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:a})>g)break;N=O}const P={isMatch:p>=0,score:Math.max(.001,R)};if(m){const _=Pt(L,o);_.length?h&&(P.indices=_):P.isMatch=!1}return P}function Kt(s){let t={};for(let e=0,n=s.length;e<n;e+=1){const r=s.charAt(e);t[r]=(t[r]||0)|1<<n-e-1}return t}class ot{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a},this.pattern=h?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Kt(d),startIndex:g})},f=this.pattern.length;if(f>k){let d=0;const g=f%k,p=f-g;for(;d<p;)l(this.pattern.substr(d,k),d),d+=k;if(g){const m=f-k;l(this.pattern.substr(m),m)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,ignoreLocation:a}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:m,startIndex:L})=>{const{isMatch:E,score:N,indices:R}=jt(t,p,m,{location:r+L,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:h,includeMatches:n,ignoreLocation:a});E&&(d=!0),f+=N,E&&R&&(l=[...l,...R])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class w{constructor(t){this.pattern=t}static isMultiMatch(t){return q(t,this.multiRegex)}static isSingleMatch(t){return q(t,this.singleRegex)}search(){}}function q(s,t){const e=s.match(t);return e?e[1]:null}class Bt extends w{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Dt extends w{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Wt extends w{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class zt extends w{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Ht extends w{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Vt extends w{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class ht extends w{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:h=u.isCaseSensitive,ignoreLocation:a=u.ignoreLocation}={}){super(t);this._bitapSearch=new ot(t,{location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:h,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class at extends w{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,e))>-1;)e=n+i,r.push([n,e-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const D=[Bt,at,Wt,zt,Vt,Ht,Dt,ht],tt=D.length,Yt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,Gt="|";function Ut(s,t={}){return s.split(Gt).map(e=>{let n=e.trim().split(Yt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let h=!1,a=-1;for(;!h&&++a<tt;){const l=D[a];let f=l.isMultiMatch(o);f&&(r.push(new l(f,t)),h=!0)}if(!h)for(a=-1;++a<tt;){const l=D[a];let f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r})}const Qt=new Set([ht.type,at.type]);class Xt{constructor(t,{isCaseSensitive:e=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:h=u.threshold,distance:a=u.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:h,distance:a},this.pattern=e?t:t.toLowerCase(),this.query=Ut(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],o=0;for(let h=0,a=e.length;h<a;h+=1){const l=e[h];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:m,score:L}=g.search(t);if(p){if(i+=1,o+=L,n){const E=g.constructor.type;Qt.has(E)?c=[...c,...m]:c.push(m)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const W=[];function Jt(...s){W.push(...s)}function z(s,t){for(let e=0,n=W.length;e<n;e+=1){let r=W[e];if(r.condition(s,t))return new r(s,t)}return new ot(s,t)}const F={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},V=s=>!!(s[F.AND]||s[F.OR]),Zt=s=>!!s[H.PATH],qt=s=>!I(s)&&nt(s)&&!V(s),et=s=>({[F.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function lt(s,t,{auto:e=!0}={}){const n=r=>{let i=Object.keys(r);const c=Zt(r);if(!c&&i.length>1&&!V(r))return n(et(r));if(qt(r)){const h=c?r[H.PATH]:i[0],a=c?r[H.PATTERN]:r[h];if(!y(a))throw new Error(At(h));const l={keyId:B(h),pattern:a};return e&&(l.searcher=z(a,t)),l}let o={children:[],operator:i[0]};return i.forEach(h=>{const a=r[h];I(a)&&a.forEach(l=>{o.children.push(n(l))})}),o};return V(s)||(s=et(s)),n(s)}function te(s,{ignoreFieldNorm:t=u.ignoreFieldNorm}){s.forEach(e=>{let n=1;e.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),e.score=n})}function ee(s,t){const e=s.matches;t.matches=[],!!M(e)&&e.forEach(n=>{if(!M(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function se(s,t){t.score=s.score}function ne(s,t,{includeMatches:e=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return e&&r.push(ee),n&&r.push(se),s.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return r.length&&r.forEach(h=>{h(i,o)}),o})}class ${constructor(t,e={},n){this.options=b(b({},u),e),this.options.useExtendedSearch,this._keyStore=new bt(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Y))throw new Error(St);this._myIndex=e||ct(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){!M(t)||(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let h=y(t)?y(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return te(h,{ignoreFieldNorm:o}),i&&h.sort(c),st(e)&&e>-1&&(h=h.slice(0,e)),ne(h,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const e=z(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!M(i))return;const{isMatch:h,score:a,indices:l}=e.searchIn(i);h&&r.push({item:i,idx:c,matches:[{score:a,value:i,norm:o,indices:l}]})}),r}_searchLogical(t){const e=lt(t,this.options),n=(o,h,a)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(h,f),searcher:d});return g&&g.length?[{idx:a,item:h,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=n(g,h,a);if(p.length)l.push(...p);else if(o.operator===F.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:h})=>{if(M(o)){let a=n(e,o,h);a.length&&(i[h]||(i[h]={idx:h,item:o,matches:[]},c.push(i[h])),a.forEach(({matches:l})=>{i[h].matches.push(...l)}))}}),c}_searchObjectList(t){const e=z(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!M(c))return;let h=[];n.forEach((a,l)=>{h.push(...this._findMatches({key:a,value:c[l],searcher:e}))}),h.length&&i.push({idx:o,item:c,matches:h})}),i}_findMatches({key:t,value:e,searcher:n}){if(!M(e))return[];let r=[];if(I(e))e.forEach(({v:i,i:c,n:o})=>{if(!M(i))return;const{isMatch:h,score:a,indices:l}=n.searchIn(i);h&&r.push({score:a,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=e,{isMatch:o,score:h,indices:a}=n.searchIn(i);o&&r.push({score:h,key:t,value:i,norm:c,indices:a})}return r}}$.version="6.5.3";$.createIndex=ct;$.parseIndex=Ft;$.config=u;$.parseQuery=lt;Jt(Xt);const re={id:"Serci"},he={setup(s){const t=pt();return t.query.q,t.query.lang,new $,(e,n)=>(Mt(),mt("div",re))}};export{he as default};