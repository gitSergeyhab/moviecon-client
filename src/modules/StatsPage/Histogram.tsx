import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import { HistogramData } from "./types";

export interface HistogramProps {
  data: HistogramData[];
  userRecord: number;
}

export const Histogram: FC<HistogramProps> = ({ data, userRecord }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          payload={[
            {
              value: "результаты всех игроков",
              type: "square",
              color: "#636363",
            },
            {
              value: `ваш рекорд (${userRecord}) `,
              type: "square",
              color: "#ff7300",
            },
          ]}
        />
        <Bar dataKey="count">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.isUser ? "#ff7300" : "#636363"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
