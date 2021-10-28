// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

// cSpell:disable-next-line
const alphabet = [...'$abcdefghijklmnopqrstuvwxyz -'];


function customAlphabetCompare (a, b) {
	let result = 0;

	for (var index = 0; index < Math.min(a.length, b.length); index++) {
		if (result) {
			break;
		}

		const charA = alphabet.indexOf(a.charAt(index).toLocaleLowerCase());
		const charB = alphabet.indexOf(b.charAt(index).toLocaleLowerCase());

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
	.sort((a, b) => {
		a = a.label || a.id;
		b = b.label || b.id;
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
