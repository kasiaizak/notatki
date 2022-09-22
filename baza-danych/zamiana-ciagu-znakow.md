# Zamiana ciągu znaków

Podstawowy skrypt do zmiany ciągów znaków w tabeli, **używać z rozwagą**. By uruchomić skrypt potrzebujemy znać wcześniej _nazwę tabeli_ oraz _nazwę kolumny_, w której będą dokonywane zmiany.

**UWAGA**: Pamiętaj, aby wykonać kopię zapasową bazy danych przed zmianami na poziomie SQL.

```sql
update nazwa-bazy.nazwa-tabeli set nazwa-kolumny =
replace(nazwa-kolumny, 'tekst do zmiany', 'tekst po zmianie');
```
