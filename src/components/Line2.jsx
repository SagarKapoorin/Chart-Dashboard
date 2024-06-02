import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart, registerables } from 'chart.js';

Chart.register(CategoryScale);
Chart.register(...registerables);

const LineChart_new = ({ data }) => {
 
  const sourcePorts = {};
  const destPorts = {};

  data.forEach(({ src_port, dest_port }) => {
    if (src_port) sourcePorts[src_port] = (sourcePorts[src_port] || 0) + 1;
    if (dest_port) destPorts[dest_port] = (destPorts[dest_port] || 0) + 1;
  });

  const sourcePortLabels = Object.keys(sourcePorts);
  const sourcePortAlertCounts = Object.values(sourcePorts);
  const destPortLabels = Object.keys(destPorts);
  const destPortAlertCounts = Object.values(destPorts);

  const sourcePortData = {
    labels: sourcePortLabels,
    datasets: [
      {
        label: 'Alerts by Source Port',
        data: sourcePortAlertCounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const destPortData = {
    labels: destPortLabels,
    datasets: [
      {
        label: 'Alerts by Destination Port',
        data: destPortAlertCounts,
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
      <h2>Number of Alerts by Source Port</h2>
        <Line data={sourcePortData} options={options}  height={300} />
      <h2>Number of Alerts by Destination Port</h2>
        <Line data={destPortData} options={options}  height={300} />
    </div>
  );
};

export default LineChart_new;
