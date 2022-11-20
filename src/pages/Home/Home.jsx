import { Title, CopyRigth, LinkWebSite } from './Home.styled';


const Home = () => {
  return (
    <>
      <Title>Your wellcome to contacts manager</Title>
      <CopyRigth>
        &copy; created by PPD,<LinkWebSite href="https://github.com/ProtsyukPrits"> Website</LinkWebSite>
      </CopyRigth>
    </>
  );
};

export default Home;
