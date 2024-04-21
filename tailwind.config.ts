import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bests-mobile": "url('/images/bests-backlights-mobile.svg')",
        "bests-desktop": "url('/images/bests-backlights-desktop.svg')",
        layout: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)",
        banner: "url('/images/banner-triangle.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#78350F",
        },
        text: "#0F172A",
      },
      maxWidth: {
        container: "1280px",
      },
      padding: {
        mobileHeader: "67px",
        header: "96px",
      },
      boxShadow: {
        "why-join-us":
          "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
        "best-card": "0px 0px 15px #FFFFFF12, 0px 25px 50px -12px #FFFFFF40",
        "app-window":
          "0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040",
        "review-card":
          "0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A",
        "filled-button":
          "0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A",
      },
    },
  },
  plugins: [],
};
export default config;
