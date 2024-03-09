"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{1620:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(7437),a=n(9721),r=n(2035),o=n(6818),c=n(9625),s=n(6629),l=n(4033),u=n(2265),d=n(1955);function v(e){let{id:t,modalId:n,reload:v}=e,y=!!t,p=(0,l.useRouter)(),[f,h]=(0,u.useState)(""),[m,b]=(0,u.useState)(0),[I,g]=(0,u.useState)(""),[F,M]=(0,u.useState)(""),[w,C]=(0,u.useState)(""),[B,x]=(0,u.useState)(s.FinancialMovementType.EXPENSE),[_,P]=(0,u.useState)([]),[j,R]=(0,u.useState)([]),[E,S]=(0,u.useState)(!1);async function O(e){e.preventDefault(),S(!0);let{statusCode:i}=y?await r():await a();async function a(){return await (0,d.g)({description:f,value:m,date:I,categoryId:F,subcategoryId:null,accountId:w,type:B,tenantId:""})}async function r(){return await (0,d.S1)(t,{description:f,value:m,date:I,categoryId:F,subcategoryId:null,accountId:w,type:B})}(201===i||200===i)&&(p.refresh(),p.push(o.X.FINANCIAL_MOVEMENT_PATH),n&&((0,c.Mr)(n),v&&v())),S(!1)}return(0,u.useEffect)(()=>{async function e(){S(!0),P(await (0,a.T8)()),S(!1)}async function n(){S(!0),R(await (0,r.CP)()),S(!1)}(async function(){if(!y)return;S(!0);let e=await (0,d._l)(t);e&&(h(e.description),b(e.value),g(e.date),M(e.categoryId),C(e.accountId),x(e.type),S(!1))})(),e(),n()},[t,y]),(0,i.jsx)("form",{onSubmit:O,children:(0,i.jsxs)("fieldset",{className:"form-control gap-2",children:[(0,i.jsxs)("legend",{children:["Input the details of the ",y?"updated":"new"," financial movement"]}),(0,i.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-2",children:[(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"description",children:(0,i.jsx)("span",{className:"label-text",children:"Description"})}),(0,i.jsx)("input",{id:"description",type:"text",placeholder:"financial movement description",className:"input input-bordered w-full",onChange:e=>h(e.target.value),value:f,required:!0})]}),(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"type",children:(0,i.jsx)("span",{className:"label-text",children:"Type"})}),(0,i.jsxs)("select",{id:"type",className:"select select-bordered w-full",onChange:e=>x(e.target.value),value:B,required:!0,children:[(0,i.jsx)("option",{value:s.FinancialMovementType.EXPENSE,children:s.FinancialMovementType.EXPENSE}),(0,i.jsx)("option",{value:s.FinancialMovementType.INCOME,children:s.FinancialMovementType.INCOME})]})]})]}),(0,i.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-2",children:[(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"value",children:(0,i.jsx)("span",{className:"label-text",children:"Value"})}),(0,i.jsx)("input",{id:"value",min:"0.01",step:"0.01",type:"number",placeholder:"financial movement value",className:"input input-bordered w-full",onChange:e=>b(Number(e.target.value)),value:m,required:!0})]}),(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"date",children:(0,i.jsx)("span",{className:"label-text",children:"Date"})}),(0,i.jsx)("input",{id:"date",type:"date",className:"input input-bordered w-full",onChange:e=>g(e.target.value),value:I,required:!0})]})]}),(0,i.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-2",children:[(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"category",children:(0,i.jsx)("span",{className:"label-text",children:"Category"})}),(0,i.jsxs)("select",{id:"category",className:"select select-bordered w-full",onChange:e=>M(e.target.value),value:F,required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select the category"}),j.filter(e=>e.type.toString()===B.toString()).map(e=>(0,i.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,i.jsxs)("div",{className:"form-control w-full",children:[(0,i.jsx)("label",{className:"label",htmlFor:"account",children:(0,i.jsx)("span",{className:"label-text",children:"Account"})}),(0,i.jsxs)("select",{id:"account",className:"select select-bordered w-full",onChange:e=>C(e.target.value),value:w,required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select the account"}),_.map(e=>(0,i.jsx)("option",{value:e.id,children:e.name},e.id))]})]})]}),(0,i.jsx)("button",{className:"btn",disabled:E,children:y?"Edit":"Create"})]})})}},1955:function(e,t,n){n.d(t,{Pi:function(){return y},S1:function(){return f},Su:function(){return d},_l:function(){return p},g:function(){return v}});var i=n(5028),a=n(7745),r=n(155),o=n(550),c=n(4990),s=n(5500),l=n(9959);let u="1695589532425";async function d(e,t){try{let n=a.N.adapt({body:void 0,params:{},headers:{},query:{startDate:e,endDate:t}}),r=await (0,c.Uo)(u,i.Z.Instance),o=await (0,s.wI)(r),l=await o.handle(n);return a.p.adapt(l).body}catch(e){return console.error(e),[]}}async function v(e){let t=a.N.adapt({body:e,headers:{},params:{},query:{}}),n=await (0,c.Uo)(u,i.Z.Instance),d=await (0,o.VV)(u,i.Z.Instance),v=await (0,l.Z)(i.Z.Instance),y=(0,r.ng)(u,i.Z.Instance),p=await (0,s.z6)(n,d,v,y),f=await p.handle(t);return a.p.adapt(f)}async function y(e){let t=a.N.adapt({params:{id:e},headers:{},query:{},body:void 0}),n=await (0,c.Uo)(u,i.Z.Instance),o=(0,r.ng)(u,i.Z.Instance),l=await (0,s.pZ)(n,o),d=await l.handle(t);return a.p.adapt(d)}async function p(e){try{let t=a.N.adapt({params:{id:e},headers:{},query:{},body:void 0}),n=await (0,c.Uo)(u,i.Z.Instance),r=await (0,s.wY)(n),o=await r.handle(t);return a.p.adapt(o).body}catch(e){return console.error(e),null}}async function f(e,t){let n=a.N.adapt({body:t,params:{id:e},headers:{},query:{}}),d=await (0,c.Uo)(u,i.Z.Instance),v=await (0,o.VV)(u,i.Z.Instance),y=await (0,l.Z)(i.Z.Instance),p=(0,r.ng)(u,i.Z.Instance),f=await (0,s.iP)(d,v,y,p),h=await f.handle(n);return a.p.adapt(h)}},2952:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovementTestFixture=void 0;let i=n(314),a=n(6629);class r{static buildFinancialMovementProps(){return{description:r.description1,value:r.value1,date:r.date1,categoryId:r.categoryId1,subcategoryId:null,accountId:r.accountId1,type:r.typeExpense}}static buildFinancialMovement(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.buildFinancialMovementProps(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.id1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.tenantId;return a.FinancialMovement.create(e,t,n)}static buildCreateFinancialMovementInput(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.description1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.typeExpense,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.value1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.date1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.tenantId,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:r.accountId1,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r.categoryId1;return{description:e,type:t,value:n,date:i,tenantId:a,accountId:o,categoryId:c,subcategoryId:null}}static buildUpdateFinancialMovementInput(){let{description:e,type:t,value:n,date:i,accountId:a,categoryId:o,subcategoryId:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.buildFinancialMovementProps();return{description:e,type:t,value:n,date:i,accountId:a,categoryId:o,subcategoryId:c}}static buildFinancialMovementInMemoryItem(){let{description:e,type:t,value:n,accountId:i,categoryId:a,subcategoryId:r,date:o,id:c,tenantId:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.buildFinancialMovement();return{description:e,type:t,value:n,accountId:i,categoryId:a,subcategoryId:r,date:o,id:c,tenantId:s}}}t.FinancialMovementTestFixture=r,r.tenantId="1",r.idInvalid="0",r.id1="1",r.description1="description1",r.value1=10,r.date1="2023-09-01",r.categoryId1="1",r.subcategoryId1="1",r.accountId1="1",r.typeExpense=i.FinancialMovementType.EXPENSE,r.id2="2",r.description2="description2",r.value2=20,r.date2="2023-09-15",r.categoryId2="2",r.subcategoryId2="2",r.accountId2="2",r.typeIncome=i.FinancialMovementType.INCOME,r.id3="3",r.description3="description3",r.value3=30,r.date3="2023-09-30",r.categoryId3="3",r.accountId3="3",r.typeTransfer=i.FinancialMovementType.TRANSFER},314:function(e,t){var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovementType=void 0,(i=n||(t.FinancialMovementType=n={})).EXPENSE="Expense",i.INCOME="Income",i.TRANSFER="Transfer"},7390:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovement=void 0;let i=n(7730);class a extends i.TenantEntity{static create(e,t,n){return new a(e,t,n)}get description(){return this.props.description}updateDescription(e){this.description=e}set description(e){this.props.description=e}get value(){return this.props.value}updateValue(e){this.value=e}set value(e){this.props.value=e}get date(){return this.props.date}updateDate(e){this.date=e}set date(e){this.validateDateProp(e),this.props.date=e}get categoryId(){return this.props.categoryId}updateCategoryId(e){this.categoryId=e}set categoryId(e){this.props.categoryId=e}get subcategoryId(){return this.props.subcategoryId}updateSubcategoryId(e){this.subcategoryId=e}set subcategoryId(e){this.props.subcategoryId=e}get accountId(){return this.props.accountId}updateAccountId(e){this.accountId=e}set accountId(e){this.props.accountId=e}get type(){return this.props.type}updateType(e){this.type=e}set type(e){this.props.type=e}validateDateProp(e){i.PropsValidation.validateString(e).name("date").notNull().isDate()}toJSON(){return Object.assign({id:this.id},this.props)}constructor(e,t,n){if(super(t,n),!e){this.props={};return}i.PropsValidation.validateString(e.description).name("description").notNull(),i.PropsValidation.validateNumber(e.value).name("value").notNull().lessOrEqual(0),this.validateDateProp(e.date),i.PropsValidation.validateString(e.categoryId).name("category id").notNull(),i.PropsValidation.validateString(e.accountId).name("account id").notNull(),i.PropsValidation.validateString(e.type).name("type").notNull(),this.props=Object.assign({},e)}}t.FinancialMovement=a},6629:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovement=t.FinancialMovementType=t.FinancialMovementTestFixture=void 0;var i=n(2952);Object.defineProperty(t,"FinancialMovementTestFixture",{enumerable:!0,get:function(){return i.FinancialMovementTestFixture}});var a=n(314);Object.defineProperty(t,"FinancialMovementType",{enumerable:!0,get:function(){return a.FinancialMovementType}});var r=n(7390);Object.defineProperty(t,"FinancialMovement",{enumerable:!0,get:function(){return r.FinancialMovement}})},9413:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateFinancialMovementRepository=void 0;let i=n(164),a=n(1081);t.fabricateFinancialMovementRepository=(e,t)=>t?new a.FinancialMovementSupabaseRepository(t):i.FinancialMovementInMemoryRepository.Instance(e)},164:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovementInMemoryRepository=void 0;let a=n(1460),r=n(7390);class o{static Instance(e){return this._instance?(this._instance.tenantId=e,this._instance):this._instance=new this(e)}findAllByDateRange(e,t){return i(this,void 0,void 0,function*(){return this.filterByTenantId().filter(n=>new Date("".concat(n.date,"T00:00")).getTime()>=e.getTime()&&new Date("".concat(n.date,"T00:00")).getTime()<=t.getTime()).map(e=>r.FinancialMovement.create(this.getFinancialMovementProps(e),e.id))})}insert(e){return i(this,void 0,void 0,function*(){let t=Object.assign(Object.assign({},e.props),{id:"id-".concat(Date.now().toString()),tenantId:this.tenantId});return this.items.push(t),r.FinancialMovement.create(this.getFinancialMovementProps(t),t.id)})}findById(e){return i(this,void 0,void 0,function*(){let t=this.filterByTenantId().find(t=>t.id===e);return t?r.FinancialMovement.create(this.getFinancialMovementProps(t),t.id):void 0})}delete(e){return i(this,void 0,void 0,function*(){if(!this.filterByTenantId().length)throw new a.NotFoundError("Item does not exists");this.items=this.items.filter(t=>t.id!==e)})}update(e){let{id:t,description:n,value:o,date:c,categoryId:s,subcategoryId:l,accountId:u,type:d}=e;return i(this,void 0,void 0,function*(){if(!this.filterByTenantId().length)throw new a.NotFoundError("Item does not exists");this.items=this.items.map(e=>e.id===t?Object.assign(Object.assign({},e),{description:n,value:o,date:c,categoryId:s,subcategoryId:l,accountId:u,type:d}):e);let e=this.items.find(e=>e.id===t);return r.FinancialMovement.create(this.getFinancialMovementProps(e),e.id)})}getFinancialMovementProps(e){let{accountId:t,categoryId:n,subcategoryId:i,description:a,date:r,type:o,value:c}=e;return{accountId:t,categoryId:n,subcategoryId:i,description:a,date:r,type:o,value:c}}filterByTenantId(){return this.items.filter(e=>e.tenantId===this.tenantId)}constructor(e){this.tenantId=e,this.items=[]}}t.FinancialMovementInMemoryRepository=o},4990:function(e,t,n){t.Uo=void 0;var i=n(9413);Object.defineProperty(t,"Uo",{enumerable:!0,get:function(){return i.fabricateFinancialMovementRepository}}),n(164),n(1081)},1081:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.FinancialMovementSupabaseRepository=void 0;let a=n(1460),r=n(3760),o=n(6629),c="financial-movement";class s{findAllByDateRange(e,t){return i(this,void 0,void 0,function*(){let{data:n,error:i}=yield this.supabase.from(c).select().gte("date",e.toISOString()).lte("date",t.toISOString());if(i)throw new a.InternalServerError(i.message);return n.map(e=>o.FinancialMovement.create(this.getFinancialMovementProps(e),e.id))})}insert(e){let{description:t,value:n,date:a,categoryId:r,subcategoryId:c,accountId:s,type:l}=e;return i(this,void 0,void 0,function*(){let e=yield this.repository.inserter.insert({description:t,value:n,date:a,category_id:r,account_id:s,subcategory_id:c,type:l});return o.FinancialMovement.create(this.getFinancialMovementProps(e),e.id)})}findById(e){return i(this,void 0,void 0,function*(){let t=yield this.repository.finderById.findById(e);return t?o.FinancialMovement.create(this.getFinancialMovementProps(t),t.id):void 0})}delete(e){return i(this,void 0,void 0,function*(){yield this.repository.deleter.delete(e)})}update(e){let{id:t,description:n,value:r,date:c,categoryId:s,subcategoryId:l,accountId:u,type:d}=e;return i(this,void 0,void 0,function*(){if(!t)throw new a.BadRequestError("id should not be empty");let e=yield this.repository.updater.update({id:t,description:n,value:r,date:c,category_id:s,subcategory_id:l,account_id:u,type:d});return o.FinancialMovement.create(this.getFinancialMovementProps(e),e.id)})}getFinancialMovementProps(e){let{account_id:t,category_id:n,subcategory_id:i,description:a,date:r,type:o,value:c}=e;return{accountId:t,categoryId:null!=n?n:"DELETED",subcategoryId:i,description:a,date:r,type:o,value:c}}constructor(e){this.supabase=e;let t=new r.CoreInsertSupabaseRepository(e,c),n=new r.CoreFindByIdSupabaseRepository(e,c),i=new r.CoreDeleteSupabaseRepository(e,c),a=new r.CoreUpdateSupabaseRepository(e,c);this.repository={inserter:t,finderById:n,deleter:i,updater:a}}}t.FinancialMovementSupabaseRepository=s},3600:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CreateFinancialMovementController=void 0;let a=n(1460),r=n(6129);class o{handle(e){return i(this,void 0,void 0,function*(){try{let t=yield this.useCase.execute(e.body);return r.ResponseHttp.created(t)}catch(e){if(e instanceof a.BadRequestError)return r.ResponseHttp.badRequest(e);if(e instanceof a.NotFoundError)return r.ResponseHttp.notFound(e);return r.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.CreateFinancialMovementController=o},7265:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateCreateFinancialMovementController=void 0;let a=n(3600),r=n(8866);t.fabricateCreateFinancialMovementController=(e,t,n,o)=>i(void 0,void 0,void 0,function*(){return new a.CreateFinancialMovementController(new r.CreateFinancialMovementUseCase(e,t,n,o))})},8866:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CreateFinancialMovementUseCase=void 0;let a=n(1460),r=n(6629);class o{execute(e){return i(this,void 0,void 0,function*(){if(e.type===r.FinancialMovementType.TRANSFER)throw new a.BadRequestError("Invalid type!");return yield this.validateCategory(e),e.subcategoryId&&(yield this.validateSubcategory(e)),yield this.validateAndUpdateAccount(e),yield this.createFinancialMovement(e)})}createFinancialMovement(e){let{accountId:t,categoryId:n,subcategoryId:a,description:o,value:c,type:s,date:l}=e;return i(this,void 0,void 0,function*(){let e=r.FinancialMovement.create({accountId:t,categoryId:n,subcategoryId:a,description:o,value:c,type:s,date:l});return(yield this.repository.insert(e)).toJSON()})}validateAndUpdateAccount(e){let{accountId:t,type:n,value:o}=e;return i(this,void 0,void 0,function*(){let e=yield this.accountRepository.findById(t);if(!e)throw new a.BadRequestError("Selected account does not exists!");switch(n){case r.FinancialMovementType.EXPENSE:e.subtractCurrentBalance(o);break;case r.FinancialMovementType.INCOME:e.sumCurrentBalance(o)}yield this.accountRepository.update(e)})}validateCategory(e){let{categoryId:t,type:n}=e;return i(this,void 0,void 0,function*(){let e=yield this.categoryRepository.findById(t);if(!e)throw new a.BadRequestError("Selected category does not exists!");if(n.valueOf()!==e.type.valueOf())throw new a.BadRequestError("Invalid category!")})}validateSubcategory(e){let{subcategoryId:t,categoryId:n}=e;return i(this,void 0,void 0,function*(){if(!(yield this.subcategoryRepository.findByIdAndCategoryId(t,n)))throw new a.BadRequestError("Selected subcategory does not exists!")})}constructor(e,t,n,i){this.repository=e,this.categoryRepository=t,this.subcategoryRepository=n,this.accountRepository=i}}t.CreateFinancialMovementUseCase=o},6371:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateFinancialMovementUseCase=t.fabricateCreateFinancialMovementController=t.CreateFinancialMovementController=void 0;var i=n(3600);Object.defineProperty(t,"CreateFinancialMovementController",{enumerable:!0,get:function(){return i.CreateFinancialMovementController}});var a=n(7265);Object.defineProperty(t,"fabricateCreateFinancialMovementController",{enumerable:!0,get:function(){return a.fabricateCreateFinancialMovementController}});var r=n(8866);Object.defineProperty(t,"CreateFinancialMovementUseCase",{enumerable:!0,get:function(){return r.CreateFinancialMovementUseCase}})},8126:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteFinancialMovementByIdController=void 0;let a=n(1460),r=n(6129);class o{handle(e){return i(this,void 0,void 0,function*(){try{yield this.useCase.execute(e.params.id)}catch(e){if(e instanceof a.NotFoundError)return r.ResponseHttp.notFound(e);if(e instanceof a.BadRequestError)return r.ResponseHttp.badRequest(e);return r.ResponseHttp.serverError(e)}return r.ResponseHttp.noContent()})}constructor(e){this.useCase=e}}t.DeleteFinancialMovementByIdController=o},5707:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateDeleteFinancialMovementByIdController=void 0;let a=n(8126),r=n(3581);t.fabricateDeleteFinancialMovementByIdController=(e,t)=>i(void 0,void 0,void 0,function*(){return new a.DeleteFinancialMovementByIdController(new r.DeleteFinancialMovementByIdUseCase(e,t))})},3581:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteFinancialMovementByIdUseCase=void 0;let a=n(1460),r=n(6629);class o{execute(e){return i(this,void 0,void 0,function*(){yield this.updateAccountBalance((yield this.getFinancialMovementIfExists(e))),yield this.repository.delete(e)})}updateAccountBalance(e){let{accountId:t,type:n,value:o}=e;return i(this,void 0,void 0,function*(){let e=yield this.accountRepository.findById(t);if(!e)throw new a.BadRequestError("Selected account does not exists!");switch(n){case r.FinancialMovementType.EXPENSE:e.sumCurrentBalance(o);break;case r.FinancialMovementType.INCOME:e.subtractCurrentBalance(o);break;default:throw new a.BadRequestError("Invalid type!")}yield this.accountRepository.update(e)})}getFinancialMovementIfExists(e){return i(this,void 0,void 0,function*(){let t=yield this.repository.findById(e);if(!t)throw new a.BadRequestError("Selected financial movement does not exists!");return t})}constructor(e,t){this.repository=e,this.accountRepository=t}}t.DeleteFinancialMovementByIdUseCase=o},108:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteFinancialMovementByIdUseCase=t.fabricateDeleteFinancialMovementByIdController=t.DeleteFinancialMovementByIdController=void 0;var i=n(8126);Object.defineProperty(t,"DeleteFinancialMovementByIdController",{enumerable:!0,get:function(){return i.DeleteFinancialMovementByIdController}});var a=n(5707);Object.defineProperty(t,"fabricateDeleteFinancialMovementByIdController",{enumerable:!0,get:function(){return a.fabricateDeleteFinancialMovementByIdController}});var r=n(3581);Object.defineProperty(t,"DeleteFinancialMovementByIdUseCase",{enumerable:!0,get:function(){return r.DeleteFinancialMovementByIdUseCase}})},7039:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.GetFinancialMovementByIdController=void 0;let a=n(6129);class r{handle(e){return i(this,void 0,void 0,function*(){try{let t=yield this.useCase.execute(e.params.id);return a.ResponseHttp.ok(t)}catch(e){return a.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.GetFinancialMovementByIdController=r},5187:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateGetFinancialMovementByIdController=void 0;let a=n(7039),r=n(3297);t.fabricateGetFinancialMovementByIdController=e=>i(void 0,void 0,void 0,function*(){return new a.GetFinancialMovementByIdController(new r.GetFinancialMovementByIdUseCase(e))})},3297:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.GetFinancialMovementByIdUseCase=void 0;class i{execute(e){return n(this,void 0,void 0,function*(){let t=yield this.repository.findById(e);return t?t.toJSON():null})}constructor(e){this.repository=e}}t.GetFinancialMovementByIdUseCase=i},2157:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.GetFinancialMovementByIdUseCase=t.fabricateGetFinancialMovementByIdController=t.GetFinancialMovementByIdController=void 0;var i=n(7039);Object.defineProperty(t,"GetFinancialMovementByIdController",{enumerable:!0,get:function(){return i.GetFinancialMovementByIdController}});var a=n(5187);Object.defineProperty(t,"fabricateGetFinancialMovementByIdController",{enumerable:!0,get:function(){return a.fabricateGetFinancialMovementByIdController}});var r=n(3297);Object.defineProperty(t,"GetFinancialMovementByIdUseCase",{enumerable:!0,get:function(){return r.GetFinancialMovementByIdUseCase}})},5500:function(e,t,n){t.iP=t.wI=t.wY=t.pZ=t.z6=void 0;var i=n(6371);Object.defineProperty(t,"z6",{enumerable:!0,get:function(){return i.fabricateCreateFinancialMovementController}});var a=n(108);Object.defineProperty(t,"pZ",{enumerable:!0,get:function(){return a.fabricateDeleteFinancialMovementByIdController}});var r=n(2157);Object.defineProperty(t,"wY",{enumerable:!0,get:function(){return r.fabricateGetFinancialMovementByIdController}});var o=n(8225);Object.defineProperty(t,"wI",{enumerable:!0,get:function(){return o.fabricateListFinancialMovementsByFilterController}});var c=n(8815);Object.defineProperty(t,"iP",{enumerable:!0,get:function(){return c.fabricateUpdateFinancialMovementByIdController}})},8225:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ListFinancialMovementsByFilterUseCase=t.fabricateListFinancialMovementsByFilterController=t.ListFinancialMovementsByFilterController=void 0;var i=n(966);Object.defineProperty(t,"ListFinancialMovementsByFilterController",{enumerable:!0,get:function(){return i.ListFinancialMovementsByFilterController}});var a=n(6760);Object.defineProperty(t,"fabricateListFinancialMovementsByFilterController",{enumerable:!0,get:function(){return a.fabricateListFinancialMovementsByFilterController}});var r=n(2847);Object.defineProperty(t,"ListFinancialMovementsByFilterUseCase",{enumerable:!0,get:function(){return r.ListFinancialMovementsByFilterUseCase}})},966:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.ListFinancialMovementsByFilterController=void 0;let a=n(6129);class r{handle(e){return i(this,void 0,void 0,function*(){try{let t=yield this.useCase.execute(e.query);return a.ResponseHttp.ok(t)}catch(e){return a.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.ListFinancialMovementsByFilterController=r},6760:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateListFinancialMovementsByFilterController=void 0;let a=n(966),r=n(2847);t.fabricateListFinancialMovementsByFilterController=e=>i(void 0,void 0,void 0,function*(){return new a.ListFinancialMovementsByFilterController(new r.ListFinancialMovementsByFilterUseCase(e))})},2847:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.ListFinancialMovementsByFilterUseCase=void 0;class i{execute(e){return n(this,void 0,void 0,function*(){return(yield this.repository.findAllByDateRange(new Date(e.startDate),new Date(e.endDate))).map(e=>e.toJSON())})}constructor(e){this.repository=e}}t.ListFinancialMovementsByFilterUseCase=i},8815:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateFinancialMovementByIdUseCase=t.fabricateUpdateFinancialMovementByIdController=t.UpdateFinancialMovementByIdController=void 0;var i=n(9015);Object.defineProperty(t,"UpdateFinancialMovementByIdController",{enumerable:!0,get:function(){return i.UpdateFinancialMovementByIdController}});var a=n(4234);Object.defineProperty(t,"fabricateUpdateFinancialMovementByIdController",{enumerable:!0,get:function(){return a.fabricateUpdateFinancialMovementByIdController}});var r=n(3610);Object.defineProperty(t,"UpdateFinancialMovementByIdUseCase",{enumerable:!0,get:function(){return r.UpdateFinancialMovementByIdUseCase}})},9015:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateFinancialMovementByIdController=void 0;let a=n(1460),r=n(6129);class o{handle(e){let{body:t,params:{id:n}}=e;return i(this,void 0,void 0,function*(){try{let e=yield this.useCase.execute(n,t);return r.ResponseHttp.ok(e)}catch(e){if(e instanceof a.NotFoundError)return r.ResponseHttp.notFound(e);if(e instanceof a.BadRequestError)return r.ResponseHttp.badRequest(e);return r.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.UpdateFinancialMovementByIdController=o},4234:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateUpdateFinancialMovementByIdController=void 0;let a=n(9015),r=n(3610);t.fabricateUpdateFinancialMovementByIdController=(e,t,n,o)=>i(void 0,void 0,void 0,function*(){return new a.UpdateFinancialMovementByIdController(new r.UpdateFinancialMovementByIdUseCase(e,t,n,o))})},3610:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateFinancialMovementByIdUseCase=void 0;let a=n(1460),r=n(6629);class o{execute(e,t){return i(this,void 0,void 0,function*(){if(t.type===r.FinancialMovementType.TRANSFER)throw new a.BadRequestError("Invalid type!");let n=yield this.getFinancialMovementIfExists(e);if((t.categoryId!==n.categoryId||t.type!==n.type)&&(yield this.validateCategory(t)),t.subcategoryId&&(t.categoryId!==n.categoryId||t.subcategoryId!==n.subcategoryId)&&(yield this.validateSubcategory(t)),t.accountId!==n.accountId||t.value!==n.value||t.type!==n.type){let e=yield this.getAccountIfExists(n.accountId);e=yield this.updateAccountBalance(n,e,!0),t.accountId!==n.accountId&&(e=yield this.getAccountIfExists(t.accountId)),yield this.updateAccountBalance(t,e)}return yield this.updateFinancialMovement(n,t)})}getAccountIfExists(e){return i(this,void 0,void 0,function*(){let t=yield this.accountRepository.findById(e);if(!t)throw new a.BadRequestError("Selected account does not exists!");return t})}updateFinancialMovement(e,t){return i(this,void 0,void 0,function*(){return e.updateDescription(t.description),e.updateType(t.type),e.updateValue(t.value),e.updateDate(t.date),e.updateAccountId(t.accountId),e.updateCategoryId(t.categoryId),e.updateSubcategoryId(t.subcategoryId),(yield this.repository.update(e)).toJSON()})}updateAccountBalance(e,t){let{type:n,value:o}=e,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i(this,void 0,void 0,function*(){switch(n){case r.FinancialMovementType.EXPENSE:c?t.sumCurrentBalance(o):t.subtractCurrentBalance(o);break;case r.FinancialMovementType.INCOME:c?t.subtractCurrentBalance(o):t.sumCurrentBalance(o);break;default:throw new a.BadRequestError("Invalid type!")}return yield this.accountRepository.update(t)})}getFinancialMovementIfExists(e){return i(this,void 0,void 0,function*(){let t=yield this.repository.findById(e);if(!t)throw new a.BadRequestError("Financial movement does not exists");return t})}validateCategory(e){let{categoryId:t,type:n}=e;return i(this,void 0,void 0,function*(){let e=yield this.categoryRepository.findById(t);if(!e)throw new a.BadRequestError("Selected category does not exists!");if(n.valueOf()!==e.type.valueOf())throw new a.BadRequestError("Invalid category!")})}validateSubcategory(e){let{subcategoryId:t,categoryId:n}=e;return i(this,void 0,void 0,function*(){let e=yield this.subcategoryRepository.findByIdAndCategoryId(t,n);if(!e||e.categoryId!==n)throw new a.BadRequestError("Selected subcategory does not exists!")})}constructor(e,t,n,i){this.repository=e,this.categoryRepository=t,this.subcategoryRepository=n,this.accountRepository=i}}t.UpdateFinancialMovementByIdUseCase=o},9959:function(e,t,n){t.Z=void 0,n(6638);var i=n(8515);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i.fabricateSubcategoryRepository}}),n(9399)},8515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateSubcategoryRepository=void 0;let i=n(6638),a=n(9399);t.fabricateSubcategoryRepository=e=>e?new a.SubcategorySupabaseRepository(e):i.SubcategoryInMemoryRepository.Instance()},9399:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,c)}s((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.SubcategorySupabaseRepository=void 0;let a=n(1460),r=n(3760),o=n(8901),c="subcategory";class s{deleteByIdAndCategoryId(e,t){return i(this,void 0,void 0,function*(){yield this.supabase.from(c).delete().eq("id",e).eq("category_id",t)})}findByIdAndCategoryId(e,t){return i(this,void 0,void 0,function*(){let{data:n,error:i}=yield this.supabase.from(c).select().eq("id",e).eq("category_id",t).limit(1).single();if(i){if("PGRST116"===i.code)throw new a.NotFoundError(i.details);throw new a.InternalServerError(i.message)}return n?o.Subcategory.create(this.getSubcategoryProp(n),n.id):void 0})}insert(e){let{name:t,categoryId:n}=e;return i(this,void 0,void 0,function*(){let e=yield this.repository.inserter.insert({name:t,category_id:n});return o.Subcategory.create(this.getSubcategoryProp(e),e.id)})}update(e){let{id:t,name:n}=e;return i(this,void 0,void 0,function*(){if(!t)throw new a.BadRequestError("id should not be empty");let e=yield this.repository.updater.update({id:t,name:n});return o.Subcategory.create(this.getSubcategoryProp(e),e.id)})}getSubcategoryProp(e){let{name:t,category_id:n}=e;return{name:t,categoryId:n}}constructor(e){this.supabase=e;let t=new r.CoreInsertSupabaseRepository(e,c),n=new r.CoreUpdateSupabaseRepository(e,c);this.repository={inserter:t,updater:n}}}t.SubcategorySupabaseRepository=s}}]);