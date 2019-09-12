
// --------------------------------------------------------------------------------
// Require in the PureCloud Platform SDK and Architect Scripting SDK
// --------------------------------------------------------------------------------
const architectScripting = require('purecloud-flow-scripting-api-sdk-javascript');
const platformApi        = require('purecloud-platform-client-v2');
const archEnums          = architectScripting.enums.archEnums;

// --------------------------------------------------------------------------------
// Helpers to make sample code more readable.
// --------------------------------------------------------------------------------
const scriptingActionFactory = architectScripting.factories.archFactoryActions; // Factory to create actions
const scriptingEnums         = architectScripting.enums.archEnums;              // Enum support
const scriptingFlowFactory   = architectScripting.factories.archFactoryFlows;   // Factory to create flows
const scriptingLanguages     = architectScripting.languages.archLanguages;      // Language support
const scriptingSession       = architectScripting.environment.archSession;      // Session support
const scriptingTaskFactory   = architectScripting.factories.archFactoryTasks;   // Factory to create tasks
const scriptingLogger        = architectScripting.services.archLogging;         // Logging support

scriptingLogger.logNotesVerbose = true;

const clientId1 = '751ad006-d414-44af-9787-f1f511bd9487';
const clientSecret = 'CXZG6tmDOUm-aQDLJHp7VBU2c2X5IvPgcr461VyLwTc'

let flowid = "";

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


function assignToken(id){

    flow = "85f6e5be-1a92-42dd-a01f-b40cd125e89a";
    // console.log('id in ivr' + JSON.stringify(id));
    flowid = id.flowid;
    console.log('flowflow' + flowid);
    scriptingSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, openFlow, clientId1, clientSecret);
    // scriptingSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, openFlow(flow), clientId1, clientSecret);
}

function openFlow(scriptSession){
    // console.log("this is flow id!" + flowid);
//   let flowId = JSON.stringify(flow);
  scriptingFlowFactory.getFlowInfoByFlowIdAsync(flowid, scriptingEnums.FLOW_TYPES.inboundCall,function(ArchBaseFlowInfoBasic) {
      console.log('------------------------------------------------------')
      console.log('THIS IS NAME:' + ArchBaseFlowInfoBasic.name)
      console.log('------------------------------------------------------')

  }) 
  
}




module.exports = {
  
    assignToken: assignToken
};