import react, {useState} from 'react';

const GridItem=({img, name, stages, cost_per_launch, description, wiki})=>{


const [isExpanded, setIsExpanded] = useState(false);

const toggleDescription = () => {
  setIsExpanded(!isExpanded);
};

return (
  <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
    <img className="h-48 w-full object-cover object-center" src={img} alt={name} />
    <div className="p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      
      <p className="text-gray-400">Stages: {stages}</p>
      <p className="text-gray-400">Cost per Launch: {cost_per_launch}$</p>
      
      {isExpanded ? (
        <p className="text-gray-200">{description} <a href={wiki}>wikipedia</a></p>
      ) : (
        <p className="text-gray-600 overflow-hidden line-clamp-3">{description} </p>
        
      )}
      <button
        onClick={toggleDescription}
        className="text-blue-500 hover:text-blue-700 mt-2 focus:outline-none"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  </div>
);
};

export default GridItem;