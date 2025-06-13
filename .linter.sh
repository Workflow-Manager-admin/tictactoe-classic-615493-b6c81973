#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-615493-b6c81973/tictactoe_classic
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

