# Merge INI @ @ RA2_YR_WC_S_Revenge

Merge INI files into 1.

## Prerequisite

[deno](https://github.com/denoland/deno) > 1.0.0

## How to use this tool

Step 1: Place all your ini files under `in` folder, and this tool will scan all the files in that folder, then filter out the ini files for you

Step 2: Run the following command:

``` shell
deno run --allow-read --allow-write --unstable app.ts
```
Step 3: Check out the `out` folder, and you can find the merged file in `result.ini`
