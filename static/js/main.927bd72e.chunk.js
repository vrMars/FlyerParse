(this["webpackJsonpflyer-parse"]=this["webpackJsonpflyer-parse"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(14),a(15),a(16),a(8)),o=a(2),l=a(3),u=a(1),m=a(5),d=a(4),h=(a(17),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createTasks=n.createTasks.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){return r.a.createElement("li",{key:e.key},e.text)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("ul",{className:"theList"},e)}}]),a}(n.Component)),p=function(e){var t=e.price;return console.log(t),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},t.name),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},t.merchant),r.a.createElement("p",{class:"card-text"},t.price)))},f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[],prices:[]},n.fetchPrices=n.fetchPrices.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(t)}})),this._inputElement.value=""}console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"fetchPrices",value:function(){var e=this,t=this.state.items;if(0!==t.length){var a,n=new URLSearchParams,r=Object(s.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;n.append("items",c.text)}}catch(o){r.e(o)}finally{r.f()}var i=new Headers;i.append("Content-Type","application/x-www-form-urlencoded"),fetch("https://flyer-parse.herokuapp.com/",{method:"POST",headers:i,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({prices:t})})).catch(console.log)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"itemListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("form",null,r.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"enter item"}),r.a.createElement("button",{type:"button",onClick:this.addItem},"add"),r.a.createElement("button",{type:"button",onClick:this.fetchPrices},"get prices!"))),r.a.createElement(h,{entries:this.state.items,delete:this.deleteItem}),this.state.prices&&this.state.prices.map((function(e,t){return Array.isArray(e)?e.p.map((function(e,t){return r.a.createElement(p,{key:t,price:e.p})})):r.a.createElement(p,{key:t,price:e.p[0]})})))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.927bd72e.chunk.js.map