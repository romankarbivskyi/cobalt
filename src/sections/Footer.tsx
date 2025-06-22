const Footer = () => {
  return (
    <footer className="border-outline relative mx-auto mb-5 flex max-w-7xl flex-col items-center justify-center gap-10 border-t px-4 pt-5 sm:my-10 sm:px-6 md:mb-24 md:items-start md:px-8">
      <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-regular flex flex-col items-center gap-4 text-xs leading-5 sm:flex-row">
          <h4>&copy; 2023 Cobalt Financial Technologies Inc.</h4>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-7.5">
          <li>
            <a href="#">
              <img src="/icons/x.svg" alt="X" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/linked-in.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-secondary max-w-none space-y-2 text-center text-xs sm:text-sm md:text-start lg:max-w-2/3">
        <p>
          Cobalt is a trademark or registered trademark of Cobalt Financial
          Technologies Inc. Any other trademarks are the property of their
          respective owners. Unless otherwise noted, use of third party logos
          does not imply endorsement of, sponsorship of, or affiliation with
          Cobalt.
        </p>
        <p>
          Cobalt is a financial technology company, not a bank. Banking services
          are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
