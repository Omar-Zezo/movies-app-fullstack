import React, { useState } from "react";

const Ask = () => {
  const [questionId, setQuestionId] = useState("");

  const questions = [
    {
      id: 0,
      title: "What is Movrec?",
      body: "Movrec is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      id: 1,
      title: "How much does Movrec cost?",
      body: "Watch Movrec on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.",
    },
    {
      id: 2,
      title: "Where can I Watch?",
      body: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Movrec account to watch instantly on the web at Movrec.com from your personal computer or on any internet-connected device that offers the Movrec app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 3,
      title: "What can I Watch on Movrec?",
      body: "Movrec has an extensive library of feature films, documentaries, TV shows, anime, award-winning Movrec originals, and more. Watch as much as you want, anytime you want.",
    },
  ];

  return (
    <div className="xl:w-[80%] w-[95%] mx-auto ">
      <h1 className="xl:text-5xl text-3xl text-white text-center font-medium mt-[200px] mx-0 m-[50px]">Frequently Asked Questions</h1>
      <ul>
        {questions.map((question, index) => (
          <li className="m-3" key={index}>
            <button className="w-full text-left font-medium border-none bg-zinc-900 text-white cursor-pointer flex items-center pr-2">
              <h4 className="text-xl font-medium w-full py-5 px-2" onClick={() => setQuestionId(question.id)}>
                {question.title}
              </h4>
              {
                questionId === index ? (
                    <span className="ml-auto text-4xl font-extralight" onClick={() => setQuestionId(5)}>&#8722;</span>
                ):(
                    <span className="ml-auto text-4xl font-extralight" onClick={() => setQuestionId(5)}>&#43;</span>
                ) 
              }
            </button>
            <div
              className="bg-zinc-900 border-t-[1px] border-zinc-800 py-7 px-2"
              style={
                questionId === index
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <span className="lg:text-xl text-lg text-white">
                <p>{question.body}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ask