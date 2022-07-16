// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.


// cSpell:disable-next-line
const alphabet = [...'$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -'];


function customAlphabetCompare (a, b) {
	let result = 0;

	for (var index = 0; index < Math.min(a.length, b.length); index++) {
		if (result) {
			break;
		}

		const charA = alphabet.indexOf(a.charAt(index));
		const charB = alphabet.indexOf(b.charAt(index));

		result = (
			charA > -1 ? charA : alphabet.length + 1
		) - (
			charB > -1 ? charB : alphabet.length + 1
		);
	}

	return result || a.length - b.length;
}


function sortSidebarItems (items) {
  return items.map((item) => item.type === 'category'
    ? { ...item, items: sortSidebarItems(item.items) }
    : item
  )

	// Order custom alphabet
	.sort(($a, $b) => {
		let a = $a.label || $a.id;
		let b = $b.label || $b.id;

		if ($a.className?.includes('variable')) {
			a = `$${a}`;
		}

		if ($b.className?.includes('variable')) {
			b = `$${b}`;
		}

		return customAlphabetCompare(a, b);
	})

	// Bring 'API Overview' to the beginning
	.sort(({ id: a }, { id: b }) =>
		a?.includes('/overview') || a?.endsWith('-sizes') ? -1 :
		b?.includes('/overview') || b?.endsWith('-sizes') ? 1 : 0
	);
}


module.exports = async ({ defaultSidebarItemsGenerator, ...args }) => {
	return sortSidebarItems(await defaultSidebarItemsGenerator(args));
};
