module.exports = function(match) {
    match("",                    "home#index");
    match("profile/:id",         "user#index");
    match("tags/:tags",          "home#tags");
    match("project/new",         "home#edit");
};
