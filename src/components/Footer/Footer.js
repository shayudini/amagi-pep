import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 text-center text-xs shadow shadow-indigo-900 sm:text-base md:p-4">
      <p className="text-indigo-900">
        © Copyright {year},{' '}
        <Link href="https://www.pep.com.ph/about" passHref>
          <a>Philippine Equity Partners (PEP)</a>
        </Link>
      </p>
    </footer>
  );
};
export default Footer;
