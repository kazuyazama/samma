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
          //水色
          primary: "#00A3F4",
          //薄い水色
          secondary: "#F4FCFF",
          //オレンジ
          accent: "#FFB100",
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
