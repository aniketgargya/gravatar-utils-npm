const { getGravatarHash, getGravatarUrl, getGravatarAvatar } = require("./../dist/");

test("Checking Get Gravatar Hash", () => {
    expect(getGravatarHash("gargya.aniket@gmail.com")).toBe("15d4fc7c2997c7869b3a855fa01cb6d4");
});

test("Checking Get Gravatar URL", () => {
    expect(getGravatarUrl("gargya.aniket@gmail.com")).toBe("https://www.gravatar.com/15d4fc7c2997c7869b3a855fa01cb6d4.json");
});

test("Checking Get Gravatar Avatar", () => {
    expect(getGravatarAvatar("gargya.aniket@gmail.com")).toBe("https://secure.gravatar.com/avatar/15d4fc7c2997c7869b3a855fa01cb6d4");
});