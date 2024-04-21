import RaceBarChart from "./D3Charts/RaceBarChart";

const ChartThree: React.FC = ({ isLoading, raceData }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Race Distribution (Patients)
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div id="chartTwo" className="ml-8 mr-6">
          {!isLoading && <RaceBarChart data={raceData} />}
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
