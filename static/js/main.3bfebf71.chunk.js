(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(4),l=n(6),m=n(5),u=(n(13),{id:462,results:[{name:"Santi",age:22},{name:"Tomi",age:25}]}),p=function(e){var t=e.pokeName,n=e.pokeID;return a.a.createElement("div",{className:"tc bg-light-blue dib br3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:"pokemon"}),a.a.createElement("h1",null,t),a.a.createElement("h2",null,"#",n))},h=function(e){var t=e.pokemons;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(p,{pokeName:t[n].name,pokeID:n+1})})))},k=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={pokemons:u,searchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){return e.json()})).then((function(t){console.log("mount",t),e.setState({pokemons:t})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h,{pokemons:this.state.pokemons.results}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.3bfebf71.chunk.js.map