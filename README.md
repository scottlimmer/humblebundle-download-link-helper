# Humble Bundle Download Link Helper
Tampermonkey script to copy curl ready links to clipboard ready to paste in your terminal for download.

The default `Bulk download` button creates a `Save as` dialog for each files in bundle. This is annoying and often flaky.

## Features
* Adds `Copy Links` button next to `Bulk Download` button
* Links generated will respect the selected document type in the dropdown.
  * I.e. EPUB will only copy links for EPUB files.

## Functionality
Clicking `Copy Links` button:
* Generates a list of curl commands for each file in the bundle, then
* copies to the clipboard.

## Link format
```
curl.exe -O "<signed-url-here>"
```
