import { LottoRank, LottoTicket } from '../types/ServiceType';

type CompareTicketAndWinNumbersArgs = {
  lottoTickets: LottoTicket[];
  winNumbers: LottoTicket;
  bonusNumber: number;
};

export const getRank = (compareSet: Set<number>, bonusNumber: number): LottoRank => {
  if (compareSet.size >= 10) return { rank: 0, price: 0 };
  if (compareSet.size === 9) return { rank: 5, price: 5000 };
  if (compareSet.size === 8) return { rank: 4, price: 50000 };
  if (compareSet.size === 6) return { rank: 1, price: 2000000000 };

  if (compareSet.size === 7) {
    if (compareSet.has(bonusNumber)) {
      return { rank: 2, price: 30000000 };
    } else {
      return { rank: 3, price: 1500000 };
    }
  }

  return { rank: 0, price: 0 };
};

export const compareTicketAndWinNumbers = ({
  lottoTickets,
  winNumbers,
  bonusNumber,
}: CompareTicketAndWinNumbersArgs): LottoRank[] => {
  return lottoTickets.map((lottoTicket) => {
    const compareSet = new Set<number>([...winNumbers, ...lottoTicket]);
    const rank = getRank(compareSet, bonusNumber);
    return rank;
  });
};
