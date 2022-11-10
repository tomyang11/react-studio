// TODO: create a component that displays a single bakery item
const BakeryItem = props => {

    const { name, description, price, image } = props.item;

    const addNewItem = () => {
        
        const item = {
            name: name,
            price: price,
            count: 1
        }

        props.addItem(item);
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <img src={image} alt="bakery item" className='h-32' />
            <button onClick={addNewItem}>Add to Cart</button>
        </div>
    );
}

export default BakeryItem;