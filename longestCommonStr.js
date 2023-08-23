const data = ["bitimer", "tmeri", "tvi"];

const commonStrings = (strings) => {
    let output = ''

    if (strings.length === 0) {
        return "";
    }

    let shortest = strings[0]
    strings.forEach((word, index) => {
        shortest = word.length > shortest ? shortest : strings[index]
    })
    
    for(let i = 0; i < shortest.length; i++) {
        const letter = shortest[i]
        if(strings.every(word => word.includes(letter))) {
            output += letter
        }
    }

    return output

};

const common = commonStrings(data);
console.log("Common Substring:", common);