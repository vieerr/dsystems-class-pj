
interface Product {
    id: number;
    name: string;
}

export class ProductRepository {
    private products: Product[] = [];

    load(id: number): Product | undefined {
        console.log(`Cargando producto con ID: ${id} desde el inventario del parque...`);
        return this.products.find(p => p.id === id);
    }

    save(product: Product): void {
        console.log(`Guardando el producto ${product.name} en la base de datos de la reserva...`);
        this.products.push(product);
    }
}

export class CustomerNotifier {
    notify(email: string, message: string): void {
        console.log(`[Mailer] Enviando correo a ${email}: ${message}`);
    }
}

export class ProductBloc {
    constructor(
        private readonly repository: ProductRepository,
        private readonly notifier: CustomerNotifier
    ) {}

    loadProduct(id: number): Product | undefined {
        return this.repository.load(id);
    }

    saveProduct(product: Product): void {
        this.repository.save(product);
    }

    notifyCustomer(email: string, message: string): void {
        this.notifier.notify(email, message);
    }
}
