import { Footer, Header } from 'components/index';
import '../base/styles/main.css';
import MainLayout from 'base/Layouts/MainLayout';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;
};

export default MyApp;
