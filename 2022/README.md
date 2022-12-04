# Advent of Code 2022

### Python >=10.x

From the root of the `2022` repo, simply run 
```bash
python main.py
```

The program by default runs the challenge for the current day on which this script is run.

For example. if you run this on the `5th` day of December, it runs the challenges in the `d5` directory.


If you want to run the challenges for a specific day, e.g day 2 instead, you can pass an optional command line argument as such

```bash
python3 main.py -d 2

// or 

python3 main.py --day 2
```


## Directory structure
The directory for each day. e.g `d1` is stuctured as shown

```
- d1
    - __init__.py
    - input.txt
    - main.py
- d2
    - __init__.py
    - input.txt
    - main.py
```


## What's with the contraption above?

As an added convenience, this repo includes a utility that autogenerates the directory structure for each day as shown above.
It creates the directory `d<target_day>` e.g `d1`, `__init__.py`, `input.txt` and `main.py` files.

So when you run `python main.py` on for day `12` for example, it boostraps a folder with the necessary files for `d12`.

It also creates 2 functions; `challenge_1`, and `challenge_2` within the `main.py` file.
All you need do now is write your solutions for both challenges with the main file.
