import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="mt-6 flex flex-col items-center">
      <h1 className="text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        VirtualR build Tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          for developers
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500">
        Empower your Creativity and bring your VR app ideas to life with our
        intuitive development tools. Get Started today and turn your imagination
        into immensive reality!
      </p>
      <div className="mt-10 flex">
        <a
          href=""
          className="mx-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800 px-2 py-3"
        >
          Start for Free
        </a>
        <a href="#" className="mx-3 rounded-md border px-2 py-3">
          Documentation
        </a>
      </div>
      <div className="mt-10 flex flex-col items-center space-x-4 sm:flex-row">
        <video
          autoPlay
          muted
          loop
          className="my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          muted
          loop
          className="my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
