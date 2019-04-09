import React from 'react';
import Content from './content/Content';
import Timeline from './timeline/Timeline';
import classNames from '../classNames';

import styles from './app.less';

export default class App extends React.Component {
	state = {
		contentOpen: false,
		loaded: false,
		content: '',
	}

	componentDidMount = () => {
		// Wait a sec to mount the content section because
		// of the style lag
		setTimeout(
			() => this.setState({ loaded: true }),
			250
		);
	}

	openArticle = content => {
		console.log(content);
		this.setState({
			content,
			contentOpen: true,
		}, () => {
			console.log('after state', this.state.content);
		});
	}
	
	render() {
		const {
			contentOpen,
			loaded,
			content,
		} = this.state;

		return (
			<div className={styles.root}>
				<Timeline
					contentOpen={contentOpen}
					openArticle={this.openArticle}
				/>
				{loaded ?
					<div
						className={classNames(
							styles.contentSection,
							contentOpen ? styles.contentSectionOpen : null,
							'hidden-content-section',
						)}
					>
						<Content
							source={content}
						/>
					</div>
					:
					null
				}
			</div>
		);
	}
}
