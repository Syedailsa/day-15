function Cars(car: string, model: string, ...option: [string, any][]){
    let car_info = {car, model};
    option.forEach(([key, value]) => car_info[key] = value);
    return car_info;
};

console.log(Cars("Honda", "BRV", ["color", "grey"], ["seats", 7]));

export{}