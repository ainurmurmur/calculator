(this["webpackJsonpsocial-media2"]=this["webpackJsonpsocial-media2"]||[]).push([[0],{2:function(_,e,a){_.exports={BlockMain:"Calc_BlockMain__2ia6s",BlockTop:"Calc_BlockTop__2QAs9",BlockBottom:"Calc_BlockBottom__24vUD",BlockRight:"Calc_BlockRight__1QBJs",BlockLeft:"Calc_BlockLeft__22TKB",clear:"Calc_clear__1Aq3e",equal:"Calc_equal__26UlV",squreroot:"Calc_squreroot__YzFmw",percent:"Calc_percent__92DLZ",multiply:"Calc_multiply__JBl_p",divide:"Calc_divide__3sOLv",plus:"Calc_plus__1nusM",minus:"Calc_minus__2f6Uo"}},24:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Calc_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Calc_module_css__WEBPACK_IMPORTED_MODULE_1__),_Material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),fontsource_roboto__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49),fontsource_roboto__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(fontsource_roboto__WEBPACK_IMPORTED_MODULE_4__);function Calc(props){var style={width:"auto"},Calculate=function(_){return"+"===_.operator?_.firstOperand+_.secondOperand:"-"===_.operator?_.firstOperand-_.secondOperand:"*"===_.operator?_.firstOperand*_.secondOperand:"/"===_.operator?_.firstOperand/_.secondOperand:_.secondOperand},handleInput=function handleInput(e){var numbers=["1","2","3","4","5","6","7","8","9","0",".","%","\u221a"],symbols=["+","-","*","/"];if(numbers.includes(e)&&""===props.operator){if(props.addFirst(e),props.addStr(props.firstOperand),document.getElementById("calcArea").value=props.str,props.addStr(props.firstOperand+e),props.addFirst(props.firstOperand+e),"%"===e){var percent=parseFloat(props.firstOperand)/100;props.addStr(percent.toString()),props.addFirst(percent.toString())}if("\u221a"===e){var i=parseFloat(props.firstOperand),squareRoot=Math.sqrt(i);props.addStr(squareRoot.toString()),props.addFirst(squareRoot.toString())}}else if(!numbers.includes(e)&&symbols.includes(e))props.operator&&""===props.answer&&alert("please enter only two operands, no more"),props.operator||(props.addOperator(e),props.addStr(props.firstOperand+e),document.getElementById("calcArea").value=props.str),props.operator&&parseInt(props.str)===props.answer&&(props.addFirst(props.answer.toString()),props.addSecond(""),props.addOperator(e),props.addStr(props.answer.toString()+e),document.getElementById("calcArea").value=props.str,props.addAnswer(""));else if(numbers.includes(e)&&symbols.includes(props.operator)){if(props.addSecond(e),props.addStr(props.firstOperand+props.operator+e),document.getElementById("calcArea").value=props.str,props.addStr(props.firstOperand+props.operator+props.secondOperand+e),props.addSecond(props.secondOperand+e),"%"===e){var _percent=parseFloat(props.secondOperand)/100;props.addStr(props.firstOperand+props.operator+_percent.toString()),props.addSecond(_percent.toString())}if("\u221a"===e){var _i=parseFloat(props.secondOperand),_squareRoot=Math.sqrt(_i);props.addStr(props.firstOperand+props.operator+_squareRoot.toString()),props.addSecond(_squareRoot.toString())}}else if("="===e){console.log(e),props.addStr(props.str+e);var a=eval(props.str);props.addAnswer(a),props.addStr(a.toString()),console.log(props.answer),document.getElementById("calcArea").value=props.str}else{if("c"!==e)return props.str;props.addStr(""),props.addAnswer(""),props.addSecond(""),props.addFirst(""),props.addOperator("")}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BlockMain},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{value:props.str,id:"calcArea",disabled:!0,className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BlockTop}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BlockBottom},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BlockLeft},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.percent},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("%")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"%"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.squreroot},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("\u221a")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"\u221a"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.clear},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("c")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"c"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.seven},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("7")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"7"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("8")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"8"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nine},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("9")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"9"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.four},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("4")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"4"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.five},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("5")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"5"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.six},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("6")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"6"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.one},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("1")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"1"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.two},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("2")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"2"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.three},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("3")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"3"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.zero},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("0")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"0"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dot},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput(".")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},".")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BlockRight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.equal},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("=")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"="))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.plus},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("+")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"+"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.minus},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("-")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"-"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.multiply},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("*")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"*"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.divide},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Material__WEBPACK_IMPORTED_MODULE_2__.a,{id:_Calc_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnR,type:"submit",onClick:function(){return handleInput("/")},style:style},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{variant:"h4"},"/"))))))}__webpack_exports__.a=Calc},37:function(_,e,a){_.exports=a(52)},4:function(_,e,a){"use strict";a.d(e,"a",(function(){return c}));var t=a(54),r=a(9),E=a(32),l=a.n(E),c=Object(r.a)({root:{background:"linear-gradient(40deg, #orchid 50%, #purple 90%)",borderRadius:3,border:0,color:"white",height:"105px",width:"100px"},label:{textTransform:"capitalize"}})(t.a);Object(r.a)({root:{borderRadius:3,border:0,color:"red"}})(l.a)},42:function(_,e,a){},43:function(_,e,a){},52:function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),E=a(13),l=a.n(E),c=(a(42),a(43),a(24)),n=a(16),s={str:"",firstOperand:"",secondOperand:"",operator:"",answer:null},d=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_FIRST_OPERAND":return Object(n.a)({},_,{firstOperand:e.firstOperand});case"ADD_SECOND_OPERAND":return Object(n.a)({},_,{secondOperand:e.secondOperand});case"ADD_OPERATOR":return Object(n.a)({},_,{operator:e.operator});case"ADD_STR":return Object(n.a)({},_,{str:e.str});case"ADD_ANSWER":return Object(n.a)({},_,{answer:e.answer});default:return _}},o=a(23),O=Object(o.b)((function(_){return{str:_.calc.str,firstOperand:_.calc.firstOperand,secondOperand:_.calc.secondOperand,operator:_.calc.operator,answer:_.calc.answer}}),{addFirst:function(_){return{type:"ADD_FIRST_OPERAND",firstOperand:_}},addSecond:function(_){return{type:"ADD_SECOND_OPERAND",secondOperand:_}},addOperator:function(_){return{type:"ADD_OPERATOR",operator:_}},addStr:function(_){return{type:"ADD_STR",str:_}},addAnswer:function(_){return{type:"ADD_ANSWER",answer:_}}})((function(_){return r.a.createElement(c.a,{addFirst:_.addFirst,addSecond:_.addSecond,addOperator:_.addOperator,str:_.str,firstOperand:_.firstOperand,secondOperand:_.secondOperand,operator:_.operator,addStr:_.addStr,answer:_.answer,addAnswer:_.addAnswer})})),u=a(14),D=a(34),M=Object(u.c)({calc:d}),i=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,P=Object(u.e)(M,i(Object(u.a)(D.a)));window.store=P;var p=P;var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{store:p},r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b7c1701b.chunk.js.map