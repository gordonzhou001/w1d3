function countLetters(input){
    //remove spaces between words
    var newinput = input.split(" ");
    newinput = newinput.join("")
    // do the loop
    var Output ={}
    for (i = 0; i < newinput.length; i++){
        if (Output[newinput[i]])
        Output[newinput[i]] += 1
        else {
            Output[newinput[i]] = 1
        }
    }

        console.log(Output)
    }


countLetters ("Lighthouse in the house");