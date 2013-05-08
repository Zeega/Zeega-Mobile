module.exports = function(match) {
    match("m",                    "home#index");
    match("m/profile/:id",         "user#index");
    match("m/project/new",         "home#edit");
};
