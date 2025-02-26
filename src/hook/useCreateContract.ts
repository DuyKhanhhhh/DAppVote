import { useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/config";

export default function useCreateContract() {
    const { writeContract } = useWriteContract();

    const createVote = async (
        title: string,
        description: string,
        startTime: string,
        endTime: string,
        images: string[],
        names: string[],
        introduces: string[]
    ) => {
        try {
            const startTimeUnix = Math.floor(new Date(startTime).getTime() / 1000);
            const endTimeUnix = Math.floor(new Date(endTime).getTime() / 1000);

            if (names.length < 2) {
                throw new Error("Each vote must have at least 2 candidates");
            }

            await writeContract({
                abi: CONTRACT_ABI,
                address: CONTRACT_ADDRESS,
                functionName: "createVote",
                args: [title, description, startTimeUnix, endTimeUnix, images, names, introduces],
            });

            console.log("Vote created successfully!");
        } catch (err) {
            console.error("Error creating vote:", err);
        }
    };

    return { createVote };
}
