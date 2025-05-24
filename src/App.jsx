import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import dreamInt from "./assets/dsi-logo-large-1.1.png";
import expoImg from "./assets/In-house-Dream-Study-International.jpg";
import onStop from "./assets/one-stop-1024x133.png";
import { Phone } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Mail } from "lucide-react";
import { Navigation } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { User } from "lucide-react";
import { Globe } from "lucide-react";
import { NotepadText } from "lucide-react";
import { Landmark } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { BanknoteArrowDown } from "lucide-react";
import { MailPlus } from "lucide-react";
import { NotepadTextDashed } from "lucide-react";
import { PlaneTakeoff } from "lucide-react";
import { ScrollText } from "lucide-react";
import { Dot } from "lucide-react";
import { Building } from "lucide-react";
import { MapPin } from "lucide-react";

import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <section>
        <div className="h-container bg-primary text-white">
          {/* top */}
          <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3 text-sm md:text-base">
            <h2 className="w-full pb-2 text-center text-xl font-bold md:w-auto md:p-4 md:text-left md:text-xl">
              We're Leading Educational Consultancy in Bangladesh.
            </h2>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:flex-nowrap md:justify-end">
              <h3 className="border-r-2 border-gray-800 px-4 font-bold">
                Office Hours: 10:00AM- 07:00PM
              </h3>
              <span className="tic">
                <Facebook fill="white" />
              </span>
              <span className="tic">
                <Instagram />
              </span>
              <span className="tic">
                <Linkedin />
              </span>
              <span className="tic">
                <Youtube />
              </span>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
          <div>
            <img src={dreamInt} alt="" className="w-72" />
          </div>

          {/* phone */}
          <div className="flex items-center gap-3">
            <div>
              <Phone fill="#1b9fcb" color="#1b9fcb" />
            </div>
            <div>
              <p className="font-bold">Call us:</p>
              <p>+880 14066 99551-4</p>
            </div>
          </div>
          {/* email */}
          <div className="flex items-center gap-3">
            <div>
              <Mail color="#1b9fcb" />
            </div>
            <div>
              <p className="font-bold">Email Us:</p>
              <p>dreamstudyinternational@gmail.com</p>
            </div>
          </div>
          {/* location */}
          <div className="flex items-center gap-3">
            <div>
              <Navigation fill="#1b9fcb" color="#1b9fcb" />
            </div>
            <div>
              <p className="font-bold">Location:</p>
              <p>+880 14066 99551-4</p>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="rounded-ten container mx-auto flex flex-col items-center gap-4 bg-primary px-4 py-4 text-white md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold md:text-2xl">
            <p className="text-gray-500">Home</p>
            <p>About</p>
            <p>Service</p>
            <p className="flex items-center gap-1">
              Countries
              <ChevronDown size={20} strokeWidth={3.5} />
            </p>

            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <button className="rounded-ten bg-third p-3 font-bold text-white">
              Apply Now
            </button>
          </div>
        </div>
      </section>
      {/* Dream International */}
      <section>
        {/* logo */}
        <div className="bg-secondary-bg pb-10 pt-20">
          <img
            src={dreamInt}
            width="400px"
            className="mx-auto w-[250px] md:w-[400px]"
            alt="dreamIntLogo"
          />
        </div>
        {/* main */}
        <div className="h-container dream-int-bg bg-secondary-bg text-white">
          <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-4 py-20 md:flex-row md:py-20">
            <div className="l-di w-full md:w-1/2">
              <img src={expoImg} width="800px" alt="" />
            </div>
            <div className="r-di w-full md:w-1/2">
              <div className="card rounded-ten overflow-hidden">
                <h2 className="from-secondary-dark w-full bg-gradient-to-br to-secondary p-6 text-4xl font-bold">
                  Apply Now!
                </h2>

                <div className="bg-white p-10">
                  {/* Name Input */}
                  <div className="mb-6">
                    <div className="user-input">
                      <User color="black" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full text-lg text-black placeholder-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="mb-6">
                    <div className="user-input">
                      <Phone color="black" />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full text-lg text-black placeholder-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Last Education Input */}
                  <div className="mb-6">
                    <div className="user-input w-full">
                      <GraduationCap color="black" />
                      <select
                        placeholder="Last Education"
                        className="w-full cursor-pointer text-lg text-black placeholder-black focus:outline-none"
                      >
                        <option value="">Last Education</option>
                        <option value="HSC">HSC</option>
                        <option value="Bachelor">Bachelor</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Country Input */}
                  <div className="mb-6">
                    <div className="user-input">
                      <Globe color="black" />
                      <input
                        type="text"
                        placeholder="Preferred Country"
                        className="w-full text-lg text-black placeholder-black focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mb-6">
                    <button className="rounded-ten to-secondary-dark bg-gradient-to-br from-secondary p-4 px-8 text-2xl font-bold">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Stop Solution*/}
      <section>
        <div className="bg-secondary-bg pt-20">
          <img
            src={onStop}
            width="400px"
            className="mx-auto"
            alt="dreamIntLogo"
          />
        </div>
        <div className="h-container bg-secondary-bg dark:bg-black dark:text-white">
          <div className="container mx-auto grid grid-cols-1 place-items-center gap-4 py-20 md:grid-cols-2 lg:grid-cols-4">
            {/* 1 */}
            <div className="on-card">
              <NotepadText size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Eligibility Assessment</p>
            </div>

            <div className="on-card">
              <Landmark size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">
                University & Program Selection
              </p>
            </div>
            {/* 3 */}
            <div className="on-card">
              <BadgeDollarSign size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Scholarship Application</p>
            </div>
            <div className="on-card">
              <ScrollText size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Sponsor Documents Support</p>
            </div>

            {/* 5 */}
            <div className="on-card">
              <BanknoteArrowDown size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Bank Statement Support</p>
            </div>
            <div className="on-card">
              <MailPlus size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">SOP Letter Writing</p>
            </div>
            {/* 7 */}
            <div className="on-card">
              <NotepadTextDashed size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Visa Application Support</p>
            </div>
            <div className="on-card">
              <PlaneTakeoff size={50} color="#1b9fcb" />
              <p className="text-xl font-semibold">Pre-Departure Information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        {/* top */}
        <div className="h-container bg-secondary-bg">
          <div className="container mx-auto grid grid-cols-1 place-items-center gap-8 px-4 py-16 md:grid-cols-12">
            {/* 1st */}
            <div className="col-span-3 mr-10">
              <div className="flex flex-col gap-6">
                <div>
                  <img src={dreamInt} alt="dream international" width="275px" />
                </div>
                <p className="text-lg text-gray-500">
                  We are renowned education consultancy for prospective students
                  who would like to study in CANADA, UK, USA, Australia, Sweden,
                  Netherlands, Denmark & other European Countries.
                </p>
                <div className="flex items-center gap-4">
                  <span className="rounded-full rounded-fifty cursor-pointer bg-[rgba(30,148,194,0.15)] p-2 text-[#1e94c2] transition hover:bg-[#1e94c2] hover:text-white">
                    <Facebook />
                  </span>
                  <span className="rounded-full rounded-fifty cursor-pointer bg-[rgba(30,148,194,0.15)] p-2 text-[#1e94c2] transition hover:bg-[#1e94c2] hover:text-white">
                    <Instagram />
                  </span>
                  <span className="rounded-full rounded-fifty cursor-pointer bg-[rgba(30,148,194,0.15)] p-2 text-[#1e94c2] transition hover:bg-[#1e94c2] hover:text-white">
                    <Linkedin />
                  </span>
                  <span className="rounded-full rounded-fifty cursor-pointer bg-[rgba(30,148,194,0.15)] p-2 text-[#1e94c2] transition hover:bg-[#1e94c2] hover:text-white">
                    <Youtube />
                  </span>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="col-span-2">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">
                  <span className="rounded-ten rounded-fill bg-[#cadefa]">
                    S
                  </span>
                  itemap
                </h2>
                <ul>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Home
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> About
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Services
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Countries
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Contact
                  </li>
                </ul>
              </div>
            </div>
            {/* 3rd */}
            <div className="col-span-3">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">
                  <span className="rounded-ten rounded-fill bg-[#cadefa]">
                    C
                  </span>
                  ountries
                </h2>
                <ul>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Australia
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> Canada
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> New Zealand
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> USA
                  </li>
                  <li className="mb-3 flex gap-1">
                    <Dot color="#1b9eca" /> UK
                  </li>
                </ul>
              </div>
            </div>
            {/* fourth */}
            <div className="col-span-4">
              <div className="rounded-ten flex flex-col gap-6 bg-white p-10">
                <Building size={80} color="#1e94c2" />
                <div className="flex items-center gap-4">
                  <MapPin size={40} color="#1e94c2" />
                  <p className="text-lg text-gray-500">
                    <span className="font-bold text-black">Gulshan-02:</span>{" "}
                    House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue,
                    Gulshan-02, Dhaka-1212.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} color="#1e94c2" />
                  <p className="text-lg text-gray-500">
                    <span className="font-bold text-black">WhatsApp:</span> +880
                    14066 99551-4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="h-container bg-[#22254b] text-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row md:p-1">
            <h2 className="p-4 text-sm">
              © 2023 Dream Study Int.. Designed By *hirebirds Team.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <li className="flex gap-1">About</li>
              <li className="flex gap-1">
                <Dot color="#1b9eca" /> FAQ
              </li>
              <li className="flex gap-1">
                <Dot color="#1b9eca" /> Contact
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
