const styles = {
  footerStyle:{
  position: "fixed",
  color: "white",
  left: 0,
    bottom: 0,
    
    width: "100%",
    overflow: "hidden"}
}


const Footer = () => {
  return (
    <footer style={styles.footerStyle}className="w-100 mt-auto bg-secondary p-4 text-center">
       We do not encourage the use of psychadelics. Nothing on this website is intended for medical advice. We do not encourage illicit drug use. Experimenting with microdosing any subtance is always at your own risk. 
    </footer>
  );
};

export default Footer;
