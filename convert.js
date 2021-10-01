//convert farenheit to celsius

/*
- unit_in: either "f" or "c" 
- unit_out: either "f" or "c"
- temp: temperature (in f or c, depending on unit_in)
 */

function convert_temp(unit_in, unit_out, temp,) {
    if (unit_in === "f" & unit_out === "c") {
        return (temp - 32) * 5 / 9;
    }


else if (unit_in === "c" & unit_out === "f") {
    return (5 / 9) * temp + 32;
}
else if (unit_in === "c" & unit_out === "c" || unit_in === "f" & unit_out === "f") {
    return temp;
}
else return "Unvalid unit !!!"
}


console.log (convert_temp("c", "f", 0))
convert_temp("f", "c", 212)
convert_temp("z", "f", 32)
convert_temp("c", "z", 32)
convert_temp("f", "f", 75.5)
