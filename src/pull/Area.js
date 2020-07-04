
// export default class Area {
//     constructor(particles, resistance = 0) {
//         this.particles = particles;
//         this.resistance = resistance;
//     }
//     update(deltaTime) {
//         //Compute motion
//         for(const particle of this.particles) {
//             particle.pressure = 0;
//             for(const targetParticle of this.particles) {
//                 if(targetParticle === particle) continue;
                
//                 const xToTarget = (targetParticle.position[0] - particle.position[0]);
//                 const yToTarget = (targetParticle.position[1] - particle.position[1]);
//                 const distance = Math.sqrt(xToTarget**2 + yToTarget**2);
                
//                 const pulled = targetParticle.pull(distance, particle);
//                 if(pulled) {
//                     const forceUnit = pulled / distance;
//                     const forceX = xToTarget * forceUnit;
//                     const forceY = yToTarget * forceUnit;
//                     const motionXToAdd = forceX * deltaTime;
//                     const motionYToAdd = forceY * deltaTime;
//                     particle.motion[0] += motionXToAdd;
//                     particle.motion[1] += motionYToAdd;
//                     targetParticle.motion[0] -= motionXToAdd;
//                     targetParticle.motion[1] -= motionYToAdd;

//                     particle.pressure += Math.sqrt(forceX**2 + forceY**2);
//                 }
//             }
//         }
//         //Update position
//         const multiMotion = ((1 - this.resistance)**deltaTime);
//         for(const particle of this.particles) {
//             particle.motion[0] *= multiMotion;
//             particle.motion[1] *= multiMotion;
//             particle.position[0] += particle.motion[0] * deltaTime;
//             particle.position[1] += particle.motion[1] * deltaTime;
//         }
//     }
// }

export default class Area {
    constructor(particles, resistance = 0) {
        this.particles = particles;
        this.resistance = resistance;
    }
    update(deltaTime) {
        //Compute motion
        for(const particle of this.particles) {
            particle.pressure = 0;
            for(const targetParticle of this.particles) {
                if(targetParticle === particle) continue;
                
                const xToTarget = (targetParticle.position[0] - particle.position[0]);
                const yToTarget = (targetParticle.position[1] - particle.position[1]);
                const distance = Math.sqrt(xToTarget**2 + yToTarget**2);
                
                const pulled = targetParticle.pull(distance, particle);
                if(pulled) {
                    const forceUnit = pulled / distance;
                    const forceX = xToTarget * forceUnit;
                    const forceY = yToTarget * forceUnit;
                    const motionXToAdd = forceX * deltaTime;
                    const motionYToAdd = forceY * deltaTime;
                    particle.motion[0] += motionXToAdd;
                    particle.motion[1] += motionYToAdd;
                    targetParticle.motion[0] -= motionXToAdd;
                    targetParticle.motion[1] -= motionYToAdd;

                    particle.pressure += Math.sqrt(forceX**2 + forceY**2);
                }
            }
        }
        //Update position
        const multiMotion = ((1 - this.resistance)**deltaTime);
        for(const particle of this.particles) {
            particle.motion[0] *= multiMotion;
            particle.motion[1] *= multiMotion;
            particle.position[0] += particle.motion[0] * deltaTime;
            particle.position[1] += particle.motion[1] * deltaTime;
        }
    }
}