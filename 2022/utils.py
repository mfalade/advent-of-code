from itertools import islice
import os


def create_chunk(iterable, chunk_size):
    it = iter(iterable)
    while True:
        batch = list(islice(it, chunk_size))
        if not batch:
            return
        yield batch


def read_input_file(directory_name, file_name="input.txt"):
    file_path = os.path.join(os.curdir, directory_name, file_name)

    with open(file_path, "r") as input_file:
        return input_file.read()
