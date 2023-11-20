/*develop a growth control system that will monitor and predict the plant growth,\n
 making decisions based on the available space and potential growth.
*/

const PI=3.1415;
const radius=5;
const area=PI*radius*radius;
const plantSpace=0.8;
const plantNumber=20;
const maxComp=area/plantSpace;
let weeks=3;

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

 //Plant growth for week 1 will give resulet -Planted
 //Plant growth for week 2 will give resulet - Monitored
 //Plant growth for week 3 will give resulet -Pruned
  
    

       
  