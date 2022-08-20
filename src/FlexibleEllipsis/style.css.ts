import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '20px',
  border: '1px solid black',
  borderRadius: '10px',
});

export const ul = style({
  width: '100%',
});

export const li = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const title = style({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  marginRight: '16px',
});

export const desc = style({
  flexShrink: 0,
});

export const left = style({
  display: 'flex',
  minWidth: 0,
  marginRight: '16px',
});

export const leftSub = style({
  flexShrink: 0,
});

globalStyle('ul, li', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});
