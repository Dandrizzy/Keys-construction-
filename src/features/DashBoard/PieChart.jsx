import { Pie, ResponsiveContainer, PieChart, Cell, Tooltip, Legend, CartesianGrid, BarChart, XAxis, YAxis, Bar, } from "recharts";
import styled from "styled-components";
import { useFaq } from "../Faq/useFaq";
import { useMsg } from "../Admin/useMsg";


const ChartBox = styled.div`
  /* Box */
  background-color: #fff;
  border: 1px solid #1f2937;
  border-radius: 7px;
  
 
  padding: 1rem;
  /* grid-column: 3 / span 2; */

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;


const PieCharts = () => {
  const { faqLength } = useFaq();
  const { length } = useMsg();


  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data = [
    { name: 'FAQs', value: faqLength },
    { name: 'MESSAGES', value: length },
    { name: 'PROJECTS', value: 3 },
    { name: 'SERVICES', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




  return (
    <ChartBox >

      <ResponsiveContainer width='100%' height={300} >
        <PieChart >
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            isAnimationActive={true}
            label={renderCustomizedLabel}
            animationBegin={200}
            animationDuration={1500}
            outerRadius={130}
            fill="#8884d8"
            dataKey='value'
          >
            {data.map((entry, index) => (<Cell key={entry.name} fill={COLORS[index % COLORS.length]} />))}

          </Pie>
          <Tooltip />
          <Legend layout="horizontal" iconType="circle" />
        </PieChart>

      </ResponsiveContainer>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart width={730} height={250} data={data}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value"
            fill="#8884d8"
          />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default PieCharts;