/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   dark: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=night]"],
      //     primary: "#00A3F4",
      //     secondary: "#F4FCFF",
      //     accent: "#FFB100",
      //     neutral:"#ffffff",
      //     "base-100": "#2A303C",
      //   },
      // },
      {
        mytheme: {
          //紫
          primary: "#dec0f1",
          //薄紫
          secondary: "#f6edfb",
          //黄緑
          accent: "#d3f1c0",
          //若干グレーっぽい黒
          neutral: "#374151",
          //しろ
          "base-100": "#ffffff",
        },
      },
      "night",
    ],
  },
};
