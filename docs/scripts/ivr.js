
// --------------------------------------------------------------------------------
// Require in the PureCloud Platform SDK and Architect Scripting SDK
// --------------------------------------------------------------------------------

const architectScripting = require('purecloud-flow-scripting-api-sdk-javascript');
// const platformApi        = require('purecloud-platform-client-v2');


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
const archEnums              = architectScripting.enums.archEnums;
const scriptingmenu          = architectScripting.viewModels.menus;


scriptingLogger.logNotesVerbose = true;

// Declare clientId and clientSecret for 
const clientId1 = '751ad006-d414-44af-9787-f1f511bd9487';
const clientSecret = 'CXZG6tmDOUm-aQDLJHp7VBU2c2X5IvPgcr461VyLwTc'

// Declare global variable
let flowid = "";

// --------------------------------------------------------------------------------
// This function will be what is called by Architect Scripting since it is
// specified in the start call at the bottom.
// --------------------------------------------------------------------------------
function getFlowTypes() {

  let flowType = archEnums.FLOW_TYPES;
  console.log('testing flow type' + JSON.stringify(flowType));

  return flowType;
  
}


function authenticateCredentials(){

        scriptingSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, getFlowTypes1, clientId1, clientSecret);

}

function openFlow(scriptSession){
    
      scriptingFlowFactory.getFlowInfoByFlowIdAsync(flowid, scriptingEnums.FLOW_TYPES.inboundCall,function(ArchBaseFlowInfoBasic) {
      console.log('------------------------------------------------------')
      console.log('THIS IS NAME:' + ArchBaseFlowInfoBasic.name)
      console.log('------------------------------------------------------')




  }) 
  
}




module.exports = {
  
    authenticateCredentials: authenticateCredentials,
    getFlowTypes : getFlowTypes

};