// import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-500">
      <div className="px-10">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/" className="text-white uppercase font-semibold tracking-tight">
              <span>{process.env.appName}</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about" className="text-blue-200 hover:text-white py-5 px-3">
              About
            </Link>
            <Link href="/login" className="text-blue-200 hover:text-white py-5 px-3">
              Login
            </Link>
            <Link href="/register" className="text-blue-200 hover:text-white py-5 px-3">
              Register
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
}
