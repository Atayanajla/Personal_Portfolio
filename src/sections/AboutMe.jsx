import Button from "../components/Button";
import Lanyard from "../components/Lanyard";
import CurvedLoop from "../components/CurvedLoop";
import BorderGlow from "../components/BorderGlow";

const AboutMe = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pb-16">
      <div className="w-full mb-15 [&_*]:fill-current">
        <CurvedLoop
          marqueeText="✦About Me✦"
          speed={2}
          curveAmount={0}
          direction="right"
          interactive
          className="custom-text-style"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
      >
        <div className="md:col-span-5 flex flex-col gap-6">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="w-full h-[370px] md:h-[488px] flex justify-center items-center overflow-hidden">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                frontImage="/img/LanyardD.png"
                backImage="/img/LanyardB.png"
                imageFit="cover"
                imageScale={0.85}
              />
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h4 className="text-lg font-bold mb-5 text-center md:text-left text-white tracking-tight">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                {[
                  {
                    name: "React",
                    color: "border-sky-500/40 text-sky-400 bg-sky-500/5",
                  },
                  {
                    name: "Laravel",
                    color:
                      "border-orange-500/40 text-orange-400 bg-orange-500/5",
                  },
                  {
                    name: "Tailwind",
                    color: "border-teal-500/40 text-teal-400 bg-teal-500/5",
                  },
                  {
                    name: "JavaScript",
                    color:
                      "border-yellow-500/40 text-yellow-400 bg-yellow-500/5",
                  },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3.5 py-1.5 text-xs md:text-sm font-semibold rounded-full border shadow-sm transition-all duration-300 hover:scale-105 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlow>
        </div>

        <div className="md:col-span-7 flex flex-col gap-6">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-5 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Who Am I?
              </h3>
              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  I’m Ataya Najla, an Information Systems graduate from Telkom
                  University with a strong passion for software development. I
                  have hands-on experience in building web applications,
                  alongside foundational skills in mobile development and
                  database management. I genuinely enjoy learning new
                  technologies and continuously improving my development skills.
                </p>
                <p>
                  Beyond technical skills, I thrive in fast-paced environments
                  through my rapid learning and adaptability, which allows me to
                  master new frameworks quickly. My background in handling dual
                  laboratory responsibilities and collaborating on team projects
                  has sharpened my time management, analytical problem-solving,
                  and teamwork & communication skills.
                </p>
              </div>

              {/* Button CV dipindahkan ke sini (di bawah teks) */}
              <div className="pt-2">
                <a
                  href="./src/assets/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button text="View CV" />
                </a>
              </div>
            </div>
          </BorderGlow>

          {/* KOTAK 4: EDUCATION (Di bawah Who Am I) */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="p-6 md:p-8 flex flex-col justify-center text-center md:text-left space-y-2.5">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Graduated
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white">
                Universitas Telkom
              </h4>
              <p className="text-sm md:text-base font-semibold text-blue-400">
                Bachelor Degree in Information Systems | GPA 3.65 / 4.00
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                Aug 2020 - Sep 2024
              </p>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
