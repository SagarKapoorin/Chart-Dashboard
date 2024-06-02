import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart, registerables } from 'chart.js';

Chart.register(CategoryScale);
Chart.register(...registerables);

const LineChart = ({ data }) => {
  // Process data for IPs
  const sourceIPs = {};
  const destIPs = {};

  data.forEach(({ src_ip, dest_ip }) => {
    if (src_ip) sourceIPs[src_ip] = (sourceIPs[src_ip] || 0) + 1;
    if (dest_ip) destIPs[dest_ip] = (destIPs[dest_ip] || 0) + 1;
  });

  const sourceIPLabels = Object.keys(sourceIPs);
  const sourceIPAlertCounts = Object.values(sourceIPs);
  const destIPLabels = Object.keys(destIPs);
  const destIPAlertCounts = Object.values(destIPs);

  const sourceIPData = {
    labels: sourceIPLabels,
    datasets: [
      {
        label: 'Alerts by Source IP',
        data: sourceIPAlertCounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const destIPData = {
    labels: destIPLabels,
    datasets: [
      {
        label: 'Alerts by Destination IP',
        data: destIPAlertCounts,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Value',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Alerts',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className='chart-container'>
      <h2>Number of Alerts by Source IP</h2>
        <Line data={sourceIPData} options={options}  height={300} />
      <h2>Number of Alerts by Destination IP</h2>
        <Line data={destIPData} options={options}  height={300} />
    </div>
  );
};

export default LineChart;
