(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),l=n.n(r),i=(n(15),n(6)),o=n(4),s=n(2),u=function(e){var t=e.action,n=Object(a.useState)(""),r=Object(o.a)(n,2),l=r[0],i=r[1];return c.a.createElement("div",null,c.a.createElement("h1",{className:"title"}," To Do List "),c.a.createElement("input",{className:"inputTask",type:"text",onChange:function(e){return i(e.target.value)},name:"input-task",placeholder:"Ingrese una tarea",value:l}),c.a.createElement(s.b,{className:"plusIcon",title:"Agregar",onClick:function(){t(l),i("")}}))},m=function(e){var t=e.list,n=e.deleteAction,a=e.changeAction,r=e.filter,l=t.filter((function(e){return null===r||e.isChecked===r})).map((function(e,t){return c.a.createElement("div",{className:"task",key:"item-".concat(t)},c.a.createElement("span",null,c.a.createElement("input",{type:"checkbox",checked:e.isChecked,onChange:function(t){return a(e,t)},key:"id-".concat(t),className:"checkbox"}),c.a.createElement("span",{style:e.isChecked?{textDecoration:"line-through"}:{textDecoration:"none"}},e.name)),c.a.createElement(s.c,{title:"Eliminar",onClick:function(){return n(e.name)},className:"trashIcon"}))}));return c.a.createElement("div",{className:"tasksContainer"},l)},f=n(9),d=function(e){var t=e.setFilter,n=e.quantity;return c.a.createElement("div",{className:"filtersContainer"},c.a.createElement("span",null,c.a.createElement("sup",null,n)),c.a.createElement(f.a,null),c.a.createElement("button",{className:"filterBtn filterBtn--blue",onClick:function(){return t(null)}},"Todas"),c.a.createElement("button",{className:"filterBtn filterBtn--red",onClick:function(){return t(!1)}},"Incompletas"),c.a.createElement("button",{className:"filterBtn filterBtn--green",onClick:function(){return t(!0)}},"Completas"))},h=(n(16),function(){return c.a.createElement("div",{className:"github",title:"Ir al repositorio"}," ",c.a.createElement("a",{href:"https://github.com/IrisMazzuca/to-do-list-react"},c.a.createElement(s.a,null)))}),E=function(){var e=Object(a.useState)([{name:"\ud83d\udc49 Ir al supermerado",isChecked:!1},{name:"\ud83d\udc49 Ir a la farmacia",isChecked:!0},{name:"\ud83d\udc49 Comprar regalos",isChecked:!1}]),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),s=Object(o.a)(l,2),f=s[0],E=s[1],k=Object(i.a)(n).filter((function(e){return null===f||e.isChecked===f})).length;return c.a.createElement("div",{className:"container"},c.a.createElement(h,null),c.a.createElement(u,{list:n,action:function(e){r([].concat(Object(i.a)(n),[{name:e,isChecked:!1}]))}}),c.a.createElement(m,{list:n,deleteAction:function(e){r(n.filter((function(t){return t.name!==e})))},changeAction:function(e,t){var a=t.target.checked?e.isChecked=!0:e.isChecked=!1,c=n.findIndex((function(t){return t.name===e.name})),l=Object(i.a)(n);l[c].isChecked=a,r(l)},filter:f}),c.a.createElement(d,{setFilter:E,quantity:k}))};var k=function(){return c.a.createElement("div",null,c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b1151992.chunk.js.map