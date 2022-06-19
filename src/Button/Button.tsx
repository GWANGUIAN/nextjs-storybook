/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 설정합니다 */
  size?: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = (theme: ButtonProps['theme']) => {
  switch (theme) {
    case 'primary':
      return css`
        background: #2260ff;
        color: white;
        &:hover {
          background: #1a51dd;
        }
        &:active:enabled {
          background: #1b4ecf;
        }
        &:disabled {
          background: #b0aed9;
        }
      `;

    case 'secondary':
      return css`
        background: #e9ecef;
        color: #343a40;
        &:hover {
          background: #f1f3f5;
        }
        &:active:enabled {
          background: #dee2e6;
        }
        &:disabled {
          color: #c6c8e1;
        }
      `;

    case 'tertiary':
      return css`
        background: none;
        color: #2260ff;
        &:hover {
          background: #e9e6fc;
        }
        &:active:enabled {
          background: #c5c3fa;
        }
        &:disabled {
          color: #bcbdd9;
        }
      `;
  }
};

const sizes = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        height: 1.75rem;
        font-size: 0.75rem;
        padding: 0 0.875rem;
      `;
    case 'medium':
      return css`
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 1rem;
      `;
    case 'big':
      return css`
        height: 3rem;
        font-size: 1.125rem;
        padding: 0 1.5rem;
      `;
  }
};

const Button = ({
  children,
  theme = 'primary',
  size = 'medium',
  disabled = false,
  width,
  onClick,
}: ButtonProps) => (
  <button
    css={[style, themes(theme), sizes(size), { width }]}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
