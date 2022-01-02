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
    cat ../Template/Template.svelte > "$componentName".svelte
    cat ../Template/Template.spec.ts > "$componentName".spec.ts
    for FILE in *
    do
       sed -i "s/Template/$componentName/g" $FILE
    done
#    cat ../TemplateUtils.ts > "$componentNameUtils".ts
#    cat ../TemplateUtils.spec.ts > "$componentNameUtils".spec.ts
  else exit 1
fi