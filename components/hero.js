export default ({ data }) => (
  <section className='hero'>
    <h1 className="flicker-1">{data.title}</h1>
    <img className="heroImage" src={data.heroImage.fields.file.url} />
  </section>
)