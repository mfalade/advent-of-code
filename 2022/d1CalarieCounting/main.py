import heapq
import os


def main():
    with open(os.path.join(os.curdir, "input1.txt"), "r") as input_file:
        input_content = input_file.read()
        chunks = input_content.split("\n\n")

        list_of_sums = []

        for chunk in chunks:
            cleaned = [int(item) for item in chunk.split("\n")]
            sum_of_cleaned = sum(cleaned)
            list_of_sums.append(sum_of_cleaned)

        largest_3 = heapq.nlargest(3, list_of_sums)

        print(largest_3)
        print(sum(largest_3))


if __name__ == "__main__":
    main()
