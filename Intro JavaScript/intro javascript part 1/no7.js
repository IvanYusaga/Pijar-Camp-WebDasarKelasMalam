// No 7
const checkPassingGrade = (grade) => {
    if (grade >= 75) {
        return "Selamat, anda lolos!";
    } else {
        return "Anda tidak lolos!";
    }
};

const gradeCheckMessage = checkPassingGrade(80);

console.log(gradeCheckMessage);
