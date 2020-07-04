import Particle from "../pull/Particle";

export default class Zero extends Particle {
    type = "Zero";
    pull(distance, target) {
        if(distance <= 10) {
            return (distance - 10)**3;
        }
        return 1/Math.log(distance);
    }
}