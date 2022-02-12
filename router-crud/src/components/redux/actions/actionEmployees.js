import { typesEmpleoyees } from "../types/types";
import { db } from "../../../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";

//DELETE

export const deleteEmployeeAsync = (email) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"EmployessData");
        const q = query(estCollection,where("correo","==",email)) //query establece una condicion con l apropiedad where
       
        const datos = await getDocs(q); //obtengo la informacion completa que se relaciona con el email que se llama q
        datos.forEach((docu) => {
            deleteDoc(doc(db,"EmployessData",docu.id));
        })
        dispatch(deleteSync(email));
    }
}

export const deleteSync = (email) => {
    return{
        type: typesEmpleoyees.delete,
        payload: email
    }
}


//READ

export const listEmployeeAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "EmployessData")); //desde firebase obtener los documentos
        const empleados = []; 
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data() //el obejto .data para traer la estructura de objeto
            })
        });
        dispatch(listSync(empleados)); 
    }
}

export const listSync = (employees) => {
    return {
        type: typesEmpleoyees.list,
        payload: employees
    }
}


//CREATE

export const registerEmployeeAsync = (newEmployee) => {

    return(dispatch) => {

        addDoc(collection(db,"EmployessData"),newEmployee) //desde firebase
        .then(resp => {
            dispatch(registerEmployeeSync(newEmployee)) // registre
            dispatch(listEmployeeAsync()) //para que actulice la lista
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerEmployeeSync = (employee) => {
    return{
        type: typesEmpleoyees.register,
        payload: employee
    }

}