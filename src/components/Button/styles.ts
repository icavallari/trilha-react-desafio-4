import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps>{
    // prevent
    /*
  Overload 1 of 2, '(props: {} & { theme?: any; } & { as?: undefined; forwardedAs?: undefined; }): ReactElement<WithOptionalTheme<{} & Partial<{}>, any>, string | JSXElementConstructor<any>>', gave the following error.
    Type '{ children: string; className: string; onClick: (() => void) | undefined; }' is not assignable to type 'IntrinsicAttributes & {} & { theme?: any; } & { as?: undefined; forwardedAs?: undefined; }'.
      Property 'children' does not exist on type 'IntrinsicAttributes & {} & { theme?: any; } & { as?: undefined; forwardedAs?: undefined; }'.
  Overload 2 of 2, '(props: StyledComponentPropsWithAs<string, any, {}, never, string, string>): ReactElement<StyledComponentPropsWithAs<string, any, {}, never, string, string>, string | JSXElementConstructor<...>>', gave the following error.
    Type '{ children: string; className: string; onClick: (() => void) | undefined; }' is not assignable to type 'IntrinsicAttributes & {} & { theme?: any; } & { as?: string | undefined; forwardedAs?: string | undefined; }'.
      Property 'children' does not exist on type 'IntrinsicAttributes & {} & { theme?: any; } & { as?: string | undefined; forwardedAs?: string | undefined; }'.
    */
}

export const ButtonContainer = styled.button<ButtonProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &.disabled{
        cursor: none;
        opacity: 0.3;
        pointer-events: none;
    }
`