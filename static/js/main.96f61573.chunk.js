(window["webpackJsonptreebank-template"]=window["webpackJsonptreebank-template"]||[]).push([[0],{138:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),c=a.n(o),l=(a(54),a(55),a(56),a(14)),i=a(43),s=a(15),m=a(9),u=a(1),p=Object(u.shape)({start:u.number,end:u.number,numbers:Object(u.arrayOf)(Object(u.oneOfType)([u.string]))}),h=Object(u.shape)({locus:u.string.isRequired,path:u.string.isRequired,xml:u.string.isRequired,link:u.string,notes:u.string,chunks:p.isRequired}),d=Object(u.shape)({path:u.string.isRequired,author:u.string.isRequired,work:u.string.isRequired,editors:Object(u.oneOfType)([u.string,Object(u.arrayOf)(u.string)]).isRequired,sections:Object(u.arrayOf)(h).isRequired}),b=Object(u.shape)({title:Object(u.oneOfType)([u.string,u.element]).isRequired,publications:Object(u.arrayOf)(d),text:u.string}),g=(Object(u.shape)({title:Object(u.oneOfType)([u.string,u.element]).isRequired,subtitle:u.string.isRequired,copyright:u.string,report:u.string,github:u.string,twitter:u.string,collections:Object(u.arrayOf)(b).isRequired}),Object(u.shape)({params:Object(u.shape)({chunk:u.string.isRequired}).isRequired}),Object(u.shape)({params:Object(u.shape)({publication:u.string.isRequired}).isRequired}),a(44)),E=a.n(g),f=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(E.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),a&&function(e){return r.a.createElement("p",null,r.a.createElement("span",null,e))}(a)))},k=a(29),v=a.n(k),w=function(e){return Object(k.uriTransformer)("/"===e[0]?"".concat("/treebank-template").concat(e):e)},O=function(e){return r.a.createElement(v.a,Object.assign({},e,{transformLinkUri:w}))},x=function(e){var t=e.path,a=e.author,n=e.work,o=e.editors,c=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},n),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,a),","," ",r.a.createElement("em",null,n)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},function(e){return Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map(function(e){return r.a.createElement("li",{key:e},e)})):e}(o)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},c.map(function(e){return function(e){var t=e.locus,a=e.path,n=function(e){var t=e.start,a=e.numbers;return t||a[0]}(e.chunks);return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(n)},t),r.a.createElement("br",null))}(e)})))},j=function(e){var t=e.title,a=e.publications,n=e.text;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),n&&r.a.createElement(O,{source:n}),r.a.createElement("table",{className:"table"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,a.map(function(e){return x(e)})))))))};j.defaultProps={publications:void 0,text:void 0};var N=j,y=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.PerseidsHeader,null,a),r.a.createElement(f,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.text,n=e.publications;return r.a.createElement(N,{key:t,title:t,text:a,publications:n})}(e)}))},_=a(5),q=a(6),R=a(11),P=a(10),C=a(12),L=a(19),T=a.n(L),F={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"https://services.perseids.org/arethusa-configs",retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/treebank-template","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"http://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"http://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"http://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"http://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"http://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"http://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"http://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{noRetrieval:"online",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html"},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{"\u03b1":"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]","\u03b5":"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]","\u03b7":"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]","\u03b9":"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]","\u03bf":"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]","\u03c5":"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]","\u03c9":"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},S=(a(138),function(){function e(){Object(_.a)(this,e),this.elementId="treebank_container",this.remoteUrl="".concat("/treebank-template","/arethusa/"),this.appConf=F,this.render=this.render.bind(this)}return Object(q.a)(e,[{key:"render",value:function(e,t){var a=window,n=a.arethusaGoto,r=a.Arethusa,o=a.$;this.widget?this.doc===e&&this.chunk!==t&&(n(t),function(e){e("#toast-container").remove()}(o)):(this.widget=new r,this.widget.on(this.elementId).from(this.remoteUrl).with(this.appConf).start({doc:e,chunk:t})),this.doc=e,this.chunk=t}}]),e}()),G=a(45),M=a.n(G),A=a(48),H=a(22),I=a(16),V=a.n(I),W=function(e,t){return e<t?e:t},B=function(e,t){return e>t?e:t},U=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(R.a)(this,Object(P.a)(t).call(this,e))).state={isOpen:!1},a.toggleOpen=a.toggleOpen.bind(Object(H.a)(a)),a}return Object(C.a)(t,e),Object(q.a)(t,[{key:"getLines",value:function(){var e=this.props.chunks,t=e.start,a=e.end,n=e.numbers;if(n)return n;for(var r=[],o=t;o<=a;o+=1)r.push(o);return r}},{key:"getFbcnl",value:function(){var e=this.props,t=e.chunks,a=t.start,n=t.end,r=t.numbers,o=e.match.params.chunk,c=Number(o);return r?function(e,t){var a=t.indexOf(e);return[t[0],t[B(0,a-1)],e,t[W(t.length-1,a+1)],t[t.length-1]]}(o,r):[a,B(a,c-1),o,W(n,c+1),n]}},{key:"toggleOpen",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=this.getFbcnl(),n=Object(A.a)(a,5),o=n[0],c=n[1],i=n[2],s=n[3],m=n[4],u=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(V.a.link),to:"./".concat(o)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(V.a.link),to:"./".concat(c)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(V.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":t,onClick:this.toggleOpen},i),r.a.createElement("div",{className:"dropdown-menu ".concat(V.a.dropdownScroll," ").concat(t?"show":"")},u.map(function(t){return r.a.createElement(l.b,{className:"dropdown-item",key:t,to:"./".concat(t),onClick:e.toggleOpen},t)}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link text-light ".concat(V.a.link),to:"./".concat(s)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement(l.b,{className:"nav-link text-light ".concat(V.a.link),to:"./".concat(m)},"Last \xbb")))))}}]),t}(n.Component),D=function(e){function t(){return Object(_.a)(this,t),Object(R.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a)}},{key:"render",value:function(){var e=this.props,t=e.chunks,a=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{match:a,chunks:t}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:M.a.treebankContainer})))}}]),t}(n.Component),J=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:T.a.publicationRow},function(e){return Array.isArray(e)?r.a.createElement("div",null,e.map(function(e){return r.a.createElement("span",{key:e},e,r.a.createElement("br",null))})):e}(t)))},z=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(R.a)(this,Object(P.a)(t).call(this,e))).arethusa=new S,a}return Object(C.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e,t,a=this.props,n=a.publicationPath,o=a.author,c=a.work,l=a.editors,i=a.locus,s=a.link,u=a.notes,p=a.xml,h=a.chunks,d=a.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.PerseidsHeader,null,r.a.createElement("span",null,r.a.createElement("i",null,c)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,o,",",r.a.createElement("i",null," ",c," "),i)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,o&&J("Author",o),c&&J("Work",c),i&&function(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:T.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)")))}("Locus",i,n),l&&J("Editors",l),s&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",s),u&&(e="Notes",t=u,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:T.a.publicationRow},r.a.createElement(O,{source:t})))))),r.a.createElement("div",{className:T.a.treebankWrapper},r.a.createElement(D,{xml:p,chunks:h,match:d,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/treebank-template","/xml/").concat(p),target:"_blank",rel:"noopener noreferrer"},"View XML"))))}}]),t}(n.Component);z.defaultProps={link:void 0,notes:void 0};var K=z,Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.PerseidsHeader,null,r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/treebank-template","/")},"Return to homepage"))))))},$=function(e){function t(e){var a;Object(_.a)(this,t),a=Object(R.a)(this,Object(P.a)(t).call(this,e));var n=e.config,r={};return n.collections.forEach(function(e){(e.publications||[]).forEach(function(e){var t=e.author,a=e.work,n=e.editors,o=e.path;e.sections.forEach(function(e){var c=e.path,l=e.locus,i=e.link,s=e.notes,m=e.xml,u=e.chunks;r[c]={publicationPath:o,author:t,work:a,editors:n,locus:l,link:i,notes:s,xml:m,chunks:u}})})}),a.argsLookup=r,a}return Object(C.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.match,t=e.params.publication,a=this.argsLookup[t];return void 0===a?r.a.createElement(Q,null):r.a.createElement(K,Object.assign({},a,{match:e}))}}]),t}(n.Component),X=function(e){var t=e.config,a=t.title,n=t.subtitle,o=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.PerseidsHeader,null,a,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement(f,{title:a,subtitle:n}),o.map(function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(N,{key:t,title:t,publications:a})}(e)}))},Y=function(e){function t(e){var a;Object(_.a)(this,t),a=Object(R.a)(this,Object(P.a)(t).call(this,e));var n=e.config,o={},c=n.title,l=n.subtitle,i=n.report,s=n.github,m=n.twitter;return n.collections.forEach(function(e){(e.publications||[]).forEach(function(e){var t=e.path,a=e.author,n=e.work;o[t]={title:c,subtitle:l,report:i,github:s,twitter:m,collections:[{title:r.a.createElement(r.a.Fragment,null,a,","," ",r.a.createElement("i",null,n)),publications:[e]}]}})}),a.argsLookup=o,a}return Object(C.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props.match.params.publication,t=this.argsLookup[e];return void 0===t?r.a.createElement(Q,null):r.a.createElement(X,{config:t})}}]),t}(n.Component),Z=function(e){var t=e.config,a=e.config,n=a.copyright,o=a.report,c=a.github,l=a.twitter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement(y,{config:t})}}),r.a.createElement(s.a,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(Y,Object.assign({},e,{config:t}))}}),r.a.createElement(s.a,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement($,Object.assign({},e,{config:t}))}})),r.a.createElement(m.PerseidsFooter,{copyright:n,report:o,github:c,twitter:l}))},ee=function(){return r.a.createElement(l.a,{basename:"/treebank-template"},r.a.createElement(Z,{config:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e,t,a){e.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",link:"ControlPanel_link__OEqVs"}},19:function(e,t,a){e.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},43:function(e){e.exports=JSON.parse('{"title":"Treebank Publication Template","subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","copyright":"\xa9 The Perseids Project 2019","report":"https://github.com/perseids-publications/treebank-template/issues","github":"https://github.com/perseids-publications/treebank-template/","twitter":"https://twitter.com/PerseidsProject","collections":[{"title":"Information","text":"To learn more visit [our homepage](https://www.perseids.org) or view a [treebank](/on-the-murder-of-eratosthenes-1-50/1)."},{"title":"Collection 1","publications":[{"path":"on-the-murder-of-eratosthenes","author":"Lysias","work":"On the Murder of Eratosthenes","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-murder-of-eratosthenes-1-50","xml":"lysias-1-1-50.xml","link":"https://www.example.com","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":483}}]},{"path":"on-the-crown","author":"Demosthenes","work":"On the Crown","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-crown-1-50","xml":"demosthenes-18-1-50.xml","notes":"Lorem ipsum dolor sit amet, *consectetur* adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":160}},{"locus":"51-100","path":"on-the-crown-51-100","xml":"demosthenes-18-51-100.xml","chunks":{"start":1,"end":149}}]}]},{"title":"Collection 2","publications":[{"path":"histories","author":"Herodotus","work":"The Histories","editors":"Vanessa Gorman","sections":[{"locus":"40-59","path":"histories-40-59","xml":"herodotus-1-40-59.xml","chunks":{"start":1,"end":100}},{"locus":"60-79","path":"histories-60-79","xml":"herodotus-1-60-79.xml","chunks":{"start":1,"end":166}},{"locus":"80-99","path":"histories-80-99","xml":"herodotus-1-80-99.xml","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":185}}]},{"path":"philippic","author":"Demosthenes","work":"Philippic 1","editors":["Robert Gorman","Vanessa Gorman"],"sections":[{"locus":"1-51","path":"philippic-1-51","xml":"demosthenes-4-phil1-bu1.xml","chunks":{"numbers":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159"]}}]}]}]}')},44:function(e,t,a){e.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},45:function(e,t,a){e.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},49:function(e,t,a){e.exports=a(142)},56:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.96f61573.chunk.js.map