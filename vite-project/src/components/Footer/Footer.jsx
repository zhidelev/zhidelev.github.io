import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear(); 
  return (
    <p>2024 {year === 2024? "": " - " + year}</p>
  );
}

export default Footer;