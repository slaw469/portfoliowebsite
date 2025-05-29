"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This would be where you'd implement Plausible or another analytics solution
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
    // Example: analytics.trackPageView(url)
    console.log(`Page view: ${url}`);
  }, [pathname, searchParams]);

  return null;
}