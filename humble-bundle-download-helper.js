// ==UserScript==
// @name         Humble Bundle Download Helper
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  Tampermonkey script to copy curl ready links to clipboard
// @author       https://github.com/scottlimmer
// @match        https://www.humblebundle.com/downloads?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=humblebundle.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fromHTML(htmlString) {
        let div = document.createElement('div')
        div.innerHTML = htmlString
        return div.firstChild;
    }

    function addButton() {
        let bulkDownloadBtn = document.getElementsByClassName('js-bulk-download')[0]
        let copyLinksBtn = fromHTML('<button class="button-v2 rectangular-button gray" style="margin-left: 4px">Copy links</button>')
        copyLinksBtn.onclick = outputLinks
        bulkDownloadBtn.after(copyLinksBtn)
    }

    function outputLinks() {
        let linkText = '';
        let selectedType = document.getElementsByClassName('select2-selection__rendered')[0].textContent
        let tags = Array.from(document.getElementsByTagName('a'))
        tags = tags.filter((a) => a.text.trim().match(selectedType))
        tags.forEach(function(tag) {
            linkText += 'curl.exe -O "' + tag.href + '"\n'
        })
        let textArea = fromHTML('<textarea style="width: 100%; height: 300px; display: none"></textarea>');
        textArea.textContent = linkText;

        // Textarea needs to be in document to be 'selectable'
        document.getElementsByClassName('dltype')[0].after(textArea)
        textArea.select();
        navigator.clipboard.writeText(textArea.value);

        textArea.remove();

    }
    setTimeout(addButton, 2000);
})();
