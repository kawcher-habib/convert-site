//Problem No -1 Kilometer To Meter

function kilometerToMeter(inputValue){
            
            var kilometer = inputValue;
            var meter = kilometer * 1000;
            return meter;

}
    var result = kilometerToMeter(10);

//Problem No -2 Budget Calculator

function budgetCalculator(watch, phone, laptop){
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        return watchPrice + phonePrice + laptopPrice;
}
    var totalBudget = budgetCalculator(10,7,4);
    console.log(totalBudget)

// Problem No -3 Hotel Cost

function hotelCost(days){
        var cost = 0;
        if(days<=10){
            cost = days * 100;
        }else if(days<=20){
            var firstTenDay = 10 * 100;
            var remainingDays = days - 10;
            var secondTenDay = remainingDays * 80;
            cost = firstTenDay + secondTenDay;
        }else{
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var remainingDays = days - 20;
            var nextDays = remainingDays * 50;
            cost = firstTenDay + secondTenDay + nextDays;
        }
       return cost;
}
    var totalCost = hotelCost(90);
    
//Problem No -4 megaFriend

function megaFriend(arrayValue) {
     var maxLength = 0;
     var largeName = '';
     for(var i = 0; i<arrayValue.length; i++){
        var element = arrayValue[i].length;
        if(element > maxLength){
            maxLength = element;
            largeName = arrayValue[i]
        }
 
     }
     return maxLength, largeName;
 }
     var frindsName =["Kawcher","Habib","Adnan-Habib","Rafi","Adnan-Rafi"];
     var largeLengthName = megaFriend(frindsName);
     