var ridesPerWeek;
var costPerRide ;
var monthlyCostWithoutCard;

function rideCost(){
	ridesPerWeek = document.getElementById("rideNumber").value;
	monthlyCostWithoutCard = ridesPerWeek * 4 * 2.75;
	cardCalc();

}

function cardCalc(){
	if (monthlyCostWithoutCard > 116) {
	alert("You should get a Metrocard!");
	} else {
	alert("You do not need a Metrocard!");
	}

}


	