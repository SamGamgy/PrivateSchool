# Git Version Control Workflow for MLS Website

## 📋 Overview

This document outlines the proper workflow for making safe, tracked updates to the Montessori Lab School website using Git. Every change is recorded, reversible, and well-documented.

---

## 🔄 Complete Development Workflow (6 Phases)

### Phase 1: PREPARATION
**Goal**: Set up your work environment safely

```bash
# 1. Switch to main branch (ensure you're on the production branch)
git checkout main

# 2. Pull latest changes from remote
git pull origin main

# 3. Create a new feature branch for your work
# Use format: feature/description-of-change
git checkout -b feature/update-copyright-2025
```

**Why?**
- Ensures you have the latest code
- Feature branch keeps changes isolated from main
- Easy to abandon or revert if needed

---

### Phase 2: DEVELOPMENT
**Goal**: Make your edits and test

- Edit files in your text editor
- Make changes in your feature branch
- Test the changes locally (open in browser, verify functionality)
- View what changed: `git diff`

**Example**: We'll update the footer copyright year from 2024 to 2025

---

### Phase 3: STAGING & COMMITTING
**Goal**: Capture your changes with clear documentation

```bash
# 1. Check status to see what files changed
git status

# 2. Stage your changes (prepare for commit)
git add .              # Add ALL changes, OR
git add index.html     # Add specific file

# 3. Commit with descriptive message
git commit -m "fix: Update copyright year to 2025 in footer"
```

**Commit Message Format**:
- `feat:` - New feature
- `fix:` - Bug fix or correction
- `style:` - CSS/styling changes
- `docs:` - Documentation
- `refactor:` - Code reorganization
- `test:` - Test additions

---

### Phase 4: VERIFICATION
**Goal**: Review and ensure correctness before pushing

```bash
# 1. View your commit
git log -1                # Latest commit summary
git show                  # Detailed changes

# 2. Compare with main branch
git diff main             # See differences

# 3. Check status
git status                # Should show "nothing to commit"

# 4. Test thoroughly!
# Open the updated files in browser, test functionality
```

---

### Phase 5: PUSH & MERGE
**Goal**: Share changes and integrate to main

```bash
# 1. Push feature branch to remote
git push origin feature/update-copyright-2025

# 2. Switch to main
git checkout main

# 3. Pull latest main (in case others pushed)
git pull origin main

# 4. Merge feature branch into main
git merge feature/update-copyright-2025

# 5. Push updated main to remote
git push origin main
```

---

### Phase 6: CLEANUP
**Goal**: Remove branch and maintain clean repository

```bash
# 1. Delete local branch
git branch -d feature/update-copyright-2025

# 2. Delete remote branch
git push origin --delete feature/update-copyright-2025

# 3. Verify cleanup
git branch -a   # Should not show your feature branch
```

---

## 📚 Command Reference

### Status & Info
```bash
git status              # Current state of repo
git log                 # View commit history
git log --oneline       # Compact history
git log -5              # Last 5 commits
git diff                # Uncommitted changes
git diff main           # Compare to main
git show <hash>         # Show specific commit
```

### Branches
```bash
git branch              # List local branches
git branch -a           # List all branches
git checkout main       # Switch branch
git checkout -b name    # Create new branch
git branch -d name      # Delete branch (safe)
git branch -D name      # Force delete branch
```

### Changes & Commits
```bash
git add .               # Stage all files
git add file.txt        # Stage specific file
git add *.html          # Stage by pattern
git commit -m "msg"     # Commit with message
git push origin branch  # Push to remote
git pull origin main    # Pull from remote
```

### Undo Operations (if mistakes happen)
```bash
git restore file.txt              # Discard changes to file
git reset HEAD file.txt           # Unstage file
git revert HEAD                   # Undo last commit (keeps history)
git reset --soft HEAD~1           # Undo commit, keep changes staged
git reset --hard HEAD~1           # Undo commit, discard changes (WARNING!)
git checkout -- file.txt          # Revert file to last commit
```

---

## ✅ PRACTICE EXERCISE: Update Copyright Year

### Objective
Add a copyright year footer or update existing year using proper Git workflow

### Task Steps

#### Step 1: Create Feature Branch
```bash
git checkout main
git pull origin main
git checkout -b feature/update-copyright-2025
```

#### Step 2: Make the Edit
- Open `index.html`
- Locate the footer section (near the end of file)
- Note: The current footer doesn't have a copyright year
- **ACTION**: Add copyright text with current year
- Save the file

#### Step 3: Review Your Changes
```bash
git status          # Should show index.html modified
git diff            # View the exact changes
```

#### Step 4: Stage & Commit
```bash
git add index.html
git commit -m "feat: Add copyright year 2025 to footer"
```

#### Step 5: Verify Commit
```bash
git log -1          # See your commit
git show            # View the changes in detail
```

#### Step 6: Test Changes
- Open the updated `index.html` in a browser
- Scroll to bottom and verify copyright appears
- Ensure no other changes happened

#### Step 7: Push & Merge
```bash
git push origin feature/update-copyright-2025
git checkout main
git pull origin main
git merge feature/update-copyright-2025
git push origin main
```

#### Step 8: Cleanup
```bash
git branch -d feature/update-copyright-2025
git push origin --delete feature/update-copyright-2025
```

#### Step 9: Verify Success
```bash
git log --oneline -5        # See your commit in history
git branch -a               # Verify branch deleted
```

---

## 🛡️ Safety Principles

### ✅ DO:
- Always pull before making changes
- Create feature branches for every change
- Write clear commit messages
- Test locally before pushing
- Review your git diff before committing
- Keep commits focused on one task

### ❌ DON'T:
- Commit directly to main
- Mix multiple features in one commit
- Ignore git status warnings
- Push untested code
- Use force push unless absolutely necessary
- Skip commit messages (use `-m` always)

---

## 🚨 If Something Goes Wrong

### Common Issues

**"I committed to main by accident"**
```bash
git reset --soft HEAD~1     # Undo commit, keep changes
git checkout -b feature/fix # Move to new branch
git commit -m "..."
```

**"I made changes I don't want"**
```bash
git restore file.txt        # Discard changes to file
git checkout -- file.txt    # Alternative method
```

**"Merge conflict"**
```bash
git status                  # See conflicted files
# Edit files manually to resolve conflicts
git add .
git commit -m "Resolve merge conflict"
```

**"I pushed to wrong branch"**
```bash
git revert HEAD              # Undo last commit on remote
# OR create new commit fixing the issue
```

---

## 📊 Typical Workflow Timeline

```
Start
  ↓
Create Feature Branch (Phase 1)
  ↓
Edit Files (Phase 2)
  ↓
Stage & Commit (Phase 3)
  ↓
Review & Test (Phase 4)
  ↓
Push & Merge to Main (Phase 5)
  ↓
Cleanup Branches (Phase 6)
  ↓
Update Lives on GitHub
```

---

## 💡 Best Practices

1. **Commit Often**: Small, focused commits are better than one large commit
2. **Write Good Messages**: Future you will thank present you
3. **Test Before Pushing**: Catch bugs locally, not on production
4. **Review Diffs**: Know exactly what you're committing
5. **One Feature Per Branch**: Easy to manage and revert if needed
6. **Pull Before Work**: Avoid conflicts by staying updated
7. **Keep Main Stable**: Only tested, working code on main

---

## 🔗 Useful Resources

- Git Documentation: https://git-scm.com/doc
- GitHub Help: https://help.github.com
- Commit Message Guide: https://www.conventionalcommits.org/

---

**Last Updated**: 2025-11-08  
**Maintained By**: Development Team  
**Version**: 1.0
