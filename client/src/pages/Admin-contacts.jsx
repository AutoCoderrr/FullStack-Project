import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { Footer } from "../components/Footer";
// import { Contact } from "./Contact";


export const AdminContacts=()=>{
const [contact, setContacts]= useState([]);
    const {authorizationToken} = useAuth(); // Access authorization token from context
const getContactData=async()=>{
    try{
        const response = await fetch ("http://localhost:5000/api/admin/contacts",{
            method:'GET',
            headers: {
                Authorization: authorizationToken,
              },
        });

const data = await response.json();
console.log("contact data ",data);
if(response.ok){
    // confirm.log(response);
    setContacts(data);
}
    }
    catch(error){
        console.log(error);
    }

};
//defining the delete button 
const deleteContactById=async(id)=>{
    try{
const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
method:'DELETE',
headers: {
    Authorization: authorizationToken,
  },
})
if (response.ok) {
    console.log(`Contact with ID ${id} deleted successfully`);
    // Update local state or trigger a refresh of contact data
    getContactData(); // Refresh contact data after successful deletion
  } else {
    console.error(`Failed to delete contact with ID ${id}`);
    // Handle deletion failure scenario
  }
    }
    catch(error){
        console.log(error);
// console.log(response);
    }

}

useEffect(()=>{
    getContactData();

},[]);

return (
    <>
        <section>
            <div>
                {contact.map((ccd, index) => {
                    const { username, email, message,_id } = ccd;
                    return (
                        <div key={index}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button onClick={()=>deleteContactById(_id)
                            }>Delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
        <Footer></Footer>
    </>
);


}