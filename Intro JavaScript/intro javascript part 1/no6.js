// No 6
function printHobbies(listHobi) {
    for (var i = 0; i < listHobi.length; i++) {
        console.log("Hobi ke " + (i + 1) + " adalah " + listHobi[i]);
    }
}

var hobiSaya = ["Bermain game", "Olah Raga", "Membaca"];
printHobbies(hobiSaya);