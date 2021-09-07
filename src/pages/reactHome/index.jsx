import React from 'react';
import './style.css';
import EnvSetup from '../../sections/react/EnvSetup';
import ProjectStructure from '../../sections/react/ProjectStructure';
import BuildingApp from '../../sections/react/BuildingApp';
import FinishingApp from '../../sections/react/FinishingApp';
import HomePreview from '../../assets/images/home.PNG';
import ContactPreview from '../../assets/images/contact.PNG';
import NextTutorial from '../../components/NextTutorial';

const Home = () => {
	return (
		<section>
			<h1 class="txt-cen">Tutorial on React</h1>
			<h2>What is react?</h2>
			<p class="txt">React is a javascript library to build UI.</p>

			<h2>Advantages of using React</h2>
			<ul>
				<li>You can divide your web app into teeny tiny reusable components.</li>
				<li>Each component has its own state. So, if something fails you don't to scan through your entire app to find the defect.</li>
				<li>Since its just a library and not a framework, it does not need any prior syntactical knowledge.</li>
			</ul>
			<p>You might have not heard of couple of terms used above, worry not, we will go over all these concepts in the next steps.</p>
			<p>Ok, that enough theory, lets jump into the code.</p>
			<p>A preview of what you will be able to achieve at the end of this tutorial</p>
			<div className='preview'>
				<img src={HomePreview} alt='React tutorial Home page'/>
				<img src={ContactPreview} alt='React tutorial Contact page'/>
			</div>
			<EnvSetup />
			<ProjectStructure />
			<BuildingApp />
			<FinishingApp />
			<NextTutorial to='/mongo' title='Mongo DB' />
		</section>
	);
};

export default Home;