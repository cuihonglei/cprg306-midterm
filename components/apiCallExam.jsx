"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {

  const URL = 'https://webdev2-class-demo.vercel.app/api/sampleReqs';
  const passcode = 'ehen2rfow';
  const callAPI = async () => {
    try {
      const response = await fetch(`${URL}/${passcode}`);
      const data = await response.json();
      console.log(data.secretCode);
    } catch (error) {
      console.error('Error call API:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={callAPI}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
