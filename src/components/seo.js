import Head from "next/head";
import metaDataList from "../constants/seo.data";

export default function SEO({ title, meta }) {
  const metaData = metaDataList.concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
