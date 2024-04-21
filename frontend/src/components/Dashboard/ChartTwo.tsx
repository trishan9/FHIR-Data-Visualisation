import MedicationChart from "./D3Charts/MedicationChart";

const ChartTwo: React.FC = ({ setPopularMedication }: any) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-9">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Top 10 Commonly Prescribed Medications
          </h5>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div id="chartOne" className="-ml-5">
          <MedicationChart setPopularMedication={setPopularMedication} />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
