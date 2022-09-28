import { Data } from './data'
import { frequencies } from 'lodash-contrib'
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const options = {
	scales: {
		y: { beginAtZero: true },
	},
}

const firstsAndLasts = Data.map((c) =>
	[c.object_id[0], c.object_id[c.object_id.length - 1]].map((x) =>
		parseInt(x, 16),
	),
)
console.log(firstsAndLasts)

const data = {
	datasets: [
		{
			label: 'First and Last digit of commit SHA',
			data: firstsAndLasts.map((t) => ({ x: t[0], y: t[1] })),
			backgroundColor: 'rgba(255, 99, 132, 1)',
		},
	],
}

export const ByFirstLast = () => (
	<div className="mx-4">
		<Scatter options={options} data={data} />
	</div>
)
