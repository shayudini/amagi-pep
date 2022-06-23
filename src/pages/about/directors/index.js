import * as React from 'react';
import Image from 'next/image';
import AboutLayout from 'base/Layouts/AboutLayout';
import { Title } from 'components/index';

const directors = () => {
  return (
    <>
      <Title text={'Board of Directors'} />
      <section className="grid h-full w-full grid-cols-2 place-items-center gap-4 p-4 lg:grid-cols-4 lg:p-12">
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Joseph Madrid</h3>
          <h4 className="text-xs">Chairman of the Board</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Emeterio Gonzales III</h3>
          <h4 className="text-xs">President</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Lorenzo Roxas</h3>
          <h4 className="text-xs">Nominee</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Rene Ongpin</h3>
          <h4 className="text-xs">Director</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Joseph Hignon</h3>
          <h4 className="text-xs">Independent Director</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Eduardo Saguil</h3>
          <h4 className="text-xs">Independent Director</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Pancho Umali</h3>
          <h4 className="text-xs">Corporate Secretary</h4>
        </div>
        <div>
          <Image
            src="/person-placeholder.jpg"
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            alt="peron"
          />
          <h3 className="text-sm font-semibold">Jennifer Marie Castro</h3>
          <h4 className="text-xs">Assist. Corp. Secretary</h4>
        </div>
      </section>
    </>
  );
};

export default directors;

directors.getLayout = (page) => <AboutLayout>{page}</AboutLayout>;
