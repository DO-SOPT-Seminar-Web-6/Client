import { DefaultTheme } from 'styled-components';

const colors = {
  mainPink: '#ff0558',
  subPink: '#ffacbb',
  black: '#1c1d1f',
  white: '#fff',
  grey700: '#333',
  grey600: '#888',
  grey500: '#a7a7a7',
  grey400: '#d9d9d9',
  grey300: '#e3e3e3',
  grey200: '#f2f2f2',
  grey100: '#f5f5f5',
};

interface InFONTProps {
  weight: number;
  size: number;
  lineHeight?: number;
}

function FONT({ weight, size, lineHeight = 1 }: InFONTProps) {
  return `
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight};
  letter-spacing: normal;
  `;
}

const fonts = {
  largeTitle: FONT({ weight: 700, size: 3.6 }),
  title1: FONT({ weight: 700, size: 2.4 }),
  title2: FONT({ weight: 700, size: 2.4 }),
  title3: FONT({ weight: 400, size: 2.4 }),
  title4: FONT({ weight: 350, size: 2.4 }),
  subTitle1: FONT({ weight: 700, size: 2 }),
  subTitle2: FONT({ weight: 700, size: 1.8 }),
  subTitle3: FONT({ weight: 500, size: 1.8 }),
  subTitle4: FONT({ weight: 700, size: 1.6 }),
  subTitle5: FONT({ weight: 500, size: 1.6 }),
  subTitle160: FONT({ weight: 500, size: 1.6, lineHeight: 1.6 }),
  subTitle6: FONT({ weight: 400, size: 1.6 }),
  subTitle7: FONT({ weight: 500, size: 3.5 }),
  body1: FONT({ weight: 700, size: 1.4 }),
  body2: FONT({ weight: 500, size: 1.4 }),
  body2160: FONT({ weight: 500, size: 1.4, lineHeight: 1.6 }),
  body3: FONT({ weight: 400, size: 1.4 }),
  body4: FONT({ weight: 500, size: 1.2, lineHeight: 1.7 }),
  body5: FONT({ weight: 500, size: 1.2 }),
  body6: FONT({ weight: 400, size: 1.2 }),
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export default theme;
