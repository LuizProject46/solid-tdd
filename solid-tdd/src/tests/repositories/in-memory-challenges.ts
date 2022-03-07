import { ChallengesRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallenges implements ChallengesRepository{
    public items : Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
        const challenge = this.items.find(challenge => challenge.id === id);

        if(challenge){
            return challenge;
        }

        return null;
    }

}