import { useEffect, useState } from 'react';
import { LottoTicket } from '../types/ServiceType';

export const useInputWinNumbers = () => {
  const [winNumbers, setWinNumbers] = useState<LottoTicket>([]);
  const [bonusNumber, setBonusNumber] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleWinNumbers = (winNumber: string, index: number) => {
    setWinNumbers((prev) => [...prev.slice(0, index), Number(winNumber), ...prev.slice(index + 1)]);
  };

  const handleBonusNumber = (bonusNumber: string) => {
    setBonusNumber(Number(bonusNumber));
  };

  useEffect(
    function checkValidNumbers() {
      const validateWinNumbers = () => {
        const compareSet = new Set([...winNumbers]);
        return winNumbers.every((number) => number >= 1 && number <= 45) && compareSet.size === 6;
      };

      const validateBonusNumber = () => {
        return !winNumbers.includes(bonusNumber) && bonusNumber >= 1 && bonusNumber <= 45;
      };

      setCanSubmit(validateWinNumbers() && validateBonusNumber());
    },
    [winNumbers, bonusNumber],
  );

  return {
    winNumbers,
    bonusNumber,
    canSubmit,
    handleWinNumbers,
    handleBonusNumber,
  };
};
