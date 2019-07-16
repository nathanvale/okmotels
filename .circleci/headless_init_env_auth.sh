#!/bin/bash
set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"build\",\
\"BuildCommand\":\"yarn build\",\
\"StartCommand\":\"yarn develop\"\
}"
AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\"\
}"
AMPLIFY="{\
\"projectName\":\"poc\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\
}"
FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"

AUTHCONFIG="{\
\"facebookAppId\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\",\
\"facebookAppIdUserPool\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\",\
\"facebookAppSecretUserPool\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\",\
\"googleClientId\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\",\
\"googleAppIdUserPool\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\",\
\"googleAppSecretUserPool\":\"74790736152-9g3g9h2b870671asgpedml9rjcpec7vd.apps.googleusercontent.com\"\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"
CATEGORIES="{\
\"auth\":$AUTHCONFIG\
}"

cd ../
npx amplify init \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--categories $CATEGORIES \
--yes