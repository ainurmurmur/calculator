
const ADD_FIRST_OPERAND ='ADD_FIRST_OPERAND'
const ADD_SECOND_OPERAND ='ADD_SECOND_OPERAND'
const ADD_OPERATOR ='ADD_OPERATOR'
const ADD_STR ='ADD_STR'
const ADD_ANSWER='ADD_ANSWER'

let initialState = {

      str : '',
      firstOperand : '',
      secondOperand : '',
      operator: '',
      answer:null
    
}

 let CalcReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FIRST_OPERAND: {
           return {...state, firstOperand:action.firstOperand} 
        }
        case ADD_SECOND_OPERAND: {
            return {...state,  secondOperand:action.secondOperand} 
         }
         case ADD_OPERATOR: {
            return {...state, operator:action.operator} 
         }
         case ADD_STR: {
            return {...state, str:action.str} 
         }
         case ADD_ANSWER: {
            return {...state, answer:action.answer} 
         }
        default: 
            return state;
    }
}

export const addFirst = (firstOperand) => ( {type: ADD_FIRST_OPERAND, firstOperand} )
export const addSecond = (secondOperand) => ( {type: ADD_SECOND_OPERAND, secondOperand} )
export const addOperator = (operator) => ( {type: ADD_OPERATOR, operator} )
export const addStr = (str) => ( {type: ADD_STR, str} )
export const addAnswer = (answer) => ( {type: ADD_ANSWER, answer} )

export default CalcReducer;