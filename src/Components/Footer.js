import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/shreyas-narke-0392871a7/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-gradient font-medium"> SHREYAS</span> 
        <span className="text-gradient font-medium"> NARKE</span>
        </a>{""}
        
      </p>
    </footer>
  );
}
export default Footer;
