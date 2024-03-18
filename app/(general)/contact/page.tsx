import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page for your development",
  creator: "Cristian and nextjs",
};

const ContactPage = () => {
  return <span className="text-5xl pt-24">ContactPage</span>;
};

export default ContactPage;
