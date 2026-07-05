import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";
import Container from "./Container";

function Applaout() {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default Applaout;
