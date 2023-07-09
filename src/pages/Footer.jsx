import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollUpButton } from "../components/ScrollUpButton";

AOS.init();
export const Footer = () => {
  return (
    <div>
      <Container className="p-3">
        <div className="d-flex justify-content-center gap-3 pointer">
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
        </div>
      </Container>
    </div>
  );
};
