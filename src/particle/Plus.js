import Particle from "../pull/Particle";

export default class Plus extends Particle {
    type = "Plus";
    pull(distance, target) {
        if(distance <= 10) {
            return (distance - 10)**3;
        }
        if(target.type === "Plus" && distance <= 300) {
            return -((40/distance + 1)**5);
        }
        if(target.type === "Minus") {
            if(distance <= 100)
                return (distance - 100)**3;
            if(distance <= 200)
                return (10/Math.log(distance))**3;
        }
        return 1/Math.log(distance);
    }
}