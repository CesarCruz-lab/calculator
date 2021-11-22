import React, { useState } from 'react';
import { Container, Stack, TextField } from '@mui/material';
import Digits from './Digits';

const Calculator: React.FC = () => {
  const [screenValue, setScreenValue] = useState('');
  const errorMessage = 'Erro!';

  function handleClick(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();

    const buttonElement = ev.target as HTMLButtonElement;
    const isAction = ['eq', 'back', 'clear'].includes(buttonElement.name);
    const error = screenValue === errorMessage;

    if (error) {
      if (!isAction) setScreenValue(buttonElement.textContent || '');
      else if (buttonElement.name === 'clear') setScreenValue('');
      return;
    }

    if (isAction) {
      const model = {
        eq: () => setScreenValue(eval(screenValue)), // eslint-disable-line
        back: () => setScreenValue(screenValue.slice(0, -1)),
        clear: () => setScreenValue(''),
      };

      try {
        // @ts-ignore
        model[buttonElement.name](); // eslint-disable-line
      } catch (err) {
        setScreenValue(errorMessage);
        console.error(err);
      }

      return;
    }

    setScreenValue(screenValue + buttonElement.textContent);
  }

  function handleKeyDown(ev: KeyboardEvent) {
    ev.preventDefault();

    const isNumber = !isNaN(Number(ev.key));
    const isOperator = ['/', '*', '-', '+'].includes(ev.key);
    const isAction = ['Backspace', 'Delete', 'Enter'].includes(ev.key);
    const error = screenValue === errorMessage;

    if (error) {
      if (!isAction) setScreenValue(ev.key);
      else if (ev.key === 'Delete') setScreenValue('');
      return;
    }

    if (isNumber || isOperator) {
      setScreenValue(screenValue + ev.key);
      return;
    }

    if (isAction) {
      const model = {
        Backspace: () => setScreenValue(screenValue.slice(0, -1)),
        Delete: () => setScreenValue(''),
        Enter: () => setScreenValue(eval(screenValue)), // eslint-disable-line
      };

      try {
        // @ts-ignore
        model[ev.key](); // eslint-disable-line
      } catch (err) {
        setScreenValue(errorMessage);
        console.error(err);
      }

      return;
    }
  }

  return (
    <Container className="page">
      <Stack direction="column" width=" 100%" height="max-content" maxWidth="500px">
        <TextField fullWidth value={screenValue} sx={{ '*': { fontSize: '32px !important', textAlign: 'right' } }} />
      </Stack>
      <Stack direction="column" width="100%" height="max-content" maxWidth="500px" marginTop={1}>
        <Digits handleClick={handleClick} handleKeyDown={handleKeyDown} />
      </Stack>
    </Container>
  );
};

export default Calculator;
