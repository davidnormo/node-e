# node-eval

A cmd for quick node scripting.

## Install

```
npm i -g node-eval
```

## Usage

```
NAME
        node-eval - Helper for quick CLI scripting using node

SYNOPSIS
        node-eval <script>

DESCRIPTION
        The purpose of node-eval is to help write quick CLI commands.
        And tries to avoid some of the boilerplate code that somes
        with non-blocking IO node.

Global vars
        $in
            string - stdin as a string

Examples
        echo Hello | node-eval '$in + " world!"'

        cat data.json | node-eval '$in.foo.bar'
            Parses stdin as JSON by default
```