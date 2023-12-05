import{p as _,m as h,h as C,i as v,u as U,j as M,a as l,k as f,l as b,n as p,q as x,o as L,c as $,w as o,s as F,t as K,v as d,b as g,d as m,x as V}from"./index-df627e6b.js";const W=_({fluid:{type:Boolean,default:!1},...h(),...C()},"VContainer"),H=v()({name:"VContainer",props:W(),setup(e,n){let{slots:t}=n;const{rtlClasses:s}=U();return M(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),P=(()=>f.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),E=(()=>f.reduce((e,n)=>{const t="offset"+b(n);return e[t]={type:[String,Number],default:null},e},{}))(),A=(()=>f.reduce((e,n)=>{const t="order"+b(n);return e[t]={type:[String,Number],default:null},e},{}))(),w={col:Object.keys(P),offset:Object.keys(E),order:Object.keys(A)};function q(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const J=["auto","start","end","center","baseline","stretch"],Y=_({cols:{type:[Boolean,String,Number],default:!1},...P,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...A,alignSelf:{type:String,default:null,validator:e=>J.includes(e)},...h(),...C()},"VCol"),y=v()({name:"VCol",props:Y(),setup(e,n){let{slots:t}=n;const s=p(()=>{const a=[];let r;for(r in w)w[r].forEach(i=>{const u=e[i],j=q(r,i,u);j&&a.push(j)});const c=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return x(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),k=["start","end","center"],B=["space-between","space-around","space-evenly"];function S(e,n){return f.reduce((t,s)=>{const a=e+b(s);return t[a]=n(),t},{})}const D=[...k,"baseline","stretch"],R=e=>D.includes(e),G=S("align",()=>({type:String,default:null,validator:R})),Q=[...k,...B],I=e=>Q.includes(e),O=S("justify",()=>({type:String,default:null,validator:I})),X=[...k,...B,"stretch"],T=e=>X.includes(e),z=S("alignContent",()=>({type:String,default:null,validator:T})),N={align:Object.keys(G),justify:Object.keys(O),alignContent:Object.keys(z)},Z={align:"align",justify:"justify",alignContent:"align-content"};function ee(e,n,t){let s=Z[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const te=_({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:R},...G,justify:{type:String,default:null,validator:I},...O,alignContent:{type:String,default:null,validator:T},...z,...h(),...C()},"VRow"),ne=v()({name:"VRow",props:te(),setup(e,n){let{slots:t}=n;const s=p(()=>{const a=[];let r;for(r in N)N[r].forEach(c=>{const i=e[c],u=ee(r,c,i);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return x(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),ae="/assets/logo-3f834fa8.svg",se=V("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),le=V("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),oe=V("div",{class:"py-14"},null,-1),re={__name:"HelloWorld",setup(e){return(n,t)=>(L(),$(H,{class:"fill-height"},{default:o(()=>[l(F,{class:"align-center text-center fill-height"},{default:o(()=>[l(K,{height:"300",src:ae}),se,le,oe,l(ne,{class:"d-flex align-center justify-center"},{default:o(()=>[l(y,{cols:"auto"},{default:o(()=>[l(d,{href:"https://vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-view-dashboard",size:"large",start:""}),m(" Components ")]),_:1})]),_:1}),l(y,{cols:"auto"},{default:o(()=>[l(d,{color:"primary",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:o(()=>[l(g,{icon:"mdi-speedometer",size:"large",start:""}),m(" Get Started ")]),_:1})]),_:1}),l(y,{cols:"auto"},{default:o(()=>[l(d,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-account-group",size:"large",start:""}),m(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ce={__name:"Home",setup(e){return(n,t)=>(L(),$(re))}};export{ce as default};