import { faker } from "@faker-js/faker";

/**
 * Create an object with some props
 */
export const iLikeTurtles = () => ({
  niceNumber: 69,
  blazinglyFast: 420,
  randomLastName: faker.person.lastName(),
});
