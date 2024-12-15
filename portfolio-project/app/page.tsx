import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        id="home"
        className="h-full lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-screen 
            "
      >
        <div className=" lg:w-[65vw] lg:h-auto lg:flex xl:w-[55vw] xl:items-center xl:mt-[10vw] ">
          <div
            className="w-[37vw] h-[37vw] m-auto mt-36 rounded-full overflow-hidden 
          sm:w-[30vw] sm:h-[30vw]
          md:w-[25vw] md:h-[25vw]
          lg:w-[17vw] lg:h-[17vw] lg:m-0
          xl:w-[12vw] xl:h-[12vw]
          "
          >
            <Image
              src={"/images/profile-img1.jpg"}
              alt=""
              width={240}
              height={240}
              layout="responsive"
            />
          </div>

          <div
            className="w-[85vw] flex flex-col m-auto items-center
          lg:w-[50vw] lg:m-0
          xl:w-[28vw] "
          >
            <div
              className=" flex gap-5 mt-16 text-[7vw] font-bold font-serif
            md:text-[6vw] md:mt-[7vw]
            lg:m-0
            xl:text-[4vw] "
            >
              <h1 className="text-white">Asma</h1>
              <h1 className="text-[#E65F78]">M.Ali</h1>
            </div>

            <div
              className="flex ml-[7vw] pt-12
            md:pt-[7vw]
            lg:pt-0"
            >
              <p
                className="text-[#cccccc] text-[4vw]
              md:text-[3vw]
              lg:text-[2.4vw]
              xl:text-[1.5vw] xl:pl-[8vw] xl:w-[48vw]"
              >
                Passionate Frontend Developer | Turning visions into reality
              </p>
            </div>
          </div>
        </div>

        <span
          className="text-6xl pt-36 text-white
            md:text-7xl md:pt-40 flex  justify-center
            lg:pt-52 xl:pt-24"
        >
          &#x21a1;
        </span>
      </div>

      {/*about section*/}

      <div
        id="about"
        className=" mt-32 pb-20 
      lg:mt-0 "
      >
        <div
          className="text-white flex justify-center text-[7vw]
        md:text-[6vw]
        lg:text-[5vw]
        xl:text-[3vw] "
        >
          <h1 className="border-b-4 border-[#E65F78]">About Me</h1>
        </div>

        <div
          className=" lg:flex lg:flex-row-reverse lg:m-auto lg:gap-10 lg:items-center lg:justify-center  lg:mt-[9vw] lg:w-[70vw] 
         xl:m-auto xl:w-[60vw] xl:gap-16 xl:mt-[6vw]"
        >
          <div
            className="w-[90vw]  m-auto mt-20 
          lg:mt-0 
          xl:w-[]"
          >
            <p
              className="text-[#cccccc] text-[4vw] leading-relaxed 
          md:text-[3.3vw]
          lg:text-[2.3vw]
          xl:text-[1.5vw]"
            >
              Hi, I&apos;m Asma M.ali, a beginner Frontend Developer passionate
              about learning and building websites. I&apos;m currently honing my
              skills in HTML, CSS, JavaScript, and React, and working on
              personal projects to grow as a developer. I&apos;m excited to explore
              opportunities that will help me apply my knowledge and continue
              learning.
            </p>
          </div>

          <div
            className="w-[40vw] m-auto mt-28 
         lg:w-[35vw] lg:mt-7 
         xl:mt-0"
          >
            <Image
              src={"/images/about-img.jpg"}
              alt="abot-img"
              height={50}
              width={50}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/*contact section*/}

      <div id="contact" className="w-[] h-96">
        <div className=" w-[40vw] m-auto flex justify-center ">
          <h2
            className="text-[7vw] sm:text-[6.5vw] text-white border-b-4 border-[#E65F78]
          xl:text-[3vw] xl:mt-[6vw]"
          >
            Contact Me
          </h2>
        </div>

        <div className="">
          <form
            className=" h-[60vw] flex flex-col gap-y-12 w-[70vw] m-auto mt-14
        xl:h-[25vw] xl:gap-y-16 xl:w-[40vw] "
          >
            <input
              className=" bg-black outline-none pl-5 text-[#cccccc]  border-2 rounded-lg 
           border-[#E65F78] h-[7vw]
           "
              type="text"
              placeholder="Name"
            />

            <input
              className=" bg-black outline-none pl-5 text-[#cccccc]  border-2 rounded-lg
           border-[#E65F78] h-[7vw]"
              type="email"
              placeholder="Email"
            />

            <textarea
              className="bg-black outline-none  pl-5 pt-4 text-[#cccccc] border-2 rounded-lg 
          border-[#E65F78] h-[15vw]"
              name="message"
              id="message"
              placeholder="type your message"
            ></textarea>
          </form>
        </div>
      </div>
    </main>
  );
}
