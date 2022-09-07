import { ByCommitType } from './ByCommitType'
import { ByWeekDay } from './ByWeekDay'
import { ByFirstLast } from './ByFirstLast'
import { ByFirstLastAmount } from './ByFirstLastAmount'

const Page = ({ children }) => <div className="h-screen p-4">{children}</div>

const Horizontal = ({ children }) => (
	<div className="flex flex-row justify-between">{children}</div>
)

const Soft = ({ children }) => (
	<div className="italic text-gray-400 flex flex-col justify-end">
		{children}
	</div>
)

const Separator = () => <hr className="mt-32 mb-12" />

export const App = () => (
	<div>
		<Page>
			<h1 className="text-3xl">A Dev's Life</h1>
			<p>An assortment of poems, thoughts, and a few colors, by Pavlos.</p>

			<p className="absolute bottom-4 right-4">
				Scroll down to experience the life of a dev.
			</p>
		</Page>
		<Separator />

		<Horizontal>
			<div>
				<h2 className="text-2xl">Weekdays</h2>
				<p>Everyday, a dev codes.</p>
				<p>Everyday, a dev commits.</p>
				<p>Every day.</p>
				<p>But mostly weekdays.</p>
			</div>
			<Soft>
				<p>It's nice most of us do other things in the weekends.</p>
			</Soft>
		</Horizontal>
		<ByWeekDay />
		<Separator />

		<Horizontal>
			<div>
				<h2 className="text-2xl">A chore is..</h2>
				<p>A dev will code a feature or a fix.</p>
				<p>They might write a test or perform an upgrade.</p>
				<p>-</p>
				<p>A dev might really enjoy a particular day's work.</p>
				<p>They might hate it, but it needs to be done.</p>
			</div>
			<Soft>
				<p>Does chore really mean anything for us?</p>
				<p>A chore is a feeling, not a description of work.</p>
				<p>Do we want to be cold and robotic?</p>
				<p>Then `chore` should not be part of our language.</p>
				<p>Do we want to be warm and human?</p>
				<p>Then we can use `chore`, but we should also use `fun`.</p>
				<p>
					These words can be on an orthogonal axis to the cold descriptions.
				</p>
				<p>
					What about: `fun-fix`, `chore-upgrade`, `proud-feature`, `hopeful-ci`.
				</p>
			</Soft>
		</Horizontal>
		<div className="w-full flex items-center justify-center">
			<div className="w-3/5">
				<ByCommitType />
			</div>
		</div>
		<Separator />

		<Horizontal>
			<div>
				<h2 className="text-2xl">Pretty consistency</h2>
				<p>All the dots are here,</p>
				<p>from 0 up to F.</p>
				<p>A dev's wish is mere,</p>
				<p>bring peace, to code, and self.</p>
			</div>
			<Soft>
				<p>Devs are scientists, we like order.</p>
				<p>All dots are here.</p>
				<p>With enough input, all dots will exist.</p>
				<p>Mapping 0-9 and A-F to 0-15.</p>
			</Soft>
		</Horizontal>
		<ByFirstLast />
		<Separator />

		<Horizontal>
			<div>
				<h2 className="text-2xl">Petty inconsistency</h2>
				<p>All the dots are here,</p>
				<p>from 0 up to F.</p>
				<p>Radii don't adhere</p>
				<p>that def is not my pref.</p>
			</div>
			<Soft>
				<p>Devs are creatives, we must embrace chaos.</p>
				<p>Few things will every be 100% consistent.</p>
				<p>Before arriving to perfection, we walk through imbalance.</p>
				<p>Mapping 0-9 and A-F to 0-15.</p>
			</Soft>
		</Horizontal>
		<ByFirstLastAmount />
		<Separator />

		<Page>
			<div className="h-[100%] flex items-center justify-center flex-col">
				<h1 className="text-3xl">{'}'}</h1>
				<h1 className="text-3xl -ml-12">{'}'}</h1>
			</div>
			<p className="w-[100%] text-right">
				Source:{' '}
				<a href="https://github.com/pvinis/artsy-salon-2022">
					https://github.com/pvinis/artsy-salon-2022
				</a>
			</p>
		</Page>
	</div>
)
