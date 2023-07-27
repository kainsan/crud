import{_ as u,a as $,r as l,o as _,c as h,b as o,d as s,w as i,e as p,t as r,F as b,p as C,f as k,g as V,h as P,H as R}from"./index-683a7df7.js";const m=t=>(C("data-v-aa634a9e"),t=t(),k(),t),D={class:"col-12 p-0 flex border-top-1 surface-border"},I={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},F=m(()=>o("h4",{class:"m-0",style:{color:"black"}},"Manage Products",-1)),B={class:"p-input-icon-left"},S=m(()=>o("i",{class:"pi pi-search"},null,-1)),T=["src"],E={class:"grid"},H={class:"col-12 lg:col-4"},N=["src"],U={class:"col-12 lg:col-6 py-3 lg:pl-6"},z={class:"flex align-items-center text-xl font-medium text-900 mb-4"},A=m(()=>o("i",{class:"pi ml-3 cursor-pointer"},null,-1)),M={class:"text-900 font-medium text-3xl block mb-5"},Q={class:"list-none p-0 m-0 surface-100 text-center text-900"},j={class:"line-height-3 p-3 font-bold border-bottom-1 border-300"},K={class:"line-height-3 p-3 border-bottom-1 border-300"},q={class:"line-height-3 p-3 border-bottom-1 border-300"};function G(t,n,f,g,y,w){const a=l("Button"),c=l("InputText"),d=l("Column"),v=l("DataTable"),x=l("ProductDialog");return _(),h(b,null,[o("div",D,[s(a,{icon:"pi pi-plus",severity:"success",class:"mr-2",label:"Add",onClick:n[0]||(n[0]=e=>t.handleClickAdd())},{default:i(()=>[p("Add")]),_:1}),s(a,{icon:"pi pi-trash",severity:"danger",label:"Delete",onClick:n[1]||(n[1]=e=>t.delProduct()),disabled:!t.selected||!t.selected.length},null,8,["disabled"])]),s(v,{ref:"dt",value:t.products,selection:t.selected,"onUpdate:selection":n[5]||(n[5]=e=>t.selected=e),expandedRows:t.expandedRows,"onUpdate:expandedRows":n[6]||(n[6]=e=>t.expandedRows=e),onRowExpand:n[7]||(n[7]=e=>t.onRowExpand(e)),dataKey:"id"},{expansion:i(e=>[o("div",E,[o("div",H,[o("img",{src:e.data.image,class:"mb-3 w-full"},null,8,N)]),o("div",U,[o("div",z,[o("span",null,r(e.data.name),1),p(),A]),o("span",M,"$"+r(e.data.price),1),o("ol",Q,[o("li",j,"Category:"+r(e.data.category),1),o("li",K,"Description:"+r(e.data.description),1),o("li",q,"Reviews: "+r(e.data.review),1)])])])]),default:i(()=>[o("div",I,[F,o("span",B,[S,s(c,{modelValue:t.searchQuery,"onUpdate:modelValue":n[2]||(n[2]=e=>t.searchQuery=e),placeholder:"Search..."},null,8,["modelValue"])])]),s(d,{expander:"",style:{width:"5rem"}}),s(d,{selectionMode:"multiple",frozen:"",modelValue:t.selected,"onUpdate:modelValue":n[3]||(n[3]=e=>t.selected=e),style:{width:"3rem"}},null,8,["modelValue"]),s(d,{field:"id",header:"id",sortable:"",style:{"min-width":"12rem"}}),s(d,{field:"name",header:"Name",sortable:"",style:{"min-width":"16rem"}}),s(d,{header:"Image"},{body:i(e=>[o("img",{src:e.data.image,class:"shadow-2 border-round",style:{width:"64px"}},null,8,T)]),_:1}),s(d,{field:"price",header:"Price",sortable:"",style:{"min-width":"8rem"}},{body:i(e=>[p(r(e.data.price)+"$ ",1)]),_:1}),s(d,{field:"category",header:"Category",sortable:"",style:{"min-width":"10rem"}}),s(d,{frozen:"",alignFrozen:"right",exportable:!1,style:{"min-width":"5rem"}},{body:i(e=>[s(a,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:W=>t.handleClickEdit(e.data)},null,8,["onClick"]),s(a,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:n[4]||(n[4]=()=>{})})]),_:1})]),_:1},8,["value","selection","expandedRows"]),s(x)],64)}const J=u($,[["render",G],["__scopeId","data-v-aa634a9e"]]),L=V({components:{Product:J,Footer:P,Header:R}});function O(t,n,f,g,y,w){const a=l("Header"),c=l("Product"),d=l("Footer");return _(),h(b,null,[s(a),s(c),s(d)],64)}const Y=u(L,[["render",O]]);export{Y as default};