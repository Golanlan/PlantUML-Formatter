function formatContent(content) {
    let indentLevel = 0;
    let isNoteBlock = false;
    let result = '';

    for (let line of content.split('\n')) {
        const trimmedLine = line.trim();

        if (trimmedLine === '') continue;

        // Handle end of blocks
        if (trimmedLine.startsWith('end') || trimmedLine === '}') {
            if (isNoteBlock && trimmedLine === 'end note') isNoteBlock = false;
            indentLevel = Math.max(indentLevel - 1, 0);
        }

        // Add indentation to the current line
        result += '    '.repeat(indentLevel) + trimmedLine + '\n';

        // Handle start of blocks
        if (
            trimmedLine.startsWith('group') ||
            trimmedLine.startsWith('alt') ||
            trimmedLine.startsWith('opt') ||
            trimmedLine.startsWith('skinparam') ||
            trimmedLine === '{' ||
            (trimmedLine.startsWith('note') && !trimmedLine.endsWith('note') && !trimmedLine.includes(':'))
        ) {
            indentLevel++;
            if (trimmedLine.startsWith('note')) isNoteBlock = true;
        }
    }

    return result;
}

window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    const codeInput = document.getElementById("codeInput");
    const convertedCode = document.getElementById("convertedCode");

    convertBtn.addEventListener("click", function() {
        try {
            const inputCode = codeInput.value;
            const converted = formatContent(inputCode);
            convertedCode.value = converted;
        } catch(error) {
            alert("An error occurred while formatting your code: " + error.message);
        }
    });
};