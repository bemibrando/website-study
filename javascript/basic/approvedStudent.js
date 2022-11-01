const grade1 =  7;
const grade2 =  7;
const grade3 =  9;

let average = (grade1 + grade2 + grade3) / 3;

let approved = "Under Analysis";

if (average < 5)
{
    approved = "Failed";
}
else if (average > 7)
{
    approved = "Approved";
}
else {
    approved = "Need to do Retake Test";
}

console.log(average.toFixed(1), "||", approved);