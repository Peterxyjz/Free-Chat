function padZero(number) {
    return number.toString().padStart(2, '0');
}

export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}