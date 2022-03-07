import { StudentsRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudents implements StudentsRepository{
    public items : Student[] = [];

    async findById(id: string): Promise<Student | null> {
        const student = this.items.find(student => student.id === id);

        if(student){
            return student;
        }

        return null;
    }

    // async findByEmail(email: string): Promise<Student | null> {
    //     const student = this.items.find(student => student.email === email);

    //     if(student){
    //         return student;
    //     }

    //     return null;
    // }

}