function Cars(car, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car_info = { car: car, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car_info[key] = value;
    });
    return car_info;
}
;
console.log(Cars("Honda", "BRV", ["color", "grey"], ["seats", 7]));
