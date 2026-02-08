import { features } from "../constants";

function FeatureSection() {
  return (
    <div className="relative mt-20 min-h-[800px] border-b border-neutral-800">
      <div className="text-center">
        <span className="h-6 rounded-full bg-neutral-800 px-2 py-1 text-sm font-medium uppercase text-orange-500">
          Feature
        </span>
        <h2 className="tracking wide lg:mt-15 mt-10 text-3xl sm:text-5xl lg:text-6xl">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
            Your code
          </span>
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap lg:mt-20">
        {features.map((feature, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="bg-nutral-800 items center mx-6 flex h-10 w-10 justify-center rounded-full p-2 text-orange-700">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mb-6 mt-1 text-xl">{feature.text}</h5>
                  <p className="text-md mb-20 pb-2 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSection;
