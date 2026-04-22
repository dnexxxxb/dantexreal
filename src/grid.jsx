import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Card.jsx";
import img1 from "./assets/hux1.jpg";
import img2 from "./assets/hux2.jpg";
import img3 from "./assets/hux3.jpg";
import img4 from "./assets/hux4.jpg";
import img5 from "./assets/hux5.jpg";
import img6 from "./assets/hux6.jpg";
function Grid() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Cards
              image={img1}
              description="currently on sale"
              title="market value $900k"
              text="Value"
            />
          </Col>
          <Col>
            <Cards
              image={img2}
              description="Our agent "
              title="House strategy"
              text="Day wi me"
            />
          </Col>
          <Col>
            <Cards
              image={img3}
              description="Affordable price"
              title="Property for sell"
              text="We give luxury"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cards
              image={img4}
              description="learning web "
              title=" Dark web"
              text="the web the style of the dark web"
            />
          </Col>
          <Col>
            <Cards
              image={img5}
              description="learning web "
              title=" Dark web"
              text="the web the style of the dark web"
            />
          </Col>
          <Col>
            <Cards
              image={img6}
              description="learning web "
              title=" Dark web"
              text="the web the style of the dark web"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Grid;
