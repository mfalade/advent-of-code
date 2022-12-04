import heapq


def challenge_1(challenge_input):
    chunks = challenge_input.split("\n\n")

    list_of_sums = []

    for chunk in chunks:
        cleaned = [int(item) for item in chunk.split("\n")]
        sum_of_cleaned = sum(cleaned)
        list_of_sums.append(sum_of_cleaned)

    largest_3 = heapq.nlargest(3, list_of_sums)

    print(largest_3[0])

def challenge_2(challenge_input):
    chunks = challenge_input.split("\n\n")

    list_of_sums = []

    for chunk in chunks:
        cleaned = [int(item) for item in chunk.split("\n")]
        sum_of_cleaned = sum(cleaned)
        list_of_sums.append(sum_of_cleaned)

    largest_3 = heapq.nlargest(3, list_of_sums)

    print(sum(largest_3))

