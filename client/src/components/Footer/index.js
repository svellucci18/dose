import { Col, Container, Row, Image } from "react-bootstrap";

import gitHubLogo from '../../assets/images/GitHub-Mark-Light-64px.png';

const styles = {
  footerStyle:{
    position:"relative",
    left:0,
    bottom:0,
    right:0,
  }
}


const Footer = () => {
  return (
    <footer style={styles.footerStyle}className="w-100 mt-auto bg-black py-5 text-center text-white">
      <>

      <Container>

        <Row className="py-3">

        <Col className="doseFooter d-flex align-items-center justify-content-start">
              dose.
        </Col>

        <Col className="d-flex align-items-center justify-content-end">
          <a className="text-decoration-none whiteText githubFooter" href="https://github.com/svellucci18/dose"> <Image src={gitHubLogo} height="30" width="30" /> Github</a>

        </Col>

        </Row>

        <Row className="disclaimerText pt-4 mt-4">
          <div >

          DISCLAIMER: We do not encourage the use of psychadelics. Nothing on this website is intended for medical advice. We do not encourage illicit drug use. Experimenting with microdosing any subtance is always at your own risk.  

          </div>
       

          </Row>

          <Row>
            <div className="disclaimerText mt-2">

              ©2022
            </div>

          </Row>
        </Container>

        </>
    </footer>
  );
};

export default Footer;
