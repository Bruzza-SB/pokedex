(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(12),n(3)),l=n(4),s=n(6),u=n(5),m=(n(13),n(14),function(e){var t=e.pokeName,n=e.pokeID;return o.a.createElement("div",{className:"tc bg-light-blue dib pd3 ba5 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:"pokemon"}),o.a.createElement("h1",null,t),o.a.createElement("h2",null,"#",n))}),h=function(e){var t=e.pokemons;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(m,{pokeName:t[n].name,pokeID:t[n].id,key:n})})))},p=function(e){var t=e.OnSearch;return o.a.createElement("div",{className:"tc p3"},o.a.createElement("input",{type:"text",name:"searchbox",placeholder:"Pokemon",className:"tc pa3 ba b--blue bg-lightest-blue",onChange:t}))},d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).OnSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={pokemons:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){return e.json()})).then((function(t){var n=t.results.map((function(e,t){return{name:e.name,id:t+1}}));e.setState({pokemons:n})}))}},{key:"render",value:function(){var e=this.state,t=e.pokemons,n=e.searchField,a=t.filter((function(e){if(e.name.toLowerCase().includes(n.toLocaleLowerCase())||e.id==n)return e}));return o.a.createElement("div",null,o.a.createElement("h1",{className:"tittle"},"P O K E D E X"),o.a.createElement("h3",{className:"tittle"},"by SantiBru"),o.a.createElement(p,{OnSearch:this.OnSearchChange}),o.a.createElement(h,{pokemons:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cb7c6f8b.chunk.js.map