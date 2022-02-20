module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular"],
      display: ["Raleway"],
      body: ['"Open Sans"'],
    },
    extend: {
      animation: {
        float: "float 3s linear infinite",
        zoomy: "3s linear 100ms infinite alternate zoomy",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-1.5%)" },
        },
        zoomy: {
          "0%": {
            transform: "scale(1)",
          },
          "33.33%": {
            transform: "scale(1.01)",
          },
          "66.66%": {
            transform: "scale(1.02)",
          },
          "100%": {
            transform: "scale(1.03)",
          },
        },
      },
    },
  },
  plugins: [],
};
