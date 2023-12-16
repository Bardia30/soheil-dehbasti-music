import MiniHero from "../MiniHero/MiniHero";
import data from '../../data/miniHeroData.json';
import './MidSection.scss';

const MidSection = () => {
    

    return (
        <div className="mid-section">
            {data.map((hero, index) => (
                <MiniHero 
                    heroPic={process.env.PUBLIC_URL + hero.pic}
                    heroParagraph={hero.paragraph}
                    heroTitle={hero.title}
                    isRevert={hero.revert}
                    key={index}
                />
            ))}
        </div>
    )
}

export default MidSection