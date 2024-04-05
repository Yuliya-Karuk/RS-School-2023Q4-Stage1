var U=Object.defineProperty;var t=(E,r,n)=>r in E?U(E,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):E[r]=n;var O=(E,r,n)=>(t(E,typeof r!="symbol"?r+"":r,n),n);import{e as c}from"./index-DMk6udJU.js";var R;(function(E){E[E.CONTINUE=100]="CONTINUE",E[E.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",E[E.PROCESSING=102]="PROCESSING",E[E.EARLY_HINTS=103]="EARLY_HINTS",E[E.OK=200]="OK",E[E.CREATED=201]="CREATED",E[E.ACCEPTED=202]="ACCEPTED",E[E.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",E[E.NO_CONTENT=204]="NO_CONTENT",E[E.RESET_CONTENT=205]="RESET_CONTENT",E[E.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",E[E.MULTI_STATUS=207]="MULTI_STATUS",E[E.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",E[E.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",E[E.MOVED_TEMPORARILY=302]="MOVED_TEMPORARILY",E[E.SEE_OTHER=303]="SEE_OTHER",E[E.NOT_MODIFIED=304]="NOT_MODIFIED",E[E.USE_PROXY=305]="USE_PROXY",E[E.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",E[E.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",E[E.BAD_REQUEST=400]="BAD_REQUEST",E[E.UNAUTHORIZED=401]="UNAUTHORIZED",E[E.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",E[E.FORBIDDEN=403]="FORBIDDEN",E[E.NOT_FOUND=404]="NOT_FOUND",E[E.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",E[E.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",E[E.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",E[E.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",E[E.CONFLICT=409]="CONFLICT",E[E.GONE=410]="GONE",E[E.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",E[E.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",E[E.REQUEST_TOO_LONG=413]="REQUEST_TOO_LONG",E[E.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",E[E.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",E[E.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",E[E.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",E[E.IM_A_TEAPOT=418]="IM_A_TEAPOT",E[E.INSUFFICIENT_SPACE_ON_RESOURCE=419]="INSUFFICIENT_SPACE_ON_RESOURCE",E[E.METHOD_FAILURE=420]="METHOD_FAILURE",E[E.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",E[E.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",E[E.LOCKED=423]="LOCKED",E[E.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",E[E.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",E[E.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",E[E.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",E[E.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",E[E.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",E[E.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",E[E.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",E[E.BAD_GATEWAY=502]="BAD_GATEWAY",E[E.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",E[E.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",E[E.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",E[E.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",E[E.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"})(R||(R={}));function h(E){return Object.entries(E).map(([n,T])=>`&${n}=${T}`).join("").slice(1)}function e(E,r){const n=E.join("/");let T="";return r&&(T=h(r)),`${n}?${T}`}const I="http://localhost:3000",D=7;class p{constructor(){O(this,"garageEndpoint","garage");O(this,"engineEndpoint","engine");O(this,"carsPerPage","7");O(this,"baseUrl",I)}async getCars(r){const n={_page:r.toString(),_limit:this.carsPerPage},T=e([this.baseUrl,this.garageEndpoint],n);try{const i=await fetch(T,{method:"GET"}),N=await i.json(),_=Number(i.headers.get("X-Total-Count"));return{data:N,totalCount:_}}catch{throw Error("Error")}}async getCar(r){const n=e([this.baseUrl,this.garageEndpoint,String(r)]);try{return await(await fetch(n)).json()}catch{throw Error("NOT FOUND")}}async createCar(r){const n=e([this.baseUrl,this.garageEndpoint]);try{return await(await fetch(n,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)})).json()}catch{throw Error("Error")}}async updateCar(r,n){const T=e([this.baseUrl,this.garageEndpoint,String(r)]);try{return await(await fetch(T,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch{throw Error("NOT FOUND")}}async deleteCar(r){const n=e([this.baseUrl,this.garageEndpoint,String(r)]);try{await fetch(n,{method:"DELETE"})}catch{throw Error("NOT FOUND")}}async startCarEngine(r){const n={id:r.toString(),status:"started"},T=e([this.baseUrl,this.engineEndpoint],n);try{return await(await fetch(T,{method:"PATCH"})).json()}catch{throw Error("NOT FOUND")}}async driveCar(r){const n={id:r.toString(),status:"drive"},T=e([this.baseUrl,this.engineEndpoint],n);return(await fetch(T,{method:"PATCH"})).status!==R.INTERNAL_SERVER_ERROR}async stopCar(r){const n={id:r.toString(),status:"stopped"},T=e([this.baseUrl,this.engineEndpoint],n);try{await fetch(T,{method:"PATCH"})}catch{throw Error("NOT FOUND")}}}const s=new p;class o{constructor(){O(this,"winnersEndpoint","winners");O(this,"winnersPerPage","10");O(this,"baseUrl",I)}async getWinners(r,n,T){const i={_page:r.toString(),_limit:this.winnersPerPage,_sort:n,_order:T},N=e([this.baseUrl,this.winnersEndpoint],i);try{const _=await fetch(N,{method:"GET"}),A=await _.json(),a=Number(_.headers.get("X-Total-Count"));return{data:A,totalCount:a}}catch{throw Error("Error")}}async getWinner(r){const n=e([this.baseUrl,this.winnersEndpoint,String(r)]),T=await fetch(n);return T.status===R.NOT_FOUND?null:await T.json()}async updateWinner(r,n){const T=e([this.baseUrl,this.winnersEndpoint,String(r)]);return await(await fetch(T,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}async createWinner(r){const n=e([this.baseUrl,this.winnersEndpoint]);return await(await fetch(n,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)})).json()}async deleteWinner(r){const n=e([this.baseUrl,this.winnersEndpoint,String(r)]);try{return await fetch(n,{method:"DELETE"})}catch{throw Error("Error")}}}const M=new o,P="car-svg",g="winners",l={"car-svg":"car-svg",carSvg:P,winners:g};class m{constructor(r,n){O(this,"svgNamespace","http://www.w3.org/2000/svg");O(this,"useNamespace","http://www.w3.org/1999/xlink");O(this,"spritePath","./sprite/sprite.svg");O(this,"svg");const T=n%D;this.svg=c(SVGElement,document.createElementNS(this.svgNamespace,"svg"));const i=c(SVGUseElement,document.createElementNS(this.svgNamespace,"use"));i.setAttributeNS(this.useNamespace,"xlink:href",`${this.spritePath}#car${T}`),this.svg.classList.add(l.carSvg),this.setColor(r),this.svg.append(i)}getNode(){return this.svg}setColor(r){this.svg.style.fill=r}}export{s as C,m as S,M as W};
