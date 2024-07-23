# Git and GitHub
Git is a distributed version control system that tracks changes to files, enabling collaboration among multiple users and providing mechanisms for managing code revisions efficiently.

## Checking version
`git --version`

## Configuring User and Email 
```bash
git config --global user.name "Name Here"
git config --global user.email emailhere@mail.com
git config user.name
git config user.email
```

## Checking commands
```bash
git config -h or git help config
````

## Initializing Repository
```bash
git init
```

## Initializing & committing Empty Repository 
```bash
git commit --allow-empty -m "Initial commit"
````

## Checking Status of Repository
```bash
git status
```

## Adding to staging area
```bash
git add <file>
git add .
```

## Removing a single file to staging area
```bash
git restore --staged notes.txt
git restore --staged .
```

## Adding files to commited area
```bash
git commit -m "Adding commits"
```

## Checking commits
```bash
git log
git log --oneline
```

## Branching & Merging
```bash
git branch [branch-name]
git branch -a
git switch [branch-name]
git merge [branch-name]
git branch -d [branch-name]
```

## Method 1
### Go back to previous commit
```bash
git log --oneline
git branch
git checkout [commit_hash] 
git branch new_branch_name
git checkout new_branch_name
```

### Method 2
```bash
git reset --hard [commit_hash]
```

### Method 3 (recommended)
```bash
git revert [commit_hash]
```

## Adding remote origin
```bash
git remote add origin [remote_URL]
git branch -M main
git push -u origin main
````

## Remove origin
```bash
git remote remove origin
```

## Push local changes to the remote repository
```bash
git push
```

## Pull changes from the remote repository to update the local repository
```bash
git pull
```

## Clone a repository from a remote URL to create a local copy
```bash
git clone [remote_URL]
```

## Key Points
### Key differences: 'switch' vs 'checkout'
- The git checkout command is a versatile command that can be used for several purposes, including switching branches, checking out specific commits, and reverting changes in the working directory.
- The git switch command is a more focused command specifically designed for switching branches.

