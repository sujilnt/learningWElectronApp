/**
 * Created by sujil on 11/08/17.
 */

import superAgentBlueBird from "superagent-bluebird-promise";

(async function () {
    let data = await superAgentBlueBird.post(`https://auth-int.hotelsoft.com/auth/realms/integration/protocol/openid-connect/token`, {grant_type: "client_credentials"})
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Authorization", "Basic cnpyOjUzNmRmOGExLTc2ODktNDQ0ZS1hODJiLTFjMGNmMWQ2OGVlYg==");
    let res = await superAgentBlueBird.get(`http://integration.hotelsoft.com/rzr/api/properties`)
        .set("Authorization", `Bearer ${data.body.access_token}`);
    console.log(res.body);
})();
