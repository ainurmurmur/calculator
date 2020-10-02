import React from 'react';
import styles from './Calc.module.css';
import {ButtonMaterial} from './Material'
import {Typography} from '@material-ui/core'
import 'fontsource-roboto';


function Calc(props) {

    let CalcButtons = ({myClass, val}) => {

        return (
            <div className={myClass}>
                <ButtonMaterial id={styles.btnR} type='submit' onClick={() => handleInput(val)} style={style}>
                    <Typography variant={'h4'}>{val}</Typography>
                </ButtonMaterial>
            </div>
        )
    }

    let calculate = ({str, firstOperand, secondOperand, operator, addStr}) => {

        document.getElementById('calcArea').value = str;

        if (operator === '+') {
            addStr(+firstOperand + +secondOperand);
        } else if (operator === '-') {
            addStr(+firstOperand - +secondOperand)
        } else if (operator === '*') {
            addStr(+firstOperand * +secondOperand)
        } else if (operator === '/') {
            addStr(+firstOperand / +secondOperand)
        }
        return secondOperand;
    }

    const style = {

        width: 'auto',
        height: '95px'
    };

    let {firstOperand, secondOperand, operator, addStr, str, addSecond, addFirst, addOperator, answer, addAnswer} = props;

    let handleInput = (e) => {

        let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '%', '√'];
        let symbols = ['+', '-', '*', '/']

        //first
        if (numbers.includes(e) && operator === '') {
            addFirst(e);
            addStr(firstOperand);
            document.getElementById('calcArea').value = str;
            addStr(firstOperand + e);
            addFirst(firstOperand + e);
            if (e === '%') {
                let percent = parseFloat(firstOperand) / 100;
                addStr(percent.toString());
                addFirst(percent.toString());
            }
            if (e === '√') {
                let i = parseFloat(firstOperand);
                let squareRoot = Math.sqrt(i)
                addStr(squareRoot.toString());
                addFirst(squareRoot.toString());
            }
        }
        //operator
        else if (!numbers.includes(e) && symbols.includes(e)) {
            if (operator && answer === '') {
                alert('please enter only two operands, no more')
            }
            if (!operator) {
                addOperator(e);
                addStr(firstOperand + e);
                document.getElementById('calcArea').value = str;
            }
            if (operator && parseInt(str) === answer) {
                addFirst(answer.toString());
                addSecond('');
                addOperator(e);
                addStr(answer.toString() + e);
                document.getElementById('calcArea').value = str;
                addAnswer('')
            }
        }
        //second
        else if (numbers.includes(e) && symbols.includes(operator)) {

            addSecond(e);
            addStr(firstOperand + operator + e);
            document.getElementById('calcArea').value = str;
            addStr(firstOperand + operator + secondOperand + e);
            addSecond(secondOperand + e);
            if (e === '%') {
                let percent = parseFloat(secondOperand) / 100;
                addStr(firstOperand + operator + percent.toString());
                addSecond(percent.toString());
            }
            if (e === '√') {
                let i = parseFloat(secondOperand);
                let squareRoot = Math.sqrt(i)
                addStr(firstOperand + operator + squareRoot.toString());
                addSecond(squareRoot.toString());
            }
        } else if (e === 'c') {
            addStr('');
            addAnswer('')
            addSecond('')
            addFirst('')
            addOperator('')
        } else {
            return str
        }
    }
    return (
        <div className={styles.BlockMain}>
            <input value={str} id={'calcArea'} disabled className={styles.BlockTop}/>
            <div className={styles.BlockBottom}>
                <div className={styles.BlockLeft}>
                    <CalcButtons val={'%'} myClass={styles.percent}/>
                    <CalcButtons val={'√'} myClass={styles.squreroot}/>
                    <CalcButtons val={'c'} myClass={styles.clear}/>
                    <CalcButtons val={'7'} myClass={styles.number}/>
                    <CalcButtons val={'8'} myClass={styles.number}/>
                    <CalcButtons val={'9'} myClass={styles.number}/>
                    <CalcButtons val={'4'} myClass={styles.number}/>
                    <CalcButtons val={'5'} myClass={styles.number}/>
                    <CalcButtons val={'6'} myClass={styles.number}/>
                    <CalcButtons val={'1'} myClass={styles.number}/>
                    <CalcButtons val={'2'} myClass={styles.number}/>
                    <CalcButtons val={'3'} myClass={styles.number}/>
                    <CalcButtons val={'0'} myClass={styles.number}/>
                    <CalcButtons val={'.'} myClass={styles.dot}/>
                </div>
                <div className={styles.BlockRight}>
                    <div className={styles.equal}>
                        <ButtonMaterial id={styles.btnR} type='submit'
                                        onClick={() => calculate(props)}
                                        style={style}>
                            <Typography variant={'h4'}>{'='}</Typography>
                        </ButtonMaterial>
                    </div>
                    <CalcButtons val={'+'} myClass={styles.plus}/>
                    <CalcButtons val={'-'} myClass={styles.minus}/>
                    <CalcButtons val={'*'} myClass={styles.multiply}/>
                    <CalcButtons val={'/'} myClass={styles.divide}/>
                </div>
            </div>
        </div>
    );
}

export default Calc;
