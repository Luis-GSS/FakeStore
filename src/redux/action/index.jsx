//para carrito de compras
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Eliminar del carrito

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
