import { hi } from "@/models/testfile";

async function main() {
    console.log("Hello World!");
}

main().catch((e) => {
    console.error(e);
});

hi();
