import { LineChart as Lchart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const Mathdata = [
    { subject: "Test 1", math: 88, english: 76, science: 92, history: 81 },
    { subject: "Test 2", math: 74, english: 82, science: 85, history: 78 },
    { subject: "Test 3", math: 91, english: 79, science: 89, history: 88 },
    { subject: "Test 4", math: 67, english: 85, science: 90, history: 75 },
    { subject: "Test 5", math: 82, english: 80, science: 86, history: 83 },
  ];
  return (
    <div>
      <Lchart width={500} height={400} data={Mathdata}>
        <XAxis dataKey="subject"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="#133E87"></Line>
        <Line dataKey="science" stroke="#982B1C"></Line>
        <Line dataKey="english" stroke="#4793AF"></Line>
        <Line dataKey="history" stroke="#605678"></Line>
      </Lchart>
    </div>
  );
};

export default LineChart;
