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
    cat ../Template/Template.svelte > "$componentName".svelte
    cat ../Template/Template.spec.ts > "$componentName".spec.ts
    cat ../Template/TemplateUtils.ts > "$componentName"Utils.ts
    cat ../Template/TemplateUtils.spec.ts > "$componentName"Utils.spec.ts
    for FILE in *
    do
       sed -i "s/Template/$componentName/g" $FILE
    done
  else exit 1
fi