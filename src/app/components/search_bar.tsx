// import { FaSearch } from "react-icons/fa";

// export default function SearchBar() {
//     const getInitialState = () => {
//         return { input: '' };
//       }
    
//     const handleChange = (e:string) =>{
//         this.setState({ input: e.target.value });
//       }
    
//     return (
//         <div className="fixed bottom-14 right-10">
//             <form className="" action="">
//                 <input className="pl-4" type="text"  onChange={ this.handleChange } placeholder="Search" />
//                 <label className="inline-block translate-y-3 text-2xl text-stone-100 rounded-full bg-test5 p-2">
//                     <button onClick={this.handleClick}><FaSearch /></button>
//                 </label>
//             </form>
//         </div>
//     )
// }

// function Search({ category }: any) {
//     const { strCategory, strCategoryThumb  } = category || {};
  
//     return (
//       <Link href={`/categories/${strCategory}`}>
//         <div>
//             <img src={strCategoryThumb} alt="" />
//           <p>{strCategory}</p>
//         </div>
//       </Link>
//     );
//   }