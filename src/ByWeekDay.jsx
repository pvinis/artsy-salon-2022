import { Data } from './data'
import { sortBy } from 'lodash'
import { frequencies } from 'lodash-contrib'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { DateTime } from 'luxon'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const days = Data.map((item) => {
	const date = item.committed_date.split(' ')[0]
	const weekday = DateTime.fromFormat(date, 'yyyy-MM-dd').weekday
	return weekday
})
const freq = frequencies(days)
console.log(freq)

const labels = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

const dat = {
	labels,
	datasets: [
		{
			label: '# of commits',
			data: [1, 2, 3, 4, 5, 6, 7].map((d) => freq[d] || 0),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}

const options = {
	responsive: true,
	plugins: {
		legend: { position: 'top' },
	},
}

export const ByWeekDay = () => (
	<div className="mx-4">
		<Bar options={options} data={dat} />
	</div>
)
