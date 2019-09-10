function binarySearch(arrParam, number) {
    while (start < end) {
        while (count < 100){
            let mid = Math.floor((start + end) / 2);
            if (number === arrParam[mid]) {
                return mid;
            } else if (number < arrParam[mid]) {
                end = mid - 1;
            } else if (number > arrParam[mid]) {
                start = mid + 1;
            }
        }

    }

}

function doBinary(arrParam,number) {
    while (count < 100){
        let index = binarySearch(arr,numRandom);
        alert(numRandom);
        let guessNum = prompt("Nhập số: ");
        if (guessNum<arr[index]){
            alert("Quá bé");
        }
        else if (guessNum>arr[index]){
            alert("Quá lớn");
        }
        else if (guessNum == arr[index]){
           return  alert("Chuẩn rồi.");

        }
    }
}