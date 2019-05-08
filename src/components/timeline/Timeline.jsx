import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from '../react-vertical-timeline-component/dist-es6';
import '!style-loader!css-loader!../react-vertical-timeline-component/style.min.css';

import timelineElements from '../../timelineElements';

import styles from './styles.less';

const eraColors = {
	'modern': '#6A9CD2',
	'scientific_revolution': '#CE5C6D',
	'classical': '#F8DF89',
};

export default class Timeline extends React.Component {
	renderTimelineElement = ({
		title,
		subtitle,
		date,
		icon: Icon,
		article,
		heroUrl,
		heroTitle,
		who,
		ontology,
		theology,
		era,
		author,
	}, index, array) => {
		const { openArticle } = this.props;
		return (
			<VerticalTimelineElement
				date={date}
				icon={<Icon />}
				iconStyle={{ background: eraColors[era], color: '#fff' }}
				key={index}
				onClick={() => openArticle(
					article,
					heroUrl,
					heroTitle,
					index - 1,
					index + 1,
					author
				)}
				className={styles.timelineElement}
			>
				<div
					className={styles.content}
				>
					<h1 className={styles.title}>
						{title}
					</h1>
					<h2 className={styles.subtitle}>
						{subtitle}
					</h2>
					<h3 className={styles.sectionTitle}>Who are they?</h3>
					<p className={styles.sectionText}>{who}</p>
					<h3 className={styles.sectionTitle}>What is math to them?</h3>
					<p className={styles.sectionText}>{ontology}</p>
					<h3 className={styles.sectionTitle}>What is the theology of math?</h3>
					<p className={styles.sectionText}>{theology}</p>
				</div>
			</VerticalTimelineElement>
		)
	}
	
	render() {
		return (
			<VerticalTimeline
				layout="1-column"
				className={styles.timelineRoot}
			>
				{timelineElements.map(this.renderTimelineElement)}
			</VerticalTimeline>
		)
	}
}
