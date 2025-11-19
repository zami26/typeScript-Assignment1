function formatValue(a: number | string | boolean): number | string | boolean {
    if (typeof a === 'string') {
        return a.toLocaleUpperCase();
    }
    else if (typeof a === 'number') {
        return a * 10;
    }
    else {
        return !a;
    }
}

function getLength(a: string | Array<number>): number {
    if (typeof a === 'string') {
        return a.length;
    }
    else {
        return a.length;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        const ans = `Name: ${this.name}, Age: ${this.age}`;
        return ans;

    }
}


type Item = {
    title: string;
    rating: number;
};


function filterByRating(all: Item[]): Item[] {
    return all.filter((a) => a.rating >= 4)
}


type Keeps = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};


function filterActiveUsers(all: Keeps[]): Keeps[] {
    return all.filter((a) => a.isActive === true)
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

function printBookDetails(book: Book) {
    let available = '';
    if (book.isAvailable) {
        available = "Yes";
    }
    else {
        available = "No";
    }

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`);
}




function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string)[]): (number | string)[] {
    const newArray = [...arr1, ...arr2];
    const result: (number | string)[] = [];

    for (let i = 0; i < newArray.length; i++) {
        let found = false;


        for (let j = 0; j < result.length; j++) {
            if (result[j] === newArray[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(newArray[i]);
        }
    }

    return result;
}


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        const oneItemPrice = product.price * product.quantity;
        
        if (product.discount !== undefined && product.discount >= 0 && product.discount <= 100) {
            const discountAmount = oneItemPrice * (product.discount / 100);
            return total + (oneItemPrice - discountAmount);
        }
        
        return total + oneItemPrice;
    }, 0);
}

