import styled from 'styled-components';

export const Page = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.grayScale2};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 28px;

  width: 414px;
  margin: 84px auto;
  padding: 42px 16px;

  border: 1px solid ${({ theme }) => theme.color.grayScale5opacity12};
  background-color: ${({ theme }) => theme.color.grayScale1};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title}
`;
