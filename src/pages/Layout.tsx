import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-14 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
