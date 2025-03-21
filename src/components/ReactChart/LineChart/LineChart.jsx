import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
  const lineChart = [
    {
      id: 1,
      name: "Alice",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 82,
    },
    {
      id: 2,
      name: "Bob",
      math_marks: 78,
      physics_marks: 72,
      chemistry_marks: 75,
    },
    {
      id: 3,
      name: "Charlie",
      math_marks: 92,
      physics_marks: 88,
      chemistry_marks: 90,
    },
    {
      id: 4,
      name: "David",
      math_marks: 74,
      physics_marks: 70,
      chemistry_marks: 72,
    },
    {
      id: 5,
      name: "Emma",
      math_marks: 88,
      physics_marks: 82,
      chemistry_marks: 85,
    },
    {
      id: 6,
      name: "Frank",
      math_marks: 67,
      physics_marks: 65,
      chemistry_marks: 68,
    },
    {
      id: 7,
      name: "Grace",
      math_marks: 95,
      physics_marks: 90,
      chemistry_marks: 92,
    },
    {
      id: 8,
      name: "Hannah",
      math_marks: 80,
      physics_marks: 76,
      chemistry_marks: 78,
    },
    {
      id: 9,
      name: "Ian",
      math_marks: 70,
      physics_marks: 68,
      chemistry_marks: 72,
    },
    {
      id: 10,
      name: "Jack",
      math_marks: 90,
      physics_marks: 85,
      chemistry_marks: 88,
    },
  ];

  return (
    <div>
      <LChart width={400} height={400} data={lineChart}>
        <Line dataKey="math_marks" type="step"></Line>
        <Line dataKey="physics_marks" type="linear" stroke="red"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
