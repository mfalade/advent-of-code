import argparse
import os
import time
import importlib

from utils import read_input_file, bootstrap_directory, pretty_print


parser = argparse.ArgumentParser()


if __name__ == "__main__":
    parser.add_argument(
        "-d",
        "--day",
        default=0,
        type=int,
        help="Enter the day you want to run."
    )
    args = parser.parse_args()

    current_day = args.day or time.strftime("%-d") 
    directory_name = f'd{current_day}'

    if not os.path.exists(directory_name):
        pretty_print(f" Bootstraping challenge for day {current_day}")
        bootstrap_directory(directory_name=directory_name)

    challenge = importlib.import_module(f"{directory_name}.main")
    challenge_input = read_input_file(directory_name=directory_name)
    
    pretty_print(f" Running solutions for {directory_name}")
    challenge.challenge_1(challenge_input)
    challenge.challenge_2(challenge_input)