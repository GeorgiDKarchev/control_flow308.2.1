/*develop a growth control system that will monitor and predict the plant growth,\n
 making decisions based on the available space and potential growth.
*/

const PI=3.1415;
const radius=5;
const area=PI*radius*radius;
const plantSpace=0.8;
const plantNumber=20;
const newPlantNumber=100;
const maxComp=area/plantSpace;
let weeks=10;
let newWeeks=10;

//Predict the plant growth after a specific number of weeks.

let plantGrowth=(plantNumber*(2)**(weeks-1));
console.log(`Plant growth fot week # ${weeks} - ${plantGrowth}`);
//console.log(weeks-1)

//area capacity
console.log(` whole circular aria is: ${area} squared meeters`);

// -----------------------
 let maxPlantCapacity= (area/plantSpace);
 console.log(`Maximum number of plants in the area is:  ${maxPlantCapacity}`);

 if (plantGrowth>(80*area/100)){
    console.log("Pruned" ,weeks, plantGrowth);
 } else if (plantGrowth>(50*area/100) && plantGrowth<(80*area/100)){
    console.log("Monitored");
 } else if ( plantGrowth<(50*area/100)){
    console.log("Planted");
 }
else {
    console.log("end");
 }

 //Plant growth for week 1 will give result -Planted
 //Plant growth for week 2 will give result - Monitored
 //Plant growth for week 3 will give result -Pruned

console.log(`--------------Part 2 --------------`)
//The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
//If the space remained circular, what would be the radius of this expanded garden?

 let newPlantGrowth=(newPlantNumber*(2)**(weeks-1));
console.log(`Plant growth fot week # ${weeks} - ${newPlantGrowth}`);

let newArea=newPlantGrowth*plantSpace;
console .log( `new area when we start with 100 plants is ${newArea}`);
 
 let areaDiferense = newArea-area;
 let newRadius=(newArea/PI)/2;
 console.log(`The new radius of the new areaid ${newRadius}`);

 console.log(`------------------Part 3--------------`)

  
    const startingPlants = 100;
    const spaceRequire = plantSpace * startingPlants
    console.log(`${spaceRequire} -  this is the required spase for 100 plants`)
    let maximumPlantCapacity= (area/plantSpace)
    console.log(`${maximumPlantCapacity} - This is the mahimum plants capacity in the current area`)


try {
	if (spaceRequire <= maximumPlantCapacity) {
		console.log("There is space for 100 plants");
	} else {
		throw "Error - The space is Not enough for 100 plants .";
	}
} catch (error) {
	console.log(error);
}

//console.log("Does this log?");

       
  