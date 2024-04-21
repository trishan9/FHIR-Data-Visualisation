import EncounterPieChart from "./D3Charts/EncounterPieChart";

const ChartEight: React.FC = ({ isLoading }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-3">
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

      <div className="mx-8 mt-12 flex justify-center gap-x-12 gap-y-3">
        <div className="flex items-center">
          <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#f28e2c]"></span>
          <p className="text-sm font-medium text-black dark:text-white">
            Outpatient
          </p>
        </div>

        <div className="flex items-center">
          <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#4e79a7]"></span>
          <p className="text-sm font-medium text-black dark:text-white">
            Inpatient
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartEight;
