# learn_git_command
用于学习 git 命令

## 标签
标签就是单独的，在哪个分支下设立标签，就是把当前分支的状态单独保存为一个标签。

### 创建附注标签
git tag -a v1 -m "version 1"

(创建标签的话，需要先将内容提交保存到远程仓库，不然最新的内容不会在标签内)

### 提交标签到远程
git push origin v1

### 查看本地标签
git tag -l

### 删除本地标签
git tag -d v1

### 删除远程
git push origin :refs/tags/v1


## 分支

### 创建分支
git branch test

### 切换分支
git checkout test

### 查看当前分支情况
git branch

### 提交到分支
git push -u origin test

### 删除本地分支
git branch -d test

### 删除远程分支
git push origin --delete test

### 合并分支
git merge 分支名

## 版本

### 历史查看

git log: 查看详细历史记录，按提交时间倒叙排列，包含提交时间，提交作者，提交备注以及提交的hash值；

git log --pretty=oneline : 格式化log形式，每条log只有一行，只包含 完整的hash值 和 提交的备注；


### 版本切换

git reset --hard commitId: 版本切换

git reset --hard v1.0.11

git reset --hard HEAD 切换到最新版

### 版本回退

git reset --hard HEAD^

### 版本回退后提交

git push -f
