import Particle from "../pull/Particle";

export default class KeepDistance extends Particle {
    type = "KeepDistance";
    pull(distance, target) {
        return ((Math.exp(distance - 15) / (Math.exp(distance - 15) + 1)) - 0.7) * 40;
        
        
        // if(distance <= 20) {
        //     if(distance <= 15) {
        //         return -((15/distance)**3);//return ((distance - 15)**3);
        //     } else {
        //         return Math.log(distance);//((distance - 15));
        //     }
        // } else {
        //     return 0;
        // }

        // return Math.log(distance);

        // if(distance <= 30) {
        //     return (distance - 30)**3;
        // } else {
        //     return Math.log(distance);
        // }

        //return (Math.log(distance+10) + 4)**3;
    }
}