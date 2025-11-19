Question: 1
Difference between interfaces and types in TypeScript.

There are different in declaring interfaces and types, though they work almost similarly. we can use extends in interface but can't in types.

We can reopen interfaces and can add more properties. But not possible in type.

Interface doesn't support unions but type supports.

Type support conditional but interface doesn't support it...


Question: 2  
What is the use of the keyof keyword in TypeScript? Provide an example.

ketof keyword is a type operator. It creates a union type of given property name.

example::
interface Student{
    id: number;
    name: string;
    class: number;

}

type StudentKeys = keyof Student;
it makes a union of all the property of student. Like id | name | class.


Question: 5.
Provide an example of using union and intersection types in TypeScript.

type Position = "admin" | "editor" | "normal person"
this is an example of union type. The position can be any one of this three. 


type Position = "editor" & "employee"
this is the intersection type. Here the person's position is editor he is also an employee. Both position he has.