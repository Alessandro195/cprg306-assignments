"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="border p-6 rounded-sm flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">Shopping List App</h1>

        {user ? (
          <>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>

            <Link
              href="/week-8/shopping-list"
              className="border rounded-sm p-2 bg-green-400"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleLogout}
              className="border rounded-sm p-2 bg-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="border rounded-sm p-2 bg-blue-400"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}