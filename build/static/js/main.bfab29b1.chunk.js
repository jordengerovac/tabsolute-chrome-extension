(this["webpackJsonptabsolutely-react-extension"]=this["webpackJsonptabsolutely-react-extension"]||[]).push([[0],{10:function(t,e,i){},44:function(t,e,i){},54:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),o=i(15),s=i.n(o),r=(i(44),i(3)),l=i(4),c=i(6),p=i(5),d=(i(10),i(7)),u=i.p+"static/media/tabsolutelogo2.cd6dbf45.png",h=i(0),b=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:u,alt:"tabsolute_logo",width:"85px",height:"60px",style:{marginTop:"20px"}}),Object(h.jsx)("h4",{style:{color:"#4495F6"},children:"TABSOLUTE"})]})}}]),i}(a.a.Component),j=i(16),g="FETCH_PHOTO",x="CHANGE_VIEW",f="CHANGE_BACKGROUND_COLOUR",O="CHANGE_FONT_COLOUR",v="ADD_WIDGET",y="DELETE_WIDGET",w="UPDATE_WIDGET",m="UPDATE_WEATHER_WIDGET",k="UPDATE_WIDGET_FONT",D="ADD_LINK_TILE",C="DELETE_LINK_TILE",S="UPDATE_LINK_TILE",T="TOGGLE_PHOTO",A="SET_DEFAULT_PHOTO",W=i(17),V=i(34),P=i(8),L={currentPhoto:{urls:{regular:"https://images.unsplash.com/photo-1573491768509-318a36d85f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ2ODV8MHwxfGNvbGxlY3Rpb258MXwxOTQyODE1OXx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",full:"https://images.unsplash.com/photo-1573491768509-318a36d85f5d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyMDQ2ODV8MHwxfGNvbGxlY3Rpb258MXwxOTQyODE1OXx8fHx8Mnw&ixlib=rb-1.2.1&q=85"},user:{first_name:"Daniel",last_name:"Se\xdfler",links:{html:"https://unsplash.com/@danielsessler"}},links:{html:"https://unsplash.com/photos/DSlHgwYuU3k"}},firstFetch:0,photoVisible:!0,loading:!0},_={view:"dashboard",fontColour:"white",backgroundColour:"#2D3339",loading:!0},E=i(26),I=i(74),z={widgets:[{id:Object(I.a)(),type:"Greeting",value:"",display:{customizationVisible:"false",font:"50",location:"center"}},{id:Object(I.a)(),type:"Time",value:"24",display:{customizationVisible:"false",font:"50",location:"center"}}]},N={tiles:[{id:Object(I.a)(),name:"Twitter",value:"https://www.twitter.com",icon:"fab fa-twitter"},{id:Object(I.a)(),name:"Facebook",value:"https://www.facebook.com",icon:"fab fa-facebook"},{id:Object(I.a)(),name:"YouTube",value:"https://www.youtube.com",icon:"fab fa-youtube"}]},R=Object(W.c)({photoDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return 0===t.firstFetch?Object(P.a)(Object(P.a)({},t),{},{currentPhoto:L.currentPhoto,lastPhotoIndex:e.lastPhotoIndex,loading:!1,firstFetch:1}):Object(P.a)(Object(P.a)({},t),{},{currentPhoto:e.payload,lastPhotoIndex:e.lastPhotoIndex,loading:!1,firstFetch:-1});case T:return Object(P.a)(Object(P.a)({},t),{},{photoVisible:!t.photoVisible});case A:return Object(P.a)(Object(P.a)({},t),{},{currentPhoto:L.currentPhoto});default:return t}},viewDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(P.a)(Object(P.a)({},t),{},{view:e.payload,loading:!1});case f:return Object(P.a)(Object(P.a)({},t),{},{backgroundColour:e.payload});case O:return Object(P.a)(Object(P.a)({},t),{},{fontColour:e.payload});default:return t}},widgetDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:var i={};return"Greeting"===e.payload?i={id:Object(I.a)(),type:"Greeting",value:"",display:{customizationVisible:"false",font:"50",location:"center"}}:"Time"===e.payload?i={id:Object(I.a)(),type:"Time",value:"12",display:{customizationVisible:"false",font:"50",location:"center"}}:"Weather"===e.payload?i={id:Object(I.a)(),type:"Weather",value:"",display:{customizationVisible:"false",font:"20",location:"center"}}:"Audio"===e.payload?i={id:Object(I.a)(),type:"Audio",value:"Once Again",display:{customizationVisible:"false",font:"20",location:"center"}}:"Quote"===e.payload&&(i={id:Object(I.a)(),type:"Quote",value:"",display:{customizationVisible:"false",font:"30",location:"center"}}),Object(P.a)(Object(P.a)({},t),{},{widgets:[].concat(Object(E.a)(t.widgets),[i])});case y:var n=t.widgets.filter((function(t){return e.payload.target.id!==t.id}));return Object(P.a)(Object(P.a)({},t),{},{widgets:n});case w:var a=t.widgets.map((function(t){return t.id===e.payload.target.id&&(t.value=e.payload.target.value),t}));return Object(P.a)(Object(P.a)({},t),{},{widgets:a});case m:var o=t.widgets.map((function(t){return t.id===e.id&&(t.value=e.payload),t}));return Object(P.a)(Object(P.a)({},t),{},{widgets:o});case k:var s=t.widgets.map((function(t){return t.id===e.id&&(t.display.font=e.payload),t}));return Object(P.a)(Object(P.a)({},t),{},{widgets:s});default:return t}},linkTileDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:var i={};return i={id:Object(I.a)(),name:"New Link Tile",value:"https://www.google.com",icon:"fas fa-link"},Object(P.a)(Object(P.a)({},t),{},{tiles:[].concat(Object(E.a)(t.tiles),[i])});case C:var n=t.tiles.filter((function(t){return e.payload.target.id!==t.id}));return Object(P.a)(Object(P.a)({},t),{},{tiles:n});case S:var a=e.payload.target.name,o=t.tiles.map((function(t){return t.id===e.payload.target.id&&("name"===a?t.name=e.payload.target.value:"icon"===a?t.icon=e.payload.target.value:t.value=e.payload.target.value),t}));return Object(P.a)(Object(P.a)({},t),{},{tiles:o});default:return t}}});var M=function(){try{var t=localStorage.getItem("tabsoluteState");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),G=[V.a],F=Object(W.d)(R,M,W.a.apply(void 0,G));F.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("tabsoluteState",e)}catch(i){}}(F.getState())}));var H=F,U=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=H.getState().viewDetails.view;return Object(h.jsx)("div",{style:{margin:"10px 0px 20px 0px"},children:Object(h.jsxs)("fieldset",{name:"view",style:{border:"none",display:"flex",color:"white",margin:"auto",justifyContent:"center"},children:[Object(h.jsx)("label",{style:{margin:"0"},children:"Dashboard"}),Object(h.jsx)("input",{type:"radio",value:"dashboard",name:"view",style:{marginRight:"25px"},onChange:this.props.changeView,defaultChecked:"dashboard"===t}),Object(h.jsx)("label",{children:"Link Tiles"}),Object(h.jsx)("input",{value:"tile",type:"radio",name:"view",onChange:this.props.changeView,defaultChecked:"tile"===t})]})})}}]),i}(a.a.Component);var q=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails}}),{changeView:function(t){return function(e){e({type:x,payload:t.target.value})}}})(U),B=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).updateDisplay=function(t){if("Enter"===t.key){var e={};"background"===t.target.name?e={type:f,payload:t.target.value}:"font"===t.target.name&&(e={type:O,payload:t.target.value}),H.dispatch(e)}},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{style:Object(j.a)({textAlign:"left",color:"white",margin:"15px"},"margin","30px 0px 10px 15px"),children:"DISPLAY"}),Object(h.jsx)("div",{style:{backgroundColor:"#30363D",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(h.jsx)(q,{}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(h.jsx)("p",{style:{color:"white",fontSize:"15px",margin:"0px 0px 5px 20px"},children:"Background Colour"}),Object(h.jsx)("input",{type:"text",defaultValue:this.props.viewDetails.backgroundColour,name:"background",placeholder:"Colour / Hex colour code (ex. #2D3339)",style:{width:"220px",fontSize:"12px"},onKeyPress:this.updateDisplay})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{style:{color:"white",fontSize:"15px",margin:"0px 0px 5px 20px"},children:"Font Colour"}),Object(h.jsx)("input",{type:"text",defaultValue:this.props.viewDetails.fontColour,name:"font",placeholder:"Colour / Hex colour code (ex. #2D3339)",style:{width:"220px",fontSize:"12px"},onKeyPress:this.updateDisplay})]})]})]})})]})}}]),i}(a.a.Component);var Q=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails}}))(B),K=function(t){return function(e){e({type:y,payload:t})}},Y=function(t){return function(e){e({type:w,payload:t})}},X=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).updateWidgetFont=function(e){if("Enter"===e.key){var i={type:k,payload:e.target.value,id:t.props.widget.id};H.dispatch(i)}},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{style:{textAlign:"left"},children:Object(h.jsx)("div",{style:{backgroundColor:"#2D3339",padding:"10px",borderRadius:"7px"},children:Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 0px 0px",display:"flex"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white"},children:"Font Size"}),Object(h.jsx)("input",{type:"text",style:{width:"70px"},onKeyPress:this.updateWidgetFont,id:this.props.widget.id,defaultValue:this.props.widget.display.font})]})})})}}]),i}(a.a.Component),J=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){var t=String(this.props.widget.id);return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(h.jsxs)("div",{style:{float:"right"},children:[Object(h.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(h.jsxs)("fieldset",{id:t,style:{border:"none",display:"flex",color:"white",justifyContent:"center"},children:[Object(h.jsx)("label",{children:"12-hour"}),Object(h.jsx)("input",{style:{marginTop:"10px"},type:"radio",value:"12",onChange:this.props.updateWidget,id:this.props.widget.id,name:t,defaultChecked:"12"===this.props.widget.value}),Object(h.jsx)("label",{children:"24-hour"}),Object(h.jsx)("input",{style:{marginTop:"10px"},type:"radio",value:"24",onChange:this.props.updateWidget,id:this.props.widget.id,name:t,defaultChecked:"12"!==this.props.widget.value})]}),this.state.displaySettingsVisible?Object(h.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var Z=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:K,updateWidget:Y})(J),$=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(h.jsxs)("div",{style:{float:"right"},children:[Object(h.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(h.jsx)("input",{style:{marginTop:"10px"},type:"text",defaultValue:this.props.widget.value,onChange:this.props.updateWidget,id:this.props.widget.id,placeholder:"Name"}),this.state.displaySettingsVisible?Object(h.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var tt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:K,updateWidget:Y})($),et=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px",minHeight:"20px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 20px 0px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(h.jsxs)("div",{style:{float:"right"},children:[Object(h.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(h.jsx)("p",{style:{color:"white",fontSize:"11px",marginTop:"25px"},children:"Quotes retrieved from https://goquotes.docs.apiary.io"}),this.state.displaySettingsVisible?Object(h.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var it=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:K})(et),nt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.getWeather=function(e){if("Enter"===e.key){var i="".concat("36cdad6235eced65ac3b7cf24ead1902");fetch("https://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&units=metric&appid="+i).then((function(t){return t.json()})).then((function(i){var n=e.target.value,a=i.main.temp_min,o=i.main.temp_max,s=i.weather[0].description,r={type:m,payload:n+":@:"+a+":@:"+o+":@:"+s,id:t.props.widget.id};H.dispatch(r)})).catch((function(t){console.log(t)}))}},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(h.jsxs)("div",{style:{float:"right"},children:[Object(h.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(h.jsx)("input",{id:this.props.widget.id,type:"text",placeholder:"City",defaultValue:this.props.widget.value.split(":@:")[0],onKeyPress:this.getWeather,style:{marginTop:"10px"}}),this.state.displaySettingsVisible?Object(h.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var at=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:K})(nt),ot=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleSubmit=function(e){e.preventDefault(),t.props.addWidget(e)},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{padding:"10px",display:"flex",textAlign:"left",margin:"10px 10px 10px 10px",backgroundColor:"#2D3339",borderRadius:"7px"},children:[Object(h.jsx)("p",{style:{color:"white",fontWeight:"bolder",marginTop:"3px"},children:"Add Widget:"}),Object(h.jsx)("form",{onSubmit:this.handleSubmit,style:{marginLeft:"15px"},children:Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("select",{ref:"addWidget",name:"widgets",id:"widgets",style:{border:"none",height:"20px",width:"120px",margin:"3px 0px 0px 0px"},children:[Object(h.jsx)("option",{selected:!0,disabled:!0,children:"Select Widget"}),Object(h.jsx)("option",{value:"Greeting",children:"Greeting"}),Object(h.jsx)("option",{value:"Time",children:"Time"}),Object(h.jsx)("option",{value:"Quote",children:"Quote"}),Object(h.jsx)("option",{value:"Weather",children:"Weather"}),Object(h.jsx)("option",{value:"Audio",children:"Audio"})]}),Object(h.jsx)("button",{type:"submit",style:{backgroundColor:"#0bb508",border:"none",borderRadius:"10%",fontSize:"15px",margin:"2px 0px 0px 18px",color:"white",height:"25px",width:"25px",paddingBottom:"2px",cursor:"pointer"},children:"+"})]})})]})}}]),i}(a.a.Component);var st=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{addWidget:function(t){return function(e){e({type:v,payload:t.target[0].value})}}})(ot),rt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t;return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px",minHeight:"20px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 20px 0px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(h.jsx)("div",{style:{float:"right"},children:Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})})]}),Object(h.jsxs)("select",(t={onChange:this.props.updateWidget,ref:"addWidget",name:"widgets",id:"widgets",style:{border:"none",height:"20px",width:"120px",margin:"3px 0px 0px 0px"}},Object(j.a)(t,"id",this.props.widget.id),Object(j.a)(t,"children",[Object(h.jsx)("option",{value:"Adventure",selected:"Adventure"===this.props.widget.value,children:"Adventure"}),Object(h.jsx)("option",{value:"New Dawn",selected:"New Dawn"===this.props.widget.value,children:"New Dawn"}),Object(h.jsx)("option",{value:"Once Again",selected:"Once Again"===this.props.widget.value,children:"Once Again"}),Object(h.jsx)("option",{value:"Piano Moment",selected:"Piano Moment"===this.props.widget.value,children:"Piano Moment"}),Object(h.jsx)("option",{value:"Slow Motion",selected:"Slow Motion"===this.props.widget.value,children:"Slow Motion"}),Object(h.jsx)("option",{value:"Tomorrow",selected:"Tomorrow"===this.props.widget.value,children:"Tomorrow"})]),t)),Object(h.jsx)("p",{style:{color:"white",fontSize:"11px",marginTop:"5px"},children:"Audio retrieved from https://www.bensound.com"})]})}}]),i}(a.a.Component);var lt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{updateWidget:Y,deleteWidget:K})(rt),ct=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{style:{textAlign:"left",color:"white",margin:"30px 0px 0px 15px"},children:"WIDGETS"}),Object(h.jsx)(st,{}),this.props.widgetDetails.widgets.map((function(t){return"Greeting"===t.type?Object(h.jsx)(tt,{widget:t}):"Time"===t.type?Object(h.jsx)(Z,{widget:t}):"Quote"===t.type?Object(h.jsx)(it,{widget:t}):"Audio"===t.type?Object(h.jsx)(lt,{widget:t}):"Weather"===t.type?Object(h.jsx)(at,{widget:t}):void 0}))]})}}]),i}(a.a.Component);var pt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}))(ct),dt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=[{key:"Twitter",value:"fab fa-twitter"},{key:"Facebook",value:"fab fa-facebook"},{key:"YouTube",value:"fab fa-youtube"},{key:"Google",value:"fab fa-google"},{key:"Apple",value:"fab fa-apple"},{key:"GitHub",value:"fab fa-github"},{key:"Link",value:"fas fa-link"},{key:"TV",value:"fas fa-tv"},{key:"Wifi",value:"fas fa-wifi"},{key:"Briefcase",value:"fas fa-briefcase"},{key:"Bacon",value:"fas fa-bacon"},{key:"Smile",value:"fas fa-smile"},{key:"Envelope",value:"fas fa-envelope"},{key:"Camera",value:"fas fa-camera"},{key:"Book",value:"fas fa-book"},{key:"Cloud",value:"fas fa-cloud"},{key:"Music",value:"fas fa-music"},{key:"Compass",value:"fas fa-compass"},{key:"Plane",value:"fas fa-plane"},{key:"Shopping Cart",value:"fas fa-shopping-cart"},{key:"Bookmark",value:"fas fa-bookmark"}];return Object(h.jsx)("div",{style:{textAlign:"left"},children:Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",borderRadius:"7px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 20px 0px",display:"flex"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",marginTop:"3px"},children:"Add Link Tile"}),Object(h.jsx)("button",{style:{backgroundColor:"#0bb508",border:"none",borderRadius:"10%",fontSize:"15px",margin:"0px 0px 0px 18px",color:"white",height:"25px",width:"25px",paddingBottom:"2px",cursor:"pointer"},onClick:this.props.addLinkTile,children:"+"})]}),this.props.tiles.map((function(i){return Object(h.jsxs)("div",{style:{marginBottom:"15px",display:"flex",color:"white",justifyContent:"space-between"},children:[Object(h.jsxs)("div",{style:{float:"left"},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Name"}),Object(h.jsx)("input",{defaultValue:i.name,name:"name",onChange:t.props.updateLinkTile,id:i.id,style:{width:"140px",fontSize:"12px"}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"URL"}),Object(h.jsx)("input",{defaultValue:i.value,name:"value",onChange:t.props.updateLinkTile,id:i.id,style:{width:"140px",fontSize:"12px"}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Icon"}),Object(h.jsx)("select",{id:i.id,style:{border:"none",height:"20px",width:"147px",fontSize:"12px"},onChange:t.props.updateLinkTile,name:"icon",children:e.map((function(t){return Object(h.jsx)("option",{value:t.value,selected:t.value===i.icon,children:t.key})}))})]})]}),Object(h.jsx)("div",{style:{marginRight:"30px"},children:Object(h.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 25px"},class:"fas fa-trash-alt",onClick:t.props.deleteLinkTile,id:i.id})})]})}))]})})}}]),i}(a.a.Component);var ut=Object(d.b)((function(t,e){return{linkTileDetails:t.linkTileDetails}}),{addLinkTile:function(t){return function(e){e({type:D,payload:t})}},deleteLinkTile:function(t){return function(e){e({type:C,payload:t})}},updateLinkTile:function(t){return function(e){e({type:S,payload:t})}}})(dt),ht=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(h.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px",minHeight:"10px"},children:[Object(h.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:"Link Tile Options"}),Object(h.jsx)("div",{style:{float:"right"},children:Object(h.jsx)("i",{onClick:this.toggleDisplaySettings,id:"linkWidget",style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"})})]}),this.state.displaySettingsVisible?Object(h.jsx)(ut,{tiles:this.props.linkTileDetails.tiles}):null]})}}]),i}(a.a.Component);var bt=Object(d.b)((function(t,e){return{linkTileDetails:t.linkTileDetails}}))(ht),jt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{style:Object(j.a)({textAlign:"left",color:"white",margin:"15px"},"margin","30px 0px 10px 15px"),children:"LINK TILES"}),Object(h.jsx)(bt,{})]})}}]),i}(a.a.Component),gt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).toggleSettings=function(){n.setState({settingsVisible:!n.state.settingsVisible})},n.state={settingsVisible:!1},n}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{style:{zIndex:"200"},children:this.state.settingsVisible?Object(h.jsxs)("div",{style:{display:"flex",height:"101vh",margin:"0",padding:"0",position:"fixed",overflowX:"hidden",zIndex:"100"},children:[Object(h.jsxs)("div",{style:{height:"99vh",width:"320px",backgroundColor:"#1F2023",borderRadius:"0px 10px 10px 0px",textAlign:"center",padding:"5px",borderRight:"1px solid #30363D",overflow:"scroll"},children:[Object(h.jsx)(b,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(pt,{}),Object(h.jsx)(jt,{}),Object(h.jsx)("p",{style:{marginBottom:"25px"},children:Object(h.jsx)("a",{href:"https://paypal.me/jordengerovac?locale.x=en_US",style:{textDecoration:"none",color:"#4495F6"},children:"Support the project"})})]}),Object(h.jsx)("div",{className:"clickAway",style:{width:"80vw",height:"100%",cursor:"pointer"},onClick:this.toggleSettings})]}):Object(h.jsx)("i",{id:"settingsIcon",style:{color:"white",fontSize:"22px",margin:"7px",cursor:"pointer",zIndex:"100"},className:"fas fa-cog",onClick:this.toggleSettings})})}}]),i}(a.a.Component);var xt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}))(gt),ft=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=new Date,e="";return e=t.getHours()>=21?"night":t.getHours()>=18?"evening":t.getHours()>=12?"afternoon":"morning",""!==this.props.widget.value?Object(h.jsxs)("h3",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:["Good ",e,", ",this.props.widget.value]}):Object(h.jsxs)("h3",{style:{margin:"0",color:"",fontSize:this.props.widget.display.font+"px"},children:["Good ",e]})}}]),i}(a.a.Component),Ot=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).tick=function(){t.setState({currentTime:new Date})},t.state={currentTime:new Date},t}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.tick()}),1e3)}},{key:"render",value:function(){var t=this.state.currentTime.getHours()>=12?"PM":"AM";return"12"===this.props.widget.value?Object(h.jsxs)("h1",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:[this.state.currentTime.toLocaleTimeString().split(":")[0],":",this.state.currentTime.toLocaleTimeString().split(":")[1]," ",t]}):Object(h.jsxs)("h1",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:[this.state.currentTime.toTimeString().split(":")[0],":",this.state.currentTime.toTimeString().split(":")[1]]})}}]),i}(a.a.Component),vt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).getRandomQuote=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(e){var i=Math.floor(Math.random()*e.length),n=e[i].text,a=e[i].author;null===a&&(a="Unknown"),t.setState({quoteText:n,quoteAuthor:a})})).catch((function(t){console.log(t)}))},t.getRandomQuoteTwo=function(){fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then((function(t){return t.json()})).then((function(e){console.log(e);var i=e.quotes[0].text,n=e.quotes[0].author;null===n&&(n="Unknown"),t.setState({quoteText:i,quoteAuthor:n})})).catch((function(t){console.log(t)}))},t.state={quoteText:"",quoteAuthor:""},t}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.getRandomQuoteTwo()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{style:{fontSize:"20px"},children:this.state.quoteText}),Object(h.jsxs)("p",{style:{fontSize:"20px"},children:["- ",this.state.quoteAuthor]})]})}}]),i}(a.a.Component);var yt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{updateWidget:Y})(vt),wt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){""!==this.props.widget.value&&this.getWeather()}},{key:"getWeather",value:function(){var t=this,e="".concat("36cdad6235eced65ac3b7cf24ead1902");fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.widget.value.split(":@:")[0]+"&units=metric&appid="+e).then((function(t){return t.json()})).then((function(e){var i=t.props.widget.value.split(":@:")[0],n=e.main.temp_min,a=e.main.temp_max,o=e.weather[0].description,s={type:m,payload:i+":@:"+n+":@:"+a+":@:"+o,id:t.props.widget.id};H.dispatch(s)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=String(this.props.widget.value.split(":@:")[3]),e="";return e=t.includes("rain")?"fas fa-cloud-rain":t.includes("snow")?"fas fa-snowflake":t.includes("clouds")?"fas fa-cloud":t.includes("clear")?"fas fa-sun":"fas fa-smog",Object(h.jsxs)("div",{style:{textAlign:"right",margin:"7px",fontSize:this.props.widget.display.font+"px"},children:[Object(h.jsx)("p",{children:this.props.widget.value.split(":@:")[0]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:e,style:{fontSize:"40px"}}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{style:{margin:"6px"},children:parseInt(this.props.widget.value.split(":@:")[1])}),Object(h.jsx)("p",{style:{margin:"6px"},children:parseInt(this.props.widget.value.split(":@:")[2])})]})]})]})}}]),i}(a.a.Component),mt=i(73),kt=i(36),Dt=i(72),Ct=function(t){return function(e){e({type:T,payload:t})}},St=i(23),Tt=i.n(St),At=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{children:this.props.photoDetails.photoVisible&&!this.props.photoDetails.loading?Object(h.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px",color:this.props.viewDetails.fontColour,fontSize:"14px"},children:Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.currentPhoto.links.html+"/?utm_source=tabsolute&utm_medium=referral",children:"Photo"})," by ",Object(h.jsxs)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.currentPhoto.user.links.html+"/?utm_source=tabsolute&utm_medium=referral",children:[this.props.photoDetails.currentPhoto.user.first_name," ",this.props.photoDetails.currentPhoto.user.last_name]})," on ",Object(h.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:"https://unsplash.com/?utm_source=tabsolute&utm_medium=referral",children:"Unsplash"})]})}):null})}}]),i}(a.a.Component);var Wt=Object(d.b)((function(t,e){return{photoDetails:t.photoDetails,viewDetails:t.viewDetails}}))(At),Vt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=Object(kt.a)({palette:{primary:{main:"#4495F6"}}}),i="",n=this.props.photoDetails.currentPhoto.urls.regular;return this.props.photoDetails.loading||(i=this.props.photoDetails.currentPhoto.urls.full,this.props.photoDetails.photoVisible||(i="",n="")),"undefined"!==typeof InstallTrigger&&this.props.photoDetails.photoVisible&&(i=this.props.photoDetails.currentPhoto.urls.regular,n=""),Object(h.jsx)("div",{style:{height:"100vh",width:"100vw",backgroundColor:"black"},children:Object(h.jsx)(Tt.a,{src:i,placeholder:n,style:{height:"100vh",width:"100vw",backgroundColor:"black"},children:function(i){return Object(h.jsxs)("div",{className:"dashboard",id:"dashboard",style:{backgroundImage:"url("+i+")",width:"100vw",height:"100vh",backgroundSize:"cover",margin:"0",padding:"0",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundColor:t.props.viewDetails.backgroundColour},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:{float:"left"},children:Object(h.jsx)(xt,{})}),Object(h.jsx)("div",{style:{float:"right",color:t.props.viewDetails.fontColour},children:t.props.widgetDetails.widgets.map((function(t){if("Weather"===t.type)return Object(h.jsx)(wt,{widget:t})}))})]}),Object(h.jsx)("div",{className:"centered",style:{textAlign:"center",color:t.props.viewDetails.fontColour},children:t.props.widgetDetails.widgets.map((function(t){return"Greeting"===t.type?Object(h.jsx)(ft,{widget:t}):"Time"===t.type?Object(h.jsx)(Ot,{widget:t}):"Quote"===t.type?Object(h.jsx)(yt,{widget:t}):void 0}))}),Object(h.jsx)("div",{style:{position:"absolute",bottom:"0px"},children:Object(h.jsx)(Dt.a,{theme:e,children:Object(h.jsx)(mt.a,{checked:t.props.photoDetails.photoVisible,onClick:t.props.togglePhoto,color:"primary",name:"photoBackground",inputProps:{"aria-label":"primary checkbox"}})})}),Object(h.jsx)(Wt,{})]})}})})}}]),i}(a.a.Component);var Pt=Object(d.b)((function(t,e){return{photoDetails:t.photoDetails,widgetDetails:t.widgetDetails,viewDetails:t.viewDetails}}),{togglePhoto:Ct})(Vt),Lt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("a",{style:{textDecoration:"none",margin:"15px",color:this.props.viewDetails.fontColour},href:this.props.tile.value,children:Object(h.jsxs)("div",{style:{backgroundColor:"#1F2023",height:"120px",width:"200px",borderRadius:"10px",padding:"10px"},children:[Object(h.jsx)("h4",{style:{fontWeight:"lighter"},children:this.props.tile.name}),Object(h.jsx)("i",{style:{fontSize:"70px",marginTop:"20px"},className:this.props.tile.icon})]})})}}]),i}(a.a.Component);var _t=Object(d.b)((function(t){return{viewDetails:t.viewDetails,linkTileDetails:t.linkTileDetails}}))(Lt),Et=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=Object(kt.a)({palette:{primary:{main:"#4495F6"}}}),i="",n=this.props.photoDetails.currentPhoto.urls.regular;return this.props.photoDetails.loading||(i=this.props.photoDetails.currentPhoto.urls.full,this.props.photoDetails.photoVisible||(i="",n="")),"undefined"!==typeof InstallTrigger&&this.props.photoDetails.photoVisible&&(i=this.props.photoDetails.currentPhoto.urls.regular,n=""),Object(h.jsx)("div",{style:{height:"100vh"},children:Object(h.jsx)(Tt.a,{src:i,placeholder:n,children:function(i){return Object(h.jsxs)("div",{className:"dashboard",style:{backgroundImage:"url("+i+")",width:"100vw",height:"100vh",backgroundSize:"cover",margin:"0",padding:"0",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundColor:t.props.viewDetails.backgroundColour},children:[Object(h.jsx)(xt,{}),Object(h.jsx)("div",{className:"centered",style:{textAlign:"center",display:"flex",flexWrap:"wrap",width:String(1e3)+"px",justifyContent:"center"},children:t.props.linkTileDetails.tiles.map((function(t){return Object(h.jsx)(_t,{tile:t})}))}),Object(h.jsx)("div",{style:{position:"absolute",bottom:"0px"},children:Object(h.jsx)(Dt.a,{theme:e,children:Object(h.jsx)(mt.a,{checked:t.props.photoDetails.photoVisible,onClick:t.props.togglePhoto,color:"primary",name:"photoBackground",inputProps:{"aria-label":"primary checkbox"}})})}),Object(h.jsx)(Wt,{})]})}})})}}]),i}(a.a.Component);var It=Object(d.b)((function(t,e){return{photoDetails:t.photoDetails,linkTileDetails:t.linkTileDetails,viewDetails:t.viewDetails}}),{togglePhoto:Ct})(Et),zt=i(35),Nt=i.n(zt),Rt=i.p+"static/media/adventure.aed8b904.mp3",Mt=i.p+"static/media/newdawn.bbcd52a0.mp3",Gt=i.p+"static/media/onceagain.6c0a1589.mp3",Ft=i.p+"static/media/pianomoment.64b6fb0f.mp3",Ht=i.p+"static/media/slowmotion.4c4825e9.mp3",Ut=i.p+"static/media/tomorrow.c2638284.mp3",qt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t="";return"Adventure"===this.props.widget.value?t=Rt:"New Dawn"===this.props.widget.value?t=Mt:"Once Again"===this.props.widget.value?t=Gt:"Piano Moment"===this.props.widget.value?t=Ft:"Slow Motion"===this.props.widget.value?t=Ht:"Tomorrow"===this.props.widget.value&&(t=Ut),Object(h.jsx)("div",{children:Object(h.jsx)(Nt.a,{src:t,playing:!0,volume:.1})})}}]),i}(a.a.Component),Bt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).state={prevURL:""},t}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.setState({prevURL:this.props.photoDetails.currentPhoto.urls.regular}),this.props.fetchPhoto()}},{key:"render",value:function(){return this.state.prevURL!==this.props.photoDetails.currentPhoto.urls.regular||1===this.props.photoDetails.firstFetch?Object(h.jsxs)("div",{style:{width:"100vw",height:"100vh",backgroundColor:this.props.viewDetails.backgroundColour},children:[this.props.widgetDetails.widgets.map((function(t){if("Audio"===t.type)return Object(h.jsx)("div",{children:Object(h.jsx)(qt,{widget:t})})})),"dashboard"===this.props.viewDetails.view?Object(h.jsx)(Pt,{}):Object(h.jsx)(It,{})]}):Object(h.jsx)("div",{style:{width:"100vw",height:"100vh",backgroundColor:this.props.viewDetails.backgroundColour}})}}]),i}(a.a.Component);var Qt=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails,photoDetails:t.photoDetails,widgetDetails:t.widgetDetails}}),{fetchPhoto:function(){return function(t){var e="".concat("B5vLJ0aNYeNZOYtpiNcNNfN0CdpoQgpgtmWnvj3YgJc");fetch("https://api.unsplash.com/photos/random/?collections=19428159&client_id="+e).then((function(t){return t.json()})).then((function(e){t({type:g,payload:e})})).catch((function(t){console.log(t)}))}},setDefaultPhoto:function(){return function(t){t({type:A})}}})(Bt),Kt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)(Qt,{})}}]),i}(a.a.Component),Yt=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,75)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;i(t),n(t),a(t),o(t),s(t)}))};s.a.render(Object(h.jsx)(d.a,{store:H,children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Kt,{})})}),document.getElementById("root")),Yt()}},[[54,1,2]]]);
//# sourceMappingURL=main.bfab29b1.chunk.js.map