define(function () {

    var _store = [];

    var ls = localStorage.getItem("store");
    if (ls !== null) {
        _store = JSON.parse(ls);
    }

    function save() {
        localStorage.setItem("store", JSON.stringify(_store));
    }

    return {
        getStore: function () {
            return _store;
        },
        add: function(data) {
            _store.push(data);
            save();
        },
        remove: function(idx) {
            _store.splice(idx, 1);
            save();
        }
    };

});