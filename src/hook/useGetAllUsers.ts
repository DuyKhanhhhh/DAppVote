import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/config";

export default function useGetAllVote() {
    const { data: votes } = useReadContract({
        abi: CONTRACT_ABI,
        address: CONTRACT_ADDRESS,
        functionName: "getAllVotes",
    });

    return { votes };
}
