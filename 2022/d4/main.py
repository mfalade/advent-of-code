def extract_values(pairs):
    first_pair, second_pair = pairs.split(",")
    fp_start_str, fp_end_str = first_pair.split("-")
    sp_start_str, sp_end_str = second_pair.split("-")

    fp_start = int(fp_start_str)
    fp_end = int(fp_end_str)
    sp_start = int(sp_start_str)
    sp_end = int(sp_end_str)

    return fp_start, fp_end, sp_start, sp_end


def challenge_1(challenge_input):
    result = 0

    for pairs in challenge_input.split("\n"):
        fp_start, fp_end, sp_start, sp_end = extract_values(pairs)

        if fp_start <= sp_start and fp_end >= sp_end:
            result += 1
        elif sp_start <= fp_start and sp_end >= fp_end:
            result += 1

    print(result)


def challenge_2(challenge_input):
    result = 0

    for pairs in challenge_input.split("\n"):
        fp_start, fp_end, sp_start, sp_end = extract_values(pairs)

        if fp_start <= sp_start and fp_end >= sp_start:
            result += 1
        elif sp_start <= fp_start and sp_end >= fp_start:
            result += 1

    print(result)
