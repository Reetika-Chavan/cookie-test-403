"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cookies, setCookies] = useState<string>("");

  useEffect(() => {
    // Set multiple cookies to simulate third-party cookie behavior
    const timestamp = Date.now();

    // Set various cookies with different attributes
    document.cookie = `session_id=${timestamp}; path=/; max-age=3600`;
    document.cookie = `user_token=test_token_${timestamp}; path=/; max-age=3600`;
    document.cookie = `third_party_cookie=3p_${timestamp}; path=/; max-age=3600; SameSite=None; Secure`;
    document.cookie = `tracking_id=track_${timestamp}; path=/; max-age=3600`;
    document.cookie = `auth_token=auth_${timestamp}; path=/; max-age=3600`;

    // Display all cookies
    setCookies(document.cookie);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center px-8 max-w-2xl">
        <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
          Testing Project for Cookies Forbidden
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
