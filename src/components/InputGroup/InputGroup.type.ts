export type InputGroupProps = React.ComponentProps<'input'> & {
  label: string;
  length: number;
  maxLength?: number;
  style?: InputGroupStyleProps;
  handleInput: (value: string, index: number) => void;
};

export type InputGroupStyleProps = {
  gap?: number;
  justifyContent?: string;
  textAlign?: string;
  inputWidth?: number;
};
