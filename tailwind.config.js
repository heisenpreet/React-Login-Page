module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popover: {
          "0%": { transform: " translateY(-2rem)", opacity: " 0%" },
          "50%": { transform: "translateY(-1rem)", opacity: "50%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
      },
      animation: {
        wiggle: "popover 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
