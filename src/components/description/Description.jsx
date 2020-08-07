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
				<h1>Matheology: A Historical Timeline of the Relationship between Mathematics and Theology</h1>
				<h2>by Joseph Stewart, Mark Nguyen, and Mateo Langston Smith</h2>
				<IconButton onClick={goToApp}>
					<MdArrowDownward />
				</IconButton>
			</div>
		);
	}
}
