# Git

## System kontroli wersji - git

Git to jeden z systemów kontroli wersji, uruchamiany lokalnie na naszym
komputerze.

Pobieramy instalator i instalujemy z uprawnieniami administratora.

GitHub...

## Polecenia

- `git init` - inicjuje repozytorium
- `git status` - wyświetla stan
- `git add . [*] [nazwa_pliku]` - dodawanie do śledzenia zmian
- `git commit -m "treść komentarza"` - commitowanie / komentowanie
- `git log` - pokazuje komentarze
- `git push [origin nazwa_galezi] [--all]` - wypychanie na serwer
- `git checkout [-b] nazwa_galezi` - [tworzy i] przechodzi do gałęzi
- `git branch` - pokazuje gałęzie
- `git branch -d nazwa_galezi` - usuwa gałąź lokalną
- `git diff galaz1..galaz2` - pokazuje różnice pomiędzy galęziami
- `git merge galaz1 galaz2` - łączy gałęzie
- `git push origin --delete nazwa_galezi` - usuwanie gałęzi z serwera
- `git clone adres_repo` - pobieranie istniejącego repo z serwera

## Pliki specjalne

*.gitignore* - służy do ignorowania śledzenia plików / folderów

## Linki

- [git-scm.com](https://git-scm.com/)
