const { join } = require("path");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss(join(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
  ],
};
