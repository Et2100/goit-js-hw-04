// Zadanie 2. Obliczanie kalorii

// Napisz funkcję calcAverageCalories(days), która zwraca średnią dzienną wartość liczby kalorii, które sportowiec spożywał w ciągu tygodnia. Funkcja oczekuje jednego parametru: days — tablicy obiektów. Każdy obiekt opisuje dzień tygodnia oraz liczbę kalorii calories, spożytych przez sportowca tego dnia. 

const calcAverageCalories = (days) => {
    let total = 0;
    let count = 0;
    for (const day of days) {
        total += day.calories;
        count++;
    };
    return count > 0 ? total / count : 0;
};

// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0