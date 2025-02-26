import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/config";

interface Candidate {
    image: string;
    name: string;
    introduce: string;
    voteCount: number;
}

export default function useFindCandidateById(voteId?: number, candidateId?: number) {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { data: candidateData, isError } = useReadContract({
        abi: CONTRACT_ABI,
        address: CONTRACT_ADDRESS,
        functionName: "getCandidateById",
        args: voteId !== undefined && candidateId !== undefined ? [voteId, candidateId] : undefined,
        enabled: voteId !== undefined && candidateId !== undefined, // Tránh gọi contract nếu không có ID hợp lệ
    });

    useEffect(() => {
        if (isError) {
            setError("Không thể lấy thông tin ứng viên.");
            setCandidate(null);
        } else if (candidateData) {
            setCandidate({
                image: candidateData[0] as string,
                name: candidateData[1] as string,
                introduce: candidateData[2] as string,
                voteCount: Number(candidateData[3]),
            });
            setError(null);
        }
    }, [candidateData, isError]);

    return { candidate, error };
}
