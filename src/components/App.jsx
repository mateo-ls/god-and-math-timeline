import React from 'react';
import Content from './content/Content';
import Timeline from './timeline/Timeline';
import Description from './description/Description';
import classNames from '../classNames';

import styles from './app.less';

export default class App extends React.Component {
	state = {
		contentOpen: false,
		loaded: false,
		content: '',
		heroUrl: '',
		heroTitle: '',
		view: 'intro',
	}

	componentDidMount = () => {
		// Wait a sec to mount the content section because
		// of the style lag
		setTimeout(
			() => this.setState({ loaded: true }),
			250
		);
	}

	openArticle = (content, heroUrl, heroTitle) => {
		this.setState({
			content,
			contentOpen: true,
			heroUrl,
			heroTitle,
		});
	}

	closeArticle = () => {
		this.setState({
			contentOpen: false,
		})
	}

	goToApp = () => {
		this.setState({ view: 'app' });
	}

	render() {
		const {
			contentOpen,
			loaded,
			content,
			heroUrl,
			heroTitle,
			view,
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
							>
								<Content
									source={content}
									heroUrl={heroUrl}
									heroTitle={heroTitle}
									closeArticle={this.closeArticle}
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
