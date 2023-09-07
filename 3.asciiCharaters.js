function charactersInRange(char1, char2){


    
    let firstChar = char1.charCodeAt(0);
    let lastChar = char2.charCodeAt(0);
    let newArray = [];
    let firstInOrder = Math.min(firstChar, lastChar);
    let lastCharInOrder = Math.max(firstChar, lastChar);


    for (let i = firstInOrder+1; i < lastCharInOrder; i++) {
        let numberToChar = String.fromCharCode(i);
        newArray.push(numberToChar);

    }
    console.log(newArray.join(' '))
}
charactersInRange('a','d')
charactersInRange('#',':')
charactersInRange('C','#')
