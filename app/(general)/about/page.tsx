import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Title",
  keywords: ["About Page", "Fernando", "information", "..."],
};

const AboutPage = () => {
  return <span className="text-5xl pt-24">About Page</span>;
};

export default AboutPage;
