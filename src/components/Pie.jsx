

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Extracting signatures and counting the number of alerts for each signature
  const signatures = data.reduce((accumulator, currentValue) => {
    if (currentValue.alert) {
      const { signature } = currentValue.alert;
      accumulator[signature] = (accumulator[signature] || 0) + 1;
    }
    return accumulator;
  }, {});

  const signatureLabels = Object.keys(signatures);
  const signatureAlertCounts = Object.values(signatures);
  const signatureColors = signatureLabels.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16));

  const signatureData = {
    labels: signatureLabels,
    datasets: [
      {
        data: signatureAlertCounts,
        backgroundColor: signatureColors,
        borderWidth: 1,
      },
    ],
  };

  // Extracting categories and counting the number of alerts for each category
  const categories = data.reduce((accumulator, currentValue) => {
    if (currentValue.alert) {
      const { category } = currentValue.alert;
      accumulator[category] = (accumulator[category] || 0) + 1;
    }
    return accumulator;
  }, {});

  const categoryLabels = Object.keys(categories);
  const categoryAlertCounts = Object.values(categories);
  const categoryColors = categoryLabels.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16));

  const categoryData = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryAlertCounts,
        backgroundColor: categoryColors,
        borderWidth: 1,
      },
    ],
  };

  // Chart options with custom legend
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: 'white',
          font: {
            size: 13
          },
          usePointStyle: true,
        }
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Alerts Distribution by Signature</h2>
      <div className="chart-container">
        <Pie data={signatureData} options={options}  height={300} />
      </div>
      <h2 style={{ color: 'white' }}>Alerts Distribution by Category</h2>
      <div className="chart-container">
        <Pie data={categoryData} options={options} height={300} />
      </div>
    </div>
  );
};

export default PieChart;
