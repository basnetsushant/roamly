"use client";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return <Skeleton className="h-75 w-full md:h-125 rounded" />;
}

export default loading;
