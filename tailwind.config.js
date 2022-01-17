module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Raleway"],
      body: ['"Open Sans"'],
    },
    extend: {
      animation: {
        float: "float 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-1.5%)" },
        },
      },
    },
  },
  plugins: [],
};
