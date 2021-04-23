import React from 'react';
import { ButtonClear } from '../../buttons/ButtonClear/ButtonClear';
import { ButtonResult } from '../../buttons/ButtonResult/ButtonResult';
import { ButtonRoman } from '../../buttons/ButtonRoman/ButtonRoman';
import { Column, Row } from '../../styled';
import { Grid } from '../../styled/Grid';

export const KeyboardRoman = () => {
  return (
    <Grid>
      <Row>
        <Column>
          <ButtonRoman>C</ButtonRoman>
        </Column>
        <Column>
          <ButtonRoman>D</ButtonRoman>
        </Column>
        <Column>
          <ButtonRoman>M</ButtonRoman>
        </Column>
        <Column>
          <ButtonRoman>V</ButtonRoman>
        </Column>
        <Column>
          <ButtonRoman>X</ButtonRoman>
        </Column>
        <Column>
          <ButtonRoman>L</ButtonRoman>
        </Column>
        <Column>
          <ButtonClear></ButtonClear>
        </Column>
        <Column>
          <ButtonRoman>I</ButtonRoman>
        </Column>
        <Column>
          <ButtonResult></ButtonResult>
        </Column>
      </Row>
    </Grid>
  );
};
