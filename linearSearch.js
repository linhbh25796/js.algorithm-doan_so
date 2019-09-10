function linearSearch() {

    for (let i = 0; i < arr.length; i++) {
        if (count < 50) {
            let guessNum = prompt("Số chọn: ");
            if (guessNum < numRandom) {
                alert("Quá nhỏ" + ".Đã đoán " + count + "lần");
            } else if (guessNum > numRandom) {
                alert("Quá lớn" + ".Đã đoán " + count + "lần")
            } else if (guessNum == numRandom) {
                alert("Chuẩn rồi.");
                return true;
            }
            count++;
        } else {
            alert("Quá số lần đoán");
            return false;
        }
    }


}