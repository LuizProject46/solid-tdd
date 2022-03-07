import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallenges } from "../../tests/repositories/in-memory-challenges";
import { InMemoryStudents } from "../../tests/repositories/in-memory-students";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudents();
        const challengesRepository = new InMemoryChallenges();

        const student = Student.create({
            name: "Luiz",
            email: "teste@mail.com"
        })

        const challenge = Challenge.create({
            title: "Challenge",
            instructions: "balablabla",
        })

        studentsRepository.items.push(student)
        challengesRepository.items.push(challenge)


        const sut = new CreateChallengeSubmission(
            studentsRepository, 
            challengesRepository 
        );

        const response = await sut.execute({  
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy()

    })
})