// --------------------------------------------------------------------------------
// Require in the PureCloud Platform SDK and Architect Scripting SDK
// --------------------------------------------------------------------------------

const architectScripting = require('purecloud-flow-scripting-api-sdk-javascript');
// const platformApi        = require('purecloud-platform-client-v2');


// --------------------------------------------------------------------------------
// Helpers to make sample code more readable.
// --------------------------------------------------------------------------------
const scriptingActionFactory = architectScripting.factories.archFactoryActions; // Factory to create actions
const scriptingFlowFactory = architectScripting.factories.archFactoryFlows; // Factory to create flows
const scriptingLanguages = architectScripting.languages.archLanguages; // Language support
const scriptingSession = architectScripting.environment.archSession; // Session support
const scriptingTaskFactory = architectScripting.factories.archFactoryTasks; // Factory to create tasks
const scriptingLogger = architectScripting.services.archLogging; // Logging support
const scriptingValues = architectScripting.viewModels.values;

const archEnums = architectScripting.enums.archEnums;

const scriptingBaseClasses = architectScripting.viewModels.baseClasses;




scriptingLogger.logNotesVerbose = false;

// Declare clientId and clientSecret for 
const clientId1 = '751ad006-d414-44af-9787-f1f511bd9487';
const clientSecret = 'CXZG6tmDOUm-aQDLJHp7VBU2c2X5IvPgcr461VyLwTc'

// Declare global variable
let flows = {};

// --------------------------------------------------------------------------------
// This function will be what is called by Architect Scripting since it is
// specified in the start call at the bottom.
// --------------------------------------------------------------------------------
function getFlowTypes() {

  let flowType = archEnums.FLOW_TYPES;
  return flowType;

}


function authenticateCredentials(flowType) {
  // Pass object from http
  flows = flowType;

  scriptingSession.endTerminatesProcess = false;
  scriptingSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, openFlow, clientId1, clientSecret);
}

function openFlow(scriptSession) {

  let flowType = flows.flowInfoFlowType;

  //     scriptingFlowFactory.getFlowInfoByFlowIdAsync(flows.flowid, flowType.toLowerCase(),function(ArchBaseFlowInfoBasic) {
  //     console.log('------------------------------------------------------')
  //     console.log('LOGGING INFO STRING:' + ArchBaseFlowInfoBasic.parentflow)
  //     console.log('------------------------------------------------------')


  // }) 


  console.log("Start here!")
  scriptingFlowFactory.checkoutAndLoadFlowByFlowIdAsync(flows.flowid, flowType.toLowerCase(), false, "latest", function (callbackArchFlowInfoBasic) {
    console.log('------------------------------------------------------')
    // console.log('LOGGING INFO STRING:' + JSON.stringify(callbackArchFlowInfoBasic.callbackTraverseInfo ));

    // let sample = ArchBaseCoreObjectWithId.logStr;

    callbackArchFlowInfoBasic.initialAudio

    callbackArchFlowInfoBasic.traverse(function (traverseInfo) {
      console.log("------------------------------------------------------")

      // scriptingLogger.logNote('------------------------------------------------------')  
      // scriptingLogger.logNote('  Object     : ' + traverseInfo.matchObject.logStr); 
      // scriptingLogger.logNote('  Type Name     : ' + traverseInfo.matchObject.displayTypeName);
      // scriptingLogger.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
      // scriptingLogger.logNote("\n");
      // map.set('Object:', traverseInfo.matchObject.logStr);
      // map.set('Type Name', traverseInfo.matchObject.displayTypeName);
      // map.set('Hierarchy', traverseInfo.context.hierarchy);


      console.log('  Object     : ' + traverseInfo.matchObject.logStr);
      console.log('  Type Name     : ' + traverseInfo.matchObject.displayTypeName);
      console.log('    Hierarchy: ' + JSON.stringify(traverseInfo.context.hierarchyStr));
      console.log('    audio: ' + JSON.stringify(traverseInfo.context));
      console.log('    audio test: ' + initialAudio);
      console.log('------------------------------------------------------')

      if(traverseInfo.matchObject.isArchValueAudio){
        test(traverseInfo.matchObject);
      }
    });

 


  })
  

}

function test(audioObject) {
  console.log(audioObject.getExpressionText());
  console.log(audioObject.getVariable());

  // to do
//   scriptingValues.ArchValueAudio(function (getExpressionText){

// )
//   })
  // console.log("dtmf:" + scriptingBaseClasses.ArchBaseMenuChoice.isArchBaseMenuChoice )

}



module.exports = {

  authenticateCredentials: authenticateCredentials,
  getFlowTypes: getFlowTypes

};