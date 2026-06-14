
export interface IEating {
    eat(): void;
}

export interface IFlying {
    fly(): void;
}

export interface ISwimming {
    swim(): void;
}

export class Toucan implements IEating, IFlying {
    eat(): void { console.log('El Tucán está comiendo frutas.'); }
    fly(): void { console.log('El Tucán vuela sobre la selva.'); }
}

export class Hummingbird implements IEating, IFlying {
    eat(): void { console.log('El Colibrí busca néctar.'); }
    fly(): void { console.log('El Colibrí aletea rápidamente.'); }
}

export class Ostrich implements IEating, ISwimming {
    eat(): void { console.log('El Avestruz come hierbas.'); }
    swim(): void { console.log('El Avestruz puede nadar si es necesario.'); }
}
