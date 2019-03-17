import { getHTML, getTwitterFollowers } from "./lib/scraper";
const user = process.argv[2];

async function go(user = "s3doon5") {
  const html = await getHTML(`https://twitter.com/${user}`);
  const tCount = await getTwitterFollowers(html);
  console.log(`${user} has ${tCount} followers in Twitter`);
  return tCount;
}

go(user);
