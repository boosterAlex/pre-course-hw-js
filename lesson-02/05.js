let passport = {
    name: 'Petr',
    surname: 'Petrov',
};

let passportCopy = { ...passport };

passportCopy.name = 'Ivan';
