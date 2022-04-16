import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Consumable 1", "Consumable 2", "Consumable 3", "Consumable 4", "Consumable 5"],
    datasets: [
        {
            data: [12, 9, 15, 6, 7]
        }
    ]
}

function DataChart () {
    return (<div>
        <h1>Data Chart</h1>
        {/* <Doughnut data = {data}/> */}
    </div>)
}

export default DataChart;