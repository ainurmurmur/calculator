import React from 'react';
import Calc from './Calc'
import { addFirst, addSecond, addOperator, addStr, addAnswer} from './Reducer'
import { connect } from 'react-redux'



export const CalcContainer = (props) => {


  return <Calc addFirst={props.addFirst} addSecond={props.addSecond} addOperator={props.addOperator}
           str ={props.str} firstOperand={props.firstOperand} secondOperand={props.secondOperand}
           operator={props.operator} addStr={props.addStr} answer={props.answer} addAnswer={props.addAnswer}
  />
}

let mapStateToProps = (state) => ({

  str: state.calc.str,
  firstOperand: state.calc.firstOperand,
  secondOperand: state.calc.secondOperand,
  operator: state.calc.operator,
  answer: state.calc.answer
})

export default connect(mapStateToProps, 
  { addFirst, addSecond, addOperator, addStr, addAnswer})
(CalcContainer)

