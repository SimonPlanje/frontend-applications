(this["webpackJsonpfrontend-applications"]=this["webpackJsonpfrontend-applications"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(31),s=n.n(i),o=n(2),l=(n(76),n(4)),d=Object(o.a)().center([4,52.8]).scale(1e4),j=Object(o.b)().projection(d);var u=function(e){var t=e.geoMap,n=(e.garages,e.routes),c=e.filterData,i=Object(r.useRef)(".group"),s=Object(r.useRef)(".group"),l=Object(o.d)(i.current),u=Object(o.d)(s.current);return l.call(Object(o.e)().on("zoom",(function(e){u.attr("transform",e.transform)}))),t&&n&&c?Object(a.jsx)("div",{width:"100%",height:"100%",className:"d3div",children:Object(a.jsx)("svg",{ref:i,width:"100%",height:"100%",children:Object(a.jsxs)("g",{className:"group",ref:s,children:[Object(a.jsx)("g",{className:"map",children:Object(a.jsx)("path",{d:j(t),stroke:"var(--bluegrey)",fill:"transparent"})}),Object(a.jsx)("g",{className:"routes",children:n.map((function(e,t){return Object(a.jsx)("circle",{fill:"var(--light)",r:".7",cx:d([e.coordinates[1],e.coordinates[0]])[0],cy:d([e.coordinates[1],e.coordinates[0]])[1]},t)}))}),Object(a.jsx)("g",{className:"garages",children:c.map((function(e,t){return Object(a.jsx)("circle",{className:e.id,fill:"var(--pink)",r:"2",cx:d([e.accessPointLocation[0].longitude,e.accessPointLocation[0].latitude])[0],cy:d([e.accessPointLocation[0].longitude,e.accessPointLocation[0].latitude])[1]},t)}))})]})})}):null};var b=function(e){var t=e.garages,n=e.setFilterData;return Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsx)("div",{className:"staticLegenda",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Startpunten wandelingen"}),Object(a.jsx)("li",{children:"Parkeerplaatsen"})]})}),Object(a.jsxs)("form",{className:"filterForm",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{onChange:function(){n(t)},name:"radio",type:"radio"}),"Alle parkeerplaatsen "]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{onChange:function(){var e=t.filter((function(e){return"disabled"==e.id||"both"==e.id}));n(e)},name:"radio",type:"radio"}),"Invaliden parkeerplaatsen "]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{onChange:function(){var e=t.filter((function(e){return"charging"==e.id||"both"==e.id}));n(e)},name:"radio",type:"radio"}),"Oplaad parkeerplaatsen "]})]})]})},m=function(e,t,n,a,r){Object(o.c)("https://www.webuildinternet.com/articles/2015-07-19-geojson-data-of-the-netherlands/townships.geojson").then((function(t){e(t)})),Object(o.c)("https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/onlineData/longLatDisabled.json").then((function(e){t(e),null===r&&a(e)})),Object(o.c)("https://raw.githubusercontent.com/SimonPlanje/frontend-data/main/geoData_0.json").then((function(e){n(e)}))};var g=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(r.useState)(null),g=Object(l.a)(j,2),h=g[0],O=g[1],p=Object(r.useState)((function(){var e=localStorage.getItem("filterData");return e?JSON.parse(e):n})),f=Object(l.a)(p,2),v=f[0],x=f[1];return Object(r.useEffect)((function(){m(d,c,O,x)}),[]),Object(r.useEffect)((function(){localStorage.setItem("filterData",JSON.stringify(v))}),[v]),Object(a.jsxs)("div",{className:"SVGdiv",children:[Object(a.jsx)("h1",{children:"Parkeerplaatsen in Nederland en de startpunten van mooie wandelroutes"}),Object(a.jsx)(b,{garages:n,setFilterData:x}),Object(a.jsx)(u,{geoMap:o,garages:n,routes:h,filterData:v})]})},h=n(3),O=function(e){var t,n,r=e.numberUpdate,c=e.meer;return Object(a.jsxs)("div",{className:"story",children:[Object(a.jsxs)("h2",{children:["Je wandeld gemiddeld ",Object(a.jsxs)("strong",{children:[r," "]}),"keer per maand, "]}),Object(a.jsxs)("h2",{children:["dat is ",Object(a.jsxs)("strong",{children:[(t=r,n=2,Math.abs(t-n))," "]})," keer ",Object(a.jsx)("strong",{children:c})," dan de gemiddelde Nederlander per maand "]}),Object(a.jsx)("p",{className:"p-story",children:" Met heel Nederland lopen we 441 miljoen wandelingen per jaar. Dit lijkt heel veel maar als we dit per persoon per maand uitrekenen, is dit maar 2 keer per maand per persoon. Door de coronacrisis van dit moment krijgen mensen steeds meer behoefte om tussen het werken door lekker naar buiten te gaan. Er zijn veel mooie wandelingen bereikbaar met de auto. En wandelen is een van de beste manieren om tijdens de lockdown elkaar alsnog te kunnen ontmoeten in de buitenlucht. Laten we hopen dat de omstandigheden snel weer beter worden, maar tot die tijd is Nederland gelukkig nog groot genoeg voor ons allemaal en zijn er nog zoveel mooie plekken die we kunnen gaan ontdekken. "}),Object(a.jsx)("button",{onClick:function(){window.scroll({top:1e3,behavior:"smooth"})},className:"linkToVis",children:" Bekijk parkeerplaatsen in de buurt van wandelingen"})]})},p=function(e){var t=e.numberState,n=e.numberUpdate,r=e.setMeer;return Object(a.jsxs)("div",{className:"Walkcounter",children:[Object(a.jsx)("h2",{children:" Hoeveel wandelingen maak je gemiddeld per maand? "}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(a.jsx)("input",{className:"numberForm",max:"9",min:"0",type:"number",value:t,onChange:function(e){e.target.value<2?(n(e.target.value),r("minder")):e.target.value>=2&&(n(e.target.value),r("meer"))},autofocus:!0})})]})};var f=function(){var e,t=Object(r.useState)("meer"),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)((function(){var e=localStorage.getItem("numberState");return e||"0"})),o=Object(l.a)(s,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){localStorage.setItem("numberState",d)}),[d]),Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{numberState:d,numberUpdate:j,setMeer:i}),Object(a.jsx)(O,(e={numberUpdate:j},Object(h.a)(e,"numberUpdate",d),Object(h.a)(e,"meer",c),Object(h.a)(e,"setMeer",i),e))]})};var v=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsx)(g,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),x()}},[[77,1,2]]]);
//# sourceMappingURL=main.943f2480.chunk.js.map