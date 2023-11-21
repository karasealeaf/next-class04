type petParam = { params: { pets: string } };

//first set of {} is for destructing params, everything after : is representing that things are inside objects, as we're 'typing ' things.
export default function Page({ params }: petParam ) {
  return (
    <div>
      <h2>This is a dynamic route parameters: {params.pets}!</h2>
    </div>
  );
}


//This represents the object that nextjs is passing as a prop to our page components.

// FunkyNextObject = {
//   params: {
//     pets: "What ever we want in the URL"
//   }
// }





// let number: string
// let bool: boolean
// bool = 
// number = 34

// export default function Page({ params }: {params : {pets:string}} ) {
//   return (
//     <div>
//       <h2>This is a dynamic route: {params.pets}!</h2>
//     </div>
//   );
// }