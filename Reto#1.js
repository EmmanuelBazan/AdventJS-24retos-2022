const gifts = ['book', 'game', 'socks']

function wrapping(gifts = []) {
    return gifts.map((item) => {
        const char = "*".repeat(item.length + 2);
        const newItem = char+"\n*"+item+"*\n"+char;
        return newItem;
    });
}

console.log(wrapping(gifts));