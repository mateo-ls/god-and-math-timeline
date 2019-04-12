import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { MdArrowDownward } from 'react-icons/md';

import styles from './styles.less';

export default class Description extends React.Component {
	render() {
		const { goToApp } = this.props;
		return (
			<div
				className={styles.root}
			>
				<h1>A Historical Timeline of the Relationship of Theology and Mathematics</h1>
				<h2>A integration seminar project by Joseph Stewart and Mark Nguyen</h2>
				<IconButton onClick={goToApp}>
					<MdArrowDownward />
				</IconButton>
			</div>
		);
	}
}
