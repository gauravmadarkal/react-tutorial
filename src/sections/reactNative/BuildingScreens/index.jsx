
import React from 'react';
import { app_initial, card_component, card_styling, header_title, home_screen, home_styling } from '../../../assets/constants/reactNative';
import BoldItalicize from '../../../components/BoldItalicize';
import CodeSnippet from '../../../components/CodeSnippet';
import Points from '../../../components/Points';
import Text from '../../../components/Text';
import Preview from '../../../assets/images/react_native/preview.jpeg';

const BuildingScreens = () => {
    return (
        <section>
            <Text>Lets build the Home screen now, the Home screen is supposed to contain a list of tutorials a user has subscribed to</Text>
            <h3>Preview</h3>
            <img src={Preview} alt='Preview Home screen' style={{ width: '15em' }}/>
            <Text>So, lets think about the list of components we can build</Text>
            <Points content={[
                'A card: To show the tutorial name',
                'A Header'
            ]} />
            <Text>We'll start with the card component</Text>
            <Text>The card component will consist of a tutorial name, type of tutorial, completion status</Text>
            <Text>We'll need some dummy data to get started with, copy the below object and paste it into a file called constants.js</Text>
            <Text>Let's keep that aside for now, create a folder called card inside the components directory. ./src/components/card/index.jsx</Text>
            <Text>In react native, there are mutliple types of UI elements, some of the major ones are:</Text>
            <Points content={
                [
                    'View: This is similar to a div, it renders a part of the screen, it can be as small as a Dot and as big as an entire screen.',
                    'Text: Corresponds to a text element',
                    'Image: To render images, takes a source property similar to an img tag in HTML',
                    { 
                        main: 'Touchables: They are the ones which respond to touch events, all these elements emit a onPress() event', 
                        subpoints: [
                            <Text><b>TouchableOpacity</b>: Gives a visible response on touch by reducing opactity of the view</Text>,
                            <Text><b>TouchableWithoutFeedback</b>: Gives no visible feedback</Text>,
                            <Text><b>TouchableHighlight</b>: Highlights the view with a border</Text>
                        ] 
                    } 
                ]
            } />
            <Text>Our card component will be a touchable element, because in the actual app, if we click on a tutorial we want to start the tutorial</Text>
            <Text>Look at the code below and try to understand what is hapenning</Text>
            <CodeSnippet code={card_component} />
            <Text>We have two text elements to show the title and completion status and an arrow image to give a notion that it is a clickable element</Text>
            <Text>Now lets style the component, you can see that we have already added some styling object, now lets create the style objects</Text>
            <Text>Go into the style.js for that component, paste the same starter code for a styling file</Text>
            <CodeSnippet code={card_styling} />
            <Text>You can see that the styling is very similar to css, some things that are different are:</Text>
            <Points content={[
                'You don\'t mention the units for a value, like px, pt, em, or rem. Because each native platform has its way to interpret the screen size. So we just give the value',
                'If you want a view to flex, instead of display: flex, we give flex: 1',
                'Margin, padding does not take all 4 sides, we need to give individual side values.',
                'All style attributes are camelCase'
            ]} />
            <Text>Once you are done styling, you can pass the object to a stylesheet create function, 
                which checks the object for errors and returns an object, which is referenced in your component</Text>
            <Text>Back to the Home screen, where we'll render the card component for each tutorial</Text>
            <Text>Things we will need to build this screen:</Text>
            <Points content={[
                'ScrollView: Using this view we can render as many items as we want and as the screen size grows a scroll bar is added',
                'FlatList: We can use this to render items in a horizontal way, where all the tutorials that belong to a single category go into this list'
            ]} />
            <Text>Difference between Flatlist and ScrollView is that Flatlist renders items lazily (on-demand), while scrollview renders all items and stores it in RAM</Text>
            <Text>If you have a very long list, then Flatlist is the one to go. If you have limited number of items it is your personal choice</Text>
            <BoldItalicize>/home/index.jsx</BoldItalicize>
            <CodeSnippet code={home_screen} />
            <BoldItalicize>/home/style.js</BoldItalicize>
            <CodeSnippet code={home_styling} />
            <Text>Head over to <BoldItalicize>App.js</BoldItalicize> and remove the content being rendered in the function, and paste the below code</Text>
            <CodeSnippet code={app_initial} />
            <Text>The App component acts as a master telling which screen needs to be rendered and what data needs to be passed to all the children components</Text>
            <Text> quite a few things are happenning here, let's go over each one of them</Text>
            <Points content={[
                'We have two screens, Home and Profile screen',
                'We can have a customized header for each screen',
                'We want to add a profile button on the home screen, so that we can get to the profile screen, but we don\'t need that on the profile screen',
                'Header Title is a custom component, so that we can style is any way we want',
                'The options prop for the stack.screen has navigation attribute passed down, we can use this to navigate between screens, so when the user clicks on profile icon, we go to profile screen',
                'If you recall we discussed about touchables, so we wrap the profile icon with TouchableOpacity, so that we can do something in the onPress callback',
                'Lastly, you can see that we have wrapped all these components with the GlobalProvider, so that we have access to the user details and other global data.',
                'We have used the username in the HeaderTitle component, see below'
            ]} />
            <Text><BoldItalicize>./src/components/HeaderTitle/index.jsx</BoldItalicize></Text>
            <CodeSnippet code={header_title} />
            <Text>We need to make a final change before we can run our application</Text>
            <Text>Open the <BoldItalicize>metro.config.js</BoldItalicize>file</Text>
            <CodeSnippet code={`resolver: { \n\tsourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'] \n}`} />
            <Text>Append the following object after the transformer attribute, this just tells the bundler to include all these file extensions</Text>
            <Text>Go ahead connect your emulator/device and run <BoldItalicize>npm run android/ios</BoldItalicize> based on your platform</Text>
            <h3>Thats it, we are done with this tutorial</h3>
            <Text>Next steps: Try and build the profile screen by utilizing the data from the context api</Text>
        </section>
    )
};

export default BuildingScreens;
