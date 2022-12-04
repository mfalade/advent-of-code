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


def pretty_print(text):
    # Not the standard pprint.
    print("." * (len(text) + 1))
    print(text)
    print("." * (len(text) + 1))


def bootstrap_directory(directory_name):
    os.mkdir(directory_name)

    open(f"{directory_name}/__init__.py", "w").close()
    open(f"{directory_name}/input.txt", "w").close()

    with (
        open(f"{directory_name}/main.py", "w") as main_file,
        open("template.txt", "r") as template_file,
    ):
        main_file.write(template_file.read())
