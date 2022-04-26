import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
const HeaderWrapper = styled.header({});
const FooterWrapper = styled.footer({
  marginTop: 'auto',
});
function Default() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <main>
        <Outlet />
      </main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}

export default Default;
