import Particle from "../pull/Particle";

export default class Minus extends Particle {
    type = "Minus";
    pull(distance, target) {
        if(distance <= 30) {
            return (distance - 30)**3;
        }
        if(target.type === "Minus" && distance <= 300) {
            return -((300/(distance+10) + 1)**3);
        }
        if(target.type === "Plus" && distance <= 200) {
            return (60/Math.log(distance))**3;
        }
        return 1/Math.log(distance);
    }
}