(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{R1uw:function(t,e,n){"use strict";n.r(e);var r=n("wTIg"),a=n("q1tI"),o=n("noox"),i=n("WsIH"),s=n("dH/O"),u=n("/j2g"),c=(n("dRSK"),n("vYFb")),l=n("Wbzz"),d=n("joFz"),b=n("qKvR"),h=function(t){var e=t.author;return Object(b.jsx)(p,null,Object(b.jsx)(g,{as:e.authorsPage?l.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(b.jsx)(f,null,Object(b.jsx)(x,{src:e.avatar.medium}))),Object(b.jsx)(j,{dangerouslySetInnerHTML:{__html:e.bio}}))},p=Object(r.a)("div",{target:"eig4wgl0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),g=Object(r.a)("div",{target:"eig4wgl1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),x=Object(r.a)(d.c,{target:"eig4wgl2"})({name:"uodor8",styles:"border-radius:50%;"}),f=Object(r.a)("div",{target:"eig4wgl3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),j=Object(r.a)("p",{target:"eig4wgl4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),w=n("pylL"),v=n("sjHn"),m=n("ZtNh");function O(){var t=C(["\n    font-size: 32px;\n  "]);return O=function(){return t},t}function y(){var t=C(["\n    font-size: 38px\n  "]);return y=function(){return t},t}function k(){var t=C(["\n    width: 100%;\n  "]);return k=function(){return t},t}function z(){var t=C(["\n    width: 80%;\n  "]);return z=function(){return t},t}function S(){var t=C(["\n    display: none;\n  "]);return S=function(){return t},t}function L(){var t=C(["\n    display: none;\n  "]);return L=function(){return t},t}function R(){var t=C(["\n    margin-bottom: 60px;\n  "]);return R=function(){return t},t}function T(){var t=C(["\n    margin-bottom: 80px;\n  "]);return T=function(){return t},t}function C(t,e){return e||(e=t.slice(0)),t.raw=e,t}var H=function(t){var e=t.authors,n=Object(a.useContext)(m.a),r=n.gridLayout,i=void 0===r?"tiles":r,s=n.hasSetGridLayout,u=n.setGridLayout,l=c.data.site.edges[0].node.siteMetadata.hero,d=s&&"tiles"===i,p=e.find((function(t){return t.featured}));if(!p)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(b.jsx)(o.a,{relative:!0,id:"Articles__Hero"},Object(b.jsx)(M,{style:{maxWidth:l.maxWidth+"px"}},Object(b.jsx)(W,{dangerouslySetInnerHTML:{__html:l.heading}})),Object(b.jsx)(_,null,Object(b.jsx)(h,{author:p}),Object(b.jsx)(I,null,Object(b.jsx)(A,{onClick:function(){return u("tiles")},active:d,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(b.jsx)(w.a.Tiles,null)),Object(b.jsx)(A,{onClick:function(){return u("rows")},active:!d,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(b.jsx)(w.a.Rows,null)))))},_=Object(r.a)("div",{target:"evd3z0e0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",v.a.desktop(T()),";",v.a.tablet(R()),";",v.a.phablet(L()),";"),I=Object(r.a)("div",{target:"evd3z0e1"})("display:flex;align-items:center;",v.a.tablet(S()),";"),M=Object(r.a)("div",{target:"evd3z0e2"})("margin:100px 0;",v.a.desktop(z())," ",v.a.tablet(k())),W=Object(r.a)("h1",{target:"evd3z0e3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",v.a.desktop(y())," ",v.a.phablet(O())),A=Object(r.a)("button",{target:"evd3z0e4"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),F=n("6Ras"),J=(e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,a=n.additionalContext.authors;return Object(b.jsx)(s.a,null,Object(b.jsx)(i.a,{pathname:e.pathname}),Object(b.jsx)(H,{authors:a}),Object(b.jsx)(o.a,{narrow:!0},Object(b.jsx)(F.a,{articles:r}),Object(b.jsx)(N,{show:n.pageCount>1},Object(b.jsx)(u.a,n))),Object(b.jsx)(J,null))},Object(r.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),N=Object(r.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"}))},vYFb:function(t){t.exports=JSON.parse('{"data":{"site":{"edges":[{"node":{"siteMetadata":{"hero":{"heading":"Devoting your passion to what you enthuse on.","maxWidth":652}}}}]}}}')}}]);
//# sourceMappingURL=component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-8fa7fe2ba1bcd4cb4692.js.map