import React from 'react';
import Quote from './Quote';
import ThemeProvider from '../providers/ThemeProvider';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import dummy from '../dummy.json';

export default {
  title: 'components/Quote',
  component: Quote,
  decorators: [withKnobs],
};

const backgroundColor = (brand) => {
  const label = 'Background Color';
  const options =
    brand === 'a' ? ['default-a', 'color-a'] : ['default-b', 'color-b'];
  const defaultValue = brand === 'a' ? 'default-a' : 'default-b';
  const groupId = 'Background Color';

  const value = select(label, options, defaultValue, groupId);

  return value;
};

const textBoxBackgroundColor = (brand) => {
  const label = 'Textbox Background color';
  const options =
    brand === 'a'
      ? ['default-a', 'color-a']
      : ['default-b', 'color-b', 'color-b-two', 'color-b-three'];
  const defaultValue = brand === 'a' ? 'default-a' : 'default-b';
  const groupId = 'Textbox Background';

  const value = select(label, options, defaultValue, groupId);

  return value;
};

const textBoxTextColor = (brand) => {
  const label = 'Text color';
  const options =
    brand === 'a'
      ? ['default-a', 'color-a']
      : ['default-b', 'color-b', 'color-b-two'];
  const defaultValue = brand === 'a' ? 'default-a' : 'default-b';
  const groupId = 'Textbox Background';

  const value = select(label, options, defaultValue, groupId);

  return value;
};

export const BrandA = () => (
  <ThemeProvider
    theme={{
      brand: 'a',
      ...dummy,
    }}
  >
    <Quote
      showUnderline={boolean('Underline', true, 'Show Underline')}
      componentBackground={backgroundColor('a')}
      textBoxBackgroundColor={textBoxBackgroundColor('a')}
      textBoxTextColor={textBoxTextColor('a')}
    />
  </ThemeProvider>
);

export const BrandB = () => (
  <ThemeProvider
    theme={{
      brand: 'b',
      ...dummy,
    }}
  >
    <Quote
      showUnderline={boolean('Underline', true, 'Show Underline')}
      componentBackground={backgroundColor('b')}
      textBoxBackgroundColor={textBoxBackgroundColor('b')}
      textBoxTextColor={textBoxTextColor('b')}
    />
  </ThemeProvider>
);
