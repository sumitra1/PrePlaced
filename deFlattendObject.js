function deflattenArray(obj) {
    // Create an empty object to store the deflattened array
    const result = {};
    // Iterate over each key in the input object
    for (const key in obj) {
      // Split the key by dot (.) to get nested keys 
      const keys = key.split('.');
      let currentObj = result;
      for (let i = 0; i < keys.length - 1; i++) {

        const currentKey = keys[i];   

        if (!currentObj[currentKey]) {     

          currentObj[currentKey] = {};  
        }  
        currentObj = currentObj[currentKey]; 

      }
     
      currentObj[keys[keys.length - 1]] = obj[key];
    }
    
    return result;
  }
  // The input flattened array
  const flattenedArray = { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56 };
  // Call the deflattenArray function to deflatten the array
  const deflattenedArray = deflattenArray(flattenedArray);
  console.log(deflattenedArray);
  ``
//   const input = {
//     A: "12",
//     B: 23,
//     C: {
//       P: 23,
//       O: {
//         L: 56,
//       },
//       Q: [1, 2],
//     },
//   };
  