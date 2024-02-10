"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{2035:function(e,t,r){r.d(t,{CP:function(){return u},n3:function(){return d},sl:function(){return c},uu:function(){return l},yr:function(){return y}});var n=r(5028),o=r(7745),i=r(550),a=r(4879);let s="1695589532425";async function u(){try{let e=(0,i.VV)(s,n.Z.Instance),t=await (0,a.UL)(e),r=await t.handle();return o.p.adapt(r).body}catch(e){return console.error(e),[]}}async function c(e){let t=o.N.adapt({body:e,headers:{},params:{},query:{}}),r=await (0,i.VV)(s,n.Z.Instance),u=await (0,a.dK)(r),c=await u.handle(t);return o.p.adapt(c)}async function l(e){let t=o.N.adapt({params:{id:e},headers:{},query:{},body:void 0}),r=await (0,i.VV)(s,n.Z.Instance),u=await (0,a.dz)(r),c=await u.handle(t);return o.p.adapt(c)}async function d(e){try{let t=o.N.adapt({params:{id:e},headers:{},query:{},body:void 0}),r=await (0,i.VV)(s,n.Z.Instance),u=await (0,a.G7)(r),c=await u.handle(t);return o.p.adapt(c).body}catch(e){return console.error(e),null}}async function y(e,t){let r=o.N.adapt({body:t,params:{id:e},headers:{},query:{}}),u=await (0,i.VV)(s,n.Z.Instance),c=await (0,a.fP)(u),l=await c.handle(r);return o.p.adapt(l)}},9625:function(e,t,r){r.d(t,{K4:function(){return i},Mr:function(){return a},ZP:function(){return o},x8:function(){return s}});var n=r(7437);function o(e){let{id:t,title:r,bodyComponent:o,bodyComponentProps:i}=e;return(0,n.jsxs)("dialog",{id:t,className:"modal modal-bottom sm:modal-middle",children:[(0,n.jsxs)("div",{className:"modal-box",children:[(0,n.jsx)("h3",{className:"font-bold text-lg",children:r}),(0,n.jsx)(o,{...i}),(0,n.jsx)("div",{className:"modal-action",children:(0,n.jsx)("form",{method:"dialog",children:(0,n.jsx)("button",{className:"btn",children:"Close"})})})]}),(0,n.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,n.jsx)("button",{children:"close"})})]})}function i(e){document.getElementById(e).showModal()}function a(e){document.getElementById(e).close()}function s(e,t){document.getElementById(e).addEventListener("close",t)}},3760:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CoreUpdateSupabaseRepository=t.CoreDeleteSupabaseRepository=t.CoreExistsByIdSupabaseRepository=t.CoreFindByIdSupabaseRepository=t.CoreFindAllSupabaseRepository=t.CoreInsertSupabaseRepository=void 0;let o=r(1460);class i{insert(e){return n(this,void 0,void 0,function*(){let{data:t,error:r}=yield this.supabase.from(this.table).insert(e).select().single();if(r)throw new o.InternalServerError(r.message);return t})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreInsertSupabaseRepository=i;class a{findAll(){return n(this,void 0,void 0,function*(){let{data:e,error:t}=yield this.supabase.from(this.table).select();if(t)throw new o.InternalServerError(t.message);return e})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreFindAllSupabaseRepository=a;class s{findById(e){return n(this,void 0,void 0,function*(){let{data:t,error:r}=yield this.supabase.from(this.table).select().eq("id",e).limit(1).single();if(r){if("PGRST116"===r.code)throw new o.NotFoundError(r.details);throw new o.InternalServerError(r.message)}return null!=t?t:void 0})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreFindByIdSupabaseRepository=s;class u{existsById(e){return n(this,void 0,void 0,function*(){let{data:t,error:r}=yield this.supabase.from(this.table).select().eq("id",e).limit(1).single();if(r){if("PGRST116"===r.code)return!1;throw new o.InternalServerError(r.message)}return!!t})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreExistsByIdSupabaseRepository=u;class c{delete(e){return n(this,void 0,void 0,function*(){yield this.supabase.from(this.table).delete().eq("id",e)})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreDeleteSupabaseRepository=c;class l{update(e){return n(this,void 0,void 0,function*(){let{data:t,error:r}=yield this.supabase.from(this.table).update(e).eq("id",e.id).select().single();if(r){if("PGRST116"===r.code)throw new o.NotFoundError(r.details);throw new o.InternalServerError(r.message)}return t})}constructor(e,t){this.supabase=e,this.table=t}}t.CoreUpdateSupabaseRepository=l},4246:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryTestFixture=void 0;let n=r(2949),o=r(7061);class i{static buildCategoryProps(){return{name:i.name1,subcategories:null,type:i.typeExpense}}static buildCategory(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.buildCategoryProps(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.id1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.tenantId;return o.Category.create(e,t,r)}static buildCreateCategoryInput(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.name1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.typeExpense;return{name:e,type:t}}static buildUpdateCategoryInput(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.name2;return{name:e}}static buildCategoryInMemoryItem(){let{id:e,name:t,type:r,tenantId:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.buildCategory();return{name:t,type:r,id:e,tenantId:n}}}t.CategoryTestFixture=i,i.idInvalid="0",i.id1="1",i.id2="2",i.name1="House",i.name2="Cleaning",i.name3="Food",i.typeExpense=n.CategoryType.EXPENSE,i.typeIncome=n.CategoryType.INCOME,i.tenantId="1"},2949:function(e,t){var r,n;Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryType=void 0,(n=r||(t.CategoryType=r={})).EXPENSE="Expense",n.INCOME="Income"},8669:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Category=void 0;let n=r(7730);class o extends n.TenantEntity{static create(e,t,r){return new o(e,t,r)}updateName(e){this.name=e}get name(){return this.props.name}set name(e){this.props.name=e}get type(){return this.props.type}get subcategories(){return this.props.subcategories}toJSON(){return Object.assign({id:this.id},this.props)}constructor(e,t,r){if(super(t,r),!e){this.props={};return}n.PropsValidation.validateString(e.name).name("name").notNull(),n.PropsValidation.validateString(e.type).name("type").notNull(),this.props=Object.assign({},e)}}t.Category=o},7061:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Category=t.CategoryType=t.CategoryTestFixture=void 0;var n=r(4246);Object.defineProperty(t,"CategoryTestFixture",{enumerable:!0,get:function(){return n.CategoryTestFixture}});var o=r(2949);Object.defineProperty(t,"CategoryType",{enumerable:!0,get:function(){return o.CategoryType}});var i=r(8669);Object.defineProperty(t,"Category",{enumerable:!0,get:function(){return i.Category}})},3495:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateCategoryRepository=void 0;let n=r(4960),o=r(6091);t.fabricateCategoryRepository=(e,t)=>t?new o.CategorySupabaseRepository(t):n.CategoryInMemoryRepository.Instance(e)},4960:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryInMemoryRepository=void 0;let o=r(7061),i=r(1460),a=r(8901),s=r(6638);class u{static Instance(e){return this._instance?(this._instance.tenantId=e,this._instance):this._instance=new this(e)}insert(e){return n(this,void 0,void 0,function*(){let t=Object.assign(Object.assign({},e.props),{id:"id-".concat(Date.now().toString()),tenantId:this.tenantId});return this.items.push(t),o.Category.create(this.getCategoryProps(t),t.id)})}findAll(){return n(this,void 0,void 0,function*(){return this.filterByTenantId().map(e=>o.Category.create(this.getCategoryProps(e,this.getSubcategories(e.id)),e.id))})}findById(e){return n(this,void 0,void 0,function*(){let t=this.filterByTenantId().find(t=>t.id===e);return t?o.Category.create(this.getCategoryProps(t,this.getSubcategories(t.id)),t.id):void 0})}delete(e){return n(this,void 0,void 0,function*(){if(!this.filterByTenantId().length)throw new i.NotFoundError("Item does not exists");this.items=this.items.filter(t=>t.id!==e)})}update(e){let{id:t,name:r,type:a}=e;return n(this,void 0,void 0,function*(){if(!this.filterByTenantId().length)throw new i.NotFoundError("Item does not exists");this.items=this.items.map(e=>e.id===t?Object.assign(Object.assign({},e),{name:r,type:a}):e);let e=this.items.find(e=>e.id===t);if(!e)throw new i.NotFoundError("Item does not exists");return o.Category.create(this.getCategoryProps(e),e.id)})}getCategoryProps(e){let{name:t,type:r}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{name:t,type:r,subcategories:n?n.map(e=>{let{id:t,name:r,categoryId:n}=e;return a.Subcategory.create({categoryId:n,name:r},t)}):null}}filterByTenantId(){return this.items.filter(e=>e.tenantId===this.tenantId)}getSubcategories(e){return s.SubcategoryInMemoryRepository.Instance().items.filter(t=>t.categoryId===e)}constructor(e){this.tenantId=e,this.items=[]}}t.CategoryInMemoryRepository=u},550:function(e,t,r){t.VV=void 0;var n=r(3495);Object.defineProperty(t,"VV",{enumerable:!0,get:function(){return n.fabricateCategoryRepository}}),r(4960),r(6091)},6091:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CategorySupabaseRepository=void 0;let o=r(7061),i=r(1460),a=r(3760),s=r(8901),u="category";class c{insert(e){let{name:t,type:r}=e;return n(this,void 0,void 0,function*(){let e=yield this.repository.inserter.insert({name:t,type:r});return o.Category.create(this.getCategoryProps(e),e.id)})}findAll(){return n(this,void 0,void 0,function*(){let{data:e,error:t}=yield this.supabase.from(u).select("*, subcategory(*)");if(t)throw new i.InternalServerError(t.message);return e.map(e=>o.Category.create(this.getCategoryProps(e,e.subcategory),e.id))})}findById(e){return n(this,void 0,void 0,function*(){let{data:t,error:r}=yield this.supabase.from(u).select("*, subcategory(*)").eq("id",e).limit(1).single();if(r){if("PGRST116"===r.code)throw new i.NotFoundError(r.details);throw new i.InternalServerError(r.message)}return t?o.Category.create(this.getCategoryProps(t,t.subcategory),t.id):void 0})}delete(e){return n(this,void 0,void 0,function*(){yield this.repository.deleter.delete(e)})}update(e){let{id:t,name:r,type:a}=e;return n(this,void 0,void 0,function*(){if(!t)throw new i.BadRequestError("id should not be empty");let{data:e,error:n}=yield this.supabase.from(u).update({name:r,type:a}).eq("id",t).select("*, subcategory(*)").single();if(n){if("PGRST116"===n.code)throw new i.NotFoundError(n.details);throw new i.InternalServerError(n.message)}return o.Category.create(this.getCategoryProps(e,e.subcategory),e.id)})}getCategoryProps(e){let{name:t,type:r}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{name:t,type:r,subcategories:n?n.map(e=>{let{id:t,name:r,category_id:n}=e;return s.Subcategory.create({categoryId:n,name:r},t)}):null}}constructor(e){this.supabase=e;let t=new a.CoreInsertSupabaseRepository(e,u),r=new a.CoreDeleteSupabaseRepository(e,u);this.repository={inserter:t,deleter:r}}}t.CategorySupabaseRepository=c},129:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CreateCategoryController=void 0;let o=r(6129);class i{handle(e){return n(this,void 0,void 0,function*(){try{let t=yield this.useCase.execute(e.body);return o.ResponseHttp.created(t)}catch(e){return o.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.CreateCategoryController=i},8354:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateCreateCategoryController=void 0;let o=r(129),i=r(7729);t.fabricateCreateCategoryController=e=>n(void 0,void 0,void 0,function*(){return new o.CreateCategoryController(new i.CreateCategoryUseCase(e))})},7729:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.CreateCategoryUseCase=void 0;let o=r(7061);class i{execute(e){let{name:t,type:r}=e;return n(this,void 0,void 0,function*(){let e=o.Category.create({name:t,type:r,subcategories:null});return Object.assign(Object.assign({},(yield this.repository.insert(e)).toJSON()),{subcategories:[]})})}constructor(e){this.repository=e}}t.CreateCategoryUseCase=i},1435:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateCategoryUseCase=t.fabricateCreateCategoryController=t.CreateCategoryController=void 0;var n=r(129);Object.defineProperty(t,"CreateCategoryController",{enumerable:!0,get:function(){return n.CreateCategoryController}});var o=r(8354);Object.defineProperty(t,"fabricateCreateCategoryController",{enumerable:!0,get:function(){return o.fabricateCreateCategoryController}});var i=r(7729);Object.defineProperty(t,"CreateCategoryUseCase",{enumerable:!0,get:function(){return i.CreateCategoryUseCase}})},3939:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteCategoryByIdController=void 0;let o=r(1460),i=r(6129);class a{handle(e){return n(this,void 0,void 0,function*(){try{yield this.useCase.execute(e.params.id)}catch(e){if(e instanceof o.NotFoundError)return i.ResponseHttp.notFound(e);return i.ResponseHttp.serverError(e)}return i.ResponseHttp.noContent()})}constructor(e){this.useCase=e}}t.DeleteCategoryByIdController=a},8359:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateDeleteCategoryByIdController=void 0;let o=r(3939),i=r(4622);t.fabricateDeleteCategoryByIdController=e=>n(void 0,void 0,void 0,function*(){return new o.DeleteCategoryByIdController(new i.DeleteCategoryByIdUseCase(e))})},4622:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteCategoryByIdUseCase=void 0;class n{execute(e){return r(this,void 0,void 0,function*(){yield this.repository.delete(e)})}constructor(e){this.repository=e}}t.DeleteCategoryByIdUseCase=n},3242:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteCategoryByIdUseCase=t.fabricateDeleteCategoryByIdController=t.DeleteCategoryByIdController=void 0;var n=r(3939);Object.defineProperty(t,"DeleteCategoryByIdController",{enumerable:!0,get:function(){return n.DeleteCategoryByIdController}});var o=r(8359);Object.defineProperty(t,"fabricateDeleteCategoryByIdController",{enumerable:!0,get:function(){return o.fabricateDeleteCategoryByIdController}});var i=r(4622);Object.defineProperty(t,"DeleteCategoryByIdUseCase",{enumerable:!0,get:function(){return i.DeleteCategoryByIdUseCase}})},8501:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.GetCategoryByIdController=void 0;let o=r(6129);class i{handle(e){return n(this,void 0,void 0,function*(){try{let t=yield this.useCase.execute(e.params.id);return o.ResponseHttp.ok(t)}catch(e){return o.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.GetCategoryByIdController=i},5746:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateGetCategoryByIdController=void 0;let o=r(8501),i=r(1640);t.fabricateGetCategoryByIdController=e=>n(void 0,void 0,void 0,function*(){return new o.GetCategoryByIdController(new i.GetCategoryByIdUseCase(e))})},1640:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.GetCategoryByIdUseCase=void 0;class n{execute(e){var t,n;return r(this,void 0,void 0,function*(){let r=yield this.repository.findById(e);return r?Object.assign(Object.assign({},r.toJSON()),{subcategories:null!==(n=null===(t=r.subcategories)||void 0===t?void 0:t.map(e=>e.toJSON()))&&void 0!==n?n:[]}):null})}constructor(e){this.repository=e}}t.GetCategoryByIdUseCase=n},2992:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.GetCategoryByIdUseCase=t.fabricateGetCategoryByIdController=t.GetCategoryByIdController=void 0;var n=r(8501);Object.defineProperty(t,"GetCategoryByIdController",{enumerable:!0,get:function(){return n.GetCategoryByIdController}});var o=r(5746);Object.defineProperty(t,"fabricateGetCategoryByIdController",{enumerable:!0,get:function(){return o.fabricateGetCategoryByIdController}});var i=r(1640);Object.defineProperty(t,"GetCategoryByIdUseCase",{enumerable:!0,get:function(){return i.GetCategoryByIdUseCase}})},4879:function(e,t,r){t.fP=t.UL=t.G7=t.dz=t.dK=void 0;var n=r(1435);Object.defineProperty(t,"dK",{enumerable:!0,get:function(){return n.fabricateCreateCategoryController}});var o=r(3242);Object.defineProperty(t,"dz",{enumerable:!0,get:function(){return o.fabricateDeleteCategoryByIdController}});var i=r(2992);Object.defineProperty(t,"G7",{enumerable:!0,get:function(){return i.fabricateGetCategoryByIdController}});var a=r(8743);Object.defineProperty(t,"UL",{enumerable:!0,get:function(){return a.fabricateListAllCategoriesController}});var s=r(6009);Object.defineProperty(t,"fP",{enumerable:!0,get:function(){return s.fabricateUpdateCategoryByIdController}})},8743:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.ListAllCategoriesUseCase=t.fabricateListAllCategoriesController=t.ListAllCategoriesController=void 0;var n=r(3238);Object.defineProperty(t,"ListAllCategoriesController",{enumerable:!0,get:function(){return n.ListAllCategoriesController}});var o=r(512);Object.defineProperty(t,"fabricateListAllCategoriesController",{enumerable:!0,get:function(){return o.fabricateListAllCategoriesController}});var i=r(3299);Object.defineProperty(t,"ListAllCategoriesUseCase",{enumerable:!0,get:function(){return i.ListAllCategoriesUseCase}})},3238:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.ListAllCategoriesController=void 0;let o=r(6129);class i{handle(){return n(this,void 0,void 0,function*(){try{let e=yield this.useCase.execute();return o.ResponseHttp.ok(e)}catch(e){return o.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.ListAllCategoriesController=i},512:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateListAllCategoriesController=void 0;let o=r(3238),i=r(3299);t.fabricateListAllCategoriesController=e=>n(void 0,void 0,void 0,function*(){return new o.ListAllCategoriesController(new i.ListAllCategoriesUseCase(e))})},3299:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.ListAllCategoriesUseCase=void 0;class n{execute(){return r(this,void 0,void 0,function*(){return(yield this.repository.findAll()).map(e=>{var t,r;return Object.assign(Object.assign({},e.toJSON()),{subcategories:null!==(r=null===(t=e.subcategories)||void 0===t?void 0:t.map(e=>e.toJSON()))&&void 0!==r?r:[]})})})}constructor(e){this.repository=e}}t.ListAllCategoriesUseCase=n},6009:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateCategoryByIdUseCase=t.fabricateUpdateCategoryByIdController=t.UpdateCategoryByIdController=void 0;var n=r(9252);Object.defineProperty(t,"UpdateCategoryByIdController",{enumerable:!0,get:function(){return n.UpdateCategoryByIdController}});var o=r(7666);Object.defineProperty(t,"fabricateUpdateCategoryByIdController",{enumerable:!0,get:function(){return o.fabricateUpdateCategoryByIdController}});var i=r(3663);Object.defineProperty(t,"UpdateCategoryByIdUseCase",{enumerable:!0,get:function(){return i.UpdateCategoryByIdUseCase}})},9252:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateCategoryByIdController=void 0;let o=r(1460),i=r(6129);class a{handle(e){let{body:t,params:{id:r}}=e;return n(this,void 0,void 0,function*(){try{let e=yield this.useCase.execute(r,t);return i.ResponseHttp.ok(e)}catch(e){if(e instanceof o.NotFoundError)return i.ResponseHttp.notFound(e);if(e instanceof o.BadRequestError)return i.ResponseHttp.badRequest(e);return i.ResponseHttp.serverError(e)}})}constructor(e){this.useCase=e}}t.UpdateCategoryByIdController=a},7666:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.fabricateUpdateCategoryByIdController=void 0;let o=r(9252),i=r(3663);t.fabricateUpdateCategoryByIdController=e=>n(void 0,void 0,void 0,function*(){return new o.UpdateCategoryByIdController(new i.UpdateCategoryByIdUseCase(e))})},3663:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateCategoryByIdUseCase=void 0;let o=r(1460);class i{execute(e,t){var r,i;return n(this,void 0,void 0,function*(){let n=yield this.repository.findById(e);if(!n)throw new o.BadRequestError("Category does not exists");return n.updateName(t.name),yield this.repository.update(n),Object.assign(Object.assign({},n.toJSON()),{subcategories:null!==(i=null===(r=n.subcategories)||void 0===r?void 0:r.map(e=>e.toJSON()))&&void 0!==i?i:[]})})}constructor(e){this.repository=e}}t.UpdateCategoryByIdUseCase=i},8901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Subcategory=t.SubcategoryTestFixture=void 0;var n=r(6036);Object.defineProperty(t,"SubcategoryTestFixture",{enumerable:!0,get:function(){return n.SubcategoryTestFixture}});var o=r(7128);Object.defineProperty(t,"Subcategory",{enumerable:!0,get:function(){return o.Subcategory}})},6036:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.SubcategoryTestFixture=void 0;let n=r(8901);class o{static buildSubcategoryProps(){return{name:this.name1,categoryId:this.categoryId1}}static buildSubcategory(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.buildSubcategoryProps(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.id1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.tenantId;return n.Subcategory.create(e,t,r)}static buildCreateSubcategoryInput(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.name1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.categoryId1;return{name:e,categoryId:t,tenantId:o.tenantId}}static buildUpdateSubcategoryInput(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.name2;return{name:e}}static buildSubcategoryInMemoryItem(){let{name:e,categoryId:t,id:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.buildSubcategory();return{name:e,categoryId:t,id:r}}}t.SubcategoryTestFixture=o,o.idInvalid="0",o.id1="1",o.id2="2",o.categoryId1="1",o.categoryId2="2",o.name1="Energy bill",o.name2="Water bill",o.name3="Gas bill",o.tenantId="1"},7128:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Subcategory=void 0;let n=r(7730);class o extends n.TenantEntity{static create(e,t,r){return new o(e,t,r)}updateName(e){this.name=e}get name(){return this.props.name}set name(e){this.props.name=e}get categoryId(){return this.props.categoryId}toJSON(){return Object.assign({id:this.id},this.props)}constructor(e,t,r){if(super(t,r),!e){this.props={};return}n.PropsValidation.validateString(e.name).name("name").notNull(),this.props=Object.assign({},e)}}t.Subcategory=o},6638:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0}),t.SubcategoryInMemoryRepository=void 0;let o=r(1460),i=r(8901);class a{static Instance(){var e;return null!==(e=this._instance)&&void 0!==e?e:this._instance=new this}deleteByIdAndCategoryId(e,t){return n(this,void 0,void 0,function*(){if(!this.items.length)throw new o.NotFoundError("Item does not exists");this.items=this.items.filter(r=>!(r.id===e&&r.categoryId===t))})}findByIdAndCategoryId(e,t){return n(this,void 0,void 0,function*(){let r=this.items.find(r=>r.id===e&&r.categoryId===t);return r?i.Subcategory.create(this.getSubcategoryProp(r),r.id):void 0})}insert(e){return n(this,void 0,void 0,function*(){let t=Object.assign(Object.assign({},e.props),{id:"id-".concat(Date.now().toString())});return this.items.push(t),i.Subcategory.create(this.getSubcategoryProp(t),t.id)})}update(e){let{id:t,name:r,categoryId:a}=e;return n(this,void 0,void 0,function*(){if(!this.items.length)throw new o.NotFoundError("Item does not exists");this.items=this.items.map(e=>e.id===t&&e.categoryId===a?Object.assign(Object.assign({},e),{name:r}):e);let e=this.items.find(e=>e.id===t);if(!e)throw new o.NotFoundError("Item does not exists");return i.Subcategory.create(this.getSubcategoryProp(e),e.id)})}getSubcategoryProp(e){let{name:t,categoryId:r}=e;return{name:t,categoryId:r}}constructor(){this.items=[]}}t.SubcategoryInMemoryRepository=a}}]);