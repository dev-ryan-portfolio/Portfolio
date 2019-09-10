require("@babel/register");

const router = require("./RouteModel.js").default;
const Sitemap = require("react-router-sitemap").default;

(
    new Sitemap(router)
        .build('https://ryancallahan312.github.io/Portfolio')
        .save('../../public/sitemap.xml')
);