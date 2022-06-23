import * as React from 'react';
import AboutLayout from 'base/Layouts/AboutLayout';

const about = () => {
  return (
    <>
      <h2>About PEP</h2>
    </>
  );
};

export default about;

about.getLayout = (page) => <AboutLayout>{page}</AboutLayout>;
