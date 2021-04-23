import React from 'react';
import { Column, Row } from '../../styled';
import { Grid } from '../../styled';
import { ButtonNumeric } from '../../buttons/ButtonNumeric/ButtonNumeric';
import { ButtonClear } from '../../buttons/ButtonClear/ButtonClear';
import { ButtonResult } from '../../buttons/ButtonResult/ButtonResult';

export const KeyboardNumeric = () => {
  return (
    <Grid>
      <Row>
        <Column>
          <ButtonNumeric>7</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>8</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>9</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>4</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>5</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>6</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>1</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>2</ButtonNumeric>
        </Column>
        <Column>
          <ButtonNumeric>3</ButtonNumeric>
        </Column>
        <Column>
          <ButtonClear/>
        </Column>
        <Column>
          <ButtonNumeric>0</ButtonNumeric>
        </Column>
        <Column>
          <ButtonResult/>
        </Column>
      </Row>
    </Grid>
  );
};
