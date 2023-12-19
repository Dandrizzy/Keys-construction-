import Spinner from "../../ui/Spinner";
import LineCharts from "./LineCharts";
import PieCharts from "./PieChart";

const DashBoardLayout = ({ faq, isLoading, messages, fetchingMsg }) => {
 if (isLoading || fetchingMsg) return <Spinner />;

 return (
  <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 p-4 ">
   <PieCharts faq={faq} messages={messages} />
   <LineCharts faq={faq} messages={messages} />

  </div>
 );
};

export default DashBoardLayout;