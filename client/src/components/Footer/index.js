import { Col, Container, Row } from "react-bootstrap";

const styles = {
  footerStyle:{
    position: "relative",

  marginTop: "100px",}
}


const Footer = () => {
  return (
    <footer style={styles.footerStyle}className="w-100 mt-auto bg-black p-4 text-center text-white">
      <>

      <Container>

        <Row className="py-3">

        <Col className="fs-2 d-flex align-items-center justify-content-start">
        dose.
        </Col>

        <Col className="d-flex align-items-center justify-content-end">
          <a className="text-decoration-none whiteText " href="https://github.com/svellucci18/dose">Github</a>

        </Col>

        </Row>

        <Row className="disclaimerText pt-4">
          <div>

          DISCLAIMER: We do not encourage the use of psychadelics. Nothing on this website is intended for medical advice. We do not encourage illicit drug use. Experimenting with microdosing any subtance is always at your own risk.  

          </div>
       

          </Row>

          <Row>
            <div className="disclaimerText">

              ©2022
            </div>

          </Row>
        </Container>

        </>
    </footer>
  );
};

export default Footer;
