import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const example = new github.Repository("example", {
    description: "My awesome codebase",
    template: {
        owner: "github",
        repository: "terraform-module-template",
    },
    visibility: "public",
});