import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SurveyScoreChart from "./D3Charts/SurveyScoreChart";

const ChartFive: React.FC = () => {
  const [meanOrMedian, setMeanOrMedian] = useState<any>("mean");

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Average Survey Score
          </h4>
        </div>

        <ToggleGroup
          type="single"
          defaultValue="mean"
          onValueChange={(value) => setMeanOrMedian(value)}
        >
          <ToggleGroupItem value="mean" aria-label="Toggle mean">
            Mean
          </ToggleGroupItem>

          <ToggleGroupItem value="median" aria-label="Toggle median">
            Median
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="overflow-x-auto">
        <div id="chartTwo" className="-ml-5">
          <SurveyScoreChart
            //@ts-ignore
            meanOrMedian={meanOrMedian}
            setMeanOrMedian={setMeanOrMedian}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFive;
