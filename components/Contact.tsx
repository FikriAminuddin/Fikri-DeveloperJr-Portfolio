import React from "react";

const Contact: React.FC<{}> = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-10 min-h-screen py-10"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-center items-center max-w-[90vw] px-4">
        <h1 className="text-white font-semibold text-4xl md:text-6xl text-center mb-6">CONTACT ME</h1>
        <p className="tracking-wide text-transparent font-light pb-3 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-base md:text-xl text-center">
          GET IN TOUCH
        </p>
        <p className="text-gray-300 text-center leading-relaxed md:leading-normal">
          I&apos;m excited to connect and discuss potential opportunities. Whether
          you have a project in mind, want to collaborate, or just want to say
          hello, feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center mt-6">
          <a
            href="mailto:mdfikriaminuddin@gmail.com"
            className="text-blue-500 hover:underline mr-4 mb-2"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/muhd-fikri-aminuddin"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
