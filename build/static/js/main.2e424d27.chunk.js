(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(15),o=n.n(c),r=n(6),a=n(3),u=n(2),i=n(4),s=n.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},b=function(e,t){return s.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},m=n(0),h=function(e){return console.log(e),Object(m.jsxs)("div",{children:["filter shown with ",Object(m.jsx)("input",{value:e.filter,onChange:e.handler})]})},O=function(e){return Object(m.jsxs)("form",{onSubmit:e.submit,children:[Object(m.jsxs)("div",{children:[" name: ",Object(m.jsx)("input",{value:e.name,onChange:e.handlerName})," "]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:e.number,onChange:e.handlerNumber})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var t=e.names;return Object(m.jsx)("div",{children:t.map((function(t){return Object(m.jsxs)("p",{children:[t.name," ",t.number," ",Object(m.jsx)("button",{onClick:function(){e.click(t.id,t.name)},children:"delete"})]},t.name)}))})},g=function(){var e=Object(u.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(u.useState)(""),i=Object(a.a)(o,2),s=i[0],l=i[1],g=Object(u.useState)(""),p=Object(a.a)(g,2),x=p[0],w=p[1],C=Object(u.useState)(""),k=Object(a.a)(C,2),L=k[0],S=(k[1],Object(u.useState)("")),N=Object(a.a)(S,2),y=N[0],T=N[1],D=Object(u.useState)(""),E=Object(a.a)(D,2),J=E[0],M=E[1],A=Object(u.useState)(""),B=Object(a.a)(A,2),I=B[0],P=B[1];Object(u.useEffect)((function(){console.log("effect"),d().then((function(e){console.log("promise fulfilled"),c(e)}))}),[]),console.log("render",n.length,"persons");var U=L?n:n.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})),q=function(e){var t=e.errorMessage;return null===t?null:Object(m.jsx)("div",{className:"error",children:t})},z=function(e){var t=e.message;return null===t?null:Object(m.jsx)("div",{className:"succeed",children:t})};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(z,{message:J}),Object(m.jsx)(q,{errorMessage:I}),Object(m.jsx)(h,{filter:y,handler:function(e){console.log(e.target.value),T(e.target.value)}}),Object(m.jsx)("h2",{children:"add a new"}),Object(m.jsx)(O,{submit:function(e){e.preventDefault(),console.log("button clicked",e.target);var t={name:s,number:x};if(n.some((function(e){return e.name.toLowerCase()===s.toLowerCase()}))){var o=n.find((function(e){return e.name.toLowerCase()===s.toLowerCase()})),a=Object(r.a)(Object(r.a)({},o),{},{number:x});window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&b(o.id,a).then((function(e){c(n.map((function(t){return t.name.toLowerCase()!==s.toLowerCase()?t:e}))),M("Updated ".concat(s)),setTimeout((function(){M(null)}),5e3)})).catch((function(e){P("".concat(s," was already removed from server")),setTimeout((function(){P(null)}),5e3),c(n.filter((function(e){return e.name!==s})))}))}else j(t).then((function(e){c(n.concat(e)),l(""),w(""),M("Added ".concat(s)),setTimeout((function(){M(null)}),5e3)}))},name:s,handlerName:function(e){console.log(e.target.value),l(e.target.value)},number:x,handlerNumber:function(e){console.log(e.target.value),w(e.target.value)}}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(v,{names:U,persons:n,filter:y,click:function(e,t){window.confirm("Delete ".concat(t," ?"))&&f(e).then((function(){c(n.filter((function(t){return t.id!==e}))),M("Deleted ".concat(t)),setTimeout((function(){M(null)}),5e3)})).catch((function(o){P("".concat(t," was already removed from server")),setTimeout((function(){P(null)}),5e3),c(n.filter((function(t){return t.id!==e})))}))}})]})};n(39);o.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2e424d27.chunk.js.map