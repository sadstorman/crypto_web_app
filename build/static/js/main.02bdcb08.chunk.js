(this.webpackJsonpinfo_crypto_web=this.webpackJsonpinfo_crypto_web||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(28),n=c.n(s),r=c(10),i=c(0),l=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark text-center ",children:Object(i.jsx)("div",{className:"navbar-collapse",children:Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(r.b,{className:"navbar-brand ml",to:"/",children:"Dashboard"}),Object(i.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link btn",to:"/axie",children:"Axie"}),Object(i.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",to:"/chess",children:"Dchess"}),Object(i.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",to:"/cryptomines",children:"Cryptomines"}),Object(i.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",to:"/pvu",children:"Pvu"})]})})})},d=c(3),j=c(4),o=c.n(j),b=c(9),u=c(2),x=c(7),m=c.n(x),h=(c(63),c(14)),p=c(19),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(u.a)(t,2),s=c[0],n=c[1],r=function(){n(e)},i=function(e){var t=e.target;n(Object(p.a)(Object(p.a)({},s),{},Object(h.a)({},t.name,t.value)))};return[s,i,r]},v=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],d=r[1],j=Object(a.useState)(null),x=Object(u.a)(j,2),h=x[0],p=x[1],v=Object(a.useState)(null),f=Object(u.a)(v,2),g=f[0],N=f[1],_=Object(a.useState)(null),k=Object(u.a)(_,2),S=k[0],y=k[1],w=Object(a.useState)(null),A=Object(u.a)(w,2),C=A[0],F=A[1],$=O({howMuchSlp:""}),E=Object(u.a)($,2),M=E[0],D=E[1],P=M.howMuchSlp,L=O({howMuchAxs:""}),U=Object(u.a)(L,2),T=U[0],V=U[1],X=T.howMuchAxs,I=function(){var e=Object(b.a)(o.a.mark((function e(){var t,c,a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/smooth-love-potion");case 2:return t=e.sent,e.next=5,m.a.get("https://api.coingecko.com/api/v3/coins/axie-infinity");case 5:c=e.sent,a=c.data.market_data.current_price.usd,n=c.data.market_data.price_change_percentage_24h,r=t.data.market_data.price_change_percentage_24h,i=t.data.market_data.current_price.usd,p("".concat(i)),y("".concat(r)),N("".concat(a)),F("".concat(n)),s(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){I()}),[p,l]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"text-center",children:"Axies"}),Object(i.jsxs)("div",{className:"row mt-4",children:[Object(i.jsxs)("div",{className:"col-sm",children:[Object(i.jsxs)("h3",{children:[" SLP actual value: ",c?Object(i.jsx)("div",{className:"spinner-border text-light",role:"status"}):Object(i.jsxs)("h4",{className:"text-danger text-center",children:[h+" $"," ",Object(i.jsxs)("h6",{children:[" change percentage ",S," %"]})," "]})," "]}),Object(i.jsxs)("h3",{children:[" AXS actual value: ",c?Object(i.jsx)("div",{className:"spinner-border text-light",role:"status"}):Object(i.jsxs)("h4",{className:"text-danger text-center",children:[g+" $"," ",Object(i.jsxs)("h6",{children:[" change percentage ",C," %"]})," "]})]})]}),Object(i.jsxs)("div",{className:"col-sm text-center d-flex flex-column form-group",children:[Object(i.jsx)("div",{className:"p-4",children:Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("span",{className:"input-group-text",children:"$"}),Object(i.jsx)("input",{type:"number",name:"howMuchSlp",value:P,onChange:D,placeholder:"SLP",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(i.jsxs)("span",{className:"input-group-text",children:[(P*h).toFixed(1)," $"]})]})}),Object(i.jsx)("div",{className:"p-4",children:Object(i.jsxs)("div",{className:"input-group mb-3",children:[Object(i.jsx)("span",{className:"input-group-text",children:"$"}),Object(i.jsx)("input",{type:"number",name:"howMuchAxs",value:X,onChange:V,placeholder:"AXS",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(i.jsxs)("span",{className:"input-group-text",children:[(X*g).toFixed(1)," $"]})]})})]}),Object(i.jsx)("button",{className:"btn btn-lg btn-warning mt-4",onClick:function(){d(!l),s(!c)},children:" refresh values"})]}),Object(i.jsxs)("footer",{className:"fixed-bottom text-center",children:[" ",Object(i.jsx)("p",{className:"text-success",children:"Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f"})]})]})},f=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Dchess"})})},g=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],j=Object(a.useState)(!0),x=Object(u.a)(j,2),h=x[0],p=x[1],v=Object(a.useState)(!1),f=Object(u.a)(v,2),g=f[0],N=f[1],_=O({howMuchSlp:""}),k=Object(u.a)(_,2),S=k[0],y=k[1],w=S.howMuchSlp,A=function(){var e=Object(b.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/cryptomines-eternal");case 2:t=e.sent,c=t.data.market_data.current_price.usd,a=t.data.market_data.price_change_percentage_24h,s("".concat(c)),d(a),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A()}),[s,h]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"text-center",children:"Cryptomines"}),Object(i.jsxs)("div",{className:"row mt-4",children:[Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsxs)("h3",{children:[" Eternal actual value: ",h?Object(i.jsx)("div",{className:"spinner-border text-light",role:"status"}):Object(i.jsxs)("h4",{className:"text-danger text-center",children:[c+" $"," ",Object(i.jsxs)("h6",{children:[" change percentage ",l," %"]})," "]})," "]})}),Object(i.jsx)("div",{className:"col-sm text-center d-flex flex-column form-group",children:Object(i.jsx)("div",{className:"p-4",children:Object(i.jsxs)("div",{className:"input-group mb-3 mt-2",children:[Object(i.jsx)("span",{className:"input-group-text",children:"$"}),Object(i.jsx)("input",{type:"number",name:"howMuchSlp",value:w,onChange:y,placeholder:"Eternal",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(i.jsxs)("span",{className:"input-group-text",children:[(w*c).toFixed(1)," $"]})]})})}),Object(i.jsx)("button",{className:"btn btn-lg btn-warning mt-2",onClick:function(){N(!g),p(!h)},children:" refresh values"})]}),Object(i.jsxs)("footer",{className:"fixed-bottom text-center",children:[" ",Object(i.jsx)("p",{className:"text-success",children:"Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f"})]})]})},N=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],j=Object(a.useState)(!0),x=Object(u.a)(j,2),h=x[0],p=x[1],v=Object(a.useState)(!1),f=Object(u.a)(v,2),g=f[0],N=f[1],_=O({howMuchSlp:""}),k=Object(u.a)(_,2),S=k[0],y=k[1],w=S.howMuchSlp,A=function(){var e=Object(b.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/plant-vs-undead-token");case 2:t=e.sent,c=t.data.market_data.current_price.usd,a=t.data.market_data.price_change_percentage_24h,s("".concat(c)),d(a),p(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A()}),[s,h]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"text-center",children:"PVU"}),Object(i.jsxs)("div",{className:"row mt-4",children:[Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsxs)("h3",{children:[" PVU actual value: ",h?Object(i.jsx)("div",{className:"spinner-border text-light",role:"status"}):Object(i.jsxs)("h4",{className:"text-danger text-center",children:[c+" $"," ",Object(i.jsxs)("h6",{children:[" change percentage ",l," %"]})," "]})," "]})}),Object(i.jsx)("div",{className:"col-sm text-center d-flex flex-column form-group",children:Object(i.jsx)("div",{className:"p-4",children:Object(i.jsxs)("div",{className:"input-group mb-3 mt-2",children:[Object(i.jsx)("span",{className:"input-group-text",children:"$"}),Object(i.jsx)("input",{type:"number",name:"howMuchSlp",value:w,onChange:y,placeholder:"PVU",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(i.jsxs)("span",{className:"input-group-text",children:[(w*c).toFixed(1)," $"]})]})})}),Object(i.jsx)("button",{className:"btn btn-lg btn-warning mt-2",onClick:function(){N(!g),p(!h)},children:" refresh values"})]}),Object(i.jsxs)("footer",{className:"fixed-bottom text-center",children:[" ",Object(i.jsx)("p",{className:"text-success",children:"Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f"})]})]})},_=(c(64),function(){var e="-",t=Object(a.useState)(!1),c=Object(u.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!0),l=Object(u.a)(r,2),d=l[0],j=l[1],x=Object(a.useState)([]),h=Object(u.a)(x,2),p=h[0],O=h[1],v=Object(a.useState)(""),f=Object(u.a)(v,2),g=f[0],N=f[1],_=Object(a.useState)(""),k=Object(u.a)(_,2),S=k[0],y=k[1],w=Object(a.useState)(""),A=Object(u.a)(w,2),C=A[0],F=A[1],$=Object(a.useState)(""),E=Object(u.a)($,2),M=E[0],D=E[1],P=Object(a.useState)(""),L=Object(u.a)(P,2),U=L[0],T=L[1],V=Object(a.useState)(""),X=Object(u.a)(V,2),I=X[0],J=X[1],R=Object(a.useState)(""),B=Object(u.a)(R,2),G=B[0],H=B[1],Y=Object(a.useState)(""),q=Object(u.a)(Y,2),z=q[0],K=q[1],Q=function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(o.a.mark((function e(){var t,c,a,s,n,r,i,l,d,b,u,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/plant-vs-undead-token");case 2:return t=e.sent,c=t.data.market_data.current_price.usd,a=t.data.market_data.price_change_percentage_24h,N("".concat(c)),y("".concat(a)),e.next=9,m.a.get("https://api.coingecko.com/api/v3/coins/cryptomines-eternal");case 9:return s=e.sent,n=s.data.market_data.current_price.usd,r=s.data.market_data.price_change_percentage_24h,F("".concat(n)),D("".concat(r)),e.next=16,m.a.get("https://api.coingecko.com/api/v3/coins/smooth-love-potion");case 16:return i=e.sent,e.next=19,m.a.get("https://api.coingecko.com/api/v3/coins/axie-infinity");case 19:l=e.sent,d=l.data.market_data.current_price.usd,b=l.data.market_data.price_change_percentage_24h,u=i.data.market_data.price_change_percentage_24h,x=i.data.market_data.current_price.usd,T("".concat(x)),J("".concat(u)),H("".concat(d)),K("".concat(b)),j(!1);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){W(),Q()}),[d,N,F,T,J,H,K]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"text-center",children:"Home"}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("button",{className:"btn btn-lg btn-primary mb-2 w-100 botoncito",onClick:function(){n(!s),j(!d)},children:" refresh values"})}),d?Object(i.jsxs)("div",{className:"d-flex justify-content-center margin",children:[" ",Object(i.jsx)("div",{className:"spinner-border text-center text-light",style:{width:"12rem",height:"12rem"},role:"status"})]}):Object(i.jsxs)("div",{className:"container margen",children:[Object(i.jsx)("div",{className:"row d-flex ",children:Object(i.jsxs)("div",{className:"card-group text-center d-flex justify-content-between gap-4 ",children:[Object(i.jsxs)("div",{className:"card rounded",children:[Object(i.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center ",children:[Object(i.jsx)("img",{className:"rounded mx-auto  h-50 img-fluid",src:"/pvu.png",alt:"pvu"}),Object(i.jsx)("h4",{className:"card-title bold",children:"PVU"}),Object(i.jsxs)("p",{className:"card-text",children:[(1*g).toFixed(2)," $"]})]}),Object(i.jsx)("div",{className:"card-footer",children:S.includes(e)?Object(i.jsxs)("small",{className:"text-danger",children:[(1*S).toFixed(2)," %"]}):Object(i.jsxs)("small",{className:"text-success",children:[(1*S).toFixed(2)," %"]})})]}),Object(i.jsxs)("div",{className:"card rounded",children:[Object(i.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(i.jsx)("img",{className:"rounded mx-auto  h-50 img-fluid",src:"/eternal.png",alt:"Eternal"}),Object(i.jsx)("h4",{className:"card-title bold",children:"ETERNAL"}),Object(i.jsxs)("p",{className:"card-text",children:[(1*C).toFixed(2)," $"]})]}),Object(i.jsx)("div",{className:"card-footer",children:M.includes(e)?Object(i.jsxs)("small",{className:"text-danger",children:[(1*M).toFixed(2)," %"]}):Object(i.jsxs)("small",{className:"text-success",children:[" ",(1*M).toFixed(2)," %"]})})]})]})}),Object(i.jsx)("div",{className:"row ",children:Object(i.jsxs)("div",{className:"card-group  text-center d-flex justify-content-between gap-4",children:[Object(i.jsxs)("div",{className:"card rounded mt-4",children:[Object(i.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(i.jsx)("img",{className:"rounded mx-auto  h-50 img-fluid",src:"/slp.png",alt:"SLP"}),Object(i.jsx)("h4",{className:"card-title bold",children:"SLP"}),Object(i.jsxs)("p",{className:"card-text",children:[(1*U).toFixed(3)," $"]})]}),Object(i.jsx)("div",{className:"card-footer",children:I.includes(e)?Object(i.jsxs)("small",{className:"text-danger",children:[" ",(1*I).toFixed(2)," % "]}):Object(i.jsxs)("small",{className:"text-success",children:[" ",(1*I).toFixed(2)," %"]})})]}),Object(i.jsxs)("div",{className:"card rounded mt-4 ",children:[Object(i.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(i.jsx)("img",{className:"rounded mx-auto h-50 img-fluid",src:"/axs.png",alt:"AXS"}),Object(i.jsx)("h4",{className:"card-title bold",children:"AXS"}),Object(i.jsxs)("p",{className:"card-text",children:[(1*G).toFixed(1)," $"]})]}),Object(i.jsx)("div",{className:"card-footer",children:z.includes(e)?Object(i.jsxs)("small",{className:"text-danger",children:[(1*z).toFixed(2)," % "]}):Object(i.jsxs)("small",{className:"text-success",children:[(1*z).toFixed(2)," % "]})})]})]})}),Object(i.jsxs)("div",{className:"text-center mt-4",children:[Object(i.jsxs)("h3",{children:[" ",Object(i.jsx)("u",{children:"TOP TEN CRYPTOS"})]}),Object(i.jsx)("ol",{className:"d-flex flex-column justify-content-center align-items-center",children:p.map((function(e){return Object(i.jsxs)("p",{className:"text-success",children:[Object(i.jsx)("img",{className:"img",src:e.image,alt:"cryptoIMG"})," ",e.name.toUpperCase()," -> ",(1*e.current_price).toFixed(1)," $ "]},e.id)}))})]}),Object(i.jsxs)("footer",{className:"footer text-center margen",children:[" ",Object(i.jsx)("p",{className:"text-success",children:"Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f"})]})]})]})}),k=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"container mt-2",children:Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.b,{exact:!0,path:"/",component:_}),Object(i.jsx)(d.b,{exact:!0,path:"/axie",component:v}),Object(i.jsx)(d.b,{exact:!0,path:"/chess",component:f}),Object(i.jsx)(d.b,{exact:!0,path:"/pvu",component:N}),Object(i.jsx)(d.b,{exact:!0,path:"/cryptomines",component:g}),Object(i.jsx)(d.a,{to:"/"})]})})]})};c(65),c(66);n.a.render(Object(i.jsx)(k,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.02bdcb08.chunk.js.map