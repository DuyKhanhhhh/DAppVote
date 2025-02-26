// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract VotingSystem {
    struct Candidate {
        string image;
        string name;
        string introduce;
        uint256 voteCount;
    }

    struct Vote {
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        address owner;
        Candidate[] candidates;
        mapping(address => bool) hasVoted;
    }

    Vote[] public votes;
    mapping(address => uint256[]) public userVotes;

    event VoteCreated(uint256 indexed voteId, string title, address owner);
    event Voted(uint256 indexed voteId, uint256 candidateIndex, address voter);

    function createVote(
        string memory _title,
        string memory _description,
        uint256 _startTime,
        uint256 _endTime,
        string[] memory _images,
        string[] memory _names,
        string[] memory _introduces
    ) public {
        require(_endTime > _startTime, "End time must be after start time");
        require(_names.length >= 2, "Must have at least two candidates");

        Vote storage newVote = votes.push();
        newVote.title = _title;
        newVote.description = _description;
        newVote.startTime = _startTime;
        newVote.endTime = _endTime;
        newVote.owner = msg.sender;

        for (uint256 i = 0; i < _names.length; i++) {
            newVote.candidates.push(Candidate({
                image: _images[i],
                name: _names[i],
                introduce: _introduces[i],
                voteCount: 0
            }));
        }

        uint256 voteId = votes.length - 1;
        userVotes[msg.sender].push(voteId);

        emit VoteCreated(voteId, _title, msg.sender);
    }

    function vote(uint256 _voteId, uint256 _candidateIndex) public {
        require(_voteId < votes.length, "Invalid vote ID");
        Vote storage currentVote = votes[_voteId];

        require(block.timestamp >= currentVote.startTime, "Voting has not started");
        require(block.timestamp <= currentVote.endTime, "Voting has ended");
        require(!currentVote.hasVoted[msg.sender], "You have already voted");

        currentVote.hasVoted[msg.sender] = true;
        currentVote.candidates[_candidateIndex].voteCount++;

        emit Voted(_voteId, _candidateIndex, msg.sender);
    }

    function getCandidateById(uint256 _voteId, uint256 _candidateId) public view returns (
        string memory image,
        string memory name,
        string memory introduce,
        uint256 voteCount
    ) {
        require(_voteId < votes.length, "Invalid vote ID");
        require(_candidateId < votes[_voteId].candidates.length, "Invalid candidate ID");

        Candidate storage candidate = votes[_voteId].candidates[_candidateId];

        return (
            candidate.image,
            candidate.name,
            candidate.introduce,
            candidate.voteCount
        );
    }

    function getAllVotes() public view returns (
        string[] memory titles,
        string[] memory descriptions,
        uint256[] memory startTimes,
        uint256[] memory endTimes,
        address[] memory owners
    ) {
        uint256 length = votes.length;
        titles = new string[](length);
        descriptions = new string[](length);
        startTimes = new uint256[](length);
        endTimes = new uint256[](length);
        owners = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            titles[i] = votes[i].title;
            descriptions[i] = votes[i].description;
            startTimes[i] = votes[i].startTime;
            endTimes[i] = votes[i].endTime;
            owners[i] = votes[i].owner;
        }
    }
    function getVote(uint256 _voteId) public view returns (
    string memory title,
    string memory description,
    uint256 startTime,
    uint256 endTime,
    address owner,
    string[] memory images,
    string[] memory names,
    string[] memory introduces,
    uint256[] memory voteCounts
) {
    require(_voteId < votes.length, "Invalid vote ID");
    Vote storage currentVote = votes[_voteId];

    uint256 candidateCount = currentVote.candidates.length;
    images = new string[](candidateCount);
    names = new string[](candidateCount);
    introduces = new string[](candidateCount);
    voteCounts = new uint256[](candidateCount);

    for (uint256 i = 0; i < candidateCount; i++) {
        images[i] = currentVote.candidates[i].image;
        names[i] = currentVote.candidates[i].name;
        introduces[i] = currentVote.candidates[i].introduce;
        voteCounts[i] = currentVote.candidates[i].voteCount;
    }

    return (
        currentVote.title,
        currentVote.description,
        currentVote.startTime,
        currentVote.endTime,
        currentVote.owner,
        images,
        names,
        introduces,
        voteCounts
    );
}
}
