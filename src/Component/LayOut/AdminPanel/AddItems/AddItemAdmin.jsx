import React from 'react';
import "./AddItemAdmin.css"
import { useForm } from 'react-hook-form';

const ImageHostingToken=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItemAdmin = () => {

    const { register, handleSubmit, formState: { errors },reset } = useForm();

    // handle from data 
    const onSubmit = (data) => {

        // client side data upload and receved function and using imageBB
        let fromData=new FormData()
        fromData.append( "image" , data.image[0])
        
        fetch(`https://api.imgbb.com/1/upload?key=${ImageHostingToken}`,{
            method:"POST",
            body:fromData
        })
        .then(res=> res.json())
        .then(imageResponse=>{

            if(imageResponse.success){
                const imageUrl=imageResponse.data.display_url
                const {name,recipe,category,price}=data
                let menuItem={name,recipe,image:imageUrl,category,price:parseFloat(price)}
                console.log(menuItem)

                // TODO__(plm)__verify jwt jano ke kore header token patavo 

                fetch("http://localhost:5000/menus",{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify(menuItem)
                })
                .then(res=> res.json())
                .then(data=> {
                    reset()
                   if(data.insertedId){
                    alert("Your Item Is Add Complete")
                   }
                })

            }
        })
    };




    return (
        <div classNam="">
            
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6 mt-8">
                <p>------ADD ITEM------</p>
                <h3>MANAGE ADD ITEM</h3>
            </div>

            <div className="myItemsAll bg-white  my-10 mx-4 md:mx-16 rounded-sm">
                <div className="div p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <input type="text" placeholder="Recipe Name"
                            {...register("name", {required: true, maxLength: 100})}
                             className="input input-bordered w-full bg-red-100 " />
                        </div>

                        <div className="flex">
                        <div className="form-control w-full mr-4">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="Pick One" className="select select-bordered bg-red-100"
                            {...register("category", { required: true })}
                            >
                                <option disabled >Pick One</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>drinks</option>
                                <option>dessert</option>
                            </select>
                        </div>

                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Your Price" 
                            {...register("price", { required: true })}
                            className="input input-bordered w-full bg-red-100" />
                        </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24 bg-red-100"
                            {...register("recipe", { required: true })}
                             placeholder="Bio"></textarea>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">File Uploade</span>
                            </label>
                            <input type="file" 
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full bg-red-100" />
                        </div>

                        <input className="btn btn-active btn-secondary" type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItemAdmin;


// import React from 'react';


// export default function App() {

  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name"  />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
//       <select {...register("Title", { required: true })}>
//         <option value="Mr">Mr</option>
//         <option value="Mrs">Mrs</option>
//         <option value="Miss">Miss</option>
//         <option value="Dr">Dr</option>
//       </select>

//       <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//       <input {...register("Developer", { required: true })} type="radio" value="No" />

//       <input type="submit" />
//     </form>
//   );
// }