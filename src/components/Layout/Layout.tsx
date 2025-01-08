import * as Styled from './Layout.style';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.Page>
      <Header />
      <Styled.Main>
        <Styled.Title>🎱 내 번호 당첨 확인 🎱</Styled.Title>
        {children}
      </Styled.Main>
      <Footer />
    </Styled.Page>
  );
};
