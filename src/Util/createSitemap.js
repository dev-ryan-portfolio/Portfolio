require("@babel/register");

const router = require("./RouteModel.js").default;
const Sitemap = require("react-router-sitemap").default;

(
    new Sitemap(router)
        .build('https://portfolio.devryan.io')
        .save('../../public/sitemap.xml')
);