import React from 'react';
import Content from './content/Content';
import Timeline from './timeline/Timeline';
import Description from './description/Description';
import ColorLegend from './color-legend/ColorLegend';
import classNames from '../classNames';

import IconButton from '@material-ui/core/IconButton';
import { MdArrowUpward } from 'react-icons/md';

import timelineElements from '../timelineElements';

import styles from './app.less';

export default class App extends React.Component {
	state = {
		contentOpen: false,
		loaded: false,
		content: '',
		heroUrl: '',
		heroTitle: '',
		view: 'intro',
		previousIndex: null,
		nextIndex: null,
	}

	componentDidMount = () => {
		// Wait a sec to mount the content section because
		// of the style lag
		setTimeout(
			() => this.setState({ loaded: true }),
			250
		);
	}

	openArticle = (content, heroUrl, heroTitle, previousIndex, nextIndex) => {
		this.setState({
			content,
			contentOpen: true,
			heroUrl,
			heroTitle,
			nextIndex,
			previousIndex,
		}, () => {
			if (this.contentContainer) {
				this.contentContainer.scrollTo(0, 0);
			}
		});
	}

	navigateToArticle = direction => () => {
		const index = this.state[`${direction}Index`];
		if (timelineElements[index]) {
			const { article, heroUrl, heroTitle } = timelineElements[index];
			this.openArticle(article, heroUrl, heroTitle, index - 1, index + 1);
		}
	}

	closeArticle = () => {
		this.setState({
			contentOpen: false,
		})
	}

	goToApp = () => {
		this.setState({ view: 'app' });
	}

	goToTitle = () => {
		this.setState({ view: 'intro' });
	}

	setContentRef = ref => {
		this.contentContainer = ref;
	}

	render() {
		const {
			contentOpen,
			loaded,
			content,
			heroUrl,
			heroTitle,
			view,
			previousIndex,
			nextIndex,
		} = this.state;

		return (
			<div
				className={styles.root}
			>
				<div className={classNames(
					styles.introSection,
					view === 'app' ? styles.introSectionHidden : null
				)}>
					<Description
						goToApp={this.goToApp}
					/>
				</div>
				{loaded ? 
					<div
						className={classNames(
							styles.appSection,
							view === 'app' ? styles.appSectionActive : null
						)}
					>
						<div
							className={classNames(
								styles.timeline,
								contentOpen ? styles.timelineOpen : null
							)}
						>
							<div className={styles.buttonContainer}>
								<IconButton onClick={this.goToTitle}>
									<MdArrowUpward />
								</IconButton>
							</div>
							<ColorLegend />
							<Timeline
								contentOpen={contentOpen}
								openArticle={this.openArticle}
								getTimelineRef={this.setTimelineRef}
							/>
						</div>
						{loaded ?
							<div
								className={classNames(
									styles.content,
									contentOpen ? styles.contentOpen : null
								)}
								ref={this.setContentRef}
							>
								<Content
									source={content}
									heroUrl={heroUrl}
									heroTitle={heroTitle}
									closeArticle={this.closeArticle}
									onNextArticle={timelineElements[nextIndex] ? this.navigateToArticle('next') : null}
									onPreviousArticle={timelineElements[previousIndex] ? this.navigateToArticle('previous') : null}
								/>
							</div>
							:
							null
						}
					</div>
					:
					null
				}
			</div>
		);
	}
}
