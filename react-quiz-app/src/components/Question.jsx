import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import data from "../data.json";

export default function Question() {
  const [presentIndex, setPresentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const presentQuestion = data.quiz[presentIndex];

  useEffect(() => {
    setSelectedOption(selectedOptions[presentIndex] || "");
  }, [presentIndex, selectedOptions]);

  // handleSelect
  function handleSelect(option) {
    console.log(option, "selected option");
    setSelectedOption(option);
  }

  // handleSkip
  function handleSkip() {
    if (selectedOption === "") {
      setPresentIndex(presentIndex + 1);
    }
  }

  // handleNext
  function handleNext(option) {
    if (selectedOption === "") {
      toast.error("Please select an option before proceeding!", {
        duration: 2000, // in milliseconds
        position: "top-left",
      });
    } else {
      // Update the selected options array with the current selection
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[presentIndex] = selectedOption;
      setSelectedOptions(updatedSelectedOptions);

      // move to the next ques
      setPresentIndex(presentIndex + 1);
      setSelectedOption("");
    }
  }

  return (
    <div className="container px-4 text-center">
      <Toaster />
      <p className="question">{presentQuestion.question}</p>
      <div className="row gy-3">
        {presentQuestion.options.map((option, index) => (
          <div key={index} className="col-5">
            <div
              className={`p-2 options ${
                selectedOption === option
                  ? "text-bg-primary"
                  : "text-bg-secondary"
              }`}
              onClick={() => {
                handleSelect(option);
              }}
            >
              {option}
            </div>
          </div>
        ))}
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-warning fw-semibold"
          onClick={() => {
            setPresentIndex(presentIndex - 1);
          }}
          disabled={presentIndex === 0}
        >
          ⏮️Previous
        </button>
        <button
          type="button"
          className="btn btn-danger fw-semibold"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          type="button"
          className="btn btn-success fw-semibold"
          onClick={handleNext}
          disabled={presentIndex === 9}
        >
          Submit & go to Next⏭️
        </button>
      </div>

      <ul class="flex-wrap list-group list-group-horizontal list-group-item-warning">
        {selectedOptions.map((el, i) => (
          <li class="list-group-item">
            Question {i + 1}: {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
