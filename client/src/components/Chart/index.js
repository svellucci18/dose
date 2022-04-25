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
    labels: ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7", "4/8", "4/8", "4/9", "4/10", "4/11", "4/12", "4/13", 
            "4/14", "4/15", "4/16","4/17", "4/18", "4/19", "4/20", "4/21", "4/22", "4/25", "4/26", "4/27", "4/28", "4/29", "4/30"],
    datasets: [
        {
            label: "Dosed - 0: No Dose; 1: Yes Dose",
            data: [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
            borderColor: [
                '#8ADF68'
            ],
            borderWidth: 10
        },
        {
            label: "Physical Health - 1 thru 5",
            data: [2, 3, 2, 3, 3, 3, 2, 4, 2, 4, 3, 4, 3, 5, 4, 4, 4, 4, 4, 3, 4, 5, 4, 3, 4, 4, 4, 4, 4, 5, 3],
            borderColor: [
                '#DB6C79'
            ],
            borderWidth: 10
        },
        {
            label: "Mental Health - 1 thru 5",
            data: [1, 2, 2, 2, 1, 2, 2, 5, 2, 5, 2, 4, 2, 4, 2, 5, 4, 4, 5, 4, 3, 4, 3, 4, 5, 4, 3, 4, 5, 4],
            borderColor: [
                '#DEB986'
            ],
            borderWidth: 10
        }
    ]
}

const chartDataOneWeek = {
    labels: ["4/15", "4/16","4/17", "4/18", "4/19", "4/20", "4/21"],
    datasets: [
        {
            label: "Dosed - 0: No Dose; 1: Yes Dose",
            data: [1, 0, 1, 1, 0, 1, 1],
            borderColor: [
                '#8ADF68'
            ],
            borderWidth: 10
        },
        {
            label: "Physical Health - 1 thru 5",
            data: [4, 4, 4, 4, 4, 3, 4],
            borderColor: [
                '#DB6C79'
            ],
            borderWidth: 10
        },
        {
            label: "Mental Health - 1 thru 5",
            data: [2, 5, 4, 4, 5, 4, 3],
            borderColor: [
                '#DEB986'
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
                        text: "One Month",
                        font: {
                            size: 22
                        }
                    },
                    legend: {
                        display: true,
                        position: "top",
                        labels: {
                            font: {
                                size: 18
                            }
                        }
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
                        },
                        max: 6
                    }
                },
                layout: {
                    padding: 20
                }
            }}/>
        <Line data={chartDataOneWeek}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "One Week 4/15 - 4/21",
                        font: {
                            size: 22
                        }
                    },
                    legend: {
                        display: true,
                        position: "top",
                        labels: {
                            font: {
                                size: 18
                            }
                        }
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
                        },
                        max: 6
                    }
                },
                layout: {
                    padding: 20
                }
            }}/>

    </div>)
}

export default DataChart;