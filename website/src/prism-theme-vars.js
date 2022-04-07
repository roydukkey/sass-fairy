// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

const use = (namespace, name, property) => {
	const parts = [namespace, name];

	if (property !== 'color') {
		parts.push(property);
	}

	return `var(--${parts.join('-')})`;
};

const style = (namespace, names, properties) => ({
	types: names,
	style: properties.reduce((accumulator, property) => {
		accumulator[property] = use(namespace, names[0], property);
		return accumulator;
	}, {})
});

const create = (namespace, ...scopes) => ({
	plain: {
		color: `var(--${namespace}-foreground)`,
		backgroundColor: `var(--${namespace}-background)`
	},
	styles: scopes.map((scope) => Array.isArray(scope)
		? style(namespace, scope, ['color'])
		: style(namespace, scope.types, scope.styles)
	)
});

module.exports = create(
	'prism',
	['atrule', 'at-rule'],
	['atrule-id'],
	['attr-name'],
	['attr-value'],
	['block-comment'],
	{
		types: ['bold'],
		styles: ['fontWeight']
	},
	['boolean'],
	['builtin'],
	['cdata'],
	['changed'],
	['char'],
	['class-name'],
	['comment'],
	['constant'],
	['control'],
	['control-flow'],
	['deleted'],
	['directive'],
	['doctype'],
	['entity'],
	['function'],
	['function-name'],
	['function-variable'],
	['hexcode'],
	['important'],
	['imports'],
	['inserted'],
	['interpolation-punctuation'],
	{
		types: ['italic'],
		styles: ['fontStyle']
	},
	['keyword'],
	['module'],
	['maybe-class-name'],
	['namespace'],
	['number'],
	['operator'],
	['parameter'],
	['placeholder'],
	['prolog'],
	['property'],
	['punctuation'],
	['regex'],
	['regex-flags'],
	['rule'],
	['selector'],
	['selector-class'],
	['selector-id'],
	['shebang'],
	['statement'],
	['string'],
	['symbol'],
	['tag'],
	['tag-id'],
	['template-punctuation'],
	['unit'],
	['url'],
	['variable']
);
