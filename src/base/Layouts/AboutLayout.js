import * as React from 'react';
import { Navigation } from 'components/index';

const AboutLayout = ({ children }) => {
  return (
    <>
      <main className="flex h-full flex-col md:flex-row">
        <Navigation />
        <section className="relative h-full w-full overflow-hidden">
          {children}
        </section>
      </main>
    </>
  );
};
export default AboutLayout;
