import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from '../react-vertical-timeline-component/dist-es6';
import '!style-loader!css-loader!../react-vertical-timeline-component/style.min.css';

import timelineElements from '../../timelineElements';

import classNames from '../../classNames';

import styles from './styles.less';

export default class Timeline extends React.Component {
	renderTimelineElement = ({ title, subtitle, date, icon: Icon, article }, index) => {
		const { openArticle } = this.props;
		return (
			<VerticalTimelineElement
				date={date}
				icon={<Icon />}
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				key={index}
				onClick={() => openArticle(article)}
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
				</div>
			</VerticalTimelineElement>
		)
	}
	
	render() {
		const { contentOpen } = this.props;

		return (
			<VerticalTimeline
				layout="1-column"
				className={classNames(
					styles.timelineRoot,
					contentOpen ? styles.timelineRootContentOpen : null
				)}
			>
				{timelineElements.map(this.renderTimelineElement)}
			</VerticalTimeline>
		)
	}
}
