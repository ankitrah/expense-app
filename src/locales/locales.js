import numeral from 'numeral';

export const locales = () => {
    if (numeral.locales['inr'] === undefined) {
        // load a locale
        numeral.register('locale', 'inr', {
            delimiters: {
                thousands: ',',
                decimal: '.'
            },
            abbreviations: {
                thousand: 'k',
                million: 'm',
                billion: 'b',
                trillion: 't'
            },
            ordinal: function (number) {
                return number === 1 ? 'er' : 'ème';
            },
            currency: {
                symbol: '₹'
            }
        });
    }
};