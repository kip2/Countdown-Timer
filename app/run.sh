#!/bin/bash
npm run build

{
    sleep 1
    open http://localhost:3000
} & 

serve -l 3000 ./dist
