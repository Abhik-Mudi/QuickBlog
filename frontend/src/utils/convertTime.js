export function formatDate(isoString) {
    const date = new Date(isoString);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Kolkata' // Adjust if needed
    };

    return date.toLocaleDateString('en-IN', options);
}

