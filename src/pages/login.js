import * as React from 'react';

const login = () => {
  return (
    <>
      <section className="relative -z-10 h-full">
        <div className="relative flex h-full items-center justify-center bg-white">
          <div className="absolute left-0 hidden p-20 lg:block">
            <h2 className="-rotate-90 text-9xl font-bold text-stone-900/20">
              Login
            </h2>
          </div>
          <div className="mt-4 h-full bg-white px-8 py-6 text-left text-stone-700 md:h-auto">
            <h3 className="text-center text-2xl font-bold">
              Login to your account
            </h3>
            <form action="">
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <button className="mt-4 rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-900">
                    Login
                  </button>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default login;
