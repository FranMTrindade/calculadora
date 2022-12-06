
import { Container, Content, Row} from "./styles";
import Input from './components/Input'
import {Button, ButtonZ} from './components/Button'
import { useState } from 'react';


const App = () => {
  const [numero, setNumero] = useState('0')
  const [primeiroNumero, setPrimeiroNumero] = useState('0');
  const [operation, setOperation] = useState ('');

  const handleAddNumber = (num) => {
    setNumero(prev => `${prev == '0' ? '' : prev}${num}`)
  }
  
  const handleLimpar = () => {
    setNumero('0')
    setOperation('')
  }

  const handleSomar = () => {
    if(primeiroNumero === '0'){
      setPrimeiroNumero(numero);
      handleLimpar();
    }else{
      const sum = Number(primeiroNumero) + Number(numero)
      setNumero(String(sum))
      setPrimeiroNumero('0')
      setOperation('+')
    }
  }

  const handleSub = () => {
    if(primeiroNumero === '0'){
      setPrimeiroNumero(numero);
      handleLimpar();
    }else{
      const sum = Number(primeiroNumero) - Number(numero)
      setNumero(String(sum))
      setPrimeiroNumero('0')
      setOperation('-')
    }
  }

  const handleMult = () => {
    if(primeiroNumero === '0'){
      setPrimeiroNumero(numero);
      handleLimpar();
    }else{
      const sum = Number(primeiroNumero) * Number(numero)
      setNumero(String(sum))
      setPrimeiroNumero('0')
      setOperation('*')
    }
  }

  const handleDiv = () => {
    if(primeiroNumero === '0'){
      setPrimeiroNumero(numero);
      handleLimpar();
    }else{
      const sum = Number(primeiroNumero) / Number(numero)
      setNumero(String(sum))
      setPrimeiroNumero('0')
      setOperation('/')
    }
  }

  const handleIgual = () => {
    if(primeiroNumero !== '0' && operation !== '' && numero !== '0'){
      switch(operation){
        case '+':
        handleSomar();
        break;
        default:
        break;
      }
    }
  }

  
  
  
  return ( 
    <Container>
      <Content>
        <Input value={numero}/>
        <Row>
          <Button label="C"  onClick={(handleLimpar)}/>
          <Button label="+/-"  onClick={() => handleAddNumber('-')}/>  
          <Button label="%" onClick={() => handleAddNumber('%')}/>
          <Button label="÷ " onClick={(handleDiv)}/>
        </Row>
        <Row>
          <Button label="7"  onClick={() => handleAddNumber('7')}/>
          <Button label="8"  onClick={() => handleAddNumber('8')}/>
          <Button label="9"  onClick={() => handleAddNumber('9')}/>
          <Button label="x"  onClick={(handleMult)}/>
        </Row>
        <Row>
          <Button label="4"  onClick={() => handleAddNumber('4')}/>
          <Button label="5"  onClick={() => handleAddNumber('5')}/>
          <Button label="6"  onClick={() => handleAddNumber('6')}/>
          <Button label="-"  onClick={(handleSub)}/>
        </Row>
        <Row>
          <Button label="1"  onClick={() => handleAddNumber('2')}/>
          <Button label="2"  onClick={() => handleAddNumber('2')}/>
          <Button label="3"  onClick={() => handleAddNumber('3')}/>
          <Button label="+"  onClick={(handleSomar)}/>
        </Row>
        <Row>
          <ButtonZ label="0"  onClick={() => handleAddNumber('0')}/>
          <Button label=","  onClick={() => handleAddNumber(',')}/>
          <Button label="="  onClick={(handleIgual)}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
