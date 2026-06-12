import { Mail, MapPinCheck, Phone, MessageCircle, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="bg-[#00001a] py-16 lg:py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 bg-white rounded-md p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#391400] mb-8">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full border-2 border-[#F3D1BF] rounded-md px-4 py-3 placeholder:text-[#391400] placeholder:font-light outline-none focus:border-[#EF6D58] transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full border-2 border-[#F3D1BF] rounded-md px-4 py-3 placeholder:text-[#391400] placeholder:font-light outline-none focus:border-[#EF6D58] transition-colors"
            />
            <textarea
              required
              placeholder="Message"
              rows={5}
              className="w-full border-2 border-[#F3D1BF] rounded-md px-4 py-3 placeholder:text-[#391400] placeholder:font-light outline-none focus:border-[#EF6D58] transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-[#EF6D58] px-8 py-3 rounded-md text-white font-medium cursor-pointer hover:opacity-90 transition-opacity"
            >
              Submit now
            </button>
          </form>
        </div>

        <div className="lg:max-w-sm space-y-6">
          <div>
            <h3 className="uppercase text-lg text-[#EF6D58] font-medium">
              Contact
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Contact Me</h2>
            <p className="text-gray-400 mt-3">
              If you would love to hire me or have any more enquiries
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#EF6D58] p-3 rounded-full shrink-0">
                <MapPinCheck className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-sm md:text-base">
                Ajara Tako, Badagry, Lagos State, Nigeria
              </p>
            </div>
            <a
              href="tel:+2347041400350"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="bg-[#EF6D58] p-3 rounded-full shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-sm md:text-base">+2347041400350</p>
            </a>
            <a
              href="mailto:yayaisrael99@gmail.com"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="bg-[#EF6D58] p-3 rounded-full shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-sm md:text-base">israelyaya0@gmail.com</p>
            </a>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Contact;
