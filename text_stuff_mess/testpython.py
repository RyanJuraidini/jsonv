import sys
import os
import json 

def get_home_filePaths(directory):
    dir_paths = []
    for root, dirs, files in os.walk(directory):
        dir_path.append(os.path.join(root,name))
        
    return json.dump(dir_paths)

if __name__ == "__main__":
    print get_home_file_paths(sys.argv[1])