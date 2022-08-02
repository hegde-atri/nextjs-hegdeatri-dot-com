import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About | Atri Hegde'>
      <h1 className='text-3xl border-b-4 pb-5 font-bold'>
        About me
      </h1>

      <div className='shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>
          Skills
        </h3>
        <p className='mb-3'>Its me</p>
        <p className='mb-3 font-bold'>Version 0.1.0</p>
      </div>
    </Layout>
  )
}
