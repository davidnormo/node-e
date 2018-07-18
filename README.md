# node-e

A cmd for quick node scripting.

## Install

```
npm i -g @davidnormo/node-e
```

## Usage

```
NAME
        node-e - Helper for quick CLI scripting using node

SYNOPSIS
        node-e <script>

DESCRIPTION
        The purpose of node-e is to help write quick CLI commands.
        And tries to avoid some of the boilerplate code that somes
        with non-blocking IO node.

Global vars
        $in
            string - stdin as a string

Examples
        node-e 1+1 => 2
            Evaluates javascript expressions and passes the result to stdout

        echo Hello | node-e '$in + " world!"' => "Hello world!"
            Content from stdin is assigned to $in variable

        cat data.json | node-e '$in.foo.bar'
            Parses stdin as JSON by default
```