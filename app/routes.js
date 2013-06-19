module.exports = function(match) {
    match("",                    "home#index");
    match("profile/:id",         "user#index");
    match("tag/:tags",           "home#tags");
    match("project/new",         "home#index");
};
