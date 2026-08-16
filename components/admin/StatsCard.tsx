import React from "react";
import { Card, CardHeader } from "../ui/card";

type StatsCardsProps = {
  title: string;
  value: number;
};
function StatsCard({ title, value }: StatsCardsProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="capitalize text-3xl font-semibold">{title}</h3>
        <span className="text-4xl font-bold text-primary">{value}</span>
      </CardHeader>
    </Card>
  );
}

export default StatsCard;
