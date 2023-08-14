// ProgressBar.js
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <CircularProgressbar value={value} />
      <p>{label}</p>
    </div>
  );
};

export default ProgressBar;
