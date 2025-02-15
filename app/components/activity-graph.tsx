"use client"

import { useState } from "react"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Area } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, TrendingUp, TrendingDown } from "lucide-react"

const data = [
  { day: "Mon", value: 2.5 },
  { day: "Tue", value: 3.8 },
  { day: "Wed", value: 2.9 },
  { day: "Thu", value: 4.2 },
  { day: "Fri", value: 3.5 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg shadow-lg p-3">
        <p className="font-semibold">{label}</p>
        <p className="text-primary">{`${payload[0].value} hours`}</p>
      </div>
    )
  }
  return null
}

export function ActivityGraph() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const totalHours = data.reduce((sum, item) => sum + item.value, 0)
  const averageHours = totalHours / data.length
  const todayHours = data[data.length - 1].value
  const trend = todayHours > averageHours ? "up" : "down"

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-primary" />
          <div>
            <CardTitle className="text-base font-semibold">Activity</CardTitle>
            <p className="text-sm text-muted-foreground">
              {hoveredValue ? `${hoveredValue} Hours` : `${todayHours} Hours Today`}
            </p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          <span className="text-sm font-medium">{trend === "up" ? "Above" : "Below"} Average</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.activePayload) {
                  setHoveredValue(e.activePayload[0].value)
                }
              }}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}h`}
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "hsl(var(--background))",
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "hsl(var(--primary))",
                  stroke: "hsl(var(--background))",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

