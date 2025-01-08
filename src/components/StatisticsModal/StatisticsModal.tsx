import * as Styled from './StatisticsModal.style';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { ClickOutsideDetector } from '../ClickOutsideDetector/ClickOutSideDetector';
import { Button } from '../Button/Button';
import { LottoRank } from '../../types/ServiceType';

type StatisticsModalProps = {
  lottoStatistics: LottoRank[];
  onClose: () => void;
};

export const StatisticsModal = ({ lottoStatistics, onClose }: StatisticsModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  const getSpecificRankCount = (rank: number) => {
    return lottoStatistics.filter((lotto) => lotto.rank === rank).length;
  };

  const getReturn = () => {
    const totalPrice = lottoStatistics.reduce((acc, cur) => acc + cur.price, 0);
    return Math.round((totalPrice / (lottoStatistics.length * 1000)) * 100);
  };

  const restart = () => {
    window.location.reload();
  };

  return createPortal(
    <Styled.DimmedLayer>
      <ClickOutsideDetector targetRef={modalRef} onClickOutside={onClose}>
        <Styled.Modal ref={modalRef}>
          <Styled.CloseButton onClick={close}>X</Styled.CloseButton>
          <Styled.Title>🏆 당첨 통계 🏆</Styled.Title>
          <Styled.Table>
            <Styled.THead>
              <Styled.THeadTr>
                <Styled.Td $flex={3}>일치 갯수</Styled.Td>
                <Styled.Td $flex={4}>당첨금</Styled.Td>
                <Styled.Td $flex={3}>당첨 갯수</Styled.Td>
              </Styled.THeadTr>
            </Styled.THead>
            <Styled.TBody>
              <Styled.Tr>
                <Styled.Td $flex={3}>3개</Styled.Td>
                <Styled.Td $flex={4}>5,000</Styled.Td>
                <Styled.Td $flex={3}>{`${getSpecificRankCount(5).toLocaleString('ko-kr')}개`}</Styled.Td>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.Td $flex={3}>4개</Styled.Td>
                <Styled.Td $flex={4}>50,000</Styled.Td>
                <Styled.Td $flex={3}>{`${getSpecificRankCount(4).toLocaleString('ko-kr')}개`}</Styled.Td>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.Td $flex={3}>5개</Styled.Td>
                <Styled.Td $flex={4}>1,500,000</Styled.Td>
                <Styled.Td $flex={3}>{`${getSpecificRankCount(3).toLocaleString('ko-kr')}개`}</Styled.Td>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.Td $flex={3}>5개+보너스볼</Styled.Td>
                <Styled.Td $flex={4}>30,000,000</Styled.Td>
                <Styled.Td $flex={3}>{`${getSpecificRankCount(2).toLocaleString('ko-kr')}개`}</Styled.Td>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.Td $flex={3}>6개</Styled.Td>
                <Styled.Td $flex={4}>2,000,000,000</Styled.Td>
                <Styled.Td $flex={3}>{`${getSpecificRankCount(1).toLocaleString('ko-kr')}개`}</Styled.Td>
              </Styled.Tr>
            </Styled.TBody>
          </Styled.Table>
          <Styled.Return>{`당신의 총 수익률은 ${getReturn()}%입니다.`}</Styled.Return>
          <Button onClick={restart}>다시 시작하기</Button>
        </Styled.Modal>
      </ClickOutsideDetector>
    </Styled.DimmedLayer>,
    document.body,
  );
};
