document.getElementById('checkButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const grammarResult = document.getElementById('grammarResult');

    if (inputText.trim() === '') {
      grammarResult.textContent = 'Please enter text to check.';
      grammarResult.className = "warning";
      return;
    }
    // Simple check for common sentence structure
    const sentences = inputText.trim().split(/[.!?]+/);
    let errors = '';
    for(const sentence of sentences){
        const trimmedSentence = sentence.trim();
          if(trimmedSentence === "") continue;
          const words = trimmedSentence.split(/\s+/);
          if (words.length > 0 && words[0] === words[0].toLowerCase()) {
            errors += `Sentence "${trimmedSentence}" should start with a capital letter. `;
        }
    }
    if(errors) {
       grammarResult.textContent = errors
       grammarResult.className = 'error';
    } else {
      grammarResult.textContent = 'No errors found (for this basic check).';
       grammarResult.className = "";
    }
});