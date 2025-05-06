import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "solidum-green": "#00A859", // Verde Principal (Solidum Finance, Aprax, Fundare)
        "solidum-blue-dark": "#0A2F5C", // Azul Escuro (Solidum Finance, Fundare, SoValuePay)
        "solidum-white": "#FFFFFF",
        "solidum-gray-light": "#F8F9FA",
        "solidum-gray-medium": "#E9ECEF",
        "solidum-black": "#212529",
        "solidum-gray-dark": "#343A40",
        "sovaluepay-green-light": "#79DEA8", // Verde Claro/Menta (SoValuePay)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

