import Particle from "../pull/Particle";

export default class Pull extends Particle {
    type = "Pull";
    pull(distance, target) {
        if(distance <= 30) {
            return (distance - 30)**3;
        } else {
            return Math.log(distance);
        }

        return (Math.log(distance+10) + 4)**3;
    }
}