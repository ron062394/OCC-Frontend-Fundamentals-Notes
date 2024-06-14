# Git and GitHub
Git is a distributed version control system that tracks changes to files, enabling collaboration among multiple users and providing mechanisms for managing code revisions efficiently.

```bash
# Checking version
git --version

# Configuring User and Email 
git config --global user.name "Name Here"
git config --global user.email emailhere@mail.com
git config user.name
git config user.email

# Checking commands
git config -h or git help config

# Initializing Repository
git init

# Checking Status of Repository
git status
git add .
git commit -m "initial commit"

# Checking commits
git log
git log --oneline

# Branching & Merging
git branch [branch-name]
git branch -a
git switch [branch-name]
# Create commits.
git switch [branch-name]
git merge [branch-name]
git branch -d [branch-name]

# Go back to previous commit
git log --oneline
git branch
git checkout <commit_hash> 
git branch new_branch_name
git checkout new_branch_name


# adding remote origin
git remote add origin <remote_URL>
git branch -M main
git push -u origin main


# remove origin
git remote remove origin


# Push local changes to the remote repository
git push

# Pull changes from the remote repository to update the local repository
git pull

# Clone a repository from a remote URL to create a local copy
git clone <remote_URL>


# Key Points
# Key differences: 'switch' vs 'checkout'
# The git checkout command is a versatile command that can be used for several purposes, including switching branches, checking out specific commits, and reverting changes in the working directory.
# The git switch command is a more focused command specifically designed for switching branches.
```
