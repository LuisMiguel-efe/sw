'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { skills } from '@/lib/data';

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline">
          Technical Skills
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4 text-center">
          A visualization of my key technical abilities and their proficiency levels.
        </p>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Skills Proficiency</CardTitle>
            <CardDescription>Measured on a scale from 0 to 100</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skills} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                    width={150}
                  />
                  <ChartTooltip
                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.1 }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="proficiency" fill="var(--color-proficiency)" radius={5}>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
