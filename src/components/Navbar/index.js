import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navbar(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

    return (
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
    );
}

export default Navbar;