var timezoneUtils = {

    _heatMap: null,
    _values: null,

    init: function (heatMap, valueMap) {
        this._heatMap = heatMap;
        this._values = valueMap;
    },

    applyColors: function (doc) {
        for (var i  in this._values) {
            var el = this._values[i];
            var zone = doc.querySelector(el.id);
            if (zone) {
                zone.setAttribute("fill", this._getColor(el.weight));
            }
        }
    },

    _getColor: function (weight) {
        var index = Math.round(weight);
        if (weight < 0) {
            index = 0;
        }

        if (index >= 10) {
            index = 9;
        }

        return this._heatMap[index];
    }


};

timezoneUtils.init(_heatMap, _values);

