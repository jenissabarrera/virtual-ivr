
// // --------------------------------------------------------------------------------
// // Require in the PureCloud Platform SDK and Architect Scripting SDK
// // --------------------------------------------------------------------------------
// const architectScripting = require('purecloud-flow-scripting-api-sdk-javascript');
// const platformApi        = require('purecloud-platform-client-v2');

// // --------------------------------------------------------------------------------
// // Helpers to make sample code more readable.
// // --------------------------------------------------------------------------------
// const archEnums          = architectScripting.enums.archEnums;
// const archSession        = architectScripting.environment.archSession;
// const platformApiClient  = platformApi.ApiClient.instance;

// // --------------------------------------------------------------------------------
// // This function will be what is called by Architect Scripting since it is
// // specified in the start call at the bottom.
// // --------------------------------------------------------------------------------
// function doWork(session) {

//     // Once the session starts you can do this to assign the authToken from
//     // the Architect session object to the platform API client.
//     platformApiClient.setAccessToken(session.authToken);

//     // Now you can make calls using the PureCloud Platform client calls as well
//     // as well as Architect Scripting calls because we've assigned the autorization
//     // token.  :)
    

// }

// function work(){
//     console.log("WORKNG!");
// }

// function assignToken(token){
//     console.log("Testing:" + token);
// }

// // This will start off the Architect Scripting code and call the doWork function
// // archSession.startWithClientIdAndSecret(archEnums.LOCATIONS.prod_us_east_1, doWork, clientId, clientSecret);

// console.log("SCRIPTING SDK START");

// module.exports = {
//     work: work,
//     work2: () => {
//         console.log("2");
//     },
//     token: assignToken
// };