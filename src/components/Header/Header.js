import * as React from 'react';
import Link from 'next/link';
import { MAIN_NAVIGATION_ITEMS } from 'lib/constants/index';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  return (
    <header className="bg-stone-50 shadow-sm shadow-indigo-900">
      <nav className="container relative flex items-center justify-between py-6">
        <Link href="/" passHref>
          <a className="rounded after:m-auto after:block after:w-0 after:border-b-2 after:transition-all after:duration-500 hover:after:w-full hover:after:border-b-indigo-700 focus:outline-1 focus:outline-indigo-700">
            <h1 className="flex items-center divide-x-4 divide-indigo-700 p-1 text-3xl font-bold">
              <span className="pr-2 text-stone-700">PEP</span>
              <p className="relative hidden pl-2 text-xl font-thin lg:text-2xl sm-custom:block">
                Philippine Equity Partners, Inc.
              </p>
            </h1>
          </a>
        </Link>
        <button
          className="outline-offset-4 focus:outline-indigo-700 lg:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-grid"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
        <ul className="hidden items-center lg:flex">
          {MAIN_NAVIGATION_ITEMS.map(({ name, href }, index) => (
            <li key={index} className="ml-6 font-semibold">
              <Link href={href} passHref>
                {name === 'Login' ? (
                  <a className="rounded border-2 border-indigo-700 px-4 py-2 text-indigo-700 transition-all duration-500 ease-in-out hover:bg-indigo-700 hover:text-white focus:bg-indigo-700 focus:text-white">
                    {name}
                  </a>
                ) : (
                  <a className="text-indigo-700 transition-all duration-500 ease-in-out before:m-auto before:block before:w-0 before:border-b-2 before:transition-all before:duration-500 hover:text-indigo-400 hover:before:w-1/4 hover:before:border-b-indigo-700 focus:text-indigo-400">
                    {name}
                  </a>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`z-10 ${
          mobileNavOpen ? 'flex' : 'hidden'
        } fixed inset-0 h-screen w-full bg-stone-900/40 p-4`}
      >
        <div className="h-full w-full rounded bg-white p-4">
          <ul className="relative flex h-full w-full flex-col space-y-8 rounded border-4 px-20 py-20">
            <button
              className="absolute top-6 right-6 text-stone-700"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {MAIN_NAVIGATION_ITEMS.map(({ name, href }, index) => (
              <li key={index} className="font-semibold">
                <Link href={href} passHref>
                  {name === 'Login' ? (
                    <a className="rounded bg-indigo-700 px-4 py-2 text-white">
                      {name}
                    </a>
                  ) : (
                    <a className="text-indigo-700">{name}</a>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
