import string

from utils import create_chunk


characters = string.ascii_letters

def challenge_1(challenge_input):
    result = 0

    for line in challenge_input.split("\n"):
        first_half, second_half = line[: len(line) // 2], line[len(line) // 2 :]
        common_set = set(first_half).intersection(set(second_half))

        common = common_set.pop()
        priority = characters.index(common) + 1
        result += priority

    print(result)


def challenge_2(challenge_input):
    result = 0

    rows = challenge_input.split("\n")
    groups = create_chunk(rows, 3)

    for group in groups:
        common_set = set(group[0]).intersection(set(group[1])).intersection(group[2])
        common = common_set.pop()

        priority = characters.index(common) + 1
        result += priority

    print(result)

