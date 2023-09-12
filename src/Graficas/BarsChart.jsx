import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [15, 22,];
var meses = ["Hombres", "Mujeres", ];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 30
        },
        x: {
            ticks: {color: 'rgba(0, 0, 0)'}
        }
    }
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: ['rgba(0, 147, 220, 0.5)', 'rgba(255, 99, 132, 1)']
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}
