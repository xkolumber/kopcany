import { Theme } from "@/app/lib/interface_theme";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == "themes" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Theme;
  return <div>{data.nazov_temy}</div>;
};

export default page;
