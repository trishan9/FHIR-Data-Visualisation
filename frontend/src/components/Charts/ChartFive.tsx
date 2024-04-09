import EncounterPieChart from "./EncounterPieChart";

const ChartFive: React.FC = ({ isLoading }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-7">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Types of Visits
          </h5>
        </div>
      </div>

      <div className="mb-2 mt-8">
        <div id="chartThree" className="mx-auto flex justify-center">
          {!isLoading && <EncounterPieChart />}
        </div>
      </div>

      <div className="mx-8 mt-12 flex items-center justify-center gap-y-3">
        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#4e79a7]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Inpatient </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#f28e2c]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Outpatient </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#e15759]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Emergency </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#76b7b2]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Virtual </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartFive;
