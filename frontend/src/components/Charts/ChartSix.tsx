import TreeMap from "./TreeMap";

const ChartSix: React.FC = ({ isLoading }: any) => {
  return (
    <div className="col-span-12 items-center justify-center rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Top 10 Prevalent Conditions
          </h5>
        </div>
      </div>
      <div className="mt-8 flex w-full items-center justify-center overflow-x-auto">
        <div
          id="chartOne"
          className="ml-5 flex w-full items-center justify-center"
        >
          {!isLoading && <TreeMap />}
        </div>
      </div>
    </div>
  );
};

export default ChartSix;
