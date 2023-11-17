/*develop a growth control system that will monitor and predict the plant growth,\n
 making decisions based on the available space and potential growth.
*/

const PI=3.1415;
const radius=5;
const area=PI*radius*radius;
const plantSpace=0.8;
const plantNumber=20;
const maxComp=area/plantSpace;
let weeks=8;

//Predict the plant growth after a specific number of weeks.

let plantGrowth=(plantNumber*(2)**(weeks-1));
console.log(plantGrowth);
console.log(weeks-1)

//area capacity
console.log(` whole circular aria is: ${area} squared meeters`);

// -----------------------
 let maxPlantCapacity= (area/plantSpace);
 console.log(`Maximum number of plants in the area is:  ${maxPlantCapacity}`);

 if (plantGrowth>maxPlantCapacity*(plantGrowth/100)){
    console.log("Pruned" ,weeks, plantGrowth);
 } else if (plantGrouth>(50*maxPlantCapacity)/100 && plantGrouth<(80*maxPlantCapacity)/100){
    console.log("Monitored");
 } else if ( plantGrowth<50*maxPlantCapacity){
    console.log("Planted");
 }
 else {
    console.log("end");
 }

  
    

       
  