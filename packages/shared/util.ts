/** Replace all non alpha chars with a `-` and lower the string*/
export const sanitizeName = (name: string) => {
  return name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
}