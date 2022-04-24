import { Bar, Line } from "react-chartjs-2";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";

// Fetch call to grab information for the user from graphQl API
// Save mood data into one array
// Save consumable data into another array
// Save dates into another array
// Create a helper function to add custom styling for each dataset
// Use states to prevent chart data from loading before the data from the api has been loaded to the graphs
// Use helper functions to create datasets
//      But first, try to do that directly in the same file without helper functions.
// Need to add legend

// data prop for the chart
const chartData = {
    labels: ["4/19", "4/20", "4/21", "4/22", "4/25", "4/26", "4/27"],
    datasets: [
        {
            label: "Dosed",
            data: [4, 2, 4, 2, 4, 2, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 10
        },
        {
            label: "physical health",
            data: [4, 1, 3, 2, 4, 2, 5],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 10
        },
        {
            label: "mental health",
            data: [5, 1, 1, 2, 5, 3, 4],
            borderColor: [
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 10
        }
    ]
}

// chart hook
function DataChart () {
    return (<div>
        <h1 class="d-flex justify-content-center">April: LSD</h1>
        <Line data={chartData}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Mood Tracker"
                        
                    },
                    legend: {
                        display: true,
                        position: "top"
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Date",
                            font: {
                                size: 24
                            }
                        } 
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Mood",
                            font: {
                                size: 24
                            }
                        } 
                    }
                },
                layout: {
                    padding: 20
                }
            }}/>

    </div>)
}

export default DataChart;