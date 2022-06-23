import * as React from 'react';

const Title = ({ text }) => {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-700">
      <h2 className="p-4 text-xl font-semibold text-stone-50 md:text-3xl">
        Our {text}
      </h2>
    </div>
  );
};
export default Title;
