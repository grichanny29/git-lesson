



//  export const required = value => {
// 	if (value) return undefined;
// 	return "Field is required";
// }

//  export const maxLenghtCreator= (maxLenght )=> (value) => {
// 	if (value.lenght >maxLenght) return "Max length is ${maxLenght} symbols";
// 	return undefined;
// }



export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }
  return undefined;
};