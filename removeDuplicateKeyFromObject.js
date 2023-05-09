const data = {
    123: {
      name: "Alice",
      id: 123,
      dob: "Dec"
    },
    456: {
      name: "Bob",
      id: 4567,
      dob: "Nov"
    }
  };
  
  const data2 = {
    456: {
      name: "Bob",
      id: 456,
      dob: "Nov",
      eth: "hi"
    },
    135: {
      name: "Eve",
      id: 135,
      dob: "Jun"
    }
  };
  
  const output = {};
 
// Combining data and data2 into the output object

for(const [key,value] of Object.entries(data)){
    output[key]={...value,id:key};
}
for(const [key,value] of Object.entries(data2)){
    output[key]={...value,id:key};
}
console.log(output);
  
