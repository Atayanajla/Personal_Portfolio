// import { useNavigate } from "react-router-dom";
import TextType from "../components/TextType";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";

const Hero = () => {
  // const navigate = useNavigate();

  const myProfessions = [
    "Front-End Developer",
    "Software Developer",
    "Web Developer",
    "Tech Enthusiast",
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[15%] left-[-10%] md:left-[5%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[100px] md:blur-[130px]" />
        <div className="absolute bottom-[15%] right-[-10%] md:right-[5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-[120px] md:blur-[150px]" />
      </div>
      <section
        id="hero"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 py-12 md:py-24 flex flex-col md:flex-row justify-between items-center gap-12"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to my portfolio <br />
          </h1>
          <h4 className="text-lg md:text-xl font-medium flex items-center justify-center md:justify-start gap-1.5 min-h-[40px]">
            <span>I am a</span>
            <span className="text-blue-500 font-bold">
              <TextType
                text={myProfessions}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                loop={true}
              />
            </span>
          </h4>
          <p className="max-w-md mx-auto md:mx-0 leading-relaxed">
            Building modern and meaningful digital experiences through code,
            while continuously learning new technologies to evolve as a software
            engineer.
          </p>

          {/* <div className="pt-2 flex justify-center md:justify-start">
            <Button
              text="Explore My Projects"
              onClick={() => navigate("/projects")}
            />
          </div> */}

          <div className="pt-2 flex justify-center md:justify-start">
            <Button
              text="Explore My Projects"
              onClick={() => {
                document
                  .getElementById("showcase")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="md:w-1/2 flex justify-center items-center w-full"
        >
          <ProfileCard
            name="Ataya Najla"
            title="Software Developer"
            handle="atayanajla"
            contactText="Contact Me"
            avatarUrl="./src/assets/img/Formal.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            behindGlowEnabled={true}
            behindGlowColor="rgba(59, 130, 246, 0.4)"
            onContactClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
