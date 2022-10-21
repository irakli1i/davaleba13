//var income =4001
//if (income < 2000) {
//    alert("საშუალოზე დაბალი")
//}
//else if (income >= 2000 && income <= 4000) {
//    alert("sashualo xelpasi")
//}
//else {
//    alert("kai xelpasi")
//}

//var income = 1001;
//if (income > 50) {
//    var message= "dabali"
//    alert(message)
//}
//else if (income >=500 && income <= 1000) {
//    var message="sashvalo"
//    alert(message)
//}
//else if (income >=999 && income <=1001) {
//    var message="kai"
//    alert(message)
//}

var strsum=prompt ("sheiyvane tanxa")

if(strsum<=100){
    alert("dabali")
}
else if(strsum>100 && strsum<=500){
    alert("sashualo")
}
else{
    alert("magali")
}


var mas=[1,4,18,24,15,2,3,19,55];
for(var i=0; i < mas.length; i++){
    if (mas[i]%2==0){
        document.write(mas[i]+" ");
    }
}
