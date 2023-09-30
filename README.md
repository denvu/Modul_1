# git-config

git config --global user.name "Valeriya"
git config --global user.email "leradenisenko.9@gmail.com"

git config --list # посмотреть настройки

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main

git init # инициализация репозитория
git add . # добавить все файлы
git commit -m "описание" # сделать коммит
git status 
git diff # Показывает изменения
git diff --color-worlds # Более развернуто изменения