const day =new Date(2024,10,12);
const options ={
    year: 'numeric',
    month: 'long',
    day:'numeric',
};

console.log(day.toLocaleDateString(undefined, options));
