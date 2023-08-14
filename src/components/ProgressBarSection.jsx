import React from 'react';
import ProgressBar from './ProgressBar';

const ProgressBarSection = () => {
  const progressBars = [
    { value: 85, label: "Overall" },
    { value: 80, label: "Actively liberal" },
    { value: 78, label: "Actively conservative" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {progressBars.map((progress, index) => (
        <ProgressBar key={index} value={progress.value} label={progress.label} />
      ))}
    </div>
  );
};

export default ProgressBarSection;
