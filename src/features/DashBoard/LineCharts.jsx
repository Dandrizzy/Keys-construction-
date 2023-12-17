import { ResponsiveContainer, LineChart, Cell, Tooltip, Legend, CartesianGrid, XAxis, YAxis, Line, RadialBarChart, RadialBar, } from "recharts";
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


const LineCharts = () => {
  const { faqLength } = useFaq();
  const { length } = useMsg();
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
        <LineChart data={data} >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line

            cx='50%'
            cy='50%'
            isAnimationActive={true}

            animationBegin={200}
            animationDuration={1500}
            type="monotone"
            stroke="#8884d8"
            dataKey='value'
          >
            {data.map((entry, index) => (<Cell key={entry.name} fill={COLORS[index % COLORS.length]} />))}

          </Line>
          <Tooltip />
          <Legend layout="horizontal" iconType="circle" />
        </LineChart>

      </ResponsiveContainer>
      <ResponsiveContainer width='100%' height={300}>
        <RadialBarChart
          innerRadius='10%'
          outerRadius='80%'
          data={data}
          startAngle={0}
          endAngle={360}
        >
          <RadialBar minAngle={15} fill='#8884d8' label={{ fill: '#fff', position: 'insideStart' }} background clockWise={true} dataKey='value' />
          <Legend iconSize={10} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default LineCharts;