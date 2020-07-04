import Particle from "../pull/Particle";

export default class Glue extends Particle {
    type = "Glue";
    pull(distance, target) {
        if(target.type === "Glue")
            if(distance <= 20)
                return ((distance - 20)**5);
            else
                return (8/Math.log(distance))**3;
        if(target.type === "Plus" || target.type === "Zero")
            if(distance <= 15)
                return (distance - 15)**5;
            else if(distance <= 200)
                return (10/Math.log(distance))**5;
        return 1/Math.log(distance);
    }
}