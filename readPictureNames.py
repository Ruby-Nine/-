import os

path = "question/"
filenames = [str(file) for file in os.listdir(path)]

with open("filenames.txt", "w", encoding="utf-8") as f:
    f.write("var images=[\n")
    totalFiles = len(filenames)
    for i in range(0, totalFiles):
        if i != 0:
            f.write(",\n")
        f.write("    \"" + filenames[i] + "\"")
    f.write("\n];\n")