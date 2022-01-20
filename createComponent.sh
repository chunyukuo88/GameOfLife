#!/bin/bash

echo "+-------------------------------------------------------------------+"
echo "|   Create a component, its utils file, and test suites for both:   |"
echo "+-------------------------------------------------------------------+"

read -p "Name your new component:" componentName
read -p "Confirm you want to create a component called $componentName [y/n]:" create
if [ "$create" == "y" ]
  then
    mkdir src/lib/"$componentName"
    cd src/lib/"$componentName"
    cat ../__Template__/Template.svelte > "$componentName".svelte
    cat ../__Template__/Template.spec.ts > "$componentName".spec.ts
    cat ../__Template__/TemplateUtils.ts > "$componentName"Utils.ts
    cat ../__Template__/TemplateUtils.spec.ts > "$componentName"Utils.spec.ts
    for file in *;
    do
       sed -i "" "s/__Template__/$componentName/g" $file
    done
  else exit 1
fi