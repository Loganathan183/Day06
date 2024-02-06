//D.WRITE A CLASS TO CALCULATE THE UBER PRICE
class UberPricingCalculator {
    constructor(distanceMiles, durationMinutes, surgeMultiplier = 1.0) {
        this.baseFare = 2.0; 
        this.perMileRate = 0.5; 
        this.perMinuteRate = 0.25; 
        this.distanceMiles = distanceMiles;
        this.durationMinutes = durationMinutes;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice() {
        const fare = this.baseFare + 
                     (this.distanceMiles * this.perMileRate) + 
                     (this.durationMinutes * this.perMinuteRate);
        const totalFare = fare * this.surgeMultiplier;
        return totalFare.toFixed(2);
    }
}


const distance = 10; 
const duration = 20; 
const surgeMultiplier = 1.5; 
const uberCalculator = new UberPricingCalculator(distance, duration, surgeMultiplier);
console.log("Estimated Uber price:", uberCalculator.calculatePrice());

//OUTPUT:
/*
Estimated Uber price: 18.00
*/