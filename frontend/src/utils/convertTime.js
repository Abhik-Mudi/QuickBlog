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

