let passportWithAddress = {
    name: 'Petr',
    surname: 'Petrov',
    address: {
        country: 'USA',
        city: 'LA',
    },
};

const passportWithAddressCopy = {
    ...passportWithAddress,
    address: { ...passportWithAddress.address },
};

passportWithAddressCopy.address.city = 'Bobrryisk';

console.log(passportWithAddress.address.city);
console.log(passportWithAddressCopy.address.city);
