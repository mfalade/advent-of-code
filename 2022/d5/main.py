from collections import deque

FOUR_SPACES = "    "
SPACE_REPR = ",S,"
SPACE_REPR_WITHOUT_THE_SEPARATORS = "S"
HEIGHT = 8
WIDTH = 9


def generate_stack_per_column_from_input(all_rows):
    stack_per_column = {str(item + 1): deque() for item in range(WIDTH)}
    crate_stacks = all_rows[:HEIGHT]
    crate_stacks.reverse()

    for row in crate_stacks:
        normalized = row.replace(FOUR_SPACES, SPACE_REPR).replace(" ", ",")
        cleaned = [x for x in (normalized.split(",")) if x]

        for index, item in enumerate(cleaned):
            stack_key = str(index + 1)
            if item != SPACE_REPR_WITHOUT_THE_SEPARATORS:
                stack_per_column[stack_key].append(item)
    return stack_per_column


def challenge_1(challenge_input):
    all_rows = challenge_input.split("\n")
    stack_per_column = generate_stack_per_column_from_input(all_rows)
    procedures = all_rows[HEIGHT + 2 :]

    for procedure in procedures:
        if not procedure:
            continue

        move_count_str, move_direction = procedure.split("from")

        num_crates_to_move = int("".join(move_count_str.split("move")))
        start_pos_str, end_pos_str = move_direction.split("to")
        start_pos = start_pos_str.strip()
        end_pos = end_pos_str.strip()

        for i in range(num_crates_to_move):
            crate_to_move = stack_per_column[start_pos].pop()
            stack_per_column[end_pos].append(crate_to_move)

    result = ""
    for stack in stack_per_column.values():
        result += stack.pop()

    print(result.replace("[", "").replace("]", ""))


def challenge_2(challenge_input):
    all_rows = challenge_input.split("\n")
    stack_per_column = generate_stack_per_column_from_input(all_rows)
    procedures = all_rows[HEIGHT + 2 :]

    for procedure in procedures:
        if not procedure:
            continue

        move_count_str, move_direction = procedure.split("from")

        num_crates_to_move = int("".join(move_count_str.split("move")))
        start_pos_str, end_pos_str = move_direction.split("to")
        start_pos = start_pos_str.strip()
        end_pos = end_pos_str.strip()

        temp = []
        for _ in range(num_crates_to_move):
            crate_to_move = stack_per_column[start_pos].pop()
            temp.append(crate_to_move)

        temp.reverse()
        for crate in temp:
            stack_per_column[end_pos].append(crate)

    result = ""
    for stack in stack_per_column.values():
        result += stack.pop()

    print(result.replace("[", "").replace("]", ""))
