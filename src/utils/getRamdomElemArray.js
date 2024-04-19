const getRandomElemArray = (arr) => {
    const indexRamdom = Math.floor(Math.random()*arr.length);
    console.log(arr[indexRamdom]);
    return arr[indexRamdom];
};

export default getRandomElemArray;

