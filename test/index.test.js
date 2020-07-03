const { getGravatarHash, getGravatarUrl } = require("./../dist/");

test("Checking Get Gravatar Hash", () => {
    expect(getGravatarHash("gargya.aniket@gmail.com")).toBe("15d4fc7c2997c7869b3a855fa01cb6d4");
});

test("Checking Get Gravatar URL", () => {
    expect(getGravatarUrl("gargya.aniket@gmail.com")).toBe("ttps://www.gravatar.com/15d4fc7c2997c7869b3a855fa01cb6d4.json");
});