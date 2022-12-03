import os


winning_plays = ["AY", "BZ", "CX"]
draw_plays = ["AX", "BY", "CZ"]

strategy_weight = {"X": 1, "Y": 2, "Z": 3}


play_weight = {"X": 1, "Y": 2, "Z": 3}


def challenge_1():
    with open(os.path.join(os.curdir, "input.txt"), "r") as input_file:
        content = input_file.read()

    print(content)

    score = 0

    for item in content.split("\n"):
        play = item.replace(" ", "")
        strategy = play[1]
        score += play_weight.get(strategy)

        if play in winning_plays:
            score += 6
        elif play in draw_plays:
            score += 3

    print(score)


def challenge_1():
    draw_picks = {
        "A": "X",
        "B": "Y",
        "C": "Z",
    }
    winning_picks = {
        "A": "Y",
        "B": "Z",
        "C": "X",
    }
    losing_picks = {
        "A": "Z",
        "B": "X",
        "C": "Y",
    }
    with open(os.path.join(os.curdir, "input.txt"), "r") as input_file:
        content = input_file.read()

    score = 0

    for item in content.split("\n"):
        play = item.replace(" ", "")
        [opponents_pick, my_pick] = play

        if my_pick == "Y":
            mine = draw_picks.get(opponents_pick)
            score += strategy_weight.get(mine)
            score += 3
        elif my_pick == "Z":
            mine = winning_picks.get(opponents_pick)
            score += strategy_weight.get(mine)
            score += 6
        elif my_pick == "X":
            mine = losing_picks.get(opponents_pick)
            score += strategy_weight.get(mine)

    print(score)


if __name__ == "__main__":
    challenge_1()
