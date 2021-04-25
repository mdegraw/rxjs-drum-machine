(this["webpackJsonprxjs-drum-machine"]=this["webpackJsonprxjs-drum-machine"]||[]).push([[0],{107:function(e,t,a){e.exports=a(119)},112:function(e,t,a){},113:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(112),a(165)),l=a(164),u=a(96),m=a(163),s=(a(113),a(20)),p=a(58),b=a(158),f=a(161),d=a(167),g=a(149),j=a(171),O=a(162),h=a(95),E=a.n(h),w=a(94),y=a.n(w),v=a(93),x=a.n(v),C=a(152),k=a(174),S=Object(g.a)((function(e){return Object(j.a)({bpmBox:{padding:"3px !important"},slider:{width:"200px","margin-top":"25px","margin-right":"15px"}})}));function H(e){var t=e.bpm$,a=Object(n.useState)(t.value.bpm),c=Object(s.a)(a,2),o=c[0],i=c[1],l=S();return r.a.createElement(d.a,{display:"flex",flexDirection:"row"},r.a.createElement(k.a,{min:10,max:400,className:l.slider,value:o,onChange:function(e,t){"number"===typeof t&&i(t)},onChangeCommitted:function(e,a){"number"===typeof a&&t.next({bpm:a})}}),r.a.createElement(d.a,{display:"flex",flexDirection:"column"},r.a.createElement(C.a,{variant:"caption"},"bpm"),r.a.createElement(d.a,{border:1},r.a.createElement(C.a,{className:l.bpmBox,color:"secondary",variant:"h6"},o))))}var N=a(16),$=a(154),D=a(155),M=a(156),B=a(153),I={height:30,width:20,backgroundColor:"#90a4ae",cursor:"pointer"},R=Object(g.a)((function(){return Object(j.a)({off:I,on:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#63d8ce"}),highlight:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#8FEEF3"}),highlightOn:Object(N.a)(Object(N.a)({},I),{},{backgroundColor:"#c4fcff"})})}));function A(e){var t=e.step,a=e.isOn,c=e.isCurrentStep,o=e.updateSteps,i=Object(n.useState)(a),l=Object(s.a)(i,2),u=l[0],m=l[1],p=R();return r.a.createElement(B.a,{square:!0,className:c&&u?p.highlightOn:c?p.highlight:u?p.on:p.off,onClick:function(){m(!u),o(t,!u)}})}var J,K,T=a(22),W=a(23),F="/rxjs-drum-machine/sounds",P=new W.Howl({src:["".concat(F,"/snare.mp3")]}),q=new W.Howl({src:["".concat(F,"/kick.mp3")]}),z=new W.Howl({src:["".concat(F,"/hihat.mp3")]}),G=new W.Howl({src:["".concat(F,"/maracas.mp3")]}),L=new W.Howl({src:["".concat(F,"/clave.mp3")]}),Q=new W.Howl({src:["".concat(F,"/rimshot.mp3")]}),U=new W.Howl({src:["".concat(F,"/toms.mp3")]}),V=new W.Howl({src:["".concat(F,"/clap.mp3")]}),X=new W.Howl({src:["".concat(F,"/conga.mp3")]}),Y=new W.Howl({src:["".concat(F,"/cowbell.mp3")]});!function(e){e.Kick="Kick",e.Snare="Snare",e.Toms="Toms",e.Rimshot="Rimshot",e.Maracas="Maracas",e.Conga="Conga",e.Clave="Clave",e.HiHat="HiHat",e.Clap="Clap",e.Cowbell="Cowbell"}(K||(K={}));var Z=(J={},Object(T.a)(J,K.HiHat,{trigger:function(){z.play()}}),Object(T.a)(J,K.Kick,{trigger:function(){q.play()}}),Object(T.a)(J,K.Snare,{trigger:function(){P.play()}}),Object(T.a)(J,K.Toms,{trigger:function(){U.play()}}),Object(T.a)(J,K.Maracas,{trigger:function(){G.play()}}),Object(T.a)(J,K.Clave,{trigger:function(){L.play()}}),Object(T.a)(J,K.Clap,{trigger:function(){V.play()}}),Object(T.a)(J,K.Cowbell,{trigger:function(){Y.play()}}),Object(T.a)(J,K.Conga,{trigger:function(){X.play()}}),Object(T.a)(J,K.Rimshot,{trigger:function(){Q.play()}}),J);function _(e,t,a){Object(n.useEffect)((function(){var n=e.subscribe(t,(function(e){return console.log("Subscription Effect Error: ".concat(e))}));return a&&"function"===typeof a&&a(),function(){return n.unsubscribe()}}),[])}var ee,te,ae=(ee=1,te=16,Array.from({length:te-ee+1},(function(e,t){return t}))).map((function(){return!1})),ne=Object(g.a)((function(){return Object(j.a)({root:{padding:"5px !important"}})}));function re(e){var t=e.clock$,a=e.channel$,c=Object(n.useState)(Object(p.a)(ae)),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),b=m[0],f=m[1],g=ne(),j=function(e,t){var n=i;n[e]=t,a.next(Object(N.a)(Object(N.a)({},a.value),{},{steps:n}))};return _(t.pipe(Object($.a)(a),Object(D.a)((function(e){return Object(s.a)(e,1)[0].play}))),(function(e){var t,a=Object(s.a)(e,2),n=a[0].step,r=a[1],c=r.steps,o=r.instrument,i=r.volume;(l(c),f(n),o&&i&&c[n])&&(null===(t=Z[o])||void 0===t||t.trigger())})),r.a.createElement(d.a,{className:g.root,border:1,width:"590px"},r.a.createElement(M.a,{container:!0,spacing:2},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(M.a,{container:!0,direction:"row",justify:"center",spacing:2},i.map((function(e,t){return r.a.createElement(M.a,{key:t,item:!0},r.a.createElement(A,{step:t,isOn:!!e,isCurrentStep:t===b,updateSteps:j}))}))))))}var ce=a(92),oe=a.n(ce),ie=a(91),le=a.n(ie),ue=a(157),me=a(166),se=a(175),pe=Object(g.a)((function(e){return Object(j.a)({root:{padding:"5px !important"},formControl:{margin:e.spacing(0),minWidth:120}})}));function be(e){var t=e.channel$,a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],p=u[1],b=pe(),f=function(e,a){i(a),t.next(Object(N.a)(Object(N.a)({},t.value),{},{volume:e}))};return r.a.createElement(d.a,{className:b.root,display:"flex",flexDirection:"row",justifyContent:"space-between",border:1,height:"42px",width:"210px"},r.a.createElement(ue.a,{className:b.formControl},r.a.createElement(me.a,{displayEmpty:!0,id:"instrument-select",value:m,onChange:function(e){var a;p(e.target.value),a=e.target.value,t.next(Object(N.a)(Object(N.a)({},t.value),{},{instrument:a}))}},r.a.createElement(se.a,{value:"",disabled:!0},r.a.createElement("em",null,"Instrument")),Object.entries(K).map((function(e,t){var a=Object(s.a)(e,2),n=a[0],c=a[1];return r.a.createElement(se.a,{key:t,value:n},c)})))),o?r.a.createElement(le.a,{style:{cursor:"pointer",margin:"4px"},onClick:function(){return f(100,!o)}}):r.a.createElement(oe.a,{style:{cursor:"pointer",margin:"4px"},onClick:function(){return f(0,!o)}}))}var fe=Object(g.a)((function(){return Object(j.a)({root:{padding:"10px !important"}})}));function de(e){var t=e.id,a=e.clock$,n=fe(),c=new b.a(function(e){return{id:e,instrument:null,play:!0,volume:100,steps:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}}(t));return r.a.createElement(d.a,{className:n.root,display:"flex",flexDirection:"row",border:1,justifyContent:"space-between",width:"840px",marginBottom:"5px"},r.a.createElement(be,{channel$:c}),r.a.createElement(re,{clock$:a,channel$:c}))}var ge=a(168),je=a(172),Oe=a(169),he=a(159),Ee=a(160),we=a(76),ye=a(170),ve={play:!1,step:0,pauseStep:0,bpm:130},xe=function(){},Ce=Object(g.a)((function(e){return Object(j.a)({wrapper:{padding:"10px !important",margin:"0 auto"},root:{padding:"10px !important"},channel:{padding:"3px 10px !important"},button:{margin:e.spacing(1)},bpmControl:{"margin-left":"auto"}})})),ke=new b.a({play:!1}),Se=new b.a({bpm:130}),He=Object(f.a)(ke,Se),Ne=function(e){return e.pipe(Object(Oe.a)(ve),Object(he.a)((function(e,t){return Object(N.a)(Object(N.a)(Object(N.a)({},e),t),{},{pauseStep:e.step})}),{}),Object(Ee.a)((function(e){return e.play?Object(ge.a)((t=e.bpm,t>0?6e4/t:1/0)).pipe(Object(we.a)((function(t){return e.step=(t+e.pauseStep)%16,e}))):je.a;var t})))}(He).pipe(Object(ye.a)());function $e(){_(Ne,xe,(function(){return Ne.connect()}));var e=Ce(),t=Object(p.a)(Array(1)).map((function(e,t){return r.a.createElement(de,{key:t,id:t,clock$:Ne})})),a=Object(n.useState)(t),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),m=u[0],b=u[1],f=function(e){b(e),ke.next({play:e})};return r.a.createElement(d.a,{className:e.wrapper,display:"flex",flexDirection:"column",border:1,width:"880px"},r.a.createElement(d.a,{className:e.root,display:"flex",flexDirection:"row"},r.a.createElement(C.a,{variant:"h5"},"RxJS Drum Machine"),r.a.createElement(d.a,{className:e.bpmControl},r.a.createElement(H,{bpm$:Se}))),o.map((function(t,a){return r.a.createElement(d.a,{key:a,className:e.channel,display:"flex",flexDirection:"row"},t)})),r.a.createElement(d.a,{className:e.root,display:"flex",flexDirection:"row",justifyContent:"flex-end"},r.a.createElement(d.a,{marginRight:"auto"},r.a.createElement(O.a,{variant:"contained",color:"primary",disabled:o.length>6,className:e.button,startIcon:r.a.createElement(x.a,null),onClick:function(){return i([].concat(Object(p.a)(o),[r.a.createElement(de,{key:o.length+1,id:o.length+1,clock$:Ne})]))}},"Channel")),r.a.createElement(O.a,{variant:"contained",color:"secondary",className:e.button,startIcon:r.a.createElement(y.a,null),disabled:!m,onClick:function(){return f(!1)}},"Pause"),r.a.createElement(O.a,{variant:"contained",color:"primary",className:e.button,disabled:m,startIcon:r.a.createElement(E.a,null),onClick:function(){return f(!0)}},"Play")))}var De=function(){var e=r.a.useMemo((function(){return Object(u.a)({palette:{type:"dark",primary:{main:"#63d8ce"},secondary:{main:"#d8636d"}}})}),[]);return r.a.createElement(m.a,{theme:e},r.a.createElement(l.a,null),r.a.createElement(i.a,{fixed:!0},r.a.createElement("div",{className:"App"},r.a.createElement($e,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.7e52cc54.chunk.js.map