import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy; {today.getFullYear()}</p>
      <p>You have {length} {length === 1 ? "plan" : "plans"}</p>
    </footer>
  );
};

export default Footer;
