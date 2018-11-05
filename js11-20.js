function firstLast6(array){
    if(array[0] == 6){
        return true;
    }
    if(array[array.length -1] == 6){
        return true;
    }
    return false;
}

function has23(array){
    if(array[0] == 3 || array[1] == 2){
        return true;
    }
    if(array[0] == 2 || array[1] == 3){
        return true;
    }
    return false;
}

function fix23(array){
    if(array[1] == 2 && array[2] == 3){
        array[2] == 0;
    }
    if(array[0] == 2 && array[1] == 3){
        array[1] == 0;
    }
    return array;
}

function countYZ(string) {
    string = string.toLowerCase();
    var count = 0;
    var strLength = string.length;
    for(var i = 0; i < strLength; i++) {
        if(string.substring(i, i+1) == " ") {
            if(string.substring(i-1, i) == "y" || string.substring(i-1, i) == "z") {
                count++;
            }
        }
    }
    if(string.substring(strLength-1, strLength) == "y" || string.substring(strLength-1, strLength) == "z") {
        count++;
    }
    return count;
}

function endOther(string1, string2){
    string1 = string1. toLowerCase();
    string2 =string2. toLowerCase();
    if(string1.length > string2.length) {
        if (string1.lastIndexOf(string2) == string1.length - string2.length) {
            return true;
        }
    }
        if(string2.length > string1.length) {
            if (string2.lastIndexOf(string1) == string2.length - string1.length) {
                return true;
            }
        }
        if(string1 == string2){
            return true;
        }
        return false;
}

function starOut(string){
    var answer = "";
    for(var i = 0; i < string.length ; i++){
        if(string[i] != "*" && string[i +1] != "*" && string[i -1] != "*"){
            answer = answer + string[i];
        }
    }
    return answer;
}

function getSandwich(string){
    if(string.indexOf("bread") == string.lastIndexOf("bread")){
        return "";
    }
    if(string.indexOf("bread") != -1 == string.lastIndexOf("bread") != -1){
        return string.substring(string.indexOf("bread") + 5, string.lastIndexOf("bread"))
    }
    return "";
}
function canBalance(array){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < array.length; i++){
        sum1 = sum1 + array[i];
        for(var j = i + 1; j < array.length; i++){
            sum2 = sum2 + array[j];
        }
        if(sum1 == sum2){
            return true;
        }
    }
    return false;
}

function countClumps(array){
    var count = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i + 1 ]){
            var l = i + 1;
            while(array[i] == array[l]){
                l++;
            }
            i = l - 1;
            count ++;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    if(c - b == b - a){
        return true;
    }
    if(b - a == a - c){
        return true;
    }
    if(a - b == b - c){
        return true;
    }
    if(c - a == a - b){
        return true;
    }
    if(a - c == c - b){
        return true;
    }
    if(b - c == c - a){
        return true;
    }
    return false;
}