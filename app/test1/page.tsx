"use client";

import { useEffect, useState } from "react";

export default function Test1() {
  const [cookies, setCookies] = useState<string>("");

  useEffect(() => {
    // Set invoca session cookie
    document.cookie = `invoca_session=%7B%22ttl%22%3A%222025-12-01T15%3A58%3A40.163Z%22%2C%22session%22%3A%7B%22invoca_id%22%3A%22i-2c74663c-fb00-44f0-db2d-8668a632ff21%22%7D%2C%22config%22%3A%7B%22ce%22%3Atrue%2C%22fv%22%3Afalse%2C%22rn%22%3Afalse%7D%7D; path=/; max-age=3600`;

    // Display all cookies
    setCookies(document.cookie);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center px-8 max-w-2xl">
        <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
          Test Page 1
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Simple test page for cookie testing
        </p>
        <div className="mt-8 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 w-full">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            Cookies Set:
          </h2>
          <div className="text-sm text-left text-zinc-700 dark:text-zinc-300 break-all">
            {cookies || "No cookies found"}
          </div>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Refresh the page to test if cookies cause 403 error
        </p>
      </main>
    </div>
  );
}
