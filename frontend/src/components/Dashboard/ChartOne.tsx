import Donut from "./D3Charts/Donut";

const ChartOne: React.FC = ({ data, isLoading }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-3">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Gender Distribution (Patients)
          </h5>
        </div>
      </div>

      <div className="mb-2 mt-8">
        <div id="chartThree" className="mx-auto flex justify-center">
          {!isLoading && (
            <Donut
              data={data}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          )}
        </div>
      </div>

      <div className="mx-8 mt-12 flex items-center justify-center gap-y-3">
        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-[#FFC0CB]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Female </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-6 max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Male </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
