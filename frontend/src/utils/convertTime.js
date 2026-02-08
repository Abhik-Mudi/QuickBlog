export function formatDate(isoString) {
    const date = new Date(isoString);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Kolkata' 
    };

    return date.toLocaleDateString('en-IN', options);
}

export function extractPlainText(content, contentType = 'rich') {
    if (!content) return '';
    
    // for markdown
    if (contentType === 'markdown') {
        return content
            .replace(/#{1,6}\s+/g, '') // Remove headers
            .replace(/\*\*|__/g, '') // Remove bold
            .replace(/\*|_/g, '') // Remove italics
            .replace(/`{3}[\s\S]*?`{3}/g, '') // Remove code blocks
            .replace(/`/g, '') // Remove inline code
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
            .replace(/\s+/g, ' ') // Remove extra whitespace
            .trim();
    }
    
    // for html/rich text
    const temp = document.createElement('div');
    temp.innerHTML = content;
    
    let text = temp.textContent || temp.innerText || '';
    text = text.replace(/\s+/g, ' ').trim();
    
    return text;
}

