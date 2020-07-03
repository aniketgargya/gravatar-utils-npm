# Gravatar Utils 

[![npm version](http://img.shields.io/npm/v/gravatar-utils.svg?style=flat)](https://npmjs.org/package/react-axios-hooks "View this project on npm")
[![Build Status](https://travis-ci.com/aniketgargya/gravatar-utils-npm.svg?branch=master)](https://travis-ci.com/aniketgargya/gravatar-utils-npm)

This npm package includes two function that take in the user's email as input. 

To import:
```javascript
import { getGravatarHash, getGravatarUrl } from "gravatar-utils";
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
```

To install:
```
npm install gravatar-utils 
```

Type definitions are provided!