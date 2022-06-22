import './style.css';
import Unique from '../../assets/unique.svg'
import Community from '../../assets/charity.svg'
import Safe from '../../assets/safe.svg'
import Reward from '../../assets/rewards.svg'
const Card = (n) => {
  
    const number = n.number;
    console.log('number', number)
    return ( 
    <div>
      {number==1?
        <div class="card">
        <div class="content">
          <div class="front">
            <img class="profile" width="100%" src={Unique} alt="Neymar"/>
            <h3 calss='text-name'>Unique</h3>
          </div>
          <div class="back from-bottom">            
            <ul class="social-icon">
              <li>One of kinds</li>
					    <li>GoldenSpring native token</li>
					    <li>Croschain</li>
            </ul>
          </div>
        </div>
      </div>
      :(number==2?
        <div class="card">
        <div class="content">
          <div class="front">
            <img class="profile" width="100%" src={Safe} alt="Neymar"/>
            <h3 calss='text-name'>Safe</h3>
          </div>
          <div class="back from-bottom">            
            <ul class="social-icon">
              <li>One of kinds</li>
					    <li>GoldenSpring native token</li>
					    <li>Croschain</li>
            </ul>
          </div>
        </div>
      </div>
      :(number==3?
        <div class="card">
        <div class="content">
          <div class="front">
            <img class="profile" width="100%" src={Reward} alt="Neymar"/>
            <h3 calss='text-name'>Reward</h3>
          </div>
          <div class="back from-bottom">            
            <ul class="social-icon">
              <li>One of kinds</li>
					    <li>GoldenSpring native token</li>
					    <li>Croschain</li>
            </ul>
          </div>
        </div>
      </div>:(number==4?
        <div class="card">
        <div class="content">
          <div class="front">
            <img class="profile" width="100%" src={Community} alt="Community"/>
            <h3 calss='text-name'>Community</h3>
          </div>
          <div class="back from-bottom">            
            <ul class="social-icon">
              <li>One of kinds</li>
					    <li>GoldenSpring native token</li>
					    <li>Croschain</li>
            </ul>
          </div>
        </div>
      </div>:<>xxx</>)))
      } 
      </div>  

    )
}
export default Card