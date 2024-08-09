'use client'
import CountUp from 'react-countup';

const CounterSection = () => {
  return (
    <section className="w-full  py-8 flex flex-col items-center animate-fadeIn">
      <h2 className='text-center lg:text-2xl text-slate-800 xs:text-xl mb-3 font-semibold'>Our Scorecard</h2>
      <div className="w-full flex items-center justify-between">
        {/* Listings Counter */}
        <div className="w-full px-4 mb-4">
          <div className="text-center">
            <div className="xl:text-4xl text-2xl font-bold text-red-500">
              <CountUp end={50} duration={2} separator="," />
              <span className="xl:text-xl text-lg text-red-500">+</span>
            </div>
            <div className="xl:text-sm text-xs font-medium ">Projects</div>
          </div>
        </div>
        {/* Happy Customers Counter */}
        <div className="w-full  px-4 mb-4">
          <div className="text-center">
            <div className="xl:text-4xl text-2xl font-bold text-red-500">
              <CountUp end={50} duration={2} separator="," />
              <span className="xl:text-xl text-lg text-red-500">+</span>
            </div>
            <div className="xl:text-sm text-xs font-medium ">Happy Customers</div>
          </div>
        </div>
        {/* Years of Experience Counter */}
        <div className="w-full  px-4 mb-4">
          <div className="text-center">
            <div className="xl:text-4xl text-2xl font-bold text-red-500">
              <CountUp end={13} duration={2} separator="," />
              <span className="xl:text-xl text-lg text-red-500">+</span>
            </div>
            <div className="xl:text-sm text-xs font-medium">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
