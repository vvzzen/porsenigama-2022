const Host = require("./config/Host");

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        sec2: `url(${Host}/images/Sec2/bg.png)`,
      },
      colors: {
        biru: "#1E234C",
        krem: "#FBE5D2",
        merah: "#E62434",
        kuning: "#F8BF0D",
        oren: "#F16224",
        abu: "#5D568C",
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
        threetwo: [
          "32px",
          {
            lineHeight: "32px",
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
      },
      width: {
        "45c": "45%",
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
