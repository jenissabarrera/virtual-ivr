
// --------------------------------------------------------------------------------
// Require in the PureCloud Platform SDK and Architect Scripting SDK
// --------------------------------------------------------------------------------
const architectScripting = require('purecloud-flow-scripting-api-sdk-javascript');
const platformApi        = require('purecloud-platform-client-v2');

// --------------------------------------------------------------------------------
// Helpers to make sample code more readable.
// --------------------------------------------------------------------------------
const archEnums          = architectScripting.enums.archEnums;
const scriptingSession       = architectScripting.environment.archSession;      // Session support
const platformApiClient  = platformApi.ApiClient.instance;
const scriptingFlowFactory   = architectScripting.factories.archFactoryFlows;
const scriptingEnums         = architectScripting.enums.archEnums;    

const clientId1 = '751ad006-d414-44af-9787-f1f511bd9487';
const clientSecret = 'CXZG6tmDOUm-aQDLJHp7VBU2c2X5IvPgcr461VyLwTc'

// --------------------------------------------------------------------------------
// This function will be what is called by Architect Scripting since it is
// specified in the start call at the bottom.
// --------------------------------------------------------------------------------
function doWork(session) {

    // Once the session starts you can do this to assign the authToken from
    // the Architect session object to the platform API client.
    platformApiClient.setAccessToken(session.authToken);

    // Now you can make calls using the PureCloud Platform client calls as well
    // as well as Architect Scripting calls because we've assigned the autorization
    // token.  :)
    

}


function assignToken(flowid){
    // console.log("This is the working token:" + JSON.stringify(token));
    // let modifiedToken = JSON.stringify(token);
    // archSession.startWithAuthToken(archEnums.LOCATIONS.prod_us_east_1, openFlow, modifiedToken)
    scriptingSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, openFlow(flowid), clientId1, clientSecret);
}

function openFlow(scriptSession,flowid){

    console.log("this is flow id!");
  let flowId = JSON.stringify(flowid);
  return scriptingFlowFactory.getFlowInfoByFlowIdAsync(flowId, scriptingEnums.FLOW_TYPES.inboundCall,function(ArchBaseFlowInfoBasic) {
      console.log('------------------------------------------------------')
      console.log('THIS IS NAME:' + ArchBaseFlowInfoBasic.name)
      console.log('------------------------------------------------------')

  }) 
  
}

 
// This will start off the Architect Scripting code and call the doWork function
// archSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, doWork, clientId, clientSecret);



module.exports = {
  
    assignToken: assignToken
};