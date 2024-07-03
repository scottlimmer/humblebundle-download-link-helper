# Humble Bundle Download Link Helper
Tampermonkey script to copy curl ready links to clipboard.

Bulk download button issues **n** `Save as` dialogs for files in bundle. This is annoying and flaky.

This script introduces a `Copy Links` button that copies a list of `curl` dowload commands to the clipboard.

Links are in the format:
```
curl.exe -O "<signed-url-here>"
```
