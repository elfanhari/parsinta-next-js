// /** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    // "./app/**/*.{js,ts,jsx,tsx}", // Jika menggunakan App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Jika menggunakan Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container: {
      //   center: true, // Memastikan container berada di tengah
      //   padding: "1rem", // Memberikan padding default
      // },
    },
  },
  plugins: [],
};
