import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© Copyright Reserved @ {currentYear}</p>
    </footer>
  );
}
export default Footer;
