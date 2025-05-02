import useGlobalReducer from "../hooks/useGlobalReducer";
import { validateEmail } from "../validation";

export const Home = () => {

	//useGlobalReducer --> hook personalizado, puede tener cualquier nombre 
  const {store, dispatch} = useGlobalReducer()

  //ev, informacion del evento, puede ser cualquier nombre
  const handleInput = (ev)=>{
	const email = ev.target.value;
	dispatch({
		type:"change_email",
		payload:email
	})
  }

	return (
		<div className="text-center mt-5">
			<h3>Hola {store.name}</h3>
			<ul className="list-group">
					{/* Map over the 'todos' array from the store and render each item as a list element */}
					{store && store.todos?.map((item) => {
					  return (
						<li
						  key={item.id}  // React key for list items.
						  className="list-group-item d-flex justify-content-between"
						  style={{ background: item.background }}> 
						
						  
						  <p>Open file ./store.js to see the global store that contains and updates the list of colors</p>
						  
						  <button className="btn btn-success" 
							onClick={() => dispatch({
							  type: "add_task", 
							  payload: { id: item.id, color: "pink", tituloTarea: "Hacer el proyecto final" }
							})}>
							Change Color
						  </button>
						</li>
					  );
					})}

					<input type="text"   placeholder="Introduzca el email" onChange={handleInput} />
					<p>Email es: {store.email}</p>
					{validateEmail("emailuser@gmail.com") ? "correcto" : "email no es valido"}
				  </ul>
				  <br />
		</div>
	);
}; 