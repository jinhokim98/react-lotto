import styled from 'styled-components';

export const DimmedLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  background-color: #00000080;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.color.grayScale1};

  width: 350px;
  height: 500px;

  padding: 32px 16px;
  gap: 32px;

  border-radius: 4px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title};
  text-align: center;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;

export const THead = styled.thead`
  width: 100%;
  height: 40px;
`;

export const THeadTr = styled.tr`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8px 0;

  border-top: 1px solid ${({ theme }) => theme.color.grayScale5opacity12};
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale5opacity12};

  ${({ theme }) => theme.typography.body};
  font-weight: 600;
`;

export const TBody = styled.tbody`
  width: 100%;
  height: 100%;
`;

export const Tr = styled.tr`
  display: flex;
  width: 100%;
  height: 40px;

  padding: 8px 0;

  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale5opacity12};

  ${({ theme }) => theme.typography.body};
  font-weight: 400;
`;

export const Td = styled.td<{ $flex: number }>`
  flex: ${({ $flex }) => $flex};
  text-align: center;
  white-space: nowrap;
`;

export const Return = styled.p`
  ${({ theme }) => theme.typography.body};
  font-weight: 600;

  text-align: center;
`;
