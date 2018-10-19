# Unit Batch Modifier @ RA2_YR_WC_S_Revenge

A tool to modify given units in ini files in batch.

## Prerequisite
node.js > 6.9.0

## Usage

After downloading / compiling the program,

- Put the input ini files to the `in` folder.

- Create a new config file following the given example in `config` folder

  - Specify which files needed to import
  - We need to know which units are included to modify, so please specify which sections needed to import (e.g. `InfantryTypes`, `VehicleTypes`, `AircraftTypes`)
  - Choose an output file name
  - (The following 3 sections are optional based on your own needs.)
  - Specify the attributes to `Add`. (These attributes will be added to all the included units. If an attribute already exists, it will be overrided.)
  - Specify the attributes to `Change`. (These attributes will be added to the units ONLY when original attributes exist)
  - Specify the attrubute values to `Modify`. (Can only be number-like attributes. You also need to specify what operation (i.e. `+` or `*`) you would like to perform)

- Use node.js to run `index.js`.

- Find the output file in the `out` folder.

## Development

### Compilation

On first clone

(The `npm` in all the following commands can be replaced by `yarn`)

``` bash

npm install 
```


Build the program

``` bash

npm run build

```

Start the batch work

``` bash

npm run start

```