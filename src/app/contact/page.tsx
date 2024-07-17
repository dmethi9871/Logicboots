import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Leading-edge AI powered technology! LogicBoots",
  description: "This is Contact Page of LogicBoots",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with Logicboots! Reach out to us for any inquiries, support, or feedback. We're here to help you with all your home automation needs."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
