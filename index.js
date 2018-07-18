#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const style = require('ansi-styles')

if (argv.h || argv.help || !argv._.length) {
	process.stdout.write(
`${style.bold.open}NAME${style.bold.close}
	node-eval - Helper for quick CLI scripting using node

${style.bold.open}SYNOPSIS${style.bold.close}
	node-eval <script>

${style.bold.open}DESCRIPTION${style.bold.close}
	The purpose of node-eval is to help write quick CLI commands.
	And tries to avoid some of the boilerplate code that somes
	with non-blocking IO node.

${style.bold.open}Global vars${style.bold.close}
	$in
	    string - stdin as a string

${style.bold.open}Examples${style.bold.close}
	echo Hello | node-eval '$in + " world!"'

	cat data.json | node-eval '$in.foo.bar'
	    Parses stdin as JSON by default
`)
process.exit(0)
}

const removeTrailingNewline = (x) => x.slice(0, -1)

process.stdin.setEncoding('utf8');

let $in = ''
process.stdin.on('data', (d) => {
  $in += d
});

process.stdin.on('end', () => {
	$in = removeTrailingNewline($in)
	try {
		$in = JSON.parse($in)
	} catch (e) {}
  console.log(eval(argv._[0]))
});