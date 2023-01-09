const Pets = require("../models/Pets");

module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY to be used for pet cards
        return date.toLocaleDateString();
    },
    get_emoji: () => {
        // Return a emoji depending on the breed
        if (Pets.breed == 'Dog') {
            return `<i class="fa-solid fa-dog"></i>`;
        } else if (Pets.breed == 'Cat') {
            return `<i class="fa-solid fa-cat"></i>`;
        }

        // Return a emoji depending on whether it is male or female
        if (Pets.gender == 'Male') {
            return `<i class="fa-solid fa-mars"></i>`;
        } else if (Pets.gender == 'Female') {
            return `<i class="fa-solid fa-venus"></i>`;
        }
    },
};
