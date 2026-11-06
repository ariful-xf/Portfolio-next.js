"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "sonner";

const Footer = () => {
  const formRef = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (
      !process.env.NEXT_PUBLIC_SERVICE_KEY ||
      !process.env.NEXT_PUBLIC_TEMPLATE_KEY ||
      !formRef.current ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
      return toast.error("ENV variables are not provided");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Email sent! I’ll get back to you shortly.");
        },
        () => {
          toast.error(
            "Failed to send Email. Maybe daily mail sending limit reached!",
          );
        },
      );
  };
  const time = new Date().toDateString();

  return (
    <section id="contact" className="py-[30px] md:pt-[50px] lg:pt-[90px]">
      <h1 className="rounded-full py-1 px-5 border w-max h-max text-sm flex items-center gap-3 border-gray-600">
        <MdOutlineEmail />
        Contact me
      </h1>
      <div className="mt-8 mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-7">
          Let&apos;s Work <span className="text-[#28e98c]">Together!</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light">
          arifulxf@gmail.com
        </p>
      </div>
      <div className="flex mb-8 flex-col items-center  p-8 border rounded-xl border-gray-500">
        <div className="bg-[#1f1f1f] w-full shrink-0 ">
          <form onSubmit={sendEmail} className="w-full" ref={formRef}>
            <input type="text" readOnly hidden name="time" value={time} id="" />
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full">
                  <label className="uppercase w-full text-[12px]">
                    Full Name
                  </label>
                  <input
                    placeholder="Your Full Name"
                    className="bg-[#1f1f1f] py-1 mt-1 w-full outline-none border-b-2 border-[#28e98c]/0 focus:border-[#28e98c]/80 transition-all duration-300"
                    required
                    autoComplete="name"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="uppercase text-[12px] w-full"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Email Address"
                    className="bg-[#1f1f1f] py-1 mt-1 w-full outline-none border-b-2 border-[#28e98c]/0 focus:border-[#28e98c]/80 transition-all duration-300"
                    required
                    autoComplete="email"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className=" w-full">
                  <label
                    htmlFor="title"
                    className="uppercase text-[12px] w-full"
                  >
                    Subject
                  </label>
                  <input
                    required
                    placeholder="Subject"
                    className="bg-[#1f1f1f] mt-1 py-1 w-full outline-none border-b-2 border-[#28e98c]/0 focus:border-[#28e98c]/80 transition-all duration-300"
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="number"
                    className="w-full uppercase text-[12px]"
                  >
                    phone (optional)
                  </label>
                  <input
                    placeholder="Your Number"
                    className="bg-[#1f1f1f] py-1 mt-1 w-full outline-none border-b-2 border-[#28e98c]/0 focus:border-[#28e98c]/80 transition-all duration-300"
                    type="text"
                    name="number"
                    id="number"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="w-full uppercase text-[12px]"
                >
                  Message
                </label>
                <textarea
                  required
                  placeholder="Write Your Message Here ..."
                  className="bg-[#1f1f1f] py-1 mt-1 w-full outline-none border-b-2 border-[#28e98c]/0 focus:border-[#28e98c]/80 transition-all duration-300"
                  name="message"
                  id="message"
                />
              </div>
            </div>
            <div className="mt-6 max-w-max mx-auto">
              <button
                className="btn mx-auto font-normal text-base mt-4 px-14 py-3 text-black uppercase rounded-3xl border-2 bg-[#28e98c] border-green-500 hover:border-green-500 hover:bg-[#1f1f1f] hover:text-[#28e98c]
                        transition-colors duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <nav>
        <div className="flex justify-center items-center gap-2">
          <a target="_blank" href="https://www.linkedin.com/in/ariful-axf/">
            <svg
              className="fill-current hover:text-[#28e98c] hover:border-green-500 transition-all duration-300 border-2 rounded-full p-2 text-gray-500 border-gray-600 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              {" "}
              <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
            </svg>
          </a>
          <a target="_blank" href="mailto:arifulxf@gmail.com">
            <svg
              className="fill-current hover:text-[#28e98c] hover:border-green-500 transition-all duration-300 border-2 rounded-full p-2 text-gray-500 border-gray-600 w-10 h-10"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="122.88px"
              height="78.607px"
              viewBox="0 0 122.88 78.607"
              enableBackground="new 0 0 122.88 78.607"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
                />
              </g>
            </svg>
          </a>
          <a target="_blank" href="https://github.com/arifulxf">
            <svg
              className="fill-current hover:text-[#28e98c] hover:border-green-500 transition-all duration-300 border-2 rounded-full p-2 text-gray-500 border-gray-600 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              {" "}
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100054997235096"
          >
            <svg
              className="fill-current hover:text-[#28e98c] hover:border-green-500 transition-all duration-300 border-2 rounded-full p-2 text-gray-500 border-gray-600 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              {" "}
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://wa.me/8801313169776?text=Hi%20Ariful,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!"
          >
            <svg
              className="fill-current hover:text-[#28e98c] hover:border-green-500 transition-all duration-300 border-2 rounded-full p-2 text-gray-500 border-gray-600 w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              {" "}
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
            </svg>
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Footer;
