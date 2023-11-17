/*develop a growth control system that will monitor and predict the plant growth,\n
 making decisions based on the available space and potential growth.
*/

const PI=3.1415;
const radius=5;
const area=PI*radius*radius;
const plantSpace=0.8;
const plantNumber=20;
const maxComp=area/plantSpace;
let weeks=2;

//Predict the plant growth after a specific number of weeks.

let plantGrowth=(plantNumber*(2)**(weeks-1));
console.log(plantGrowth);


