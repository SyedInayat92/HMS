#!/bin/bash

# Navigate to the Git repository directory (optional, if the script is run from within the repo)
# cd /path/to/your/git/repo

# Add all changes to the staging area
git add .
git commit -m "Automated commit"

# Push the changes to the remote repository (e.g., 'origin' and 'main' branch)
git push -u origin master

echo "Git push completed."
