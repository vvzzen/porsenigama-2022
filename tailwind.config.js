
const Host = require("./config/Host");

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biru: "#1E234C",
        krem: "#FBE5D2",
        merah: "#E62434",
        kuning: "#F8BF0D",
        oren: "#F16224",
        abu: "#5D568C",
        birdong : "#1E234C",
      },
      fontFamily: {
        nuku: ["Nuku Nuku", "sans-serif"],
        sansPro: ["Source Sans Pro", "sans-serif"],
      },
      fontSize: {
        oneten: [
          "104px",
          {
            lineHeight: "104px",
          },
        ],
        twoeight: ["28px"],
        threetwo: [
          "32px",
          {
            lineHeight: "32px",
          },
        ],
        fortyfour: [
          "44px",
          {
            lineHeight: "44px",
          },
        ],
        forty: [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
        fiftysix: [
          "56px",
          {
            lineHeight: "56px",
          },
        ],
        sixty: [
          "60px",
          {
            lineHeight: "70px",
          },
        ],
        sixtyfour: [
          "64px",
          {
            lineHeight: "64px",
          },
        ],
        sixtyeit: [
          "68px",
          {
            lineHeight: "68px",
          },
        ],
        onefourfour: [
          "144px",
          {
            lineHeight: "144px",
          },
        ],
        onetwenty: [
          "120px",
          {
            lineHeight: "120px",
          },
        ],
        xxs: [
          "0.5rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      width: {
        "45c": "45%",
        box: "13rem",
        porciText: "102.542373px",
        porciPlay: "58.4745762px",
        porciTextMd: "22.787194%",
        porciPlayMd: "12.994350267%",
        porciTextXl: "34.180791%",
        porciPlayXl: "19.4915254%",
        "30c": "30%",
      },
      boxShadow: {
        csel1: "20px 20px 16px -5px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "10xl": "5rem",
        "20xl": "10rem",
      },
      scale: {
        0: "0",
        35: ".35",
        40: ".4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
