import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is the 10.40.10 Workout?",
    answer:
      "10.40.10 is a 1-hour workout that integrates HIIT and functional resistance training with a science-backed time-structured design.",
  },
  {
    id: 2,
    question: "What does 10.40.10 mean? ",
    answer:
      "The first TEN represents ACTIVATION - 10 minutes of warm-up exercises that prime the muscles targeted by the workout. The FORTY represents HARD WORK - our proprietary fitness style proven to increase strength and stamina. The last TEN represents DECOMPRESSION - 10 minutes of mindful cool down to normalize your heart rate and begin the recovery process. ",
  },
  {
    id: 3,
    question: "What drives the mission at 10.40.10?",
    answer:
      "We are a Veteran led company, with the mission to take back what it means to be American through safe and intelligent fitness and dedicated to training communities for greatness. ",
  },
  {
    id: 4,
    question: "What fitness level is the workout designed for? ",
    answer:
      "Everyone.  Regardless of where you are in your fitness journey, 10.40.10 can meet you there.  Our certified coaches provide exercise options, weight selection recommendations, and even challenges.  Take the workout at your own pace, just don’t quit. ",
  },
  {
    id: 5,
    question: "How often does the workout change?",
    answer:
      "EVERY WORKOUT IS DIFFERENT!  Our design team creates new workouts every day that will demand your body to adapt while keeping you safe and engaged with new exercise combinations. ",
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="bg-gray-800 mt-20 pb-12 mb-6">
      <div className=" flex flex-col max-w-7xl mx-auto md:py-16 lg:px-8 ">
        <div
          className="lg:px-48 w-full flex flex-col text-center py-24 bg-cover md:rounded-xl border-8 md:border-taLightRed shadow-lg"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/trainamerican/image/upload/b_rgb:232323,dpr_auto,f_auto,o_23,q_auto/v1640118297/3_hvtrcj.jpg)",
          }}
        >
          <h2 className="text-3xl lg:text-6xl font-heading tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <p className=" text-gray-400 mt-12 text-center px-4">
          Here are some of our most common questions. Please don't hesitate to
          contact us via the chat box in the lower right hand corner of your
          browser. Our professional sales staff are standing by to answer any
          questions you have!
        </p>
        <div className="mt-20 px-4">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-heading text-2xl text-white">
                  {faq.question}
                </dt>
                <dd className="mt-3 font-body text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
