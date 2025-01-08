import * as Styled from './InputGroup.style';
import { InputGroupProps } from './InputGroup.type';

export const InputGroup = ({ style, label, length, maxLength, handleInput, ...restProps }: InputGroupProps) => {
  return (
    <Styled.Container $gap={style?.gap}>
      <Styled.Label $textAlign={style?.textAlign}>{label}</Styled.Label>
      <Styled.InputGroup $justifyContent={style?.justifyContent}>
        {Array.from({ length }).map((_, index) => (
          <Styled.Input
            key={index}
            maxLength={maxLength}
            $width={style?.inputWidth}
            onChange={(event) => handleInput(event.target.value, index)}
            {...restProps}
          />
        ))}
      </Styled.InputGroup>
    </Styled.Container>
  );
};
