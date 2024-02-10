"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{6818:function(t,e,r){r.d(e,{X:function(){return n}});class n{}n.ROOT_PATH="/",n.SIGN_IN_PATH="/sign-in",n.ACCOUNT_PATH="/accounts",n.ACCOUNT_CREATE_PATH="".concat(n.ACCOUNT_PATH,"/create"),n.ACCOUNT_EDIT_PATH=t=>"".concat(n.ACCOUNT_PATH,"/").concat(t,"/edit"),n.CATEGORY_PATH="/categories",n.CATEGORY_CREATE_PATH="".concat(n.CATEGORY_PATH,"/create"),n.CATEGORY_EDIT_PATH=t=>"".concat(n.CATEGORY_PATH,"/").concat(t,"/edit"),n.FINANCIAL_MOVEMENT_PATH="/financial-movements",n.FINANCIAL_MOVEMENT_CREATE_PATH="".concat(n.FINANCIAL_MOVEMENT_PATH,"/create"),n.FINANCIAL_MOVEMENT_EDIT_PATH=t=>"".concat(n.FINANCIAL_MOVEMENT_PATH,"/").concat(t,"/edit")},5028:function(t,e,r){r.d(e,{Z:function(){return E}});var n=r(3248);class E{static get Instance(){return this._instance||(this._instance=(0,n.eI)("https://lxscsqwykpxofenwjcio.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4c2NzcXd5a3B4b2ZlbndqY2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMDcxNTcsImV4cCI6MjAxNDY4MzE1N30.Kttd9q6VZFjkBoIaQT6uyKj_vnTUSqYYiQYzvc-0UEQ"))}}},7745:function(t,e,r){r.d(e,{N:function(){return E},p:function(){return o}});var n=r(6129);class E{static adapt(t){let{params:e,body:r,headers:E,query:o}=t;return new n.RequestHttp(e,r,E,o)}}class o{static adapt(t){return{...t}}}},706:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Entity=void 0;class r{constructor(t){this.id=t||null}}e.Entity=r},7730:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.PropsValidation=e.TenantEntity=e.Entity=void 0;var n=r(706);Object.defineProperty(e,"Entity",{enumerable:!0,get:function(){return n.Entity}});var E=r(9950);Object.defineProperty(e,"TenantEntity",{enumerable:!0,get:function(){return E.TenantEntity}});var o=r(7844);Object.defineProperty(e,"PropsValidation",{enumerable:!0,get:function(){return o.PropsValidation}})},7844:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.PropsValidation=void 0;let n=r(1460);class E{static validate(t){return new E(t)}static validateString(t){return new o(t)}static validateNumber(t){return new s(t)}static validateArray(t){return new a(t)}name(t){return this.fieldName=t,this}notNull(){var t;if(void 0===this.value||null===this.value)throw new n.BadRequestError("".concat(null!==(t=this.fieldName)&&void 0!==t?t:"Value"," cannot be null"));return this}constructor(t){this.value=t,this.fieldName=null}}e.PropsValidation=E;class o extends E{notNull(){var t;if(super.notNull(),0===this.value.trim().length)throw new n.BadRequestError("".concat(null!==(t=this.fieldName)&&void 0!==t?t:"Value"," cannot be empty"));return this}min(t,e){var r;if(this.value.length<t)throw new n.BadRequestError(null!=e?e:"".concat(null!==(r=this.fieldName)&&void 0!==r?r:"Value"," length cannot be less than ").concat(t));return this}regex(t,e){var r;if(!t.test(this.value))throw new n.BadRequestError(null!=e?e:"".concat(null!==(r=this.fieldName)&&void 0!==r?r:"Value"," does not match the expression"));return this}constructor(t){super(t),this.value=t}}class s extends E{min(t,e){var r;if(this.value<t)throw new n.BadRequestError(null!=e?e:"".concat(null!==(r=this.fieldName)&&void 0!==r?r:"Value"," cannot be less than ").concat(t));return this}lessOrEqual(t,e){var r;if(this.value<=t)throw new n.BadRequestError(null!=e?e:"".concat(null!==(r=this.fieldName)&&void 0!==r?r:"Value"," cannot be less or equal than ").concat(t));return this}constructor(t){super(t),this.value=t}}class a extends E{isEmpty(t){var e;if(this.value&&this.value.length>0)throw new n.BadRequestError(null!=t?t:"".concat(null!==(e=this.fieldName)&&void 0!==e?e:"Value"," should be empty"));return this}constructor(t){super(t),this.value=t}}},9950:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.TenantEntity=void 0;let n=r(706);class E extends n.Entity{constructor(t,e){super(t),this.tenantId=e||null}}e.TenantEntity=E},8642:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.BadRequestError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.BAD_REQUEST,this.name="BadRequest"}}e.BadRequestError=E},6392:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ConflictError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.CONFLICT,this.name="Conflict"}}e.ConflictError=E},6064:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ForbiddenError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.FORBIDDEN,this.name="Forbidden"}}e.ForbiddenError=E},1460:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ConflictError=e.UnauthorizedError=e.InternalServerError=e.ForbiddenError=e.BadRequestError=e.NotFoundError=void 0;var n=r(2452);Object.defineProperty(e,"NotFoundError",{enumerable:!0,get:function(){return n.NotFoundError}});var E=r(8642);Object.defineProperty(e,"BadRequestError",{enumerable:!0,get:function(){return E.BadRequestError}});var o=r(6064);Object.defineProperty(e,"ForbiddenError",{enumerable:!0,get:function(){return o.ForbiddenError}});var s=r(3704);Object.defineProperty(e,"InternalServerError",{enumerable:!0,get:function(){return s.InternalServerError}});var a=r(4235);Object.defineProperty(e,"UnauthorizedError",{enumerable:!0,get:function(){return a.UnauthorizedError}});var i=r(6392);Object.defineProperty(e,"ConflictError",{enumerable:!0,get:function(){return i.ConflictError}})},3704:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.InternalServerError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.INTERNAL_SERVER_ERROR,this.name="InternalServerError"}}e.InternalServerError=E},2452:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.NotFoundError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.NOT_FOUND,this.name="NotFound"}}e.NotFoundError=E},4235:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.UnauthorizedError=void 0;let n=r(6129);class E extends Error{constructor(t){super(t),this.code=n.HttpStatusCode.UNAUTHORIZED,this.name="Unauthorized"}}e.UnauthorizedError=E},3164:function(t,e){var r,n;Object.defineProperty(e,"__esModule",{value:!0}),e.HttpStatusCode=void 0,(n=r||(e.HttpStatusCode=r={}))[n.CONTINUE=100]="CONTINUE",n[n.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",n[n.PROCESSING=102]="PROCESSING",n[n.OK=200]="OK",n[n.CREATED=201]="CREATED",n[n.ACCEPTED=202]="ACCEPTED",n[n.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",n[n.NO_CONTENT=204]="NO_CONTENT",n[n.RESET_CONTENT=205]="RESET_CONTENT",n[n.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",n[n.MULTI_STATUS=207]="MULTI_STATUS",n[n.ALREADY_REPORTED=208]="ALREADY_REPORTED",n[n.IM_USED=226]="IM_USED",n[n.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",n[n.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",n[n.FOUND=302]="FOUND",n[n.SEE_OTHER=303]="SEE_OTHER",n[n.NOT_MODIFIED=304]="NOT_MODIFIED",n[n.USE_PROXY=305]="USE_PROXY",n[n.SWITCH_PROXY=306]="SWITCH_PROXY",n[n.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",n[n.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",n[n.BAD_REQUEST=400]="BAD_REQUEST",n[n.UNAUTHORIZED=401]="UNAUTHORIZED",n[n.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",n[n.FORBIDDEN=403]="FORBIDDEN",n[n.NOT_FOUND=404]="NOT_FOUND",n[n.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",n[n.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",n[n.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",n[n.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",n[n.CONFLICT=409]="CONFLICT",n[n.GONE=410]="GONE",n[n.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",n[n.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",n[n.PAYLOAD_TOO_LARGE=413]="PAYLOAD_TOO_LARGE",n[n.URI_TOO_LONG=414]="URI_TOO_LONG",n[n.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",n[n.RANGE_NOT_SATISFIABLE=416]="RANGE_NOT_SATISFIABLE",n[n.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",n[n.I_AM_A_TEAPOT=418]="I_AM_A_TEAPOT",n[n.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",n[n.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",n[n.LOCKED=423]="LOCKED",n[n.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",n[n.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",n[n.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",n[n.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",n[n.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",n[n.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",n[n.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",n[n.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",n[n.BAD_GATEWAY=502]="BAD_GATEWAY",n[n.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",n[n.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",n[n.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",n[n.VARIANT_ALSO_NEGOTIATES=506]="VARIANT_ALSO_NEGOTIATES",n[n.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",n[n.LOOP_DETECTED=508]="LOOP_DETECTED",n[n.NOT_EXTENDED=510]="NOT_EXTENDED",n[n.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"},6129:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ResponseHttp=e.RequestHttp=e.HttpStatusCode=void 0;var n=r(3164);Object.defineProperty(e,"HttpStatusCode",{enumerable:!0,get:function(){return n.HttpStatusCode}});var E=r(4957);Object.defineProperty(e,"RequestHttp",{enumerable:!0,get:function(){return E.RequestHttp}});var o=r(1967);Object.defineProperty(e,"ResponseHttp",{enumerable:!0,get:function(){return o.ResponseHttp}})},4957:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.RequestHttp=void 0;class r{constructor(t,e,r,n){this.params=t,this.headers=r,this.query=n;try{this.body=JSON.parse(e)}catch(t){this.body=e}}}e.RequestHttp=r},1967:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.ResponseHttp=void 0;let n=r(3164),E={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"*"};class o{static ok(t){return{statusCode:n.HttpStatusCode.OK,body:t,headers:Object.assign({"Content-Type":"application/json"},E)}}static created(t){return{statusCode:n.HttpStatusCode.CREATED,body:t,headers:Object.assign({"Content-Type":"application/json"},E)}}static noContent(){return{statusCode:n.HttpStatusCode.NO_CONTENT,body:"no content",headers:Object.assign({"Content-Type":"application/json"},E)}}static badRequest(t){let{name:e,code:r,message:o}=t;return{statusCode:n.HttpStatusCode.BAD_REQUEST,body:{name:e,code:r,message:o},headers:Object.assign({"Content-Type":"application/json"},E)}}static forbidden(t){let{name:e,code:r,message:o}=t;return{statusCode:n.HttpStatusCode.FORBIDDEN,body:{name:e,code:r,message:o},headers:Object.assign({"Content-Type":"application/json"},E)}}static notFound(t){let{name:e,code:r,message:o}=t;return{statusCode:n.HttpStatusCode.NOT_FOUND,body:{name:e,code:r,message:o},headers:Object.assign({"Content-Type":"application/json"},E)}}static conflict(t){let{name:e,code:r,message:o}=t;return{statusCode:n.HttpStatusCode.CONFLICT,body:{name:e,code:r,message:o},headers:Object.assign({"Content-Type":"application/json"},E)}}static serverError(t){let{name:e,code:r,message:o}=t;return{statusCode:n.HttpStatusCode.INTERNAL_SERVER_ERROR,body:{name:e,code:r,message:o},headers:Object.assign({"Content-Type":"application/json"},E)}}}e.ResponseHttp=o}}]);