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
		toIntroSection: false,
		viewLoaded: true,
		author: '',
	}

	componentDidMount = () => {
		// Wait a sec to mount the content section because
		// of the style lag
		setTimeout(
			() => this.setState({ loaded: true }),
			250
		);
	}

	openArticle = (content, heroUrl, heroTitle, previousIndex, nextIndex, author) => {
		this.setState({
			content,
			contentOpen: true,
			heroUrl,
			heroTitle,
			nextIndex,
			previousIndex,
			author,
		}, () => {
			if (this.contentContainer) {
				this.contentContainer.scrollTo(0, 0);
			}
		});
	}

	navigateToArticle = direction => () => {
		const index = this.state[`${direction}Index`];
		if (timelineElements[index]) {
			const { article, heroUrl, heroTitle, author } = timelineElements[index];
			this.openArticle(article, heroUrl, heroTitle, index - 1, index + 1, author);
		}
	}

	closeArticle = () => {
		this.setState({
			contentOpen: false,
		})
	}

	goToApp = () => {
		this.setState(
			{ view: 'app', viewLoaded: false },
			() => setTimeout(() => {
				this.setState({ viewLoaded: true });
			}, 500)		
		);
	}

	goToTitle = () => {
		this.setState(
			{
				toIntroSection: true,
				viewLoaded: false,
			}
		);
	}

	componentDidUpdate(prevProps, prevState) {
		const { toIntroSection, viewLoaded, view } = this.state;

		// If we have just triggered the transition from app to intro section, continue into the next
		// step by setting the view and ending the setup phase
		if (toIntroSection && !viewLoaded && view === 'app') {
			setImmediate(() =>
				this.setState({
					view: 'intro',
					toIntroSection: false,
				})
			);
		}
		
		// If the animation has been triggered set the timeout to record that the view has been loaded
		else if (!toIntroSection && !viewLoaded && view === 'intro') {
			setTimeout(
				() => this.setState({ viewLoaded: true }),
				500
			);
		}
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
			viewLoaded,
			toIntroSection,
			author,
		} = this.state;

		return (
			<div
				className={styles.root}
			>
				<div className={classNames(
					styles.introSection,
					view === 'app' ? styles.introSectionHidden : null,
					viewLoaded && view === 'app' ? styles.viewLoaded : null,
					toIntroSection ? styles.toIntroSection : null
				)}>
					<Description
						goToApp={this.goToApp}
					/>
				</div>
				{loaded ? 
					<div
						className={classNames(
							styles.appSection,
							view === 'app' ? styles.appSectionActive : null,
							viewLoaded && view === 'app' ? styles.viewLoaded : null,
							toIntroSection ? styles.toIntroSection : null
						)}
					>
						<div
							className={classNames(
								styles.timeline,
								contentOpen ? styles.timelineOpen : null,
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
									author={author}
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
