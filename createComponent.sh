#!/bin/bash

echo "+-------------------------+"
echo "|   Create a component:   |"
echo "+-------------------------+"

read -p "Name your new component:" componentName
read -p "Confirm you want to create a component called $componentName [y/n]:" create
if [ "$create" == "y" ]
  then
    mkdir src/lib/"$componentName"
    cd src/lib/"$componentName"
    touch "$componentName".svelte
    touch "$componentName".spec.ts
    touch "$componentNameUtils".spec.ts
    touch "$componentNameUtils".ts
  else exit 1
fi