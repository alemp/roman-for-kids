import { DefaultTheme } from 'styled-components';

export const customMediaMinQuery = (minWidth: number) => `@media (min-width: ${ minWidth }px)`;
export const customMediaMaxQuery = (maxWidth: number) => `@media (max-width: ${ maxWidth }px)`;

export const theme: DefaultTheme = {
  border: {
    color: '#333333',
    radius: '3px',
    width: '1px',
  },
  colors: {
    blue: '#0275D8',
    green: '#5CB85C',
    red: '#D9534F',
    white: 'white',
    lightGray: '#ECEFF1',
  },
  font: {
    color: 'black',
    size: '1.5em',
  },
  responsive: {
    desktop: customMediaMinQuery(1540),
    tablet: customMediaMinQuery(1024),
    phablet: customMediaMinQuery(768),
    phone: customMediaMaxQuery(768),
  },
};
