import * as Styled from './Lotto.style';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { InputOrderAmount } from '../components/InputOrderAmount/InputOrderAmount';
import { useBuyLotto } from '../hooks/useBuyLotto';
import { ShowMyTickets } from '../components/ShowMyTickets/ShowMyTickets';
import { InputWinNumbers } from '../components/InputWinNumbers/InputWinNumbers';
import { useReducer } from 'react';
import { StatisticsModal } from '../components/StatisticsModal/StatisticsModal';
import { useInputWinNumbers } from '../hooks/useInputWinNumbers';
import { useGetLottoStatistics } from '../hooks/useGetLottoStatistics';

export const Lotto = () => {
  const { amountInput, setAmountInput, buyLotto, lottoTickets } = useBuyLotto();
  const { winNumbers, bonusNumber, ...rest } = useInputWinNumbers();
  const { lottoStatistics, compareTicketAndWinNumbers } = useGetLottoStatistics({
    lottoTickets,
    winNumbers,
    bonusNumber,
  });

  const [isModalOpen, setIsModalOpen] = useReducer((state: boolean) => !state, false);

  const handleModalState = () => {
    setIsModalOpen();
  };

  return (
    <Styled.Page>
      <Header />
      <Styled.Main>
        <Styled.Title>🎱 내 번호 당첨 확인 🎱</Styled.Title>
        <InputOrderAmount amountInput={amountInput} setAmountInput={setAmountInput} buyLotto={buyLotto} />
        {lottoTickets.length > 0 && (
          <>
            <ShowMyTickets lottoTickets={lottoTickets} />
            <InputWinNumbers
              {...rest}
              compareTicketAndWinNumbers={compareTicketAndWinNumbers}
              handleModalState={handleModalState}
            />
          </>
        )}
      </Styled.Main>
      <Footer />
      {isModalOpen && <StatisticsModal lottoStatistics={lottoStatistics} onClose={handleModalState} />}
    </Styled.Page>
  );
};
