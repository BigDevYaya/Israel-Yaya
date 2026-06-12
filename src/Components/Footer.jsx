import { MessageCircle, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#00000f] px-6 lg:px-10 py-10 text-white flex items-center justify-center gap-14 flex-col">
      <section className="grid-cols-1 lg:grid-cols-4 grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold">ISRAEL YAYA</h1>
        <div>
          <h2 className="uppercase text-lg text-[#EF6D58] font-medium">
            Menu
          </h2>
          <ul className="space-y-2 mt-3">
            <li className="font-medium text-base md:text-lg">
              <a href="#about" onClick={scrollTo("about")}>
                About
              </a>
            </li>
            <li className="font-medium text-base md:text-lg">
              <a href="#services" onClick={scrollTo("services")}>
                Services
              </a>
            </li>
            <li className="font-medium text-base md:text-lg">
              <a href="#testimonials" onClick={scrollTo("testimonials")}>
                Testimonials
              </a>
            </li>
            <li className="font-medium text-base md:text-lg">
              <a href="#contact" onClick={scrollTo("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-lg text-[#EF6D58] font-medium">
            Service
          </h2>
          <ul className="space-y-2 mt-3">
            <li className="font-medium text-base md:text-lg">Frontend Development</li>
            <li className="font-medium text-base md:text-lg">Application Development</li>
            <li className="font-medium text-base md:text-lg">Backend Development</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-lg text-[#EF6D58] font-medium">
            Social
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <a
              href="#"
              aria-label="WhatsApp"
              className="bg-[#EF6D58] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-[#EF6D58] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-[#EF6D58] p-3 rounded-full hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-600 w-full pt-4 text-center font-medium text-gray-500 text-sm md:text-base">
        <p>
          Copyright &copy; {new Date().getFullYear()} Israel Yaya. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
