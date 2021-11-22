import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';

interface Props {
  handleClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleKeyDown?: (ev: KeyboardEvent) => void;
}

const Digits: React.FC<Props> = ({ handleClick, handleKeyDown, ...rest }) => {
  useEffect(() => {
    const keydown = (ev: KeyboardEvent) => handleKeyDown && handleKeyDown(ev);

    window.addEventListener('keydown', keydown);

    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, [handleKeyDown]);

  return (
    <Grid container spacing={0.5} {...rest}>
      <Grid item xs={3}>
        <Button name="clear" onClick={handleClick}>
          C
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>(</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>)</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>/</Button>
      </Grid>

      {/* -- -- */}

      <Grid item xs={3}>
        <Button onClick={handleClick}>7</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>8</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>9</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>*</Button>
      </Grid>

      {/* -- -- */}

      <Grid item xs={3}>
        <Button onClick={handleClick}>4</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>5</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>6</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>-</Button>
      </Grid>

      {/* -- -- */}

      <Grid item xs={3}>
        <Button onClick={handleClick}>1</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>2</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>3</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>+</Button>
      </Grid>

      {/* -- -- */}

      <Grid item xs={3}>
        <Button onClick={handleClick}>.</Button>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={handleClick}>0</Button>
      </Grid>
      <Grid item xs={3}>
        <Button name="back" onClick={handleClick}>
          &laquo;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          name="eq"
          onClick={handleClick}
          sx={{ backgroundColor: '#a5a5bf', '&:hover': { backgroundColor: '#a5a5bf' } }}>
          =
        </Button>
      </Grid>
    </Grid>
  );
};

export default Digits;
