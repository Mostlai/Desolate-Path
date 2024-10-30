// Format large numbers
const nFormatter = (num) => {
    let lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "千" },
        { value: 1e6, symbol: "百万" },
        { value: 1e9, symbol: "十亿" },
        { value: 1e12, symbol: "万亿" },
        { value: 1e15, symbol: "千万亿" },
        { value: 1e18, symbol: "兆" },
        { value: 1e21, symbol: "京" },
        { value: 1e24, symbol: "垓" },
        { value: 1e27, symbol: "秭" },
        { value: 1e30, symbol: "穰" },
        { value: 1e33, symbol: "沟" },
        { value: 1e36, symbol: "涧" },
        { value: 1e39, symbol: "正" },
        { value: 1e42, symbol: "载" },
        { value: 1e45, symbol: "极" },
        { value: 1e48, symbol: "恒" },
        { value: 1e51, symbol: "阿" },
        { value: 1e54, symbol: "那" },
        { value: 1e57, symbol: "涧" }
    ];    
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
}

// Get a randomized number between 2 integers
const randomizeNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min); //The maximum is inclusive and the minimum is inclusive 
}

// Get a randomized decimal between 2 numbers
const randomizeDecimal = (min, max) => {
    return Math.random() * (max - min) + min;
}