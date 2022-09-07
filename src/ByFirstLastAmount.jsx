import { Data } from './data'
import { frequencies } from 'lodash-contrib'
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bubble } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const options = {
	scales: {
		y: { beginAtZero: true },
	},
}

const firstsAndLasts = Data.map((c) =>
	[c.object_id[0], c.object_id[c.object_id.length - 1]].map((x) =>
		parseInt(x, 16),
	),
)
const freq = frequencies(firstsAndLasts)
console.log(freq)

const data = {
	datasets: [
		{
			label: 'First and Last digit of commit SHA with amount of commits',
			data: Object.keys(freq).map((t) => ({
				x: parseInt(t.split(',')[0], 10),
				y: parseInt(t.split(',')[1], 10),
				r: freq[t],
			})),
			// data: Array.from({ length: 50 }, () => ({
			// 	x: 0.3,
			// 	y: 0.4,
			// 	r: 100,
			// })),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}

export const ByFirstLastAmount = () => <Bubble options={options} data={data} />
