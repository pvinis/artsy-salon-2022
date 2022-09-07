import { Data } from './data'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { sortBy } from 'lodash'
import { frequencies } from 'lodash-contrib'

ChartJS.register(ArcElement, Tooltip, Legend)

const types = Data.map((item) => {
	const msg = item.message_headline.toLowerCase()
	if (msg.includes(':')) {
		const conv = msg.split(':')[0]
		if (conv.includes('https') || conv.includes('ltv')) {
			return 'had-link'
		}
		const cleanedConv = conv.split('(')[0].split('[')[0]
		if (cleanedConv.includes('refactor')) return 'refactor'
		if (cleanedConv.includes('revert')) return 'revert'
		if (cleanedConv.includes('-')) return 'jira-ticket'
		if (cleanedConv.includes('merge')) return 'merge'
		if (cleanedConv.includes('bump')) return 'update'
		if (cleanedConv.includes('update')) return 'update'
		if (cleanedConv === 'fix fix') return 'fix'
		if (cleanedConv === 'feat ') return 'feat'
		if (cleanedConv === 'feature') return 'feat'
		if (cleanedConv === 'bug') return 'fix'
		if (cleanedConv === 'bugfix') return 'fix'
		if (cleanedConv === 'wip') return '-wip'
		if (cleanedConv === 'rubocop') return 'test'
		if (
			[
				'adding',
				'npm',
				'fixme',
				'lib',
				'add',
				'task',
				'supports',
				'temp',
			].includes(cleanedConv)
		)
			return 'other'
		if (cleanedConv === '') return 'no-conv-title'

		return cleanedConv
	} else if (msg.includes('merge')) {
		return 'merge'
	}
	return 'no-conv-title'
})
const freq = frequencies(types)
const data = sortBy(
	Object.keys(freq).map((key) => [key, freq[key]]),
	(i) => i[1],
)
	.reverse()
	.filter((i) => i[1] > 15)
const labels = data.map((i) => i[0] + ':' + i[1])
const values = data.map((i) => i[1])
console.log(types)

const dat = {
	labels,
	datasets: [
		{
			label: '# of commits',
			data: values,
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
}

export const ByCommitType = () => (
	<Pie data={dat} options={{ plugins: { legend: { position: 'left' } } }} />
)
