import { useEffect, useState } from "react";
import type { TimeLeft } from "../../types/type";

export default function useCountdown({
  endDate,
}: {
  endDate: Date;
}): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const actualDate = new Date();
      const now = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        actualDate.getDate(),
        actualDate.getHours(),
        actualDate.getMinutes(),
        actualDate.getSeconds(),
      );
      const localEndDate = new Date(
        endDate.getUTCFullYear(),
        endDate.getUTCMonth(),
        endDate.getUTCDate(),
        endDate.getUTCHours(),
        endDate.getUTCMinutes(),
        endDate.getUTCSeconds(),
      );
      const diff = localEndDate.getTime() - now.getTime();

      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return timeLeft;
}
