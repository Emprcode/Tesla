import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollUpButton } from "../components/ScrollUpButton";

AOS.init();
export const Page8 = () => {
  return (
    <div className="page8" id="accessories">
      <Container className="p-5">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Row className="text-center p-5">
            <div className="mt-5">
              <h1>Accessories</h1>
            </div>
          </Row>

          <div className="button-div gap-3 mt-5">
            <div className="button mt-5 bg-secondary text-light">SHOP NOW</div>
          </div>

          {/* <div className="d-flex justify-content-center mt-5 gap-3 pointer">
            <div className=""> Tesla &copy; 2023</div>
            <div>Privacy & Legal</div>
            <div>Vehicle Recalls</div>
            <div>Contact</div>
            <div>News</div>
            <div>Get Updates</div>
            <div>Locations</div>
          </div>

          <div className="d-flex justify-content-end">
            <ScrollUpButton />
          </div> */}
        </div>
      </Container>
    </div>
  );
};
