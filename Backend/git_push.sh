#!/bin/bash

# Navigate to the Git repository directory (optional, if the script is run from within the repo)
# cd /path/to/your/git/repo

# Add all changes to the staging area
git add .

# Prompt for a commit message
read -p "Enter commit message: " commit_message

# Commit the changes with the provided message
if [ -z "$commit_message" ]; then
  echo "Commit message cannot be empty. Aborting commit."
  exit 1
fi
git commit -m "$commit_message"

# Push the changes to the remote repository (e.g., 'origin' and 'main' branch)
git push origin main

echo "Git push completed."
