"use client";

import { useEffect, useState } from "react";

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

const getGreeting = (date: Date) => {
  const hour = date.getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export default function HelloClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur">
      <p className="text-sm uppercase tracking-wide text-white/80">Live Greeting</p>
      <p className="mt-2 text-2xl font-semibold text-white">{getGreeting(now)}!</p>
      <p className="text-lg text-white/80">{formatTime(now)}</p>
    </div>
  );
}
