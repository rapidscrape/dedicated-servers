(this["webpackJsonpserver-select"]=this["webpackJsonpserver-select"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(9),o=n.n(a),i=(n(43),n(29)),u=n(30),s=n(37),d=n(36),p=n(3),l=n(14),h=n.n(l),m=n(31),v=n.n(m),f=n(32),b=n.n(f),g=n(33),j=n.n(g),y=n(34),S=n.n(y),w=n(35),O=(n(107),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={currencies:{USD:1.18},currency:"EUR",servers:[],cpuBenchmarks:[]},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("https://raw.githubusercontent.com/serverselect/node-server-scraper/master/output/output.json").then((function(e){return e.json()})).then((function(e){var t=[];return e.forEach((function(e){e.servers.filter((function(e){return e.available})).forEach((function(n){n.storage.forEach((function(r){t.push(Object(p.a)(Object(p.a)({},n),{},{storage:r,provider:e.meta.provider}))}))}))})),t})).then((function(t){e.setState(Object(p.a)(Object(p.a)({},e.state),{},{servers:t.map((function(t){var n=t.price;return"EUR"!==n.unit&&(n={value:Math.round(t.price.value/e.state.currencies[t.price.unit]*10)/10,unit:"EUR"}),Object(p.a)(Object(p.a)({},t),{},{price:n,id:h.a.generate()})}))}))})),fetch("https://raw.githubusercontent.com/ServerSelect/node-cpu-benchmark-scraper/main/output/output.json").then((function(e){return e.json()})).then((function(e){return e.benchmarks})).then((function(t){e.setState(Object(p.a)(Object(p.a)({},e.state),{},{cpuBenchmarks:t}))}))]).then((function(){var t=e.state.cpuBenchmarks,n=j()((function(){this.field("cpu"),t.forEach((function(e,t){this.add(Object(p.a)(Object(p.a)({},e),{},{id:t.toString()}))}),this)})),r=function(e){var r=n.search(e);return r.length>0?t[parseInt(r[0].ref)].score:-1},c=e.state.servers;e.setState(Object(p.a)(Object(p.a)({},e.state),{},{servers:c.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{cpuScore:r(e.cpu.name),id:h.a.generate()})}))}))})).then((function(){var t=function(e){var t="";Object.values(w.countries).forEach((function(n){n.name===e.location.country&&(t=n.continent)}));var n="".concat(100*Math.round(e.cpuScore/100));return n+="_".concat(e.memory.value,"-").concat(e.memory.unit),n+="_".concat(e.storage.amount,"x-").concat(e.storage.value,"-").concat(e.storage.unit,"-").concat(e.storage.type),n+="_".concat(e.bandwidthSpeed.value,"-").concat(e.bandwidthSpeed.unit),n+="_".concat(e.bandwidthLimit.value>0?1:0),n+="_".concat(t),S()(n)},n={};e.state.servers.map((function(e){var r=t(e);n[r]||(n[r]=[]),n[r].push(e.price.value)}));var r={};Object.keys(n).map((function(e){r[e]=n[e].sort()[0]||-1})),e.setState(Object(p.a)(Object(p.a)({},e.state),{},{servers:e.state.servers.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{predictedPrice:r[t(e)]})}))}))}))}},{key:"render",value:function(){var e=["provider","cpu","cpuScore","ram","storage","bandwidthSpeed","bandwidthLimit","price","predictedPrice","location","url"].map((function(e){return{dataField:e,text:e,formatter:"url"===e?function(e){return c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e},"view")}:null}})),t=this.state.servers.sort(v()((function(e){return e.price.value})).thenBy((function(e,t){return e.cpuScore<t.cpuScore})).thenBy((function(e,t){return e.memory.amout<t.memory.amout})));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Best Dedicated Servers"),c.a.createElement("div",null,this.state.currency,". Sorted by price + cpuScore + memory"),c.a.createElement(b.a,{loading:this.state.servers<=0,keyField:"id",data:t.map((function(e){return{id:e.id,provider:e.provider,cpu:"".concat(e.cpu.amount,"x ").concat(e.cpu.frequency," ").concat(e.cpu.name," ").concat(e.cpu.cores," cores"),cpuScore:e.cpuScore,ram:"".concat(e.memory.value," ").concat(e.memory.unit," ").concat(e.memory.type),storage:"".concat(e.storage.amount,"x ").concat(e.storage.value," ").concat(e.storage.unit," ").concat(e.storage.type," ").concat(e.storage.connType),bandwidthSpeed:"".concat(e.bandwidthSpeed.value," ").concat(e.bandwidthSpeed.unit),bandwidthLimit:e.bandwidthLimit.value>0?"".concat(e.bandwidthLimit.value," ").concat(e.bandwidthLimit.unit):"\u221e",price:"".concat(e.price.value.toFixed(2)),predictedPrice:"".concat(e.predictedPrice>0?e.predictedPrice.toFixed(2):"-"),location:"".concat(e.location.city,", ").concat(e.location.country),url:e.url}})),columns:e,bootstrap4:!0,bordered:!0,hover:!0,condensed:!0,rowStyle:function(e,t){if(parseFloat(e.predictedPrice)>0){if(Math.round(parseFloat(e.predictedPrice))<Math.round(parseFloat(e.price)))return{backgroundColor:"rgba(255, 0, 0, 0.1)"};if(Math.round(parseFloat(e.predictedPrice))>Math.round(parseFloat(e.price)))return{backgroundColor:"rgba(0, 255, 0, 0.1)"}}return{}}}))}}]),n}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,n){e.exports=n(108)},43:function(e,t,n){}},[[38,1,2]]]);
//# sourceMappingURL=main.2affae93.chunk.js.map