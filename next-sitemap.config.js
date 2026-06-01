/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://arcmarshaldzine.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "out",
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  transform: async (config, path) => {
    // Tune priority/freshness per route.
    let priority = 0.7;
    let changefreq = "weekly";
    if (path === "/") {
      priority = 1.0;
    } else if (path.startsWith("/services")) {
      priority = 0.9;
    } else if (path === "/portfolio" || path === "/about") {
      priority = 0.8;
    } else if (path === "/contact" || path === "/quote") {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path === "/privacy-policy") {
      priority = 0.3;
      changefreq = "yearly";
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
