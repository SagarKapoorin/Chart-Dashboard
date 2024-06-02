import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@mui/material';
import { tokens } from "../../src/theme.jsx";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const preprocessData = (data) => {
  const processedData = {};

  data.forEach(({ dest_port, alert }) => {
    if (!alert) return;
    const { category, severity } = alert;

    if (!processedData[dest_port]) {
      processedData[dest_port] = {};
    }

    if (!processedData[dest_port][category]) {
      processedData[dest_port][category] = { severityCounts: Array(5).fill(0) };
    }

    processedData[dest_port][category].severityCounts[severity] += 1;
  });

  return processedData;
};

const getColorForSeverity = (severity) => {
  const colors = [
    
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
   
  ];
  return colors[severity];
};

const StackedBarChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const whi=colors.grey[100];
  const processedData = preprocessData(data);
  const ports = Object.keys(processedData);
  const categories = [...new Set(data.map(({ alert }) => alert && alert.category).filter(Boolean))];
  const severityLevels = [0, 1, 2, 3, 4];

  const datasets = severityLevels.map((severity) => ({
    label: `Severity ${severity}`,
    data: ports.map((port) =>
      categories.map((category) => processedData[port][category]?.severityCounts[severity] || 0)
    ).flat(),
    backgroundColor: getColorForSeverity(severity),
  }));

  const chartData = {
    labels: ports.map((port) => categories.map((category) => `${port} (${category})`)).flat(),
    datasets: datasets,
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: 'Alerts Distribution by Port, Category, and Severity',
        color: 'white',
      },
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Ports (Categories)',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
        barPercentage: 1,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Number of Alerts',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
    },
  };
  
  const rotatedOptions = {
    ...options,
    scales: {
      ...options.scales,
      x: {
        ...options.scales.x,
        ticks: {
          ...options.scales.x.ticks,
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
  };

  return (
    <div className='chart-container'>
      <Bar data={chartData} options={options} height={560}/>
    </div>
  );
};

export default StackedBarChart;
