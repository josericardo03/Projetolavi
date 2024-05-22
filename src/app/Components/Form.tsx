"use client";
import React, { useState, useRef } from "react";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return; // Check if formRef is not null

    const formDatab = new FormData(formRef.current);
    fetch(
      "https://script.google.com/macros/s/AKfycbyPgl2TASkQjXzzrEIcFU6GgYoygYwarPuWbwJet0Dkn6fVhuH_XAi1vvwdDYiKWR0F/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App max-w-5xl mx-auto">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla JS
      </h2>
      <div>
        <form className="form" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
