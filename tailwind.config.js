/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(89, 89, 97, 0.3)",
        "custom-blue-gray": "rgba(131, 138, 167, 0.24)",
        "errie-black": "#252525",
        "risd-blue": "#5b5af7",
        "cadet-gray": "#919eab",
        jet: "#2c2c2c",
        skyBlue: "#60AEF0",
      },

      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
        typing: {
          "0%": { width: "0%", content: '""' },
          "5%": { width: "25%", content: '"C"' },
          "15%": { width: "50%", content: '"Co"' },
          "25%": { width: "75%", content: '"Cod"' },
          "35%": { width: "100%", content: '"Code"' },
          "45%": { width: "100%", content: '"Code "' },
          "55%": { width: "100%", content: '"Code C"' },
          "65%": { width: "100%", content: '"Code Cr"' },
          "75%": { width: "100%", content: '"Code Cre"' },
          "85%": { width: "100%", content: '"Code Crea"' },
          "95%": { width: "100%", content: '"Code Creat"' },
          "100%": { width: "100%", content: '"Code Create"' },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        upDown: "upDown 3s ease-in-out infinite",

        typing: "typing 9s linear infinite",
        blink: "blink 1s linear infinite",
      },

      fontFamily: {
        "source-sans": ["Source Sans 3", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        "grad-theme-135":
          "linear-gradient(135deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)",
      },
      boxShadow: {
        navbar:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
      screens: {
        xxs: "320px", // extra extra small screen
        s: "580px", // Aim Mission Aur Vission ke liy
        xs: "480px", // Extra small screens
        "3xl": "1920px", // Extra large screens
      },

      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
};
