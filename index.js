const findMatching = (drivers, name) => {
  name = name.toLowerCase();
  return drivers.filter((driver) => driver.toLowerCase() === name);
};

const fuzzyMatch = (drivers, name) => {
  return drivers.filter((driver) => driver.startsWith(name));
};

const matchName = (driverObjs, driver) => {
  return driverObjs.filter(({ name }) => name === driver);
};
