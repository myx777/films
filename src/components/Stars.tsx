import { Star } from './Star';

//отрисовка звезд и картинки звезды
const Stars: React.FC<CountTypeStars> = ({ count = 0 }) => {
    if(count < 1 || count > 5) {
        return;
    }
    const starsArray = Array.from( {length: Math.trunc(count)}, (_, index) => {
        return (
            <li key={index}>
                <Star />
            </li>
        )
    } )
    return (   
        <ul className='card-body-stars'>
            {starsArray}
        </ul>
    );
}

export default Stars;
