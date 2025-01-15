
import {Models , Plants} from '../helper/helper';
import {useState , useEffect} from 'react';
import '../Styles/Feature.css' ;

const FeatureSpace = () => {
    const [number , setNumber] = useState(0);
    const [features, setFeatures] = useState([]); 
   
    useEffect(() =>{
        if(number === 0){
            setFeatures(Models) ;
        }else{
            setFeatures(Plants);
        }
        features.map((feature)=>{
            console.log(feature) ;
        }) 
        const prev = number == 0 ? 1 : 0 ;
        document.getElementsByClassName("feature-space")[prev].style.backgroundColor = "transparent" ;
        document.getElementsByClassName("feature-space")[number].style.backgroundColor = "lightgray" ;
    } , [number])
    return (
        <>
        <div className='feature-btns'>
            <button className='feature-space' onClick={()=>{
                setNumber(0);
            }}>Models</button>
            <button className='feature-space' onClick={()=>{
                setNumber(1);
            }}>Plants</button>
        </div>
        <div className='feature-container'>
        
        {
            features.map((feature)=>{
                return (<div className='feature'>
                     <h2>{feature.name}
                     </h2>
                <img src={feature.image} />
                <p>{feature.description || "Diseases "+feature.diseases}</p>
                <div className='ground-features'>
                <p className='feature-ground ground1'>{feature.accurecy ? "Accurecy :"+ feature.accurecy : "count "+feature.count }</p>

                <a className='bi bi-arrow-right-circle feature-ground ground2' href={feature.link}></a>
                </div>
                </div>)
            })
        }
        </div>
        </>
        
    )
}

export default FeatureSpace ;