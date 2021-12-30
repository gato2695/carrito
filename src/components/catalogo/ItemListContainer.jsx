import { useState, useEffect } from "react";
import { getDocs, collection, query, where, getFirestore } from "../../../node_modules/firebase/firestore";
import ItemList from "./ItemList";
import Loader from "../Loader";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollectionRef = collection(db, "items");

    if (filter === "" || filter === "Todos los productos") {
      const q = query(itemsCollectionRef);
      
      getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false)
        
      })
      
    }
    else {
      const firestoreFilter = where("category", "==", filter);
      const q = query(itemsCollectionRef, firestoreFilter);

      getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
        
      })
    }
  }, [filter])

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Stack direction="row">
        <Box sx={{ width: 600 , margin:"auto"}}>
          <FormControl fullWidth sx={{marginTop:"1rem"}}>
            <InputLabel id="demo-simple-select-label" >Categorías</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Categorías"
              onChange={handleChange}
              
            >
              <MenuItem value="Instrumentos de Cuerda">Instrumentos de Cuerda</MenuItem>
              <MenuItem value="Instrumentos de Viento">Instrumentos de Viento</MenuItem>
              <MenuItem value="Instrumentos de Persucusión">Instrumentos de percusión</MenuItem>
              <MenuItem value="Micrófonos">Micrófonos</MenuItem>
              <MenuItem value="Todos los instrumentos">Todos los instrumentos</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
