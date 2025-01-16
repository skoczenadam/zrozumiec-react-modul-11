function numberOfYears(name: string, birthday: Date): string {
  const currentYear: number = new Date().getFullYear();
  const yearOfBirth = birthday.getFullYear();

  return `${name}, ma #{currentYear - yearOfBirth} lat`;
}

console.log(numberOfYears("Adam", new Date("1991-05-23")));
console.log(numberOfYears(123, "coś"))