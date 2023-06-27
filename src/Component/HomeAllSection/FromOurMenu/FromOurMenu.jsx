import "./FromOurMenu.css"
import FromMenuCard from '../../Sharied/FromMeanuCard/FromMenuCard';
import useMenu from '../../../Hooks/useMenu';

const FromOurMenu = () => {

    // let [menus, setMenu] = useState([])
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             let popularItem = data.filter(item => item.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])


    let [menu,loading]=useMenu()
    let popularItem = menu.filter(item => item.category === "popular")


    return (
        <div className='mt-14'>
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                <p>---Check it out---</p>
                <h3>FROM OUR MENU</h3>
            </div>

            <div className="menu grid md:grid-cols-2 gap-5 mt-10">
                {
                    popularItem.map(item => <FromMenuCard key={item._id} allItem={item}></FromMenuCard>)
                }
            </div>

            {/* all item part  */}

            <h6 className="fullRecipe w-full md:w-2/12">View Full  Menu</h6>

            {/* contact part  */}

            <div className="contact mt-16">
                <h2>Call Us: <span>+88 0192345678910</span></h2>
            </div>


        </div>
    );
};

export default FromOurMenu;