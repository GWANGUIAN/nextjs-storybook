/* eslint-disable @typescript-eslint/naming-convention */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import Button from './Button';

const setting = {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary',
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action('onClick')}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};

export const primaryButton = () => <Button>PRIMARY</Button>;

export const secondaryButton = () => (
  <Button theme="secondary">SECONDARY</Button>
);

export const tertiaryButton = () => <Button theme="tertiary">TERTIARY</Button>;

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => (
  <div css={buttonWrapper}>
    <div>
      <div className="description">Small</div>
      <Button size="small">BUTTON</Button>
    </div>
    <div>
      <div className="description">Medium</div>
      <Button size="medium">BUTTON</Button>
    </div>
    <div>
      <div className="description">Big</div>
      <Button size="big">BUTTON</Button>
    </div>
  </div>
);

export const disabled = () => (
  <div css={buttonWrapper}>
    <div>
      <Button disabled>PRIMARY</Button>
    </div>
    <div>
      <Button disabled theme="secondary">
        SECONDARY
      </Button>
    </div>
    <div>
      <Button disabled theme="tertiary">
        TERTIARY
      </Button>
    </div>
  </div>
);

export const customSized = () => (
  <div css={buttonWrapper}>
    <div>
      <Button width="20rem">CUSTOM WIDTH</Button>
    </div>
    <div>
      <Button width="100%">FULL WIDTH</Button>
    </div>
  </div>
);

export default setting;
