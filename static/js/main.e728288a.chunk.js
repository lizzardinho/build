(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n.p+"static/media/1.2aae32fe.png"},26:function(t,e,n){t.exports=n.p+"static/media/2.28080697.png"},30:function(t,e,n){t.exports=n(49)},38:function(t,e){},47:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n.n(a),i=n(24),o=n.n(i),u=n(10),s=n(8),p=n(14),l=n(25),c=n.n(l),y=n(26),d=n.n(y);function m(){m=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,n){return t[e]=n}}function s(t,e,n,a){var r=e&&e.prototype instanceof c?e:c,i=Object.create(r.prototype),o=new O(a||[]);return i._invoke=function(t,e,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return j()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var u=T(o,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=p(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}(t,n,o),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var l={};function c(){}function y(){}function d(){}var f={};u(f,r,function(){return this});var h=Object.getPrototypeOf,v=h&&h(h(M([])));v&&v!==e&&n.call(v,r)&&(f=v);var b=d.prototype=c.prototype=Object.create(f);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function g(t,e){var a;this._invoke=function(r,i){function o(){return new e(function(a,o){!function a(r,i,o,u){var s=p(t[r],t,i);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?e.resolve(c.__await).then(function(t){a("next",t,o,u)},function(t){a("throw",t,o,u)}):e.resolve(c).then(function(t){l.value=t,o(l)},function(t){return a("throw",t,o,u)})}u(s.arg)}(r,i,a,o)})}return a=a?a.then(o,o):o()}}function T(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var a=p(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return y.prototype=d,u(b,"constructor",d),u(d,"constructor",y),y.displayName=u(d,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(g.prototype),u(g.prototype,i,function(){return this}),t.AsyncIterator=g,t.async=function(e,n,a,r,i){void 0===i&&(i=Promise);var o=new g(s(e,n,a,r),i);return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(b),u(b,o,"Generator"),u(b,r,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=M,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function f(){var t=Object(a.useState)(1),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),y=l[0],f=l[1],h=Object(a.useState)(null),v=Object(s.a)(h,2),b=(v[0],v[1],Object(a.useState)(null)),w=Object(s.a)(b,2),g=w[0],T=w[1],E=Object(a.useState)(null),x=Object(s.a)(E,2),O=x[0],M=x[1],j=Object(a.useState)(null),L=Object(s.a)(j,2),k=(L[0],L[1]),_=Object(a.useState)(null),I=Object(s.a)(_,2),S=I[0],A=I[1],N=Object(a.useState)(),C=Object(s.a)(N,2),R=C[0],F=C[1],B=Object(a.useState)(),P=Object(s.a)(B,2),U=(P[0],P[1]),G=Object(a.useState)(""),H=Object(s.a)(G,2),D=H[0],W=H[1],Y=Object(a.useState)("0.1010"),q=Object(s.a)(Y,2),J=q[0],X=(q[1],[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_initBaseURI",type:"string"},{internalType:"string",name:"_initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}]);function V(){return(V=Object(u.a)(m().mark(function t(){return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then(function(t){z(t[0]),"0xA4B1"!==window.ethereum.networkVersion?(window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0xA4B1",rpcUrls:["https://arb1.arbitrum.io/rpc"],chainName:"Arbitrum One",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},blockExplorerUrls:["https://arbiscan.io/","https://arbiscan.io/"]}]}),f(function(t){return!t})):f(function(t){return!t})}):alert("Need to install Metamask !");case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}var z=function(t){T(t),K()},K=function(){var t=new p.a.providers.Web3Provider(window.ethereum);M(t);var e=t.getSigner();k(e);var n=new p.a.Contract("0x9EdC260F51Ccf42809c52399D993b2fF6F7DE99b",X,e);A(n)},Q=function(){var t=Object(u.a)(m().mark(function t(e){var a;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a=J,(a=J*n).toString(),t.next=6,S.mint(n,{value:p.a.utils.parseEther("".concat(a)),gasLimit:6e6}).then(function(t){console.log("txHash",t.hash)});case 6:0!=t.sent.wait()?alert("You have minted successfully !"):alert("Error, try again !");case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){var t=function(){var t=Object(u.a)(m().mark(function t(){var e,n;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getBalance(g);case 2:e=t.sent,n=p.a.utils.formatEther(e),F(n);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(u.a)(m().mark(function t(){var e;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.maxSupply();case 2:e=t.sent,U(e);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(m().mark(function t(){var e;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.name();case 2:e=t.sent,W(e);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();t().catch(console.error),e().catch(console.error),n().catch(console.error)}),r.a.createElement("div",{className:"MintDapp"},r.a.createElement("div",{className:"topsection"},r.a.createElement("div",{className:"typewriter"},r.a.createElement("h1",null,"We are the Revolution"))),y?r.a.createElement("div",{className:"mainsection2"},r.a.createElement("form",{onSubmit:Q,name:"form1"},r.a.createElement("div",{className:"counter"},r.a.createElement("button",{type:"button",onClick:function(){n>1&&i(function(t){return t-1})}},"-"),r.a.createElement("input",{type:"number",value:n,onChange:function(t){t.target.value<=20&&t.target.value>=1&&i(t.target.value)}}),r.a.createElement("button",{type:"button",onClick:function(){n<20&&i(function(t){return t+1})}},"+")),r.a.createElement("div",{className:"mint"},r.a.createElement("button",{type:"submit"},"MINT")))):r.a.createElement("div",{className:"mainsection1"},r.a.createElement("button",{onClick:function(){return V.apply(this,arguments)}},"CONNECT WALLET")),r.a.createElement("div",{className:"info"},r.a.createElement("img",{src:d.a,id:"redpill"}),r.a.createElement("img",{src:c.a,id:"bluepill"}),r.a.createElement("p",null,D),r.a.createElement("p",null,"Balance: ",y?R:"0"," ETH"),r.a.createElement("p",null,"PRICE: 0.1010 ETH"),r.a.createElement("p",null,"SUPPLY: 1010"),r.a.createElement("p",null,"MAX: 2 PER WALLET"),r.a.createElement("br",null),r.a.createElement("h2",null,"ESCAPE THE MATRIX")))}n(47);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)))}},[[30,2,1]]]);
//# sourceMappingURL=main.e728288a.chunk.js.map