import {transform} from 'babel-core'

//function cleanAST(ast) {
//	Object.keys(ast).forEach((key) => {
//		if (key === 'start' || key === 'end' || key === 'loc' || key === 'range') {
//			delete ast[key]
//		} else if (ast[key]) {
//			if (typeof ast[key] === 'object') {
//				cleanAST(ast[key])
//			}
//		}
//	})
//	return ast
//}

export default function(converterOptions={ plugins: ['./lib/plugins/rtag_to_jsx.js'] }, parserOptions={}) {
	if (parserOptions.presets)
		throw new Error(`The parserPlugins should not transform but contain the preset(s) ${parserOptions.presets}`)
	
	const transformingPlugins = (parserOptions.plugins || [])
		.filter(name => name.indexOf('transform-') === 0)

	if (transformingPlugins.length > 0)
		throw new Error(`The parserOptions should not transform but the plugins contain ${transformingPlugins}`)
	
	/** Converts with this plugin, then re-parses */
	function convert(source) {
    const options = Object.assign({}, { babelrc: false}, converterOptions);
		const {code} = transform(source, options);

		const {ast} = parseWithJSX(code)
		return {code, ast}
	}
	
	/** Only parses stuff */
	function parseWithJSX(source) {
    // Add opt when available.
    // https://github.com/babel/babel/pull/5592
    const generatorOpts = {};

		return transform(source, { babelrc: false, generatorOpts: generatorOpts, ...parserOptions })
	}
	
	return function convertTo(chai, utils) {
		chai.Assertion.addMethod('convertTo', function(expectedCode) {
			const sourceCode = utils.flag(this, 'object')
			const received = convert(sourceCode)
			
			//const sourceAST = cleanAST(received.ast.tokens)
			//const expectedAST = cleanAST(parseWithJSX(expectedCode).ast.tokens)
			//
			//const message = `
			//	code
			//
			//		${sourceCode}
			//
			//	does not convert to
			//
			//		${expectedCode}
			//
			//	but instead to
			//
			//		${received.code}
			//
			//	AST differences`
			
			//new chai.Assertion(sourceAST).to.deep.equal(expectedAST, message)
			
			new chai.Assertion(received.code).to.equal(expectedCode, `Code “${sourceCode}” converts wrongly`)
		})
	}
}
