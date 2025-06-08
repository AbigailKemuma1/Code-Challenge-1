//Enter your code here//
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;      
  const chargePerKm = 15;   

  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`For a trip of ${distanceInKm} km:`);
  console.log(`Base Fare: KES ${baseFare}`);
  console.log(`Distance Charge: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total Fare: KES ${totalFare}`);
}

const input = prompt("Enter the distance of your trip in kilometers:");
const distanceInKm = Number(input);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Please enter a valid positive number for the distance.");
}


