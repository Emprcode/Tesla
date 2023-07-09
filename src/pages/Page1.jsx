import { Header } from "./Header";
import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Page1 = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="p-3">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <Row className="text-center p-5">
              <div className="p-5 mt-5">
                <h1>Experience Tesla</h1>
                <p>Schedule a Demo Drive Today</p>
              </div>
            </Row>

            <div className="button-div" data-aos="fade-up">
              <div className="button mt-5">DEMO DRIVE</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
