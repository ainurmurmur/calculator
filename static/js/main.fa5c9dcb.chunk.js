(this["webpackJsonpsocial-media2"]=this["webpackJsonpsocial-media2"]||[]).push([[0],{3:function(e,a,t){e.exports={BlockMain:"Calc_BlockMain__2ia6s",BlockTop:"Calc_BlockTop__2QAs9",BlockBottom:"Calc_BlockBottom__24vUD",BlockRight:"Calc_BlockRight__1QBJs",BlockLeft:"Calc_BlockLeft__22TKB",clear:"Calc_clear__1Aq3e",equal:"Calc_equal__26UlV",squreroot:"Calc_squreroot__YzFmw",percent:"Calc_percent__92DLZ",multiply:"Calc_multiply__JBl_p",divide:"Calc_divide__3sOLv",plus:"Calc_plus__1nusM",minus:"Calc_minus__2f6Uo"}},34:function(e,a,t){e.exports=t(49)},39:function(e,a,t){},40:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(11),c=t.n(l),o=(t(39),t(40),t(3)),s=t.n(o),d=t(67),i=t(10),m=t(29),u=t.n(m),p=Object(i.a)({root:{background:"linear-gradient(40deg, #orchid 50%, #purple 90%)",borderRadius:3,border:0,color:"white",height:"105px",width:"100px"},label:{textTransform:"capitalize"}})(d.a),_=(Object(i.a)({root:{borderRadius:3,border:0,color:"red"}})(u.a),t(66));t(46);var v=function(e){var a=function(e){var a=e.myClass,r=e.val;return n.a.createElement("div",{className:a},n.a.createElement(p,{id:s.a.btnR,type:"submit",onClick:function(){return O(r)},style:t},n.a.createElement(_.a,{variant:"h4"},r)))},t={width:"auto",height:"95px"},r=e.firstOperand,l=e.secondOperand,c=e.operator,o=e.addStr,d=e.str,i=e.addSecond,m=e.addFirst,u=e.addOperator,v=e.answer,E=e.addAnswer,O=function(e){var a=["1","2","3","4","5","6","7","8","9","0",".","%","\u221a"],t=["+","-","*","/"];if(a.includes(e)&&""===c){if(m(e),o(r),document.getElementById("calcArea").value=d,o(r+e),m(r+e),"%"===e){var n=parseFloat(r)/100;o(n.toString()),m(n.toString())}if("\u221a"===e){var s=parseFloat(r),p=Math.sqrt(s);o(p.toString()),m(p.toString())}}else if(!a.includes(e)&&t.includes(e))c&&""===v&&alert("please enter only two operands, no more"),c||(u(e),o(r+e),document.getElementById("calcArea").value=d),c&&parseInt(d)===v&&(m(v.toString()),i(""),u(e),o(v.toString()+e),document.getElementById("calcArea").value=d,E(""));else if(a.includes(e)&&t.includes(c)){if(i(e),o(r+c+e),document.getElementById("calcArea").value=d,o(r+c+l+e),i(l+e),"%"===e){var _=parseFloat(l)/100;o(r+c+_.toString()),i(_.toString())}if("\u221a"===e){var O=parseFloat(l),f=Math.sqrt(O);o(r+c+f.toString()),i(f.toString())}}else{if("c"!==e)return d;o(""),E(""),i(""),m(""),u("")}};return n.a.createElement("div",{className:s.a.BlockMain},n.a.createElement("input",{value:d,id:"calcArea",disabled:!0,className:s.a.BlockTop}),n.a.createElement("div",{className:s.a.BlockBottom},n.a.createElement("div",{className:s.a.BlockLeft},n.a.createElement(a,{val:"%",myClass:s.a.percent}),n.a.createElement(a,{val:"\u221a",myClass:s.a.squreroot}),n.a.createElement(a,{val:"c",myClass:s.a.clear}),n.a.createElement(a,{val:"7",myClass:s.a.number}),n.a.createElement(a,{val:"8",myClass:s.a.number}),n.a.createElement(a,{val:"9",myClass:s.a.number}),n.a.createElement(a,{val:"4",myClass:s.a.number}),n.a.createElement(a,{val:"5",myClass:s.a.number}),n.a.createElement(a,{val:"6",myClass:s.a.number}),n.a.createElement(a,{val:"1",myClass:s.a.number}),n.a.createElement(a,{val:"2",myClass:s.a.number}),n.a.createElement(a,{val:"3",myClass:s.a.number}),n.a.createElement(a,{val:"0",myClass:s.a.number}),n.a.createElement(a,{val:".",myClass:s.a.dot})),n.a.createElement("div",{className:s.a.BlockRight},n.a.createElement("div",{className:s.a.equal},n.a.createElement(p,{id:s.a.btnR,type:"submit",onClick:function(){return function(e){var a=e.str,t=e.firstOperand,r=e.secondOperand,n=e.operator,l=e.addStr;return document.getElementById("calcArea").value=a,"+"===n?l(+t+ +r):"-"===n?l(+t-+r):"*"===n?l(+t*+r):"/"===n&&l(+t/+r),r}(e)},style:t},n.a.createElement(_.a,{variant:"h4"},"="))),n.a.createElement(a,{val:"+",myClass:s.a.plus}),n.a.createElement(a,{val:"-",myClass:s.a.minus}),n.a.createElement(a,{val:"*",myClass:s.a.multiply}),n.a.createElement(a,{val:"/",myClass:s.a.divide}))))},E=t(14),O={str:"",firstOperand:"",secondOperand:"",operator:"",answer:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FIRST_OPERAND":return Object(E.a)({},e,{firstOperand:a.firstOperand});case"ADD_SECOND_OPERAND":return Object(E.a)({},e,{secondOperand:a.secondOperand});case"ADD_OPERATOR":return Object(E.a)({},e,{operator:a.operator});case"ADD_STR":return Object(E.a)({},e,{str:a.str});case"ADD_ANSWER":return Object(E.a)({},e,{answer:a.answer});default:return e}},y=t(21),C=Object(y.b)((function(e){return{str:e.calc.str,firstOperand:e.calc.firstOperand,secondOperand:e.calc.secondOperand,operator:e.calc.operator,answer:e.calc.answer}}),{addFirst:function(e){return{type:"ADD_FIRST_OPERAND",firstOperand:e}},addSecond:function(e){return{type:"ADD_SECOND_OPERAND",secondOperand:e}},addOperator:function(e){return{type:"ADD_OPERATOR",operator:e}},addStr:function(e){return{type:"ADD_STR",str:e}},addAnswer:function(e){return{type:"ADD_ANSWER",answer:e}}})((function(e){return n.a.createElement(v,{addFirst:e.addFirst,addSecond:e.addSecond,addOperator:e.addOperator,str:e.str,firstOperand:e.firstOperand,secondOperand:e.secondOperand,operator:e.operator,addStr:e.addStr,answer:e.answer,addAnswer:e.addAnswer})})),b=t(12),w=t(31),A=Object(b.c)({calc:f}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,g=Object(b.e)(A,S(Object(b.a)(w.a)));window.store=g;var D=g;var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y.a,{store:D},n.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fa5c9dcb.chunk.js.map