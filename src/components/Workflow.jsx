import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.jpg";
function Workflow() {
  return (
    <div className="mt-20">
      <h2 className="mt-6 text-center text-3xl tracking-wide sm:text-5xl lg:text-6xl">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          Coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2 lg:w-1/2">
          <img src={code} alt="code-img" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div className="mb-12 flex" key={index}>
              <div className="mx-6 h-10 w-10 items-center justify-center rounded-full bg-neutral-900 p-2 text-green-500">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mb-2 mt-1 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
