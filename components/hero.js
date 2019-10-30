export default ({ data }) => (
  <section className='hero'>
    <h1>{data.title}</h1>
    <img src={data.heroImage.fields.file.url} />
  </section>
)