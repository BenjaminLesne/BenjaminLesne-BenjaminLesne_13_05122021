(this["webpackJsonpargent-bank"]=this["webpackJsonpargent-bank"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},o=(n(23),n(24),n(0)),l=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("p",{className:"footer-text",children:"Copyright 2020 Argent Bank"})})},u=(n(26),n(10)),j=n.p+"static/media/argentBankLogo.e031a16c.png",d=n(3),b=function(){var e=Object(d.c)((function(e){return e.isConnected})),t=Object(d.c)((function(e){return e.firstName})),n=Object(d.b)();return Object(o.jsxs)("nav",{className:"main-nav",children:[Object(o.jsxs)(u.b,{className:"main-nav-logo",to:"/",children:[Object(o.jsx)("img",{className:"main-nav-logo-image",src:j,alt:"Argent Bank Logo"}),Object(o.jsx)("h1",{className:"sr-only",children:"Argent Bank"})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)(u.b,{className:"main-nav-item",to:e?"/user":"/sign-in",children:[Object(o.jsx)("i",{className:"fa fa-user-circle"}),e?t:"Sign In"]}),e?Object(o.jsxs)(u.b,{className:"main-nav-item",onClick:function(){return n({type:"handleIsConnected"})},to:"/",children:[Object(o.jsx)("i",{className:"fa fa-sign-out"}),"Sign Out"]}):null]})]})},m=(n(16),n(2)),p=function(e){var t=e.children,n=Object(d.c)((function(e){return e.isConnected})),a=Object(m.f)();return n?t:Object(o.jsx)(m.a,{to:"/sign-in",state:{from:a}})},h=(n(32),function(){return Object(o.jsx)("div",{className:"hero",children:Object(o.jsxs)("section",{className:"hero-content",children:[Object(o.jsx)("h2",{className:"sr-only",children:"Promoted Content"}),Object(o.jsx)("p",{className:"subtitle",children:"No fees."}),Object(o.jsx)("p",{className:"subtitle",children:"No minimum deposit."}),Object(o.jsx)("p",{className:"subtitle",children:"High interest rates."}),Object(o.jsx)("p",{className:"text",children:"Open a savings account with Argent Bank today!"})]})})}),O=(n(33),n.p+"static/media/icon-chat.e238539d.png"),x=n.p+"static/media/icon-money.8ec88bb1.png",f=n.p+"static/media/icon-security.1c819fa1.png",g=function(){return Object(o.jsxs)("section",{className:"features",children:[Object(o.jsx)("h2",{className:"sr-only",children:"Features"}),Object(o.jsxs)("div",{className:"feature-item",children:[Object(o.jsx)("img",{src:O,alt:"Chat Icon",className:"feature-icon"}),Object(o.jsx)("h3",{className:"feature-item-title",children:"You are our #1 priority"}),Object(o.jsx)("p",{children:"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."})]}),Object(o.jsxs)("div",{className:"feature-item",children:[Object(o.jsx)("img",{src:x,alt:"Chat Icon",className:"feature-icon"}),Object(o.jsx)("h3",{className:"feature-item-title",children:"More savings means higher rates"}),Object(o.jsx)("p",{children:"The more you save with us, the higher your interest rate will be!"})]}),Object(o.jsxs)("div",{className:"feature-item",children:[Object(o.jsx)("img",{src:f,alt:"Chat Icon",className:"feature-icon"}),Object(o.jsx)("h3",{className:"feature-item-title",children:"Security you can trust"}),Object(o.jsx)("p",{children:"We use top of the line encryption to make sure your data and money is always safe."})]})]})},N=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(g,{})]})},y=n(5),v=n.n(y),k=n(7),w=(n(35),n(9)),C=n.n(w),S=function(){var e=Object(k.a)(v.a.mark((function e(t,n){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:3001/api/v1","/user/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();S.propTypes={email:C.a.string.isRequired,password:C.a.string.isRequired};var U=S,B=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:3001/api/v1","/user/profile"),{method:"POST",headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();B.propTypes={token:C.a.string.isRequired};var A=B,T=function(){var e=Object(d.b)(),t=Object(m.g)(),n=(Object(d.c)((function(e){return e.isConnected})),function(){var n=Object(k.a)(v.a.mark((function n(a){var c,s,r,i,o,l;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=document.querySelector("#username").value,s=document.querySelector("#password").value,document.querySelector("#remember-me").checked,a.preventDefault(),n.next=6,U(c,s);case 6:if(200!==(r=n.sent).status){n.next=20;break}return document.querySelector(".login-failed-message").style.display="none",i=r.body.token,e({type:"addPayloadToState",payload:{token:i}}),n.next=13,A(i);case 13:o=n.sent,l=o.body,e({type:"updateUserData",payload:l}),e({type:"handleIsConnected"}),t("/"),n.next=21;break;case 20:console.log("wrong password or username");case 21:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Object(o.jsxs)("section",{className:"sign-in-content",children:[Object(o.jsx)("i",{className:"fa fa-user-circle sign-in-icon"}),Object(o.jsx)("h1",{children:"Sign In"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("p",{className:"login-failed-message",children:"Error: wrong login"}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Username"}),Object(o.jsx)("input",{type:"email",id:"username",required:!0}),Object(o.jsx)("p",{className:"error-message",children:"An email is required"})]}),Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{type:"password",id:"password",required:!0}),Object(o.jsx)("p",{className:"error-message",children:"A password is required"})]}),Object(o.jsxs)("div",{className:"input-remember",children:[Object(o.jsx)("input",{type:"checkbox",id:"remember-me"}),Object(o.jsx)("label",{htmlFor:"remember-me",children:"Remember me"})]}),Object(o.jsx)("button",{className:"sign-in-button",onClick:n,children:"Sign In"})]})]})},_=function(){return Object(o.jsx)("main",{className:"main bg-dark",children:Object(o.jsx)(T,{})})},I=n(11),q=(n(36),function(){var e=Object(k.a)(v.a.mark((function e(t,n){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:3001/api/v1","/user/profile"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}());q.propTypes={token:C.a.string.isRequired};var P=q,F=function(){var e=Object(a.useState)(!1),t=Object(I.a)(e,2),n=t[0],c=t[1],s=Object(d.b)(),r=Object(d.c)((function(e){return e.firstName})),i=Object(d.c)((function(e){return e.lastName})),l=Object(d.c)((function(e){return e.lightMode})),u=Object(d.c)((function(e){return e.token})),j=document.getElementById("input-firstname"),b=document.getElementById("input-lastname"),m=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a,r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={firstName:j.value,lastName:b.value},e.next=4,P(n,u);case 4:a=e.sent,r=a.body.firstName,i=a.body.lastName,s({type:"addPayloadToState",payload:{lastName:i,firstName:r}}),c(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s({type:"changeLightMode",payload:n})}),[n]),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("h1",{className:"header__title--".concat(l?"light":""),children:["Welcome back",Object(o.jsx)("br",{}),n?"":r+" "+i+"!"]}),n?Object(o.jsxs)("form",{className:"UpdateUserNames",children:[Object(o.jsxs)("div",{className:"UpdateUserNames__inputs",children:[Object(o.jsx)("input",{className:"UpdateUserNames__input",type:"text",placeholder:"Firstname",id:"input-firstname"}),Object(o.jsx)("input",{className:"UpdateUserNames__input",type:"text",placeholder:"Lastname",id:"input-lastname"})]}),Object(o.jsxs)("div",{className:"UpdateUserNames__buttons",children:[Object(o.jsx)("button",{className:"UpdateUserNames__button",type:"onSubmit",onClick:function(e){return m(e)},children:"Save"}),Object(o.jsx)("button",{className:"UpdateUserNames__button",type:"button",onClick:function(){return c(!1)},children:"Cancel"})]})]}):Object(o.jsx)("button",{className:"edit-button",onClick:function(){return c(!0)},children:"Edit Name"})]})},M=(n(37),function(e){var t=e.title,n=e.amount,a=e.description;return Object(o.jsxs)("section",{className:"account",children:[Object(o.jsxs)("div",{className:"account-content-wrapper",children:[Object(o.jsx)("h3",{className:"account-title",children:t}),Object(o.jsxs)("p",{className:"account-amount",children:["$",n]}),Object(o.jsx)("p",{className:"account-amount-description",children:a})]}),Object(o.jsx)("div",{className:"account-content-wrapper cta",children:Object(o.jsx)("button",{className:"transaction-button",children:"View transactions"})})]})}),L=function(){var e=Object(d.c)((function(e){return e.lightMode}));return Object(o.jsxs)("main",{className:"main ".concat(e?" bg-light":" bg-dark"),children:[Object(o.jsx)(F,{}),Object(o.jsx)("h2",{className:"sr-only",children:"Accounts"}),Object(o.jsx)(M,{title:"Argent Bank Checking (x8349)",description:"Available Balance",amount:2.08279}),Object(o.jsx)(M,{title:"Argent Bank Savings (x6712)",description:"Available Balance",amount:10.92842}),Object(o.jsx)(M,{title:"Argent Bank Credit Card (x8349)",description:"Current Balance",amount:184.3})]})},E=n(8),D=n(18),R={isConnected:!1,firstName:"Tony",lastName:"Couille",lightMode:!1};var J=Object(D.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return"handleIsConnected"===t.type?Object(E.a)(Object(E.a)({},e),{},{isConnected:!e.isConnected}):"addPayloadToState"===t.type?Object(E.a)(Object(E.a)({},e),t.payload):"changeLightMode"===t.type?Object(E.a)(Object(E.a)({},e),{},{lightMode:t.payload}):"updateUserData"===t.type?Object(E.a)(Object(E.a)({},e),t.payload):e}));r.a.render(Object(o.jsx)(d.a,{store:J,children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(b,{firstName:"Tony"}),Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.b,{index:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(m.b,{path:"/sign-in",element:Object(o.jsx)(_,{})}),Object(o.jsx)(m.b,{path:"/user",element:Object(o.jsx)(p,{children:Object(o.jsx)(L,{})})})]}),Object(o.jsx)(l,{})]})})}),document.getElementById("root")),i()}],[[38,1,2]]]);
//# sourceMappingURL=main.ad420caa.chunk.js.map