import {atom} from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
        username: "",
        password: ""
    }
});

export const blogAtom = atom({
    key: "blogAtom",
    default: []
});
