/* eslint-disable no-useless-escape */
import React from 'react';
import Text from '../../components/Text';
import localConnect from '../../assets/images/mongo/compass_connection.PNG';
import connectionDetails from '../../assets/images/mongo/connection_details.PNG';
import JSONData from '../../assets/images/mongo/json_data.PNG';
import BoldItalicize from '../../components/BoldItalicize';
import CodeSnippet from '../../components/CodeSnippet';
import Points from '../../components/Points';
// import NextTutorial from '../../components/NextTutorial';


const MongoHome = () => {
    return (
        <section>
            <h1 className='txt-cen'>Tutorial on MongoDB</h1>
            <Text>In this tutorial we'll go over setting up mongodb local environment and some basic queries and data creation/manipulation/deletion (DCL, DML, DDL) operations</Text>
            <Text><h3>NoSQl vs SQL</h3></Text>
            <Text>Each has its own Advantages and disadvantages, NOSQL has no structure to the data, 
                if your schema design does not contain a specific structure or relationship between entities then NOSQL is the best option.</Text>
            <Text>But if you want to maintain a relationship between entities then SQL is the best option.</Text>
            <Text><BoldItalicize>What do we mean by a relationship?</BoldItalicize></Text>
            <h3>Example</h3>
            <CodeSnippet 
                code={`Let consider a prison database, A prison is a entity, a prisoner is an entity, a cell is an entity. \n A relationship between these entities can be listed as follows. \n A prison has many prisoners, a cell has one prisoner, a prison has many cells etc..`} 
                hideButton  
            />
            <Text>"has many", "has one" are called as relationships.</Text>
            <Text>If you want to store data in a structure less format then NOSQL will come into picture, lets take an example and define it in SQL and NOSQL
            in case on a Prisoner entity, in case of SQL</Text>
            <Text>You write the prisoner entity as follows, should have an primary key or an identifier unique to him, name, age, DOB etc.. are a must.</Text>
            <Text>Then you want to insert a prisoner without a DOB, you will not be able to because according to the schema they are compulsory.</Text>
            <Text>Also, if for a specific prisoner a new detail needs to be added then its not possible, you need to add it to all other prisoners as a NULL value.</Text>
            <Text>Thats the primary difference between NOSQL and SQL.</Text>
            <Text>Nows dive into NOSQL and explore how to use it.</Text>
            <Text>Head over to MongoDB downloads pages, and download the server based on your platform</Text>
            <a href='https://www.mongodb.com/try/download/community' target='_blank' rel='noreferrer'>Mongodb Downloads</a>
            <Text><BoldItalicize>For windows</BoldItalicize></Text>
            <Text>Download the msi installer which will take a few minutes to download, once that is done, click on the msi file and follow the steps.</Text>
            <Text>Install the complete tool, and follow all default steps. 
                Lastly, there is a checkbox to install mongocompass, do not uncheck that box. We'll go over what is mongocompass later in this tutorial</Text>
            <Text>Wait for a couple of minutes for the installer to finish.</Text>

            <Text><BoldItalicize>For Mac users</BoldItalicize></Text>,
            <Text>Download the zip file from mongo wesbite by selecting the platform as Macos.</Text>
            <Text>Open the terminal, change your directory to the downloaded location.</Text>
            <Text>Extract the zip file,</Text>
            <CodeSnippet code='tar xzf \entire file name\' />
            <Text>copy the extracted contents into the /usr/local/mongodb </Text>
            <CodeSnippet code="sudo mv \downloaded folder\ /usr/local/mongodb" />   
            <Text>change your directory to /usr/local/mongodb/</Text>

            <Text><BoldItalicize>For windows:</BoldItalicize></Text>
            <Text>Go into the directory where mongodb was installed, create /data/db directories.</Text>
            <Text>Open command prompt in admin mode.</Text>
            <Text>Change directory to mongodb location.</Text>
            <CodeSnippet code={`cd bin \nmongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log  --logappend --rest --install`} />

            <Text>lets start the mongo service.</Text>
            <CodeSnippet code='net start mongodb' />
            <Text>From the bin directory, run</Text>
            <CodeSnippet code='mongo' />

            <Text><BoldItalicize>For Mac:</BoldItalicize></Text>
            <Text>create two directories data and db, </Text>
            <CodeSnippet code='mkdir -p /data/db' />
            <Text>Change dir to db, </Text>
            <CodeSnippet code='cd /data/db' />
            <Text>Give the current user permissions to access the file </Text> 
            <CodeSnippet code="sudo chown 'username' /data/db"/>
            <Text>go back to the home directory, cd </Text>
            <Text>Now we need to add the mongo runtime executable to the bash_profile.</Text>
            <Text>Open the .bash_profile in a text editor and add the following dirs paths to the end of the file.</Text>
            <CodeSnippet code={`export MONGO_PATH=/usr/local/mongodb"\n"export PATH-$PATH:$MONGO_PATH/bin`} />

            <Text> Now we need to start the mongo server and link the client to that server, so that we can perform all the data operations.</Text>
            <Text>Open two terminals, run the following on one of the terminal "mongod"</Text>
            <Text>And on the other terminal run <BoldItalicize>mongo</BoldItalicize></Text>
            <Text>Here mongod is the daemon that receives the commands from the mongo cli which is the client.</Text>
            <Text>To check if the connection is working</Text>
            <Text>Run <BoldItalicize>show dbs</BoldItalicize> on the client and see if you get an output</Text>


            <Text>Now lets run some dcl, dml commands.</Text>
            <CodeSnippet code='show dbs' />
            <CodeSnippet code='use myprofile' />
            <Text>Lets add a admin user who will be using this database</Text>
            <CodeSnippet code={`db.createUser({
                user: 'admin',
                pwd: 'root',
                roles: ["readWrite", "dbAdmin"]
            })`} />
            <Text><h3>Collections</h3> A collection is a set of documents.</Text>
            <Text>What is a document?</Text>
            <Text>A document is a record representing some data.</Text>

            <Text>To create a collection, lets run:</Text>
            <CodeSnippet code='db.createCollection("potentialContacts")' />
            <Text>All the data in mongo is stored as a JSON.</Text>
            <Text>Lets open a json formatter so that we can insert data into our collection.</Text>
            <img src={JSONData} alt='JSON Formatter for data' />
            <CodeSnippet code={`db.potentialContacts.insert({
                    name: "Danny",
                    email: "dani1234@colorado.edu",
                    message: "Hi, Your profile looks very interesting, I would like to get in touch with you to talk about a potential project idea."
                });
            `} />
            <Text> to see if the data is inserted, lets explore our potentialContact collection</Text>
            <CodeSnippet code={`db.potentialContact.find();
            `} />
            
            if we want to add multiple items at one go, then we pass an array of data.
            <CodeSnippet code={`db.potentialContacts.insert({
                    name: "James",
                    email: "james1234@colorado.edu",
                    message: "Hi, You have good experience in product development, I am currently looking for a person to lead a project, would be interested to discuss this opportunity."
                });
            `} />
            So suppose you haven't handled the form validation on the frontend, in the case of SQL the database will throw an error saying some fields are missing, but in the case of NOSQL you don't have to worry about that.
            Now lets view the data we inserted,
            <CodeSnippet code={`db.potentialContacts.find();`} />
            Now the data is very difficult to read, lets format the data so we can view it as a json.
            <CodeSnippet code={`db.potentialContacts.find().pretty();`} />
            If in case we want to update an entry, we can do it using any field, but it is not recommended to do so, because there might be multiple entries with the same value, so it is better to use the unique identifier that mongodb has assigned to that record.
            <CodeSnippet code={`db.potentialContacts.update({ name: "James" }, { email: "james345@colorado.edu" });`} />
            There is a problem with doing this, try to find out what the problem is.

            OK, the issue here is that the update the query will reset the entire entry to what you specify in the second field, check your update by finding the entries.
            <CodeSnippet code={`db.potentialContacts.find().pretty()
            `} />
            You can see that the previous update query on "James" record has reset the record and removed the message field.
            What if we want to retain the existing fields and change only certain fields in the record.
            We can do this using the set keyword.
            <CodeSnippet code={`db.potentialContacts.update({ name: "Danny" }, {$set: { email: "james345@colorado.edu", identity: "man" } });
            `} />
            Suppose we want to remove a certain field in a record
            <CodeSnippet code={`db.potentialContacts.update({ name: "Danny" }, {$unset: { message: "" } });
            `} />
            If you want to rename a column or a key
            <CodeSnippet code={`db.potentialContacts.update({$rename: { "email": "mail" }});
            `} />
            If we want to remove a record.
            <CodeSnippet code={`db.potentialContacts.remove({ name: "Danny" })
            `} />
            Now, we need some data to perform some further operations. Copy the following command or try to insert some data yourself, that way you get more familiar with using the commands.
            <CodeSnippet code={`db.potentialContacts.insert([
                {
                    name: "Danny",
                    email: "dani1234@colorado.edu",
                    message: "Hi, Your profile looks very interesting, I would like to get in touch with you to talk about a potential project idea."
                },
                {
                    name: "James",
                    email: "james@colorado.edu",
                    message: "Very interested in talking to you about a job opportunity"
                },
                {
                    name: "Sasha",
                    email: "sasha007@colorado.edu",
                    message: "I am an undergraduate student, I would like to apply for a job opening at your company, could you refer me for the same?"
                },
                {
                    name: "Jhonny",
                    email: "jhonny1123@colorado.edu",
                    message: "..."
                }, 
                {
                    name: "Harry",
                    email: "harry934@colorado.edu",
                    message: "NULL"
                }])
            `} />
            Now that we have some starter data, lets look at some queries.
            To find entries which satify two conditions on the same record:
            <CodeSnippet code={`db.potentialContacts.find({$or: [{name: "James"}, {name: "Sasha"}]});
            `} />
            This is basically an OR condition, where the name should be either James or Sasha.
            Lets look at a more complex query. What if we want to find all the messages which are relevant or the messages which are not dummy.

            To find all the messages which have more than 10 characters
            <CodeSnippet code={`db.potentialContacts.find({
                    message: { $exists: true },
                    $expr: { "$gt": [ { "$strLenCP": "$message" }, 10 ] } 
                })
            `} />
            To find all the messages which have the word opportunity in it.
            <CodeSnippet code={`db.potentialContacts.find({
                    "message": { $regex: "opportunity" }
                });
            `} />
            <h3>Exercise</h3>
            <Points content={[
                'Create a collection called "subscribers"',
                "Add 5 entries with email-id, isSubscribed field, subscriptionType",
                "Filter all the entries where isSubscribed is true",
                "Get the total count of subscribers who have subscribed to subscriptionType = 'newsletter'"
            ]} />

            <h3>Using mongocompass  </h3>
            <Text>Once you are familiar with using the command line interface, you can use the UI provided and explore your database and collections.</Text>
            Open MongoCompass and follow the steps to view your database.
            <img src={localConnect} alt='MongoDb Connection' />
            <img src={connectionDetails} alt='Connection Details' />
            <h1 className='txt-cen'>That brings us to the end of the mongodb tutorial.</h1>
            For more info head over to <a href='https://docs.mongodb.com/'>MongoDb Docs</a>
            {/* <NextTutorial back title='React Tutorial' to='/' /> */}
        </section>
    )
};

export default MongoHome;