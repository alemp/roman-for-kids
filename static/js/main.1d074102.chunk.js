(this["webpackJsonproman-for-kids"]=this["webpackJsonproman-for-kids"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(8),o=t.n(i),a=(t(24),t(25),t(4)),l=t(9),s=t(15),u=t(16),j=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"toRoman",value:function(e){if(!e.toString().match(/\d/))throw new Error("the number is invalid");var n="";for(var t in this.romanMap)n+=t.repeat(Math.floor(e/this.romanMap[t])),e%=this.romanMap[t];return n}},{key:"fromRoman",value:function(e){var n=this;if(!e.match(/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/))throw new Error("the literal is invalid");var t=e.split("");return t.reduce((function(e,r,c){return c>0&&n.romanMap[t[c-1]]<n.romanMap[r]?e+(n.romanMap[r]-2*n.romanMap[t[c-1]]):e+n.romanMap[r]}),0)}}]),e}();j.romanMap={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};var d,h,b,m,x,O,f,p,w,v,g,y,R,V={romanValue:"",numericValue:"",showResult:!1,viewMode:"roman",error:void 0},M=Object(l.b)({name:"roman",initialState:V,reducers:{setRomanValue:function(e,n){var t=n.payload;e.romanValue+=t;try{e.numericValue=j.fromRoman(e.romanValue).toString()}catch(r){e.error="invalidRomanValue"}},setNumericValue:function(e,n){var t=n.payload;e.numericValue+=t,parseInt(e.numericValue)<=3999?e.romanValue=j.toRoman(parseInt(e.numericValue)):e.error="maxNumberReached"},setViewMode:function(e,n){var t=n.payload;e.viewMode=t},toggleResult:function(e){""!==e.numericValue&&(e.showResult=!e.showResult)},reset:function(e){e.numericValue=V.numericValue,e.romanValue=V.romanValue,e.error=V.error,e.showResult=V.showResult}}}),C=M.reducer,k=M.actions,I=k.setRomanValue,B=k.setNumericValue,D=k.setViewMode,X=k.toggleResult,L=k.reset,F={romanReducer:C},z=Object(l.a)({reducer:F}),E=t(2),T=function(e){return"@media (min-width: ".concat(e,"px)")},S={border:{color:"#333333",radius:"3px",width:"1px"},colors:{blue:"#0275D8",green:"#5CB85C",red:"#D9534F",white:"white",lightGray:"#ECEFF1"},font:{color:"black",size:"1.5em"},responsive:{desktop:T(1540),tablet:T(1024),phablet:T(768),phone:(d=768,"@media (max-width: ".concat(d,"px)"))}},N=t(13),G=t(3),P=Object(E.c)(h||(h=Object(G.a)(["\n  0% {\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\n  }\n  100% {\n    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);\n  }\n"]))),J=E.b.button(b||(b=Object(G.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  border: ",";\n  font-size: ",";\n  font-weight: ",";\n  height: 50px;\n  margin: 1em;\n  padding: 0.25em 1em;\n  width: ",";\n  animation-name: ",";\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n"])),(function(e){return e.disabled?e.theme.colors.lightGray:e.calc?e.theme.colors.green:e.clear?e.theme.colors.red:e.switch?e.theme.colors.blue:"white"}),(function(e){return e.calc||e.clear||e.switch||e.disabled?"white":"inherit"}),(function(e){return e.theme.border.radius}),(function(e){return"".concat(e.theme.border.width," solid ").concat(e.disabled?e.theme.colors.lightGray:e.theme.border.color)}),(function(e){return e.theme.font.size}),(function(e){return e.clear||e.calc?700:"inherit"}),(function(e){return e.switch?"100%":"65px"}),(function(e){return e.error?P:""})),A=E.b.div(m||(m=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n"]))),$=E.b.div(x||(x=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  \n  "," {\n    width: 100%;\n  }\n  \n  "," {\n    width: 75%;\n  }\n  \n  "," {\n    width: 50%;\n  }\n  \n  "," {\n    width: 30%;\n  }\n"])),(function(e){return e.theme.responsive.phone}),(function(e){return e.theme.responsive.phablet}),(function(e){return e.theme.responsive.tablet}),(function(e){return e.theme.responsive.desktop})),_=E.b.span(O||(O=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  height: 80px;\n  justify-content: center;\n  width: 100%;\n"]))),q=E.b.div(f||(f=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n"]))),H=E.b.div(p||(p=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px\n"]))),K=E.b.div(w||(w=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1 1 30%;\n  justify-content: center;\n"]))),Q=E.b.div(v||(v=Object(G.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),U=E.b.span(g||(g=Object(G.a)(["\n  padding: 20px;\n  color: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.font.size})),W=E.b.span(y||(y=Object(G.a)(["\n  align-items: center;\n  border: ",";\n  background-color: ",";\n  color: ",";\n  display: flex;\n  font-size: 2em;\n  font-weight: 700;\n  height: 70px;\n  justify-content: center;\n  margin-top: 20px;\n  text-align: center;\n  width: 100%;\n"])),(function(e){return"".concat(e.theme.border.width," solid ").concat(e.theme.border.color)}),(function(e){return e.error?e.theme.colors.red:e.showResult?e.theme.colors.green:e.theme.colors.white}),(function(e){return e.error||e.showResult?e.theme.colors.white:"inherit"})),Y=E.b.div(R||(R=Object(G.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  margin: 20px;\n"]))),Z=t(0),ee=function(e){var n=Object(a.c)((function(e){return e.romanReducer})),t=n.showResult,r=n.error,c=e.children;return Object(Z.jsx)(J,Object(N.a)(Object(N.a)({type:"button",disabled:t||Boolean(r)},e),{},{children:c}))},ne=function(){var e=Object(a.b)(),n=Object(a.c)((function(e){return e.romanReducer})),t=n.error,r=n.showResult;return Object(Z.jsx)(J,{clear:!0,error:Boolean(t)||r,type:"button",onClick:function(){e(L())},"data-testid":"clear",children:"C"})},te=function(){var e=Object(a.b)();return Object(Z.jsx)(ee,{calc:!0,onClick:function(){e(X())},children:"="})},re=function(e){var n=Object(a.b)(),t=e.children;return Object(Z.jsx)(ee,{onClick:function(){n(I(t))},children:t})},ce=function(){var e=Object(a.b)(),n=Object(a.c)((function(e){return e.romanReducer})).viewMode;return Object(Z.jsx)(J,{switch:!0,type:"button",onClick:function(){e(D("numeric"===n?"roman":"numeric"))},children:"switch view"})},ie=function(){return Object(Z.jsx)(H,{children:Object(Z.jsxs)(Q,{children:[Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"C"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"D"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"M"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"V"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"X"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"L"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(ne,{})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(re,{children:"I"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(te,{})})]})})},oe=function(){var e=Object(a.c)((function(e){return e.romanReducer})).error,n="invalidRomanValue"===e?"Invalid roman numeral":"maxNumberReached"===e?"The maximum value is 3999.":"";return Object(Z.jsx)(U,{children:n})},ae=function(){var e=Object(a.c)((function(e){return e.romanReducer})),n=e.romanValue,t=e.numericValue,r=e.viewMode,c=e.showResult,i=e.error;return Object(Z.jsx)(W,{error:Boolean(i),showResult:c,children:c?"numeric"===r?n:t:"numeric"===r?t:n})},le=function(e){var n=e.children;return Object(Z.jsx)(Y,{children:Object(Z.jsx)(A,{children:n})})},se=function(e){var n=e.children;return Object(Z.jsx)($,{children:n})},ue=function(e){var n=e.madeBy,t=e.year,r=e.url;return Object(Z.jsxs)(_,{"data-testid":"footer",children:["Made by \xa0",Object(Z.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:n}),"\xa0 in ",t,"."]})},je=function(e){var n=e.title,t=e.subTitle,r=Object(Z.jsx)("div",{children:Object(Z.jsx)("h1",{children:n})}),c=Object(Z.jsx)("div",{children:Object(Z.jsx)("h2",{children:t})});return Object(Z.jsxs)(q,{"data-testid":"header",children:[r,c]})},de=function(e){var n=Object(a.b)(),t=e.children;return Object(Z.jsx)(ee,{onClick:function(){n(B(t))},children:t})},he=function(){return Object(Z.jsx)(H,{children:Object(Z.jsxs)(Q,{children:[Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"7"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"8"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"9"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"4"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"5"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"6"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"1"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"2"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"3"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(ne,{})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(de,{children:"0"})}),Object(Z.jsx)(K,{children:Object(Z.jsx)(te,{})})]})})},be=function(){var e=Object(a.c)((function(e){return e.romanReducer})),n=e.viewMode,t=e.error,r=function(){return"numeric"===n?Object(Z.jsx)(he,{}):Object(Z.jsx)(ie,{})},c=function(){return Boolean(t)?Object(Z.jsx)(oe,{}):null};return Object(Z.jsxs)(le,{children:[Object(Z.jsx)(je,{title:"Roman numerals for kids",subTitle:"This is a simple roman numerals converter. Enjoy!"}),Object(Z.jsxs)(se,{children:[Object(Z.jsx)(ae,{}),Object(Z.jsx)(c,{}),Object(Z.jsx)(r,{}),Object(Z.jsx)(ce,{})]}),Object(Z.jsx)(ue,{madeBy:"Alessandro Pinto",year:2021,url:"https://github.com/alemp"})]})};var me=function(){return Object(Z.jsx)(E.a,{theme:S,children:Object(Z.jsx)(a.a,{store:z,children:Object(Z.jsx)(be,{})})})},xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),i(e),o(e)}))};o.a.render(Object(Z.jsx)(c.a.StrictMode,{children:Object(Z.jsx)(me,{})}),document.getElementById("root")),xe()}},[[34,1,2]]]);
//# sourceMappingURL=main.1d074102.chunk.js.map