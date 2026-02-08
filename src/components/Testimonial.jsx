import { testimonials } from "../constants";

function Testimonial() {
  return (
    <div className="mt-10 tracking-wider">
      <h2 className="my-10 text-center text-3xl sm:text-5xl lg:mt-20 lg:text-6xl">
        What people are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((review, index) => (
          <div className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3" key={index}>
            <div className="bg-neytral text-md rounded-md border border-neutral-800 p-6 font-thin">
              <p>{review.text}</p>
              <div className="mt-8 flex items-start">
                <img
                  className="mr-6 h-12 w-12 rounded-full border border-neutral-300"
                  src={review.image}
                />
                <div>
                  <h6 className="font-medium">{review.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {review.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
