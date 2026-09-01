import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import importX from 'eslint-plugin-import-x'

export default [
	js.configs.recommended,
	importX.flatConfigs.recommended,
	prettierRecommended,
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'error',
			'no-console': 'off',
			'import-x/no-extraneous-dependencies': [
				'error',
				{ devDependencies: true },
			],
			'import-x/named': 'off',
		},
	},
	{
		ignores: ['dist/', 'coverage/'],
	},
]
