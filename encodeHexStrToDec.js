function encodeHexStrToDec (p_str, p_radix) {
    // The index of the symbol what the hex value would be in base 10. Eg: "g" === 16, "z" === 35.
    let alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", 
                    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let convertedNum = 0;
    
    p_radix = p_radix || 36;

    for (let t = 0; t < p_str.length; t++){

        if (alphabet.indexOf(p_str[t]) !== -1 && alphabet.indexOf(p_str[t]) < p_radix){

              convertedNum += (p_radix**(p_str.length-t-1) * alphabet.indexOf(p_str[t]));

              if (!Number.isSafeInteger(convertedNum)){

                  throw new Error('Generated number can not be larger than '+ Number.MAX_SAFE_INTEGER); 
              }

        } else {

            throw new Error('"'+ p_str[t] +'" is not a valid base'+ p_radix +' symbol');
        }
    }

    return convertedNum;
}
