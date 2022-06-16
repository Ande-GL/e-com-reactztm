import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map((categoryMaping) => (
                <CategoryItem key={categoryMaping.id} category = {categoryMaping} />
            ))}
        </div>

    )
}

export default Directory