import * as GI_ICONS from 'react-icons/gi';
import * as FA_ICONS from 'react-icons/fa';
import * as IO_ICONS from 'react-icons/io';
import * as MD_ICONS from 'react-icons/md';
import * as TI_ICONS from 'react-icons/ti';
import * as GO_ICONS from 'react-icons/go';
import * as FI_ICONS from 'react-icons/fi';
import * as WI_ICONS from 'react-icons/wi';
import * as DI_ICONS from 'react-icons/di';

import parser from 'parse-md';

const icons = {
	gi: GI_ICONS,
	fa: FA_ICONS,
	io: IO_ICONS,
	md: MD_ICONS,
	ti: TI_ICONS,
	go: GO_ICONS,
	fi: FI_ICONS,
	wi: WI_ICONS,
	di: DI_ICONS,
};

const dateRegex = /((\d+)\s*(AD|BC)?\s*)(-(\s*(\d+)\s*(AD|BC)?))?/gi;

const files = require.context('../articles/', true, /\.md$/);

let items = [];
files.keys().forEach(file => {
	const article = require(`../articles/${file.split('/')[1]}`).default;
	const { metadata, content } = parser(article);

	let icon = icons.fa.FaCalculator;
	if (metadata.icon) {
		const iconSource = metadata.icon.substr(0, 2).toLowerCase();
		icon = icons[iconSource][metadata.icon];
	}

	const heroUrl = metadata.heroUrl || 'https://source.unsplash.com/1600x900/?bible';
	const heroTitle = metadata.heroTitle || metadata.subtitle;
	
	let startDateInt = -Infinity;

	if (metadata.date) {
		const regexResults = dateRegex.exec(metadata.date);
		dateRegex.lastIndex = 0;

		if (!isNaN(regexResults[2])) {
			startDateInt = parseInt(regexResults[2]);
			if (regexResults[3].toLowerCase() === 'bc') {
				startDateInt = startDateInt * -1;
			}
		}
	}

	items.push({
		...metadata,
		icon,
		article: content,
		heroUrl,
		startDateInt,
		heroTitle,
	});
});

items.sort((a, b) => a.startDateInt - b.startDateInt);

export default items;
