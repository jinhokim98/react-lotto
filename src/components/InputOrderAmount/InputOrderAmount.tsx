import * as Styled from './InputOrderAmount.style';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

type InputOrderAmountProps = {
  amountInput: string;
  setAmountInput: React.Dispatch<React.SetStateAction<string>>;
  buyLotto: () => void;
};

export const InputOrderAmount = ({ amountInput, setAmountInput, buyLotto }: InputOrderAmountProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    buyLotto();
  };

  return (
    <Styled.Form onSubmit={onSubmit}>
      <Input
        label="구입할 금액을 입력해주세요."
        placeholder="금액"
        autoFocus
        value={amountInput}
        onChange={(event) => setAmountInput(event.target.value)}
      />
      <Button>구입</Button>
    </Styled.Form>
  );
};
