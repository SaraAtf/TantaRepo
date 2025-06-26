// abstract class Person {
// 	constructor() {}
// }

// let p1 = new Person();

// interface -- contract
// interface IProduct {
// 	productName: string;
// 	category: string;
// }

// let products: IProduct[] = [
// 	{ productName: "Book", category: "school" },
// 	{ productName: "Pen", category: "school" },
// ]; // valid

// interface IPerson {
// 	id: number;
// 	name: string;
// 	address: string;
// 	sum: (x: number, y: number) => number;
// }

// class Person implements IPerson, IProduct {
// 	constructor(
// 		public id: number,
// 		public name: string,
// 		public address: string,
// 		public productName: string,
// 		public category: string
// 	) {}
// 	sum(x: number, y: number): number {
// 		return 10;
// 	}
// }

// no multi inhertiance
// class Pet extends Person {}

// overrload

// function sum<T>(x: T, y: T) {}

// sum<number>(10, 10);
// sum<string>("mona", "ali");
// sum<boolean>(true, true);

// var x: string | undefined = [].find((item) => item > 3); // element | undefined

// enum Roles {
// 	admin,
// 	guest,
// 	user,
// }

// function checkPermission(role: Roles) {
// 	if (role == Roles.admin) {
// 		console.log("admin can view ourDashboad");
// 	}
// }
