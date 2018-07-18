#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const style = require('ansi-styles')

if (argv.h || argv.help || !argv._.length) {
	process.stdout.write(
`${style.bold.open}NAME${style.bold.close}
	node-e - Helper for quick CLI scripting using node

${style.bold.open}SYNOPSIS${style.bold.close}
	node-e <script>

${style.bold.open}DESCRIPTION${style.bold.close}
	The purpose of node-e is to help write quick CLI commands.
	And tries to avoid some of the boilerplate code that somes
	with non-blocking IO node.

${style.bold.open}Global vars${style.bold.close}
	$in
	    string - stdin as a string

${style.bold.open}Examples${style.bold.close}
	node-e 1+1 => 2
	    Evaluates javascript expressions and passes the result to stdout

	echo Hello | node-e '$in + " world!"' => "Hello world!"
	    Content from stdin is assigned to $in variable

	cat data.json | node-e '$in.foo.bar'
	    Parses stdin as JSON by default
`)
process.exit(0)
}

const removeTrailingNewline = (x) => x.slice(0, -1)

const evaluate = () => {
	$in = removeTrailingNewline($in)
	try {
		$in = JSON.parse($in)
	} catch (e) {}
	// console.error('foo', $in)
	console.log(JSON.stringify(eval(argv._[0])))
}

process.stdin.setEncoding('utf8');

let $in = ''
process.stdin.on('readable', () => {
	const chunk = process.stdin.read()
	if (chunk === null) {
		evaluate()
		process.exit(0)
	}

	$in += chunk
})

// process.stdin.on('end', () => {
// 	evaluate()
// });