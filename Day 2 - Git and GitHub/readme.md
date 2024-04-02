# Git and GitHub

## Checking version
git --version

## Configuring User and Email 
git config --global user.name "Name Here"
git config --global user.email emailhere@mail.com
git config user.name
git config user.email

## Checking commands
git config -h or git help config


## Initializing Repository
git init

## Checking Status of Repository
git status
git add .
git commit -m "initial commit"

git log --oneline

# Branching
git branch new-feature
git branch
git switch new-feature
git branch -d Edit01

# Go back to previous commit
git branch
git log --oneline
git branch
git checkout <commit_hash>
git branch new_branch_name
git checkout new_branch_name

# remove origin
git remote remove origin