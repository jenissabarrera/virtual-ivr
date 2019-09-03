const clientId = '83d37bf5-e050-47bf-9937-0314b259c9c4';
const redirectUri = window.location.href;

// Set purecloud objects
const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance;
const architectApi = new platformClient.ArchitectApi();

// Set PureCloud settings
client.setEnvironment('mypurecloud.com');
client.setPersistSettings(true, 'test_app');

//Authenticate with Purecloud
$(document).ready(() => {
  client.loginImplicitGrant(clientId, redirectUri)
      .then(() => {
          console.log('Logged in')
 

          })

          .catch((err) => console.error(err));
          
      });


function getArchitectFlows () {

  
  let selectedFlow = document.getElementById("architectFlow").value;
 

  let opts = { 
    type: [selectedFlow], 
    pageNumber: 1,
    pageSize: 100,
    sortBy: "id",
    sortOrder: "asc" 

  };

  console.log(opts)

  architectApi.getFlows(opts)
    .then((data) => {
      console.log(`getFlows success! data: ${JSON.stringify(data, null, 2)}`);
    })
    .catch((err) => {
      console.log('There was a failure calling getFlows');
      console.error(err);
    });

}

