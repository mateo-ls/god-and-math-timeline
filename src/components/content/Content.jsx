import React from 'react';
import Markdown from 'react-markdown';

import styles from './styles.less';

export default class Content extends React.Component {
	render() {
		const { source } = this.props;
		console.log(source);

		return (
			<div className={styles.root}>
				<Markdown
					source={source}
				/>
			</div>
		)
	}
}
