import * as React from 'react';
import Image from 'next/image';
import AboutLayout from 'base/Layouts/AboutLayout';
import { Title } from 'components/index';

const officers = () => {
  return (
    <>
      <Title text={'Key Officers'} />
      <section className="relative h-full overflow-y-scroll">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 grid grid-flow-row grid-cols-2 gap-4 p-4 lg:grid-cols-3 lg:p-12 mb-32">
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Emeterio Gonzales III</h3>
              <h4 className="text-xs">President</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Lorenzo Roxas</h3>
              <h4 className="text-xs">Nominee</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">
                Maria Lourdes Arroyo-de Guzman
              </h3>
              <h4 className="text-xs">
                Treasurer/ Chief Operating Officer / Data Protection Officer /
                Branch OPS
              </h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Mark Abada</h3>
              <h4 className="text-xs">Head of Sales</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Jasmine Cariño</h3>
              <h4 className="text-xs">Head of Sales and Trading</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Ronald Hermogenes</h3>
              <h4 className="text-xs">Associated Person/Compliance Officer</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Wyndell Mendoza</h3>
              <h4 className="text-xs">Head of Operations</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Catherine Rose Yleaña</h3>
              <h4 className="text-xs">Head of Finance</h4>
            </div>
            <div className="lg:p-24">
              <Image
                src="/person-placeholder.jpg"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                alt="peron"
              />
              <h3 className="text-sm font-semibold">Anton Tuaño</h3>
              <h4 className="text-xs">Head of Information Technology</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default officers;

officers.getLayout = (page) => <AboutLayout>{page}</AboutLayout>;
