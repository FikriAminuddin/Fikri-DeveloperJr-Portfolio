import React from "react";

const Contact: React.FC<{}> = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] min-h-screen py-10"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">CONTACT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          GET IN TOUCH
        </p>
        <p className="text-gray-300 text-center">
          I&apos;m excited to connect and discuss potential opportunities. Whether
          you have a project in mind, want to collaborate, or just want to say
          hello, feel free to reach out!
          <br />
          <br />
          You can reach me via email at{" "}
          <a
            href="mailto:mdfikriaminuddin@gmail.com"
            className="text-blue-500 hover:underline"
          >
            my-email
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://linkedin.com/in/muhd-fikri-aminuddin"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
