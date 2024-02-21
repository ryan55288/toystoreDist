import{_ as V,s as S,u as w,m as U,q as D,a as L,o as r,c as p,b as e,F as h,h as I,f as t,t as c,e as a,v as n,C as u,D as $,d as q,w as A,l as N,p as R,k as j}from"./index-b0eYXTGv.js";import{u as B}from"./cart-jhRZaYKm.js";import{e as P}from"./sweetalert-8WZDP0Id.js";import"./sweetalert2.all-cno0K6ji.js";const i=d=>(R("data-v-42b81c43"),d=d(),j(),d),F=N('<div class="box1" data-v-42b81c43></div><section class="section1" data-v-42b81c43><div class="container" data-v-42b81c43><ul class="row d-flex justify-content-center align-items-center" data-v-42b81c43><li class="col-md-4" data-v-42b81c43>1.訂單資料</li><li class="col-md-4" data-v-42b81c43>2.付款方式</li><li class="col-md-4" data-v-42b81c43>3.完成訂單</li></ul></div></section><section class="section2 d-flex justify-content-center pt-40" data-v-42b81c43><div class="header" data-v-42b81c43><div data-v-42b81c43>商品內容</div><div data-v-42b81c43>數量</div><div data-v-42b81c43>總計</div></div></section>',3),H={class:"section3 pt-40"},M={class:"shopping-card"},E=["src"],Q=i(()=>e("div",{class:"d-flex justify-content-center"},[e("hr")],-1)),z={class:"section4"},G={class:"bottom"},J={class:"text-orange"},K={class:"section5"},O={class:"container"},W={class:"row g-3 d-flex"},X=i(()=>e("div",{class:"col-md-12"},"訂購人資訊",-1)),Y={class:"col-md-6"},Z=i(()=>e("label",{for:"name",class:"form-label"},"姓名",-1)),ee={class:"col-md-6"},te=i(()=>e("label",{for:"phone",class:"form-label"},"行動電話",-1)),se={class:"col-12"},oe=i(()=>e("label",{for:"address",class:"form-label"},"住址",-1)),le={class:"col-12"},ie=i(()=>e("label",{for:"email",class:"form-label"},"信箱",-1)),ae={class:"col-12"},ce={class:"form-check mb-4"},ne={class:"form-check"},de=i(()=>e("label",{for:"paper"},"紙本發票",-1)),re=i(()=>e("hr",null,null,-1)),pe=i(()=>e("h4",{class:"fw-bold"},"配送方式",-1)),ue={class:"form-check mb-4"},me=i(()=>e("label",{for:"store"},"到店取貨",-1)),ve={class:"form-check"},_e=i(()=>e("label",{for:"deliveryToHome",class:"mb-3"},"宅配到府",-1)),he={key:0,type:"text",placeholder:"請輸入地址",class:"form-control"},fe={class:"section6"},ye={class:"all-button"},be=i(()=>e("div",null,[e("button",{class:"btn1"},"取消")],-1)),Te={__name:"CheckList1",setup(d){const v=B(),{updateCustomerInfo:f}=v,{getSelectedCartList:y,getSelectedCartListAmountTotal:b,getDirectPurchase:T,getDirectPurchaseAmountTotal:k,getSelectedProductAllQty:x}=S(v),_=w(),m=U().query.isDirect,o=D({name:"Tom",phone:"0987717171",address:"新北市",email:"Tom123@gmail.com",invoiceType:1,vehicle:"",deliveryType:1}),C=()=>{if(o.invoiceType===1&&!o.vehicle){P("請輸入載具編號");return}f(o),m?_.push({path:"/CheckList2",query:{isDirect:"direct"}}):_.push("/CheckList2")};return(xe,l)=>{const g=L("router-link");return r(),p(h,null,[F,e("section",H,[(r(!0),p(h,null,I(t(m)?t(T):t(y),s=>(r(),p("div",M,[e("div",null,[e("img",{src:s.picture},null,8,E),e("div",null,c(s.name),1)]),e("div",null,c(s.qty),1),e("div",null,c(`$${s.price*s.qty}`),1)]))),256)),Q]),e("section",z,[e("div",G,[e("div",null,c(`商品總數:${t(x)}`),1),e("div",J,c(`總計$${t(m)?t(k):t(b)}`),1)])]),e("section",K,[e("div",O,[e("form",W,[X,e("div",Y,[Z,a(e("input",{type:"text",class:"form-control",id:"name",placeholder:"請輸入姓名","onUpdate:modelValue":l[0]||(l[0]=s=>t(o).name=s)},null,512),[[n,t(o).name]])]),e("div",ee,[te,a(e("input",{type:"tel",id:"phone",class:"form-control",placeholder:"請輸入行動電話","onUpdate:modelValue":l[1]||(l[1]=s=>t(o).phone=s)},null,512),[[n,t(o).phone]])]),e("div",se,[oe,a(e("input",{type:"text",class:"form-control",id:"address",placeholder:"請輸入住址","onUpdate:modelValue":l[2]||(l[2]=s=>t(o).address=s)},null,512),[[n,t(o).address]])]),e("div",le,[ie,a(e("input",{type:"email",class:"form-control",id:"email",placeholder:"請輸入信箱","onUpdate:modelValue":l[3]||(l[3]=s=>t(o).email=s)},null,512),[[n,t(o).email]])]),e("div",ae,[e("div",ce,[a(e("input",{class:"form-check-input",type:"radio",name:"invoiceType",value:1,"onUpdate:modelValue":l[4]||(l[4]=s=>t(o).invoiceType=s)},null,512),[[u,t(o).invoiceType]]),a(e("input",{type:"text",placeholder:"請輸入載具",class:"form-control",onClick:l[5]||(l[5]=s=>t(o).invoiceType=1),"onUpdate:modelValue":l[6]||(l[6]=s=>t(o).vehicle=s)},null,512),[[n,t(o).vehicle]])]),e("div",ne,[de,a(e("input",{class:"form-check-input",type:"radio",name:"invoiceType",id:"paper",value:2,"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).invoiceType=s)},null,512),[[u,t(o).invoiceType]])])]),re,pe,e("div",ue,[me,a(e("input",{class:"form-check-input",type:"radio",name:"delivery",id:"store",value:1,"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).deliveryType=s)},null,512),[[u,t(o).deliveryType]])]),e("div",ve,[_e,a(e("input",{class:"form-check-input",type:"radio",name:"delivery",id:"deliveryToHome",value:2,"onUpdate:modelValue":l[9]||(l[9]=s=>t(o).deliveryType=s)},null,512),[[u,t(o).deliveryType]]),t(o).deliveryType===2?(r(),p("input",he)):$("",!0)])])])]),e("section",fe,[e("div",ye,[q(g,{to:"/Cart",class:"text-decoration-none text-white"},{default:A(()=>[be]),_:1}),e("a",{class:"text-decoration-none text-white"},[e("div",null,[e("button",{class:"btn2",onClick:C},"下一步")])])])])],64)}}},we=V(Te,[["__scopeId","data-v-42b81c43"]]);export{we as default};
