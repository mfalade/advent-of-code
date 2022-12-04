import time
import importlib

from utils import read_input_file

custom_day = 1
current_day = custom_day or time.strftime("%-d") 
directory_name = f'd{current_day}'

if __name__ == "__main__":
    challenge = importlib.import_module(f"{directory_name}.main")
    challenge_input = read_input_file(directory_name=directory_name)
    
    challenge.challenge_1(challenge_input)
    challenge.challenge_2(challenge_input)