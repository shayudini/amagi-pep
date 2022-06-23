import * as React from 'react';
import Image from 'next/image';
import AboutLayout from 'base/Layouts/AboutLayout';
import { Title } from 'components/index';
import { DIRECTORS } from 'lib/constants/index';

const directors = () => {
  return (
    <>
      <Title text={'Board of Directors'} />
    </>
  );
};

export default directors;

directors.getLayout = (page) => <AboutLayout>{page}</AboutLayout>;
