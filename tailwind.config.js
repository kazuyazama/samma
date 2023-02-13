/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-sp': "url('/images/IMG_8007.jpg')",
        'hero-pattern': "url('/images/IMG_8007.jpg')",
      },
      animation: {
        "slide-right":
          "slide-right 0.3s cubic-bezier(0.550, 0.055, 0.675, 0.190)   forwards",
      },
      keyframes: {
        "slide-right": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
  ],
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
          primary: "#57c8ff",
          //薄水色
          secondary: "#e8f6ff",
          //オレンジ
          accent: "#FFA500",
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
