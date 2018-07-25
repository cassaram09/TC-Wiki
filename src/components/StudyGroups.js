import React from 'react';
import { FileText, YouTube } from './Svg';
import { StudyGroupSchedule } from './SummerSchedule';

const StudyGroups = ({ more = true }) => {
	const general = [
		{
			title: 'Study Group Schedule',
			href: 'https://docs.google.com/spreadsheets/d/1S72HyVSKgfymB1XAhO7eMr-HK2rJl8rbRWnbsfvCg7M',
			description:
				'Each weeks study group schedule. Make sure you schedule your study groups by EOD Thursday every week.',
			upperRight: 'Sheet'
		},
		{
			title: 'Study Group Lesson Plans',
			href: 'https://github.com/flatiron-labs/technical-coach-resources/tree/master/lesson-plans',
			description: 'Resources to guide your study group.',
			upperRight: 'Sheet'
		},
		{
			title: 'Attendant Feedback Survey',
			href: 'https://theflatironschool.typeform.com/to/jMLdwE',
			description: 'Survey to "hand out" to students at the end of your study group.',
			upperRight: 'Sheet'
		}
	];

	const training = [
		{
			title: 'Study Group Training Slides',
			href:
				'https://docs.google.com/presentation/d/1AXLcijdy3t40VFW83t7uiFylAxBbHD-1Y-nI6eNLcUg/edit#slide=id.p',
			upperRight: 'Sheet'
		},
		{
			title: 'How to Create a Study Group',
			href: 'https://www.youtube.com/watch?v=xZuePjuvnU4&amp;feature=youtu.be',
			upperRight: 'Video'
		},
		{
			title: 'One Pager on Study Groups',
			href: 'https://docs.google.com/document/d/1qVGS1jFh-0LfQAVh7o_DterqXtAgBkDB1HsjDBmNM2Q/edit',
			description:
				'Creating study groups, starting your study group, engaging your study group, types of study groups',
			upperRight: 'Sheet'
		}
	];

	function svg(type) {
		if (type === 'Video') {
			return <YouTube />;
		} else {
			return <FileText />;
		}
	}

	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
				<h1>Study Groups</h1>
			</div>
			<div className="list-group">
				{general.map((link, i) => (
					<a
						key={i}
						target="_blank"
						rel="noopener noreferrer"
						href={link.href}
						className="list-group-item list-group-item-action flex-column align-items-start "
					>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{link.title}</h5>
							{link.upperRight ? svg(link.upperRight) : null}
						</div>
						{link.description ? <p className="mb-1">{link.description}</p> : null}
						{link.smallText ? <small>{link.smallText}</small> : null}
					</a>
				))}
			</div>
			<br />
			{more && (
				<React.Fragment>
					<h3>Training</h3>
					<div className="list-group mb-4">
						{training.map((link, i) => (
							<a
								key={i}
								target="_blank"
								rel="noopener noreferrer"
								href={link.href}
								className="list-group-item list-group-item-action flex-column align-items-start "
							>
								<div className="d-flex w-100 justify-content-between">
									<h5 className="mb-1">{link.title}</h5>
									{link.upperRight ? svg(link.upperRight) : null}
								</div>
								{link.description ? <p className="mb-1">{link.description}</p> : null}
								{link.smallText ? <small>{link.smallText}</small> : null}
							</a>
						))}
					</div>
					<h2>Summer Schedule</h2>
					<StudyGroupSchedule />
				</React.Fragment>
			)}
		</div>
	);
};

export default StudyGroups;
