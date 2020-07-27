# Gravatar Utils 

[![npm version](http://img.shields.io/npm/v/gravatar-utils.svg?style=flat)](https://npmjs.org/package/react-axios-hooks "View this project on npm")

This npm package makes working with Gravatar a breeze. You don't need to worry about hashing emails, just use this package.

To import:
```javascript
import { getGravatarHash, getGravatarUrl, getGravatarAvatar } from "gravatar-utils";
```

```javascript

const userEmail = "xxxxxxxx@xxxxx.xxx";

// This function will generate the hash that gravatar uses to identify users, will return something similar to xxxxxxxxxxxxxxxxxxxxx
const userHash = getGravatarHash(userEmail);
// This function will generate the url that is accessible by any fetch library, will return something similar to https://www.gravatar.com/xxxxxxxxxxxxxxxxxxxxx.json
const gravatarProfileUrl = getGravatarUrl(userEmail);

// Fetch gravatar profile with any library
const data = await axios({
    url: gravatarProfileUrl 
});

// To get an image url for an avatar, use the getGravatarAvatar function. You can optionally specify the size in an object in the second function parameter.
<img src={getGravatarAvatar("xxxxxxxxxx@xxxx.xxx", { size: 1000} )} />
```

To install:
```
npm install gravatar-utils 
```

More information on the Gravatar API can be found at https://www.gravatar.com/site/implement/profiles/json/.

Type definitions are provided!