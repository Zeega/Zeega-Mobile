module.exports = function(match) {
    match("",                    "home#index");
    match("profile/:id",         "user#index");
    match("project/new",         "home#edit");
};
