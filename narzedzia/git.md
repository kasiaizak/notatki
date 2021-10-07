# Git

## System kontroli wersji - git

Git to jeden z systemów kontroli wersji, uruchamiany lokalnie na naszym komputerze.

Pobieramy instalator i instalujemy z uprawnieniami administratora.

## Konfiguracja

- `git config --list` - pokazuje konfigurację wszystkich opcji danego repozytorium
- `git config opcja` - pokazuje konfigurację danej opcji (np. `git config user.name`)
- `git config --global user.name "Jan Kowalski"`
- `git config --global user.email jkowalski@example.com`
- `git config --global core.editor code` - ustawienie Visual Studio Code jako domyślnego edytora dla gita

## Pliki specjalne

*.gitignore* - służy do ignorowania śledzenia plików / folderów

## Polecenia

- `git init` - inicjuje lokalne repozytorium
- `git clone adres_repo.git [katalog]` - pobieranie istniejącego repo z serwera
- `git add . [*] [nazwa_pliku]` - dodawanie do śledzenia zmian
- `git commit -m "treść komentarza"` - zatwierdzamy wersję plików w lokalnym repozytorium
- `git status` - wyświetla informacje o aktualnym stanie repozytorium
- `git diff` - komenda wyświetla porównanie różnic plików znajdujących się w poczekalni z plikami zatwierdzonymi w lokalnym repozytorium
- `git rm nazwa_pliku` - usuwa plik z repozytorium
- `git mv przenosimy_z przenosimy_do` - komenda służąca  do przeniesienia pliku
- `git checkout -- nazwa_pliku` - przywraca ostatnią zapamiętaną wersję pliku z lokalnego repozytorium - wszystkie zmiany w pliku zostaną usunięte
- `git log` - pokazuje wszystkie zatwierdzony zmiany w lokalnym repozytorium
- `git remote [-v]` - pokazuje nazwy zdalnych serwerów z naszym repozytorium [pokazuje url zdalnego repozytorium]
- `git remote add origin adres_repo.git` - tworzy powiązanie lokalnego repozytorium z repozytorium zdalnym
- `git fetch nazwa_zdalnego_repozytorium` - pobranie zdalnego repozytorium
- `git pull` - pobranie plików ze zdalnego repozytorium i ich scalanie z aktualnymi plikami w repozytorium lokalnym
- `git push [origin nazwa_galezi] [--all]` - wysyłanie stanu repozytorium lokalnego do repozytorium zdalnego
- `git checkout [-b] nazwa_galezi` - [tworzy i] przechodzi do gałęzi
- `git branch` - pokazuje gałęzie
- `git branch -d nazwa_galezi` - usuwa gałąź lokalną
- `git diff galaz1..galaz2` - pokazuje różnice pomiędzy gałęziami
- `git merge galaz1 galaz2` - łączy gałęzie
- `git push origin --delete nazwa_galezi` - usuwanie gałęzi z serwera

## Problemy

Przy poleceniu `git add .` możemy czasem otrzymać ostrzeżenie w stylu:

> warning: LF will be replaced by CRLF in style.css. The file will have its original line endings in your working directory

Wynika to z różnic w sekwencji znaków oznaczających zakończenie linii tekstu, które występują jako domyślne w różnych systemach operacyjnych. W Visual Studio Code możemy podejrzeć to ustawienie w prawym dolnym rogu ekranu:

![Line Sequence](../_media/tools/git/line-sequence.jpg)

Możemy skonfigurować git'a, by nie sprawdzał jakie jest zakończenie linii, co rozwiąże nasz problem:

`git config --global core.autocrlf false`

## Linki

- [git-scm.com](https://git-scm.com/)
