#!/usr/bin/env node

process.stdin.setEncoding('utf8');

let $in = ''
process.stdin.on('data', (d) => {
  $in += d
});

process.stdin.on('end', () => {
	try {
		$in = JSON.parse($in)
	} catch (e) {}
  console.log(eval(process.argv[2]))
});