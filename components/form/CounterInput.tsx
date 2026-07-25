"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";

import { Button } from "../ui/button";
import { useState } from "react";

function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <Card className="mb-4">
      <input
        type="hidden"
        name={detail}
        value={count}
      />
      <CardHeader className="flex flex-col ">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h2 className="capitalize font-medium">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={decreaseCount}
              className="cursor-pointer"
            >
              <LuMinus className="w-5 h-5 text-primary" />
            </Button>
            <span
              className={`text-xl font-bold w-5 text-center ${count == 0 ? "text-gray-400" : ""}`}
            >
              {count}
            </span>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={increaseCount}
              className="cursor-pointer"
            >
              <LuPlus className="w-5 h-5 text-primary" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CounterInput;
