#!/usr/bin/env node

const command = require('./src/command');

new command()
    .register();