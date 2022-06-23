import * as React from 'react';
import Link from 'next/link';
import { ABOUT_NAVIGATION_ITEMS } from 'lib/constants/index';

const Navigation = () => {
  return (
    <nav className="w-full bg-stone-800 py-6 text-stone-50 md:h-full md:max-w-fit md:px-6">
      <ul className="mx-auto flex max-w-screen-sm justify-evenly text-sm md:flex-col md:space-y-6">
        {ABOUT_NAVIGATION_ITEMS.map(({ name, href }) => (
          <li key={href} className="">
            <Link href={href} passHref>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
