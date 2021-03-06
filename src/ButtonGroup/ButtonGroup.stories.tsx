/** @jsxImportSource @emotion/react */
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

const ButtonGroupStory = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    'direction',
    { Row: 'row', Column: 'column' },
    'row',
  );
  const isRightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={isRightAlign} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => (
  <ButtonGroup rightAlign>
    <Button theme="tertiary">취소</Button>
    <Button>확인</Button>
  </ButtonGroup>
);

export const column = () => (
  <ButtonGroup direction="column">
    <Button>CLICK ME</Button>
    <Button>CLICK ME</Button>
  </ButtonGroup>
);

export const customGap = () => (
  <ButtonGroup gap="1rem">
    <Button theme="tertiary">취소</Button>
    <Button>확인</Button>
  </ButtonGroup>
);

export const customGapColumn = () => (
  <ButtonGroup direction="column" gap="1rem">
    <Button>CLICK ME</Button>
    <Button>CLICK ME</Button>
  </ButtonGroup>
);

export default ButtonGroupStory;
