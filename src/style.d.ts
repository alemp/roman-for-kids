import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      color: string
      radius: string
      width: string
    }
    font: {
      color: string
      size: string
    }
    colors: {
      blue: string
      green: string
      red: string
      white: string
      lightGray: string
    },
    responsive: {
      desktop: string,
      tablet: string,
      phablet: string,
      phone: string,
    }
  }
}
