import React from 'react';
import Markdown from 'react-markdown';

import styles from './styles.less';

export default class Content extends React.Component {
	render() {
		const { source } = this.props;

		return (
			<div className={styles.root}>
				<div className={styles.content}>
					<Markdown
						source={source}
					/>
				</div>
			</div>
		)
	}
}
