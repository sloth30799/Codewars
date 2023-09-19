# Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

# For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

# If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

# Good luck :)

# Check my other katas:
import math


def nearest_sq(n):
    square_root = math.sqrt(n)
    rounded_sqrt = round(square_root)
    nearest_square = rounded_sqrt ** 2

    return nearest_square

# best


def nearest_sq(n):
    return round(n**.5)**2
