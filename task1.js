Zadanie 1. Pakowanie towarów

Napisz funkcję isEnoughCapacity(products, containerSize), która oblicza, czy wszystkie towary zmieszczą się w kontenerze podczas pakowania.

Funkcja deklaruje dwa parametry:

products — obiekt, w którym klucze zawierają nazwy towarów, a ich wartości — ilość tych towarów. Na przykład { apples: 2, grapes: 4 }.
containerSize — liczba, maksymalna ilość jednostek towaru, którą może pomieścić kontener.

products = {
    apples: 2,
    grapes: 4,
    pears: 7
}

Funkcja powinna zwrócić wynik sprawdzenia, czy wszystkie towary zmieszczą się w kontenerze. Czyli policzyć łączną ilość towarów w obiekcie products i zwrócić true, jeśli jest ona mniejsza lub równa containerSize, i false, jeśli nie.



Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.



console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false