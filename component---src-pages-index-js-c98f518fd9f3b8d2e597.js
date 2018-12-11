(window.webpackJsonp=window.webpackJsonp||[]).push([[12,11],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"layoutWrapper",function(){return M}),n.d(t,"header",function(){return y}),n.d(t,"bannerContainer",function(){return C}),n.d(t,"introContainer",function(){return x}),n.d(t,"introWrapper",function(){return A}),n.d(t,"title",function(){return w}),n.d(t,"description",function(){return N}),n.d(t,"buttonsWrapper",function(){return D}),n.d(t,"sectionStyles",function(){return T}),n.d(t,"blogSection",function(){return v}),n.d(t,"blogWrapper",function(){return E}),n.d(t,"postWrapper",function(){return j}),n.d(t,"postTitle",function(){return z}),n.d(t,"category",function(){return S}),n.d(t,"categoryLink",function(){return k}),n.d(t,"postDescription",function(){return L}),n.d(t,"ctaItem",function(){return Z});n(0);var a,r,i,o,c,l,s,g,d,u,m,p,I,h=n(39),f=n(232),b=n.n(f),M={width:"100%"},y={backgroundColor:h.a.white,color:h.a.dark},C=((a={paddingTop:45,paddingBottom:20,display:"flex",justifyContent:"center"})[h.c.greaterThan("small")]={paddingTop:60,paddingBottom:70},a[h.c.size("large")]={height:"500px !important"},a[h.c.size("medium")]={height:"400px !important"},a[h.c.greaterThan("medium")]={justifyContent:"flex-start",paddingTop:95,paddingBottom:85,maxWidth:1500,height:600,marginLeft:"auto",marginRight:"auto",position:"relative","::before":{content:" ",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundImage:"url("+b.a+")",backgroundRepeat:"no-repeat",backgroundPosition:"100% 50px",backgroundSize:"45% auto"}},a),x=((r={position:"relative",alignSelf:"center"})[h.c.greaterThan("medium")]={width:"55%",marginBottom:50,padding:"0 50px 0 100px"},r),A=((i={flexDirection:"column !important",alignItems:"center !important"})[h.c.greaterThan("medium")]={alignItems:"flex-end !important"},i),w=((o={color:h.a.black,textAlign:"right",margin:0,fontSize:45,letterSpacing:"0.01em"})[h.c.size("xsmall")]={fontSize:30},o[h.c.greaterThan("xlarge")]={fontSize:60},o),N=((c={paddingTop:15,textAlign:"right",fontSize:24,letterSpacing:"0.01em",fontWeight:200})[h.c.size("xsmall")]={fontSize:16,maxWidth:"12em",marginLeft:"auto",marginRight:"auto"},c[h.c.greaterThan("xlarge")]={paddingTop:20,fontSize:30},c),D=((l={paddingTop:40})[h.c.greaterThan("xlarge")]={paddingTop:65},l),T=((s={marginTop:20,marginBottom:15})[h.c.greaterThan("medium")]={marginTop:60,marginBottom:65},s),v=((g={})[h.c.lessThan("medium")]={marginTop:0,marginBottom:0,overflowX:"auto",paddingTop:30,WebkitOverflowScrolling:"touch",position:"relative",maskImage:"linear-gradient(to right, transparent, white 10px, white 90%, transparent)"},g),E=((d={display:"flex",flexDirection:"row"})[h.c.lessThan("medium")]={display:"block",whiteSpace:"nowrap"},d),j=((m={display:"flex",flexDirection:"column",flex:"0 1 33%",marginLeft:40,"&:first-of-type":(u={marginLeft:0},u[h.c.lessThan("medium")]={marginLeft:10},u)})[h.c.lessThan("medium")]={display:"inline-block",verticalAlign:"top",marginLeft:0,whiteSpace:"normal",width:"75%",marginRight:20,paddingBottom:40,"&:first-of-type":{marginTop:0}},m),z={backgroundColor:"unset !important",color:h.a.black+"!important",paddingTop:0,fontWeight:600,border:"none !important",fontSize:24},S={marginTop:10,marginBottom:20},k={borderBottom:"1px solid #ececec",":hover":{borderBottomColor:h.a.black},marginLeft:5,textTransform:"capitalize"},L={color:h.a.subtle},Z=((I={})[h.c.between("small","large")]={paddingLeft:20},I[h.c.greaterThan("xlarge")]={},I["&:first-child"]={textAlign:"left",paddingRight:15},I["&:nth-child(2)"]=((p={})[h.c.greaterThan("small")]={paddingLeft:15},p),I)},192:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return x});var a=n(7),r=n.n(a),i=n(259),o=n(196),c=n(200),l=n(2),s=n.n(l),g=n(0),d=n(40),u=n(218),m=n(201),p=n(261),I=n(229),h=n(220),f=n(262),b=n(184),M=n(39),y=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={babelLoaded:!1},e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this;Object(p.a)(h.a).then(function(){e.setState({babelLoaded:!0})},function(e){console.error("Babel failed to load.")})},a.render=function(){this.state.babelLoaded;var t=this.props,n=t.data,a=t.location;return e.createElement(m.a,{location:a},e.createElement(u.a,{title:"React – A JavaScript library for building user interfaces",ogUrl:Object(I.a)("index.html")}),e.createElement("div",{css:[b.layoutWrapper]},e.createElement("header",{css:[b.header]},e.createElement("div",{css:[b.bannerContainer]},e.createElement("div",{css:[b.introContainer]},e.createElement(c.a,{css:[b.introWrapper]},e.createElement("h1",{css:b.title},"Welcome to my blog"),e.createElement("p",{css:[b.description]},"A JavaScript library for building user interfaces"),e.createElement(c.a,{valign:"center",css:[b.buttonsWrapper]},e.createElement(C,null,e.createElement(i.a,{to:"/docs/getting-started.html",type:"primary"},"Bài viết nổi bật")),e.createElement(C,null,e.createElement(i.a,{to:"/tutorial/tutorial.html",type:"secondary"},"Tất cả bài viết"))))))),e.createElement(o.a,null,e.createElement("div",{css:M.d.markdown},e.createElement("section",{css:[b.sectionStyles,b.blogSection]},e.createElement("div",{css:b.blogWrapper},Object(f.keys)(n).map(function(t,a){return e.createElement("div",{key:a,css:b.postWrapper},e.createElement(d.Link,{css:[b.postTitle],key:n[t].edges[0].node.fields.slug,to:n[t].edges[0].node.fields.slug},n[t].edges[0].node.frontmatter.title),e.createElement("div",{css:[b.category]},"in",e.createElement(d.Link,{css:[b.categoryLink],key:t,to:t},t)),e.createElement("div",{css:[b.postDescription]},Object(f.split)(n[t].edges[0].node.html,/<[^>]*>/g,2)[1],"..."))})))))))},n}(g.Component);y.propTypes={data:s.a.shape({vocabulary:s.a.object.isRequired,grammar:s.a.object.isRequired,communication:s.a.object.isRequired}).isRequired};var C=function(t){var n=t.children;t.primary;return e.createElement("div",{css:b.ctaItem},n)},x="4221167719";t.default=y}.call(this,n(58))},196:function(e,t,n){"use strict";var a=n(203);t.a=a.a},197:function(e,t,n){"use strict";(function(e){n(0);t.a=function(t){var n=t.cssProps,a=void 0===n?{}:n;return e.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",width:15,height:15,css:a},e.createElement("path",{fill:"currentColor",d:"\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "}),e.createElement("polygon",{fill:"currentColor",points:"\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "}))}}).call(this,n(58))},198:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"f",function(){return p}),n.d(t,"g",function(){return I}),n.d(t,"h",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"k",function(){return b}),n.d(t,"l",function(){return M}),n.d(t,"m",function(){return y}),n.d(t,"i",function(){return C}),n.d(t,"j",function(){return x}),n.d(t,"a",function(){return A}),n.d(t,"d",function(){return w});n(0);var a,r,i,o,c,l,s,g,d=n(39),u=((a={backgroundColor:d.a.brander,color:d.a.white,paddingTop:10,paddingBottom:50})[d.c.size("sidebarFixed")]={paddingTop:40},a),m={display:"flex",flexDirection:"row",flexWrap:"wrap"},p=((r={})[d.c.between("small","medium")]={paddingRight:null},r[d.c.between("large","largerSidebar")]={paddingRight:null},r[d.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:null},r),I=((i={})[d.c.between("small","medium")]={paddingRight:240},i[d.c.between("large","largerSidebar")]={paddingRight:280},i[d.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},i),h=((o={flexWrap:"wrap",display:"flex"})[d.c.lessThan("large")]={width:"100%"},o[d.c.greaterThan("xlarge")]={width:"calc(100% / 3 * 2)",paddingLeft:40},o),f=((c={paddingTop:40,display:"block !important"})[d.c.greaterThan("xlarge")]={width:"calc(100% / 3)",order:-1},c[d.c.lessThan("large")]={textAlign:"center",width:"100%",paddingTop:40},c),b=((l={})[d.c.greaterThan("large")]={order:-1,width:null},l),M=((s={})[d.c.greaterThan("large")]={order:-1,width:"calc(100% / 3)"},s),y=((g={display:"flex",alignItems:"center"})[d.c.lessThan("large")]={justifyContent:"center"},g),C={maxWidth:100,height:"auto"},x={color:d.a.white,marginLeft:20,fontWeight:700,fontSize:50,lineHeight:"50px"},A={color:d.a.subtleOnDark,paddingTop:15},w={lineHeight:2,":hover":{color:d.a.darker}}},199:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjk0cHgiIGhlaWdodD0iMjk0cHgiIHZpZXdCb3g9IjAgMCAyOTQgMjk0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi41ICg2NzQ2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijk3LjI2NTYyNSUiIHkxPSI5Ny4yNjU2MjUlIiB4Mj0iNS45NTU4MDE4MmUtMTUlIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZDMzgzMiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjJDMzE0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTguMjA2MzEzOCUiIHkxPSI5OC4yMDYzMTM4JSIgeDI9IjEuMTU2NDUxNzVlLTE0JSIgeTI9Ii0yLjIyMDQ0NjA1ZS0xNCUiIGlkPSJsaW5lYXJHcmFkaWVudC0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFDMEZENyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUMwOURCIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0xMzcuMjgyMzU0LDk3IEwxNTcuMDM2NDM4LDk3IEwxOTQuMzE4NzkyLDE5Ni4zMjY4NjkgTDE3Mi4wNjA2NywxOTYuMzI2ODY5IEwxNjQuMTMxMjE0LDE3My4zNzMxODEgTDEyOS4zNTI4OTgsMTczLjM3MzE4MSBMMTIxLjQyMzQ0MiwxOTYuMzI2ODY5IEwxMDAsMTk2LjMyNjg2OSBMMTM3LjI4MjM1NCw5NyBaIE0xNTguNzA1Nzk3LDE1Ni4yNjIyNSBMMTQ2LjYwMjk0MywxMjAuNjQ5MjU1IEwxMzQuNjM5MjAyLDE1Ni4yNjIyNSBMMTU4LjcwNTc5NywxNTYuMjYyMjUgWiIgaWQ9InBhdGgtMyI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTI5LjclIiB5PSItMjAuMSUiIHdpZHRoPSIxNTkuNCUiIGhlaWdodD0iMTU2LjQlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjgiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjgiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC05IiBvcGFjaXR5PSIwLjkwMDAwMDAzNiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzUuNTU0Mjg1NywzMi43MTQyODU3IEwyMTguNDQ1NzE0LDMyLjcxNDI4NTcgQzI0Mi4xMDU1OTMsMzIuNzE0Mjg1NyAyNjEuMjg1NzE0LDUxLjg5NDQwNyAyNjEuMjg1NzE0LDc1LjU1NDI4NTcgTDI2MS4yODU3MTQsMjE4LjQ0NTcxNCBDMjYxLjI4NTcxNCwyNDIuMTA1NTkzIDI0Mi4xMDU1OTMsMjYxLjI4NTcxNCAyMTguNDQ1NzE0LDI2MS4yODU3MTQgTDc1LjU1NDI4NTcsMjYxLjI4NTcxNCBDNTEuODk0NDA3LDI2MS4yODU3MTQgMzIuNzE0Mjg1NywyNDIuMTA1NTkzIDMyLjcxNDI4NTcsMjE4LjQ0NTcxNCBMMzIuNzE0Mjg1Nyw3NS41NTQyODU3IEMzMi43MTQyODU3LDUxLjg5NDQwNyA1MS44OTQ0MDcsMzIuNzE0Mjg1NyA3NS41NTQyODU3LDMyLjcxNDI4NTcgWiIgaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcuMDAwMDAwLCAxNDcuMDAwMDAwKSByb3RhdGUoMjAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMDAwMDAsIC0xNDcuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NS41NTQyODU3LDMyLjcxNDI4NTcgTDIxOC40NDU3MTQsMzIuNzE0Mjg1NyBDMjQyLjEwNTU5MywzMi43MTQyODU3IDI2MS4yODU3MTQsNTEuODk0NDA3IDI2MS4yODU3MTQsNzUuNTU0Mjg1NyBMMjYxLjI4NTcxNCwyMTguNDQ1NzE0IEMyNjEuMjg1NzE0LDI0Mi4xMDU1OTMgMjQyLjEwNTU5MywyNjEuMjg1NzE0IDIxOC40NDU3MTQsMjYxLjI4NTcxNCBMNzUuNTU0Mjg1NywyNjEuMjg1NzE0IEM1MS44OTQ0MDcsMjYxLjI4NTcxNCAzMi43MTQyODU3LDI0Mi4xMDU1OTMgMzIuNzE0Mjg1NywyMTguNDQ1NzE0IEwzMi43MTQyODU3LDc1LjU1NDI4NTcgQzMyLjcxNDI4NTcsNTEuODk0NDA3IDUxLjg5NDQwNywzMi43MTQyODU3IDc1LjU1NDI4NTcsMzIuNzE0Mjg1NyBaIiBpZD0iUmVjdGFuZ2xlLTQiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0Ny4wMDAwMDAsIDE0Ny4wMDAwMDApIHJvdGF0ZSgtMjAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0Ny4wMDAwMDAsIC0xNDcuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iQWEiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTQpIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZDRjhGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},200:function(e,t,n){"use strict";n(28);var a=n(84),r=n.n(a),i=n(58),o=function(e){var t=e.basis,n=void 0===t?"auto":t,a=e.children,o=e.direction,c=void 0===o?"row":o,l=e.grow,s=void 0===l?0:l,g=e.halign,d=void 0===g?"flex-start":g,u=e.shrink,m=void 0===u?1:u,p=e.type,I=void 0===p?"div":p,h=e.valign,f=void 0===h?"flex-start":h,b=r()(e,["basis","children","direction","grow","halign","shrink","type","valign"]);return Object(i.createElement)(I,Object.assign({css:{display:"flex",flexDirection:c,flexGrow:s,flexShrink:m,flexBasis:n,justifyContent:"row"===c?d:f,alignItems:"row"===c?f:d}},b),a)};t.a=o},201:function(e,t,n){"use strict";var a=n(204);t.a=a.a},202:function(e,t,n){"use strict";(function(e){n(28),n(0);var a=n(39);t.a=function(t){var n=t.children,r=(t.title,t.cssProps),i=void 0===r?{}:r,o=t.onDark,c=void 0!==o&&o;return e.createElement("div",{css:Object.assign({color:c?a.a.subtleOnDark:a.a.subtle,fontSize:14,fontWeight:700,lineHeight:3,textTransform:"uppercase",letterSpacing:"0.08em"},i)},n)}}).call(this,n(58))},203:function(e,t,n){"use strict";(function(e){n(0);var a=n(39);t.a=function(t){var n,r=t.children;return e.createElement("div",{css:(n={paddingLeft:20,paddingRight:20,marginLeft:"auto",marginRight:"auto"},n[a.c.greaterThan("medium")]={width:"90%"},n[a.c.size("xxlarge")]={maxWidth:1260},n)},r)}}).call(this,n(58))},204:function(e,t,n){"use strict";(function(e){n(59);var a=n(7),r=n.n(a),i=n(205),o=n(0),c=n(200),l=n(206),s=n(211),g=n(39);Object(i.a)();var d=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t,n=this.props,a=n.children,r=n.location,i=!1;return r.pathname.match(/^\/(vocabulary|grammar|communication)/)&&(i=!0),e.createElement("div",{css:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 40px)"}},e.createElement(s.a,{location:r}),e.createElement(c.a,{direction:"column",shrink:"0",grow:"1",valign:"stretch",css:(t={flex:"1 0 auto",marginTop:60},t[g.c.between("medium","large")]={marginTop:50},t[g.c.lessThan("medium")]={marginTop:40},t)},a),e.createElement(l.a,{layoutHasSidebar:i}))},n}(o.Component);t.a=d}).call(this,n(58))},205:function(e,t,n){"use strict";function a(){if("function"==typeof Node&&null!=Node.prototype){var e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){return t.parentNode!==this?("undefined"!=typeof console&&console.error("Cannot remove a child from a different parent",t,this),t):e.apply(this,arguments)};var t=Node.prototype.insertBefore;Node.prototype.insertBefore=function(e,n){return n&&n.parentNode!==this?("undefined"!=typeof console&&console.error("Cannot insert before a reference node from a different parent",n,this),e):t.apply(this,arguments)}}}n.d(t,"a",function(){return a})},206:function(e,t,n){"use strict";var a=n(207);t.a=a.a},207:function(e,t,n){"use strict";(function(e){var a=n(196),r=n(208),i=n(209),o=n(210),c=n(202),l=(n(0),n(198)),s=n(199),g=n.n(s);t.a=function(t){var n=t.layoutHasSidebar,s=void 0!==n&&n,d=s?l.g:l.f,u=s?l.l:l.k;return e.createElement("footer",{css:[l.b]},e.createElement(a.a,null,e.createElement("div",{css:[l.c,d]},e.createElement("div",{css:[l.h]},e.createElement(o.a,{layoutHasSidebar:s},e.createElement(c.a,{onDark:!0},"Categories"),e.createElement(i.a,{to:"/vocabulary/"},"Vocabulary"),e.createElement(i.a,{to:"/grammar/"},"Grammar"),e.createElement(i.a,{to:"/communication/"},"Communication")),e.createElement(o.a,{layoutHasSidebar:s},e.createElement(c.a,{onDark:!0},"Others"),e.createElement(i.a,{to:"/grammar/"},"About me"),e.createElement(r.a,{href:"https://www.facebook.com/react",target:"_blank",rel:"noopener"},"Facebook"))),e.createElement("section",{css:[l.e,u]},e.createElement("a",{css:[l.m],href:"https://code.facebook.com/projects/",target:"_blank",rel:"noopener"},e.createElement("img",{alt:"an",css:[l.i],src:g.a}),e.createElement("span",{css:[l.j]},"an")),e.createElement("p",{css:[l.a]},"Copyright © 2018 Thao An.")))))}}).call(this,n(58))},208:function(e,t,n){"use strict";(function(e){n(0);var a=n(39),r=n(197);t.a=function(t){var n=t.children,i=t.href,o=t.target,c=t.rel;return e.createElement("a",{css:{lineHeight:2,":hover":{color:a.a.brand}},href:i,target:o,rel:c},n,e.createElement(r.a,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:a.a.subtle}}))}}).call(this,n(58))},209:function(e,t,n){"use strict";(function(e){var a=n(40),r=(n(0),n(198));t.a=function(t){var n=t.children,i=t.target,o=t.to;return e.createElement(a.Link,{css:[r.d],to:o,target:i},n)}}).call(this,n(58))},210:function(e,t,n){"use strict";(function(e){n(0);var a=n(39);t.a=function(t){var n,r=t.children;t.title,t.layoutHasSidebar;return e.createElement("div",{css:(n={display:"flex",flexDirection:"column",alignItems:"flex-start",width:"50%",paddingTop:40},n[a.c.size("sidebarFixed")]={paddingTop:0,width:"25%"},n)},e.createElement("div",{css:{display:"inline-flex",flexDirection:"column"}},r))}}).call(this,n(58))},211:function(e,t,n){"use strict";var a=n(212);t.a=a.a},212:function(e,t,n){"use strict";(function(e){n(215),n(216);var a=n(7),r=n.n(a),i=n(41),o=n.n(i),c=n(196),l=n(213),s=n(214),g=n(40),d=n(0),u=n.n(d),m=n(197),p=n(199),I=n.n(p),h=function(t){function n(e){var n;return(n=t.call(this,e)||this).state={isTop:!0},o()(o()(n)).handleScrolling=n.handleScrolling.bind(o()(o()(n))),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){this.setState({isTop:0===window.scrollY}),window.addEventListener("scroll",this.handleScrolling)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScrolling)},a.handleScrolling=function(){if(0!==window.scrollY){if(!this.state.isTop)return;this.setState({isTop:!1})}else this.setState({isTop:!0})},a.render=function(){var t,n=this.props.location,a=this.state.isTop;return t=("/"===n.pathname||"/an/"===n.pathname)&&a?s.k:s.j,e.createElement("div",{css:[s.f]},e.createElement("header",{css:[t,s.e]},e.createElement(c.a,null,e.createElement("div",{css:[s.c]},e.createElement(g.Link,{css:[s.h],to:"/"},e.createElement("img",{src:I.a,alt:"",height:"30"}),e.createElement("span",{css:[s.g]},"an")),e.createElement("nav",{css:[s.i]},e.createElement(l.a,{isActive:n.pathname.includes("/vocabulary"),title:"Vocabulary",to:"/vocabulary/"}),e.createElement(l.a,{isActive:n.pathname.includes("/grammar"),title:"Grammar",to:"/grammar/"}),e.createElement(l.a,{isActive:n.pathname.includes("/communication"),title:"Communication",to:"/communication/"})),e.createElement("div",{css:[s.b]},e.createElement("a",{css:[s.a],href:"https://github.com/facebook/react/",target:"_blank",rel:"noopener"},"About me"),e.createElement("a",{css:[s.a],href:"https://github.com/facebook/react/",target:"_blank",rel:"noopener"},"Facebook",e.createElement(m.a,{cssProps:[s.d]})))))))},n}(u.a.Component);t.a=h}).call(this,n(58))},213:function(e,t,n){"use strict";(function(e){var a,r,i,o=n(40),c=(n(0),n(39)),l=((a={display:"flex",flexDirection:"row",alignItems:"center",color:c.a.dark,transition:"color 0.2s ease-out",paddingLeft:15,paddingRight:15,fontWeight:300,":focus":{outline:0,color:c.a.white}})[c.c.size("xsmall")]={paddingLeft:8,paddingRight:8},a[c.c.between("small","medium")]={paddingLeft:10,paddingRight:10},a[c.c.greaterThan("xlarge")]={paddingLeft:20,paddingRight:20,fontSize:18,":hover:not(:focus)":{color:c.a.brand}},a),s=((r={color:c.a.brand})[c.c.greaterThan("small")]={position:"relative"},r),g=((i={})[c.c.greaterThan("small")]={position:"absolute",bottom:-1,height:4,background:c.a.brand,left:0,right:0,zIndex:1},i);t.a=function(t){var n=t.isActive,a=t.title,r=t.to;return e.createElement(o.Link,{css:[l,n&&s],to:r},a,n&&e.createElement("span",{css:g}))}}).call(this,n(58))},214:function(e,t,n){"use strict";n.d(t,"f",function(){return s}),n.d(t,"e",function(){return g}),n.d(t,"k",function(){return d}),n.d(t,"j",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"h",function(){return p}),n.d(t,"g",function(){return I}),n.d(t,"i",function(){return h}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b}),n.d(t,"d",function(){return M});n(217),n(28),n(0);var a,r,i,o,c,l=n(39),s={backgroundColor:l.a.white,position:"fixed",zIndex:1,width:"100%",top:0,left:0},g={color:l.a.white,transition:"background-color 0.3s linear"},d={backgroundColor:l.a.white},u={backgroundColor:l.a.bgHeader},m=((a={display:"flex",flexDirection:"row",alignItems:"center",height:60})[l.c.between("small","large")]={height:50},a[l.c.lessThan("small")]={height:40},a),p=((r={display:"flex",marginRight:10,height:"100%",alignItems:"center",color:l.a.brand,":focus":{outline:0,color:l.a.white}})[l.c.greaterThan("small")]={width:"calc(100% / 6)"},r[l.c.lessThan("small")]={flex:"0 0 auto"},r),I=((i={color:l.a.brand,marginLeft:10,fontWeight:700,fontSize:20,lineHeight:"20px"})[l.c.lessThan("large")]={fontSize:16,marginTop:1},i[l.c.lessThan("small")]={position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,padding:0,border:0},i),h=((o={display:"flex",flexDirection:"row",alignItems:"stretch",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",height:"100%",width:"60%"})[l.c.size("xsmall")]={flexGrow:"1",width:"auto"},o[l.c.greaterThan("xlarge")]={width:null},o[l.c.lessThan("small")]={maskImage:"linear-gradient(to right, transparent, black 20px, black 90%, transparent)"},o),f=((c={})[l.c.lessThan("medium")]={display:"none"},c[l.c.greaterThan("large")]={width:"calc(100% / 6)"},c),b=Object.assign({color:l.a.dark,padding:"5px 10px",marginLeft:10,whiteSpace:"nowrap"},l.b.small,{":hover":{color:l.a.brand},":focus":{outline:0,backgroundColor:l.a.lighter,borderRadius:15}}),M={marginLeft:5,verticalAlign:-2,color:l.a.subtle}},218:function(e,t,n){"use strict";var a=n(219);t.a=a.a},219:function(e,t,n){"use strict";(function(e){var a=n(226),r=n.n(a);n(0);t.a=function(t){var n=t.title,a=t.ogDescription,i=t.ogUrl;return e.createElement(r.a,{title:n},e.createElement("meta",{property:"og:title",content:n}),e.createElement("meta",{property:"og:type",content:"website"}),i&&e.createElement("meta",{property:"og:url",content:i}),e.createElement("meta",{property:"og:image",content:"/logo-og.png"}),e.createElement("meta",{property:"og:description",content:a||"A JavaScript library for building user interfaces"}),e.createElement("meta",{property:"fb:app_id",content:"623268441017527"}))}}).call(this,n(58))},220:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="https://reactjs.org",r="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"},229:function(e,t,n){"use strict";n(31);var a=n(220);t.a=function(e){return null==e?null:a.b+"/"+e.replace(/^\//,"")}},232:function(e,t,n){e.exports=n.p+"static/book_lover-3ae4213647ad07a46902538e3acc503d.svg"},259:function(e,t,n){"use strict";var a=n(260);t.a=a.a},260:function(e,t,n){"use strict";(function(e){n(28);var a,r,i=n(84),o=n.n(i),c=n(40),l=(n(0),n(39)),s=function(t){var n=t.cssProps,a=void 0===n?{}:n;return e.createElement("svg",{css:a,height:"12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 4.53657 8.69699"},e.createElement("path",{d:"\n        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,\n        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,\n        0,0,1,.18254,8.697Z\n      ",fill:"currentColor"}))},g=((a={display:"inline-block",fontSize:16})[l.c.greaterThan("xlarge")]={fontSize:20},a),d=((r={backgroundColor:l.a.brand,color:l.a.white,padding:"10px 25px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out"})[l.c.greaterThan("xlarge")]={paddingTop:15,paddingBottom:15},r[":hover"]={backgroundColor:l.a.darker},r),u={color:l.a.brand,transition:"color 0.2s ease-out",":hover":{color:l.a.darker}};t.a=function(t){var n,a=t.children,r=t.type,i=o()(t,["children","type"]);switch(r){case"primary":n=d;break;case"secondary":n=u}return e.createElement(c.Link,Object.assign({},i,{css:[g,n]}),a,"secondary"===r&&e.createElement(s,{cssProps:{marginLeft:10}}))}}).call(this,n(58))},261:function(e,t,n){"use strict";n(28),n(42);t.a=function(e){return new Promise(function(t,n){return document.head.appendChild(Object.assign(document.createElement("script"),{async:!0,src:e,onload:t,onerror:n}))})}}}]);
//# sourceMappingURL=component---src-pages-index-js-c98f518fd9f3b8d2e597.js.map