import * as React from 'react';
import AboutLayout from 'base/Layouts/AboutLayout';
import Image from 'next/image';
import { Title } from 'components/index';

const overview = () => {
  return (
    <>
      <Title text={"Company's Overview"} />
      <div className="flex h-full flex-col gap-12 p-4 lg:flex-row lg:p-12">
        <div className="flex-1">
          <p className="max-w-screen-md leading-7 tracking-wider">
            <em className="text-lg font-semibold">
              Philippine Equity Partners, Inc. (PEP)
            </em>{' '}
            was incorporated to take over the Philippine stockbroking business
            of BofA Securities. It commenced commercial operations on October 2,
            2001. PEP, with broker ID 338, is an institutional broker that deals
            with domestic and foreign institutional investors. PEP is engaged in
            trade execution and co-branded research for BofA Securities. PEP is
            a member of the Philippine Stock Exchange (PSE) and has consistently
            ranked among the largest in turnover among independent and
            locally-owned brokerage houses.
          </p>
        </div>
        <div className="relative h-full max-h-[75%] min-h-[50%] w-full flex-1 rounded-lg">
          <Image
            src="https://source.unsplash.com/random?finance"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            width={1920}
            height={1080}
            alt="PEP Brokerage"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default overview;

overview.getLayout = (page) => <AboutLayout>{page}</AboutLayout>;
