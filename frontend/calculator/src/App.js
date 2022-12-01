import { Container, Content, Row } from './styles'
import Input from './components/input';
import Button from './components/button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('')
    setFirstNumber('')
    setOperation('')
  }

  const handleClearCurrentNumber = () => {
    setCurrentNumber('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+')
    }
    else{
      const res = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(res))
      setFirstNumber('')
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-')
    }
    else{
      const res = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(res))
      setFirstNumber('')
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*')
    }
    else{
      const res = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(res))
      setFirstNumber('')
      setOperation('')
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')
    }
    else{
      const res = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(res))
      setFirstNumber('')
      setOperation('')
    }
  }

  const handlePowNumbers = () => {
    const res = Math.pow(Number(currentNumber), 2)
    setCurrentNumber(String(res))
  }

  const handleSqrtNumbers = () => {
    const res = Math.sqrt(Number(currentNumber))
    setCurrentNumber(String(res))
  }

  const handlePorcentageNumbers = () => {
    const res = Number(currentNumber) * Number(firstNumber) * 0.01
    setCurrentNumber(String(res))
  }

  const handleNegPos = () => {
    const res = Number(currentNumber) + -1;
    setCurrentNumber(String(res))
  }

  const handleDividend = () => {
    const res = 1 / Number(currentNumber)
    setCurrentNumber(String(res))
  }

  const handleSlice = () => {
    const current = currentNumber
    const res = current.slice(0, current.length - 1)
    setCurrentNumber(String(res))
  }

  const handleEquals = () => {
    if(firstNumber !== '' && operation !== '' && currentNumber !== ''){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        default:
          break;
      }
    }
  }  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="%" onClick={handlePorcentageNumbers}/>
          <Button label="CE" onClick={handleClearCurrentNumber}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="<<" onClick={handleSlice}/>
        </Row>
        <Row>
          <Button label="1 / x" onClick={handleDividend}/>
          <Button label="pow(x)" onClick={handlePowNumbers}/>
          <Button label="sqrt(x)" onClick={handleSqrtNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={handleNegPos}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;